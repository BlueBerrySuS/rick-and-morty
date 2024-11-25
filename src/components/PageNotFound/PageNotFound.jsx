import { useNavigate } from 'react-router-dom';
import s from './PageNotFound.module.css';

const PageNotFound = () => {
    const nav = useNavigate();
 
    return (
        <div className={s.error__wrapper}>
            <div className={s.error}>
                <h1 className={s.error__title}>404</h1>
                <p className={s.error__subtitle}>Page not found!</p>
                <button className={s.go_back_btn} onClick={() => nav(-1)}>Go back</button>
            </div>
        </div>
    )
}

export default PageNotFound;