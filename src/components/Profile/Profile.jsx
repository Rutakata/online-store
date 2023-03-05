import React from "react";
import { CgProfile } from "react-icons/cg";
import style from "./Profile.module.css";


const Profile = ({currentUser, logOut}) => {
    return <div className={style.container}>
        <div>
            {
                currentUser.photoURL ? <img src={currentUser.photoURL} alt=""  className={style.container__image}/>
                : <CgProfile size={150} />
            }
        </div>
        <div className={style.container__userInfo}>
            <h2 className={style.container__userInfo__userName} >{currentUser.displayName ? currentUser.displayName : null}</h2>
            <p>{currentUser.email}</p>
            <button onClick={logOut} className={style.container___logout}>Log out</button>
        </div>
    </div>
}

export default Profile;