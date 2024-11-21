import { Select } from "antd";
import s from "./../../pages/CharactersPage/CharactersPage.module.css"

const FilterBySelect = ({ onHandleChange, options, defaultValue, value }) => {

    return (
        <Select
            onChange={onHandleChange} 
            options={options} 
            defaultValue={defaultValue} 
            value={value} 
            className={s.select__filter}
        />
    )
}

export default FilterBySelect;