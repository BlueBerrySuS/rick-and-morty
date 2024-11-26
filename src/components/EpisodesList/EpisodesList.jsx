import { useState, useEffect } from 'react'
import { getEpisodes, getFiltredEpisodes } from '../../utils/dataFetchOptions';
import s from '../../pages/EpisodesPage/EpisodesPage.module.css'
import FilterByName from '../Search/FilterByName';
import NoData from '../CharactersList/NoData';
import Paginator from '../Pagination/Paginator';
import EpisodeCard from './EpisodeCard';
import { useSearchParams } from 'react-router-dom';

const EpisodesList = ({ setIsLoaded }) => {
    const [episodes,setEpisodes] = useState(null)
    const [allPage, setAllPage] = useState(null);
    const [searchParams,setSearchParams] = useSearchParams();
    const [queryParams, setQueryParams] = useState({});

    useEffect(() => {
        if(!searchParams.get("page"))
            setSearchParams({ page: '1' }, {replace: true})
        else {
            const newQueryParams = {}
            searchParams.forEach((value,key) => {
                newQueryParams[key] = value
            })
            setQueryParams(newQueryParams);
        }
    }, [searchParams]);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await getEpisodes();
                setEpisodes(data.results);
                setAllPage(data.info.pages)
            } catch(error) {
                console.error(error);
            } finally {
                setIsLoaded(true);
            }
        }
        getData();
    }, [])

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await getFiltredEpisodes(queryParams);
                setEpisodes(data.results);
                setAllPage(data.info.pages);
            } catch (error) {
                setEpisodes(null);
                setAllPage(null);
            }
        }
        getData();
    }, [queryParams])

    const onHandleFilterByName = async (filterKey, value) => {
        const newQueryParams = {...queryParams, page: 1};

        if(value)
            newQueryParams[filterKey] = value;
        else
            delete newQueryParams[filterKey]

        setSearchParams(newQueryParams);
    }

    const onHandlePageChange = async (value) => {
        const newQueryParams = {...queryParams, page: value}
        setSearchParams(newQueryParams);
        window.scroll(0,0);
    }

    return (
        <>
            <div className={s.episodes__search}>
                <div className={s.episodes__search_filter}>
                    <FilterByName 
                        onHandleChange={(e) => onHandleFilterByName("name",e.target.value)}
                        value={queryParams.name? queryParams.name : ""} 
                        placeholder={"Filter by name or episode (ex. S01 or S01E02)"}
                    />
                </div>
            </div>
            {!episodes
            ? <NoData/>
            :   <>
                    <div className={s.episodes__list}>
                        {episodes.map((episode) => (
                            <EpisodeCard key={episode.id} episode={episode}/>
                        ))}
                    </div>
                    {!(allPage < 2) && <Paginator onHandleChange={onHandlePageChange} page={queryParams.page} allPages={allPage}/>}
                </>
            }
        </>
    )
}

export default EpisodesList;