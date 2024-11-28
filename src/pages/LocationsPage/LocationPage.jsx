import { useState } from 'react';
import s from './LocationPage.module.css'
import LocationsList from '../../components/LocationsList/LocationsList';
import image from "../../assets/img/locations-img.svg"

const LocationPage = () => {

    const [isLoaded,setIsLoaded] = useState(false);

    return (
        <>
            <div className={s.locations__wrapper}>
                <div className={s.locations}>
                    <div className={s.locations__img}>
                        <img src={image} alt="" />
                    </div>
                    <LocationsList setIsLoaded={setIsLoaded}/>
                </div>
            </div>
        </>
    )
}

export default LocationPage;