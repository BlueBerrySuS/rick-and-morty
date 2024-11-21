import { getEpisodes } from "../../utils/dataFetchOptions";
import { useEffect, useState } from "react";
import s from './EpisodesPage.module.css';
import image from '../../assets/img/episodes-img.svg'
import EpisodesList from "../../components/EpisodesList/EpisodesList";

const EpisodesPage = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await getEpisodes();
                setData(response);
            } catch (error) {
                console.error(error);
            }
        }
        getData();
    }, [])

    if(!data) return <p>Loading</p>;

    return (
        <>
            <div className={s.episodes__wrapper}>
                <main className={s.episodes}>
                    <div className={s.episodes__img}>
                        <img src={image} alt="Episodes" />
                    </div>
                    <EpisodesList data={data}/>
                </main>
            </div>
        </>
    )
}

export default EpisodesPage;


