import { Input } from 'antd';
import s from "./../../pages/CharactersPage/CharactersPage.module.css"

const FilterByName = ({ onHandleChange, placeholder, value}) => {

    return (
        <Input 
            onChange={onHandleChange} 
            placeholder={placeholder}
            value={value} 
            className={s.input__filter}
        />
    )
}

export default FilterByName;