import { useState } from "react";
import s from "../../pages/CharactersPage/CharactersPage.module.css"
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";

const CharacterCard = ({ character }) => {
    const [isLoaded, setIsLoaded] = useState(false)

    return (
        <Link to={`characters/${character.id}`} className={s.character}>
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
        </Link>
    )
}

export default CharacterCard;