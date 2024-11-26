import { useState, useEffect } from 'react';
import s from '../../pages/LocationsPage/LocationPage.module.css'
import FilterByName from '../Search/FilterByName';
import NoData from '../CharactersList/NoData';
import Paginator from '../Pagination/Paginator';
import LocationCard from './LocationCard';
import { useSearchParams } from 'react-router-dom';
import FilterBySelect from '../Search/FilterBySelect';
import { getLocations, getFiltredLocations } from '../../utils/dataFetchOptions';

const LocationsList = ({ setIsLoaded }) => {
    const [locations,setLocations] = useState(null)
    const [allPage, setAllPage] = useState(null);
    const [searchParams,setSearchParams] = useSearchParams();
    const [queryParams, setQueryParams] = useState({});

    useEffect(() => {
        if(!searchParams.get("page"))
            setSearchParams({ page: '1' }, {replace: true})
        else {
            const newQueryParams = {}
            searchParams.forEach((value,key) => {
                newQueryParams[key] = value
            })
            setQueryParams(newQueryParams);
        }
    }, [searchParams]);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await getLocations();
                setLocations(data.results);
                setAllPage(data.info.pages)
            } catch(error) {
                console.error(error);
            } finally {
                setIsLoaded(true);
            }
        }
        getData();
    }, [])

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await getFiltredLocations(queryParams);
                setLocations(data.results);
                setAllPage(data.info.pages);
            } catch (error) {
                setLocations(null);
                setAllPage(null);
            }
        }
        getData();
    }, [queryParams])

    const onHandleFilterChange = (filterKey, value) => {
        const newQueryParams = {...queryParams, page: 1}
        
        if(value) 
            newQueryParams[filterKey] = value
        else 
            delete newQueryParams[filterKey];

        setSearchParams(newQueryParams, {replace: true});

    }

    const onHandlePageChange = async (value) => {
        const newQueryParams = {
            ...queryParams,
            page: value,
        }
        setSearchParams(newQueryParams, {replace: true});
        window.scroll(0,0);
    }
 
    return (
        <>
            <div className={s.locations__search}>
                <div className={s.locations__search_filter}>
                    <FilterByName 
                        onHandleChange={(e) => onHandleFilterChange("name",e.target.value)}
                        value={queryParams.name? queryParams.name : ""} 
                        placeholder={"Filter by name"}
                    />
                </div>
            </div>
            {!locations
            ? <NoData/>
            :   <>
                    <div className={s.locations__list}>
                        {locations.map((location) => (
                            <LocationCard key={location.id} location={location}/>
                        ))}
                    </div>
                    {!(allPage < 2) && <Paginator onHandleChange={onHandlePageChange} page={queryParams.page} allPages={allPage}/>}
                </>
            }
        </>
    )
}

export default LocationsList;