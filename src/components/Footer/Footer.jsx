import React from "react";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import style from "./Footer.module.css";


const Footer = () => {
    return (
        <div className={style.wrapper}>
            <div>Created with love | 2023</div>
            <ul className={style.wrapper__socials}>
                <li className="wrapper__socials__item"><AiFillInstagram size={30}/></li>
                <li className="wrapper__socials__item"><AiFillYoutube size={30}/></li>
                <li className="wrapper__socials__item"><FaTiktok size={26} /></li>
            </ul>
        </div>
    )
}

export default Footer;