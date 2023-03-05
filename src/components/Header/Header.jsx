import React, {useEffect, useState} from "react";
import { CgProfile } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import style from "./Header.module.css";


const NavBar = () => {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const navigate = useNavigate();
    const { currentUser } = useAuth();
    
    useEffect(() => {
        window.addEventListener('scroll', controlNavBar);
        return () => window.removeEventListener('scroll', controlNavBar);
    })

    const controlNavBar = () => {
        if (typeof window !== 'undefined') { 
            if (window.scrollY > lastScrollY) {
              setShow(false); 
            } else {
              setShow(true);  
            }
            setLastScrollY(window.scrollY); 
          }
    }
    
    const handleLogo = () => {
        navigate('/home');
    }

    const handleAvatar = () => {
        currentUser ? navigate('/profile') : navigate('/signin')
    }

    return (
        <nav className={show ? `${style.wrapper}`: `${style.wrapper} ${style.wrapper_hidden}`}>
            <div className={style.wrapper__logo} onClick={handleLogo}>LOGO</div>
            <ul className={style.wrapper__navigation}>   
                <Link to={`/category/all`} className={style.wrapper__navigation__item}><li>All</li></Link>
                <Link to={`/category/man`} className={style.wrapper__navigation__item}><li>Men</li></Link>
                <Link to={`/category/woman`} className={style.wrapper__navigation__item}><li>Women</li></Link>
            </ul>
            <div style={{display: "flex", gap: "20px", alignItems: "center"}}>
                {
                    currentUser && currentUser.photoURL ? 
                    <img src={currentUser.photoURL} alt='User avatar' className={style.wrapper__navigation__userAvatar} 
                         onClick={handleAvatar}/>:
                    <CgProfile size={40} onClick={handleAvatar} />
                }
                <Link to='/cart' className={style.wrapper__navigation__cartIcon}>
                    <AiOutlineShoppingCart size={30} />
                </Link>
            </div>
        </nav>
    )
}

export default NavBar;