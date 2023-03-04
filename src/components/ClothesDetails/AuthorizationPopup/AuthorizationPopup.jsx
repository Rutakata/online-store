import React from "react";
import { Link } from "react-router-dom";
import style from "./AuthorizationPopup.module.css";


const AuthorizationPopup = (props) => {
    return <div className={props.isShown ? style.wrapper : style.wrapper_hidden} onClick={props.handlePopup}> 
        <div className={style.container} onClick={(e) => e.stopPropagation()}>
            <h3>To add product to cart you must have an account and be logged in</h3>
            <p>You can <Link to='/signin'>log in</Link>|<Link to='/signup'>sign up</Link></p>   
        </div>
    </div> 
}

export default AuthorizationPopup;