import { getCharacters } from "../../utils/dataFetchOptions"
import { useState, useEffect } from "react";
import CharactersList from "../../components/CharactersList/CharactersList";
import s from './CharactersPage.module.css'
import image from '../../assets/img/characters-img.svg'
import PageLoader from "../../components/Loader/PageLoader";

const CharactersPage = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    return (
        <>
            {!isLoaded && <PageLoader/>}
            <div className={s.characters__wrapper}>
                <main className={s.characters}>
                    <div className={s.characters__img}>
                        <img src={image} alt="Characters" />
                    </div>
                    <CharactersList setIsLoaded={setIsLoaded}/>
                </main>
            </div>
        </>
    )
}

export default CharactersPage;