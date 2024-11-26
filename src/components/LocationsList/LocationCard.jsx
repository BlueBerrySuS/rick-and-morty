import s from '../../pages/LocationsPage/LocationPage.module.css'
import { Link }from 'react-router-dom'

const LocationCard = ({ location }) => {
    return (
        <Link className={s.location} to={`locations/${location.id}`}>
            <div className={s.location__text}>
                <div className={s.location__name}>{location.name}</div>
                <div className={s.location__type}>{location.type}</div>
                <div className={s.location__type}>{location.dimension}</div>
            </div>
        </Link>
    )
}

export default LocationCard;