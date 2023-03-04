import React from "react";
import { Link } from "react-router-dom";
import style from "./AuthorizationPopup.module.css";


const AuthorizationPopup = (props) => {
    return <div className={props.isShown ? style.wrapper : style.wrapper_hidden} onClick={props.handlePopup}> 
        <div className={style.container} onClick={(e) => e.stopPropagation()}>
            <div style={{display: 'flex',justifyContent: 'space-between'}}>
                <h3 className={style.container__header}>To add product to cart you must have an account and be logged in</h3>
                <div className={style.container__close} onClick={props.handlePopup}>
                    <div className={style.container__close_stick}></div>
                    <div className={style.container__close_stick}></div>
                </div>
            </div>
            <p className={style.container__authLinks}>You can <Link to='/signin'>log in</Link> | <Link to='/signup'>sign up</Link></p>   
        </div>
    </div> 
}

export default AuthorizationPopup;