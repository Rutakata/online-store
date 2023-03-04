import React from "react";
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
    </div>
}

export default Home;