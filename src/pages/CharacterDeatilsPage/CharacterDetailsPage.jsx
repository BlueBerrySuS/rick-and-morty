import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { getCharacterById, getEndOfUrl } from "../../utils/dataFetchOptions";
import s from './CharacterDetailsPage.module.css'
import CharacterEpisodes from "./CharacterEpisodes";
import PageLoader from "../../components/Loader/PageLoader";

const CharacterDetailsPage = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async() => {
            try {
                const data = await getCharacterById(id);
                setData(data);
            } catch(error) {
                console.error(error);
            }
        }
        getData();
    }, [ id ])

    if(!data) return <PageLoader/>

    return (
        <div className={s.character__wrapper}>
            <div className={s.character}>
                <div className={s.character__img}><img src={data.image} alt="" /></div>
                <h1 className={s.character__name}>{data.name}</h1>
                <div className={s.character__infos__wrapper}>
                    <div className={s.character__info__wrapper}>
                        <h3 className={s.character__info_title}>Informations</h3>
                        <ul className={s.character__info}>
                            <li>
                                <h3 className={s.info__title}>Gender</h3>
                                <p className={s.info__subtitle}>{data.gender}</p>
                            </li>
                            <li>
                                <h3 className={s.info__title}>Status</h3>
                                <p className={s.info__subtitle}>{data.status}</p>
                            </li>
                            <li>
                                <h3 className={s.info__title}>Specie</h3>
                                <p className={s.info__subtitle}>{data.species}</p>
                            </li>
                            <li>
                                <Link to={`/loactions/${getEndOfUrl(data.origin.url)}`} className={s.info__link}>
                                    <h3 className={s.info__title}>Origin</h3>
                                    <p className={s.info__subtitle}>{data.origin.name}</p>
                                </Link>
                            </li>
                            <li>
                                <h3 className={s.info__title}>Type</h3>
                                <p className={s.info__subtitle}>{data.type? data.type : "undefined"}</p>
                            </li>
                            <li>
                                <Link to={`/locations/${getEndOfUrl(data.location.url)}`} className={s.info__link}>
                                    <h3 className={s.info__title}>Location</h3>
                                    <p className={s.info__subtitle}>{data.location.name}</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={s.character__info__wrapper}>
                        <h3 className={s.character__info_title}>Episodes</h3>
                        <CharacterEpisodes urls={data.episode}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharacterDetailsPage;