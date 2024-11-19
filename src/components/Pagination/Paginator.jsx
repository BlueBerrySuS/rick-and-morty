import { Pagination } from "antd";
import s from "../../pages/CharactersPage/CharactersPage.module.css"

const Paginator = ({ onHandleChange, page, allPages}) => {
    return <Pagination onChange={onHandleChange} current={page} total={allPages * 10} showSizeChanger={false}/>
}

export default Paginator;