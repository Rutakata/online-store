import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import style from "./Registration.module.css";


const Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { signUp } = useAuth();
    const navigate = useNavigate();

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleConfirmPassword = (e) => setConfirmPassword(e.target.value);

    const validatePassword = () => {
        let isValid = true;
        if (password === '') {
            setError('You must enter the password');
            isValid = false;
        }else if (password.length < 6) {
            setError('Your password must be 6+ symbols');
            isValid = false;
        }else if (password !== confirmPassword) {
            setError('Your password and confirm password dont match');
            isValid = false;
        }

        return isValid;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validatePassword()) {
            setLoading(true);
            try {
                setError(null);
                await signUp(email, password);
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                navigate('/signin');
            }catch (err){
                setError("Failed to sign up");
            }
            setLoading(false);
        }
    }

    return <div className={style.wrapper}>
        <h1 className={style.header}>Sign Up</h1>

        <form className={style.registrationForm} onSubmit={handleSubmit}>
            <label htmlFor="email" className={style.registrationForm__fieldLabel}>Email</label>
            <input type="email" value={email} onChange={handleEmail} className={style.registrationForm__inputField} placeholder="Email" id="email"/>

            <label htmlFor="password" className={style.registrationForm__fieldLabel}>Password</label>
            <input type="password" value={password} onChange={handlePassword} className={style.registrationForm__inputField} placeholder="Password" id="password"/>

            <label htmlFor="confirmPassword" className={style.registrationForm__fieldLabel}>Confirmation password</label>
            <input type="password" value={confirmPassword} onChange={handleConfirmPassword} className={style.registrationForm__inputField} placeholder="Confirm password" id="confirmPassword"/>

            <input type="submit" className={style.registrationForm__submitButton} value="Sign Up" disabled={loading} />
        </form>
        
        <p>Already have an account? You can <Link to='/signin'>log in</Link></p>
        {error ? <p className={style.registrationForm__errorMessage}>{error}</p> : null}
    </div>
}

export default Registration;