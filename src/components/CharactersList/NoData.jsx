import s from "../../pages/CharactersPage/CharactersPage.module.css"
import img from "../../assets/img/no-data.jpg"

const NoData = () => {
    return (
        <div className={s.error}>
            <img src={img} alt="no data" />
            <p>NO DATA TO SEE HERE</p>
        </div>
    )
}

export default NoData;