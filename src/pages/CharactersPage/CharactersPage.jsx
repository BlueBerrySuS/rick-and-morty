import { getCharacters } from "../../utils/dataFetchOptions"
import { useState, useEffect } from "react";
import CharactersList from "../../components/CharactersList/CharactersList";
import s from './CharactersPage.module.css'
import image from '../../assets/img/characters-img.svg'
import PageLoader from "../../components/Loader/PageLoader";

const CharactersPage = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await getCharacters();
                setData(data);
            } catch (error) {
                console.error(error);
            };
        }
        getData();
    }, [])

    if(!data) return <PageLoader/>

    return (
        <div className={s.characters__wrapper}>
            <main className={s.characters}>
                <div className={s.characters__img}>
                    <img src={image} alt="Characters" />
                </div>
                <CharactersList data={data}/>
            </main>
        </div>
    )
}

export default CharactersPage;