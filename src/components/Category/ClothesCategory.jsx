import React, { useEffect } from "react";
import ClothesCategoryItem from "./ClothesCategoryItem/ClothesCategoryItem";
import { useDispatch, useSelector } from "react-redux";
import { getAllClothes } from "../../store/clothesReducer";
import style from "./ClothesCategory.module.css";
import FilterContainer from "./Filter/FilterContainer";


const ClothesCategory = () => {
    const dispatch = useDispatch();
    const { clothes, isLoading } = useSelector(state => state.clothesReducer);

    useEffect(() => {
        dispatch(getAllClothes());
    }, [dispatch]);

    return <div className={style.container}>
        <FilterContainer className={style.container__filterWrapper} />
        {!isLoading ? 
            <div className={style.container__clothesWrapper}>
                {clothes.map((item) => <ClothesCategoryItem clothesData={item} key={item.name}/>)}
            </div>
            : <div>Loading...</div>
        }
        
    </div>
}

export default ClothesCategory;