import { useState } from 'react'
import { getFiltredEpisodes } from '../../utils/dataFetchOptions';
import s from '../../pages/EpisodesPage/EpisodesPage.module.css'
import FilterByName from '../Search/FilterByName';
import NoData from '../CharactersList/NoData';
import Paginator from '../Pagination/Paginator';
import EpisodeCard from './EpisodeCard';

const EpisodesList = ({ data }) => {
    const [episodes,setEpisodes] = useState(data.results)
    const [currentPage,setCurrentPage] = useState(1);
    const [allPage, setAllPage] = useState(data.info.pages);
    const [name,setName] = useState("");

    const onHandleFilterByName = async (value) => {
        try{
            const response = await getFiltredEpisodes(currentPage, value);
            setName(value);
            setEpisodes(response.results);
            setCurrentPage(1);
            setAllPage(response.info.pages);
        } catch {
            setEpisodes(undefined);
        }
    }

    const onHandlePageChange = async (page) => {
        try {
            const response = await getFiltredEpisodes(page, name);
            setCurrentPage(page);
            setEpisodes(response.results);
            setAllPage(response.info.pages);
            window.scroll(0,0);
        } catch {
            setEpisodes(undefined);
        }
    }

    return (
        <>
            <div className={s.episodes__search}>
                <div className={s.episodes__search_filter}>
                    <FilterByName 
                        onHandleChange={(e) => onHandleFilterByName(e.target.value)} 
                        placeholder={"Filter by name or episode (ex. S01 or S01E02)"}
                    />
                </div>
            </div>
            {episodes === undefined
            ? <NoData/>
            :   <>
                    <div className={s.episodes__list}>
                        {console.log(episodes)}
                        {episodes.map((episode) => (
                            <EpisodeCard key={episode.id} episode={episode}/>
                        ))}
                    </div>
                    {!(allPage < 2) && <Paginator onHandleChange={onHandlePageChange} page={currentPage} allPages={allPage}/>}
                </>
            }
        </>
    )
}

export default EpisodesList;