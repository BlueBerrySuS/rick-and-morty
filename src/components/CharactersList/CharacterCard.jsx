import { useState } from "react";
import s from "../../pages/CharactersPage/CharactersPage.module.css"
import Loader from "../Loader/Loader";

const CharacterCard = ({ character }) => {
    const [isLoaded, setIsLoaded] = useState(false)

    return (
        <div className={s.character}>
            <div className={s.character__img}>
                {!isLoaded && <Loader/>}
                <img src={character.image} alt={character.name} onLoad={() => setIsLoaded(true)}/>
            </div>
            <div className={s.character__text}>
                <div className={s.character__name}>{character.name}</div>
                <div className={s.character__status}>
                    <div className={s.character__indicator} style={character.status == 'Alive'
                        ? {background: 'green'} 
                        : character.status == 'Dead'
                        ? {background: 'red'} 
                        : {background: 'gray'}
                    }
                    ></div>
                    {character.status} - {character.species}
                </div>
            </div>
        </div>
    )
}

export default CharacterCard;