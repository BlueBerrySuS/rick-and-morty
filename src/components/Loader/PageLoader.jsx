
import s from "./PageLoader.module.css"

const PageLoader = () => {
    return (
        <div className={s.loader__wrapper}>
            <div className={s.loader}>
                <span className={`${s.blocks} ${s.block_1}`}></span>
                <span className={`${s.blocks} ${s.block_2}`}></span>
                <span className={`${s.blocks} ${s.block_3}`}></span>
                <span className={`${s.blocks} ${s.block_4}`}></span>
                <span className={`${s.blocks} ${s.block_5}`}></span>
                <span className={`${s.blocks} ${s.block_6}`}></span>
            </div>
            <div className={s.loading}>Loading<span className={s.dots}></span></div>
        </div>
    )
}

export default PageLoader;