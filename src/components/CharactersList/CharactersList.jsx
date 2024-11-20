import { genderOptions, speciesOptions, statusOptions } from "../../utils/options"
import FilterBySelect from "../Search/FilterBySelect";
import FilterByName from "../Search/FilterByName";
import { useState } from "react";
import { getFiltredCharacters } from "../../utils/charctersOptions";
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
    }

    const onHandleFilterByGender = async (value) => {
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
    }

    const onHandleFilterBySpecies = async (value) => {
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
    }

    const onHandleFilterByStatus = async (value) => {
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
    }

    const onHandlePageChange = async (page) => {
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

            <div className={s.characters__list}>
                {characters === undefined
                    ? <NoData/> 
                    : characters.map((character) => (
                        <CharacterCard key={character.id} character={character}/>
                    ))
                }
            </div>
            <Paginator onHandleChange={onHandlePageChange} page={currentPage} allPages={allPage}/>
        </>
    )
}

export default CharactersList;