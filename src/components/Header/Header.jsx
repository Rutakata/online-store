import React, {useEffect, useState} from "react";
import { CgProfile } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router";
import { useAuth } from "../../contexts/AuthContext";
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

    return (
        <nav className={show ? `${style.wrapper}`: `${style.wrapper} ${style.wrapper_hidden}`}>
            <div className={style.wrapper__logo} onClick={handleLogo}>LOGO</div>
            <ul className={style.wrapper__navigation}>   
                <li className="wrapper__navigation__item">All</li>
                <li className="wrapper__navigation__item">Men</li>
                <li className="wrapper__navigation__item">Women</li>
            </ul>
            <div>
                <CgProfile size={30} onClick={() => currentUser ? navigate('/profile') : navigate('/signin')}/>
                <AiOutlineShoppingCart size={30} />
            </div>
        </nav>
    )
}

export default NavBar;