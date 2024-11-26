import { useState } from 'react';
import s from './LocationPage.module.css'
import LocationsList from '../../components/LocationsList/LocationsList';

const LocationPage = () => {

    const [isLoaded,setIsLoaded] = useState(false);

    return (
        <>
            <div>
                <div>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <LocationsList setIsLoaded={setIsLoaded}/>
                </div>
            </div>
        </>
    )
}

export default LocationPage;