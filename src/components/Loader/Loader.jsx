import s from "./Loader.module.css"

const Loader = () => {
    return <div className={s.loader__wrapper}>
            <div className={s.loader}>
                <span className={`${s.loader__item} ${s.item_1}`}></span>
                <span className={`${s.loader__item} ${s.item_2}`}></span>
                <span className={`${s.loader__item} ${s.item_3}`}></span>
            </div>
        </div>
}

export default Loader;