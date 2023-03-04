import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getClothesById } from "../../store/currentClothesReducer";
import ClothesDetails from "./ClothesDetails";


const ClothesDetailsContainer = () => {
    const { clothesData, isLoading } = useSelector(state =>  state.currentClothesReducer);
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        console.log(params);
        dispatch(getClothesById(params.id));
    }, [dispatch])

    return !isLoading && clothesData !== null ? 
            <ClothesDetails clothesData={clothesData} />
            : <div>Loading...</div>
}

export default ClothesDetailsContainer;