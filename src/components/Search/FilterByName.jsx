import { Input } from 'antd';
import s from "./../../pages/CharactersPage/CharactersPage.module.css"

const FilterByName = ({ onHandleChange, placeholder }) => {

    return (
        <Input 
            onChange={onHandleChange} 
            placeholder={placeholder} 
            className={s.input__filter}
        />
    )
}

export default FilterByName;