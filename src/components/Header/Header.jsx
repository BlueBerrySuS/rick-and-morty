import { NavLink } from "react-router-dom";
import logo from '../../assets/img/header-logo.svg'
import s from './Header.module.css'


const Header = () => {
    return (
        <div className={s.header__wrapper}>
            <div className={s.header}>
                <div className={s.header__logo}>
                    <img src={logo} alt="" />
                </div>
                <div className={s.header__nav}>
                    <NavLink className={({ isActive }) => `${s.nav__buttons} ${isActive ? s.active : ''}`} to={'/characters'}>Characters</NavLink>
                    <NavLink className={({ isActive }) => `${s.nav__buttons} ${isActive ? s.active : ''}`} to={'/locations'}>Locations</NavLink>
                    <NavLink className={({ isActive }) => `${s.nav__buttons} ${isActive ? s.active : ''}`} to={'/episodes'}>Episodes</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header;