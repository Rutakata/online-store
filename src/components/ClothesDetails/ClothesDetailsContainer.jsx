import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { getClothesById } from "../../store/currentClothesReducer";
import AuthorizationPopup from "./AuthorizationPopup/AuthorizationPopup";
import ClothesDetails from "./ClothesDetails";


const ClothesDetailsContainer = () => {
    const { clothesData, isLoading, params } = useSelector(state => state.currentClothesReducer);
    const dispatch = useDispatch();
    const param = useParams();
    const { currentUser } = useAuth();
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        dispatch(getClothesById(param.id));
    }, [dispatch, param.id])

    const checkAuthorization = () => {
        if (!currentUser) {
            setIsShown(true);
        }
    }
    const handlePopup = () => {
        setIsShown(false);
    }

    return !isLoading && clothesData !== null ? 
            <>
                <ClothesDetails clothesData={clothesData} checkAuthorization={checkAuthorization} params={params} />
                <AuthorizationPopup isShown={isShown} handlePopup={handlePopup} />
            </>
            : <div>Loading...</div>
}

export default ClothesDetailsContainer;