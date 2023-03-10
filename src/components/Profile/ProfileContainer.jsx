import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../contexts/AuthContext";
import Profile from "./Profile";


const ProfileContainer = () => {
    const { currentUser, logOut } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/home');
    }, [])

    const handleLogOut = () => {
        navigate('/home');
        logOut();
    }

    return <Profile currentUser={currentUser} logOut={handleLogOut} />
}

export default ProfileContainer;