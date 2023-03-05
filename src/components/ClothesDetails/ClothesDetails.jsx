import React, { useState } from "react";
import ImagesItem from "./ImagesItem";
import AddToCartButton from "./AddToCartButton/AddToCartButton";
import ParamsItem from "./ParamsItem/ParamsItem";
import { setParam } from "../../store/currentClothesReducer";
import { useDispatch } from "react-redux";
import style from "./ClothesDetails.module.css";


const ClothesDetails = ({clothesData, checkAuthorization, params}) => {
    const [currentImage, setCurrentImage] = useState(clothesData.images[0]);
    const dispatch = useDispatch();

    const handleParamChange = (param, value) => {
        dispatch(setParam({param, value}));
    }

    return <div className={style.container}>
        <div className={style.container__images}>
            <img src={currentImage} alt={clothesData.name} className={style.container__images__currentImage} />
            <div className={style.container__images__otherImages}>
                {clothesData.images.map(image => <ImagesItem link={image} 
                                                        className={style.container__images__otherImages_item}  
                                                        name={clothesData.name}
                                                        setCurrentImage={setCurrentImage} 
                                                        key={image} />)}
            </div>
        </div>
        <div className={style.container__clothesInfo}>
            <h3 className={style.container__clothesInfo__name}>{clothesData.name}</h3>
            <p className={style.container__clothesInfo__price}>Price: <span>{clothesData.price}$</span></p>
            <p>Made of {clothesData.material}</p>
            <p>Produced by {clothesData.company}</p>
            <div className={style.container__clothesInfo__params}>
                For: {clothesData.sex.map(sex => <span key={sex}>{sex} </span>)}
            </div>
            <div className={style.container__clothesInfo__params}>
                Colors: {clothesData.colors.map(color => <ParamsItem param='color' 
                                                                    value={color} 
                                                                    key={color} 
                                                                    handleParamChange={handleParamChange}
                                                                    classType={params.color === color ? 
                                                                        'container__clothesInfo__params_item_active' :
                                                                        'container__clothesInfo__params_item'} />)}
            </div>
            <div className={style.container__clothesInfo__params}>
                Sizes: {clothesData.sizes.map(size => <ParamsItem param='size' 
                                                                  value={size} 
                                                                  key={size} 
                                                                  handleParamChange={handleParamChange}
                                                                  classType={params.size === size ? 
                                                                    'container__clothesInfo__params_item_active' :
                                                                    'container__clothesInfo__params_item'}>{size}</ParamsItem>)}
            </div>
            <AddToCartButton inStock={clothesData.inStock} checkAuthorization={checkAuthorization}/>
        </div>
    </div>
}

export default ClothesDetails;