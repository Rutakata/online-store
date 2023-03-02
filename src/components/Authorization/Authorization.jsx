import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import style from "./Authorization.module.css";


const Authorization = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { logIn } = useAuth();
    const navigate = useNavigate();

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        try {
            setError(null);
            await logIn(email, password);
            setEmail('');
            setPassword('');
            navigate('/');
        }catch (err) {
            setError('Failed to sign in');
        }
        setLoading(false);
    }

    return <div className={style.wrapper}>
        <h1 className={style.header}>Sign In</h1>

        <form className={style.loginizationForm} onSubmit={handleSubmit}>
            <label htmlFor="email" className={style.loginizationForm__fieldLabel}>Email</label>
            <input type="email" value={email} onChange={handleEmail} className={style.loginizationForm__inputField} id="email" placeholder="Email"/>
            
            <label htmlFor="password" className={style.loginizationForm__fieldLabel}>Password</label>
            <input type="password" value={password} onChange={handlePassword} className={style.loginizationForm__inputField} id="password" placeholder="Password"/>

            <input type="submit" className={style.loginizationForm__submitButton} value="Sign in" disabled={loading}/>
        </form>

        <p>Don't have account? You can <Link>sign up</Link></p>
        {error ? <p className={style.loginizationForm__errorMessage}>{error}</p> : null}
    </div>
}

export default Authorization;