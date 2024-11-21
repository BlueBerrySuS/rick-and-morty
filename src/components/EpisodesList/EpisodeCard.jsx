import s from '../../pages/EpisodesPage/EpisodesPage.module.css'
import { Link }from 'react-router-dom'

const EpisodeCard = ({ episode }) => {
    return (
        <Link className={s.episode} to={`epsiodes/${episode.id}`}>
            <div className={s.episode__text}>
                <div className={s.episode__name}>{episode.name}</div>
                <div className={s.episode__air_date}>{episode.air_date}</div>
                <div className={s.episode__episode_code}>{episode.episode}</div>
            </div>
        </Link>
    )
}

export default EpisodeCard;