import { useEffect, useState } from "react";
import { getEndOfUrl, getEpisodeById } from "../../utils/dataFetchOptions";
import { Link } from "react-router-dom";
import s from "./CharacterDetailsPage.module.css"
import arrow from "../../assets/img/arrow.svg"


const CharacterEpisodes = ({ urls }) => {
    const episodesId = urls.map((url) => getEndOfUrl(url));

    const [data,setData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await getEpisodeById(episodesId);
                setData(response);
            } catch(error) {
                console.error(error);
            }
        }
        getData();
    }, [])

    if(!data) return

    return (
        <ul className={`${s.character__info} ${s.episodes_list}`}>
            {data.map((episode, index) => (
                <li key={episode.id + index}>
                    <Link to={`episodes/${episode.id}`} className={s.info__link}>
                        <h3 className={s.info__title}>{episode.episode}</h3>
                        <p className={s.info__subtitle}>{episode.name}</p>
                        <p className={s.info__air_date}>{episode.air_date}</p>
                        <div className={s.info__arrow}><img src={arrow} alt="" /></div>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default CharacterEpisodes;