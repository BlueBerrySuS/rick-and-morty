import { useNavigate } from "react-router-dom";
import image from "../../assets/img/arrow-back.svg"
import s from "./GoBackButton.module.css"
import { useState } from "react";

const GoBackButton = () => {
    const nav = useNavigate();
    const [isActive, setIsActive] = useState(false);
    const handleMouseOver = () => {
        setIsActive(true)
    }
    const handleMouseLeave = () => {
        setIsActive(false)
    }
    return (
        <button className={`${s.button} ${isActive? s.active : ""}`} 
            onClick={() => nav(-1)} 
            onMouseOver={handleMouseOver} 
            onMouseLeave={handleMouseLeave}
        >
            <span className={s.button__text}>GO BACK</span>
        </button>
    )
}

export default GoBackButton;