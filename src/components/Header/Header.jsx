import { NavLink } from "react-router-dom";
import logo from '../../assets/img/header-logo.svg'
import s from './Header.module.css'
import { useState } from "react";
import close_icon from '../../assets/img/close_menu.svg'
import burger_icon from "../../assets/img/menu-burger.svg"


const Header = () => {
    const [isActive,setIsActive] = useState(false);
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
                <div className={s.header__burger_button} onClick={() => setIsActive(!isActive)}>
                    <img src={isActive? close_icon : burger_icon} alt="" />
                    { isActive && <div className={s.burger__container}>
                        <NavLink className={({ isActive }) => `${s.burger__buttons} ${isActive ? s.active : ''}`} to={'/characters'}>Characters</NavLink>
                        <NavLink className={({ isActive }) => `${s.burger__buttons} ${isActive ? s.active : ''}`} to={'/locations'}>Locations</NavLink>
                        <NavLink className={({ isActive }) => `${s.burger__buttons} ${isActive ? s.active : ''}`} to={'/episodes'}>Episodes</NavLink>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Header;