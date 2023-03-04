import React, {useEffect} from "react";
import ClothesCategory from "./ClothesCategory";
import { useDispatch, useSelector } from "react-redux";
import { getAllClothes } from "../../store/clothesReducer";
import { useParams } from "react-router";


const ClothesCategoryContainer = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const { clothes, isLoading } = useSelector(state => state.clothesReducer);

    useEffect(() => {
        dispatch(getAllClothes(params.type));
    }, [params, dispatch]);

    return <ClothesCategory clothes={clothes} isLoading={isLoading} />
}

export default ClothesCategoryContainer;