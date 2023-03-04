import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { ImPriceTags } from "react-icons/im";
import { GiClothes } from "react-icons/gi";
import style from "./Home.module.css";


const Home = () => {
    const banner = 'https://firebasestorage.googleapis.com/v0/b/online-store-9a748.appspot.com/o/banner.png?alt=media&token=35944884-1362-4f3a-8376-4cba0da2cff3';
    const banner2 = 'https://firebasestorage.googleapis.com/v0/b/online-store-9a748.appspot.com/o/banner2.png?alt=media&token=a7effd9c-1579-4776-b95c-a48a159f169b';
    return <div>
        <div className={style.bannerContainer}>
            <p className={style.bannerContainer__callText}>The best quality!</p>
            <img src={banner} alt='banner' className={style.bannerContainer__image} />
            <img src={banner2} alt="banner2" className={style.bannerContainer__image2} />
        </div>
        <div className={style.advantages}>
            <div className={style.advantages__item}>
                <FaShippingFast size={50}/>
                <span>Fast shipping</span>
            </div>
            <div className={style.advantages__item}>
                <ImPriceTags size={50} />
                <span>Low prices</span>
            </div>
            <div className={style.advantages__item}>
                <GiClothes size={50} />
                <span>Huge choice</span>
            </div>
        </div>
    </div>
}

export default Home;