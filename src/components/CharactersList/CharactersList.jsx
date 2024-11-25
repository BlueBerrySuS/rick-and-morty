import { genderOptions, speciesOptions, statusOptions } from "../../utils/selectOptions"
import FilterBySelect from "../Search/FilterBySelect";
import FilterByName from "../Search/FilterByName";
import { useEffect, useState } from "react";
import { getCharacters, getFiltredCharacters } from "../../utils/dataFetchOptions";
import CharacterCard from "./CharacterCard";
import s from '../../pages/CharactersPage/CharactersPage.module.css'
import NoData from "./NoData";
import Paginator from "../Pagination/Paginator";
import { replace, useSearchParams } from "react-router-dom";


const CharactersList = ({setIsLoaded}) => {

    const [characters, setCharacters] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const [queryParams, setQueryParams] = useState({});
    const [allPage, setAllPage] = useState(null);

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
                const data = await getCharacters();
                setCharacters(data.results);
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
                const data = await getFiltredCharacters(queryParams);
                setCharacters(data.results);
                setAllPage(data.info.pages);
            } catch (error) {
                setCharacters(null);
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
            <div className={s.characters__search}>
                <div className={s.characters__search_filter}>
                    <FilterByName 
                        onHandleChange={(e) => onHandleFilterChange("name", e.target.value)}
                        value={queryParams.name? queryParams.name : ""} 
                        placeholder="Filter by name"
                    />
                </div>
                <div className={s.characters__search_filter}>
                    <FilterBySelect 
                        onHandleChange={value => onHandleFilterChange("gender", value)} 
                        value={queryParams.gender? queryParams.gender : ""} 
                        options={genderOptions}
                    />
                </div>
                <div className={s.characters__search_filter}>
                    <FilterBySelect 
                        onHandleChange={value => onHandleFilterChange("species", value)} 
                        value={queryParams.species? queryParams.species : ""}  
                        options={speciesOptions}
                    />
                </div>
                <div className={s.characters__search_filter}>
                    <FilterBySelect 
                        onHandleChange={value => onHandleFilterChange("status", value)} 
                        value={queryParams.status? queryParams.status : ""}  
                        options={statusOptions}
                    />
                </div>
            </div>

            {!characters
            ? <NoData/>
            :   <>
                    <div className={s.characters__list}>
                        {characters.map((character) => (
                            <CharacterCard key={character.id} character={character}/>
                        ))}
                    </div>
                    {!(allPage < 2) && <Paginator onHandleChange={onHandlePageChange} page={queryParams.page} allPages={allPage}/>}
                </>
            }
        </>
    )
}

export default CharactersList;