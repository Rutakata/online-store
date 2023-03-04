import React, { useState } from "react";
import ImagesItem from "./ImagesItem";
import style from "./ClothesDetails.module.css";


const ClothesDetails = ({clothesData}) => {
    const [currentImage, setCurrentImage] = useState(clothesData.images[0])

    console.log(clothesData);
    return <div className={style.container}>
        <div className={style.container__images}>
            <img src={currentImage} alt={clothesData.name} className={style.container__images__currentImage} />
            <div className={style.container__images__otherImages}>
                {clothesData.images.map(image => <ImagesItem link={image} 
                                                        className={style.container__images__otherImages_item}  
                                                        name={clothesData.name}
                                                        setCurrentImage={setCurrentImage} />)}
            </div>
        </div>
        <div className={style.container__clothesInfo}>
            <h3 className={style.container__clothesInfo__name}>{clothesData.name}</h3>
            <p className={style.container__clothesInfo__price}>Price: <span>{clothesData.price}$</span></p>
            <p>Made of {clothesData.material}</p>
            <p>Produced by {clothesData.company}</p>
            <div className={style.container__clothesInfo__params}>
                Colors: {clothesData.colors.map(color => <div 
                                                    className={style.container__clothesInfo__params_item} 
                                                    style={{backgroundColor: "#"+color}}></div>)}
            </div>
            <div className={style.container__clothesInfo__params}>
                Sizes: {clothesData.sizes.map(size => <div className={style.container__clothesInfo__params_item}>{size}</div>)}
            </div>
            <div>Can wear: {clothesData.sex.map(sex => <span>{sex}</span>)}</div>
        </div>
    </div>
}

export default ClothesDetails;