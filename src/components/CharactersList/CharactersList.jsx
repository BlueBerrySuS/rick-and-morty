import { genderOptions, speciesOptions, statusOptions } from "../../utils/selectOptions"
import FilterBySelect from "../Search/FilterBySelect";
import FilterByName from "../Search/FilterByName";
import { useState } from "react";
import { getFiltredCharacters } from "../../utils/dataFetchOptions";
import CharacterCard from "./CharacterCard";
import s from '../../pages/CharactersPage/CharactersPage.module.css'
import NoData from "./NoData";
import Paginator from "../Pagination/Paginator";


const CharactersList = ({ data }) => {

    const [characters, setCharacters] = useState(data.results);
    const [currentPage,setCurrentPage] = useState(1);
    const [allPage, setAllPage] = useState(data.info.pages);
    const [name, setName] = useState('');
    const [gender, setGender] = useState('Gender');
    const [status, setStatus] = useState('Status');
    const [species, setSpecies] = useState('Species');
    

    const onHandleFilterByName = async (value) => {
        try {
            setName(value);
            const data = await getFiltredCharacters(
                1,
                gender,
                species,
                status,
                value
            );
            setCurrentPage(1);
            setCharacters(data.results);
            setAllPage(data.info.pages);
        } catch {
            setCharacters(undefined);
        }
    }

    const onHandleFilterByGender = async (value) => {
        try {
            setGender(value);
            const data = await getFiltredCharacters(
                1,
                value,
                species,
                status,
                name
            );
            setCurrentPage(1);
            setCharacters(data.results);
            setAllPage(data.info.pages);
        } catch {
            setCharacters(undefined);
        }
    }

    const onHandleFilterBySpecies = async (value) => {
        try {
            setSpecies(value);
            const data = await getFiltredCharacters(
                1,
                gender,
                value,
                status,
                name
            );
            setCurrentPage(1);
            setCharacters(data.results);
            setAllPage(data.info.pages);
        } catch {
            setCharacters(undefined);
        }
    }

    const onHandleFilterByStatus = async (value) => {
        try {
            setStatus(value);
            const data = await getFiltredCharacters(
                1,
                gender,
                species,
                value,
                name
            );
            setCurrentPage(1);
            setCharacters(data.results);
            setAllPage(data.info.pages);
        } catch {
            setCharacters(undefined);
        }
    }

    const onHandlePageChange = async (page) => {
        try {
            setCurrentPage(page);
            const data = await getFiltredCharacters(
                page,
                gender,
                species,
                status,
                name
            );
            setCharacters(data.results);
            setAllPage(data.info.pages);
            window.scroll(0,0);
        } catch {
            setCharacters(undefined);   
        }
    }

    return (
        <>
            <div className={s.characters__search}>
                <div className={s.characters__search_filter}>
                    <FilterByName 
                        onHandleChange={(e) => onHandleFilterByName(e.target.value)} 
                        placeholder="Filter by name"
                    />
                </div>
                <div className={s.characters__search_filter}>
                    <FilterBySelect 
                        onHandleChange={onHandleFilterByGender} 
                        value={gender} 
                        defaultValue='Gender' 
                        options={genderOptions}
                    />
                </div>
                <div className={s.characters__search_filter}>
                    <FilterBySelect 
                        onHandleChange={onHandleFilterBySpecies} 
                        value={species} 
                        defaultValue='Species' 
                        options={speciesOptions}
                    />
                </div>
                <div className={s.characters__search_filter}>
                    <FilterBySelect 
                        onHandleChange={onHandleFilterByStatus} 
                        value={status} 
                        defaultValue='Status' 
                        options={statusOptions}
                    />
                </div>
            </div>

            {characters === undefined
            ? <NoData/>
            :   <>
                    <div className={s.characters__list}>
                        {characters.map((character) => (
                            <CharacterCard key={character.id} character={character}/>
                        ))}
                    </div>
                    {!(allPage < 2) && <Paginator onHandleChange={onHandlePageChange} page={currentPage} allPages={allPage}/>}
                </>
            }
        </>
    )
}

export default CharactersList;