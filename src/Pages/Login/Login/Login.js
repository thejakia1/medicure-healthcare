import React, { useState } from "react";
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from "../../../hooks/useAuth";
import '../Login/Login.css'

const Login = () => {
    const { signInWithGoogle, setUser, loginWithEmailAndPassword, setIsLoading } = useAuth();

    const history = useHistory()
    const location = useLocation()

    const url = location.state?.from || "/home"

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleGetEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleGetPassword = (e) => {
        setPassword(e.target.value);
    }




    const handleLoginWithEmailAndPassword = (e) => {
        e.preventDefault();

        loginWithEmailAndPassword(email, password)
            .then((res) => {
                setIsLoading(true)
                setUser(res.user);
                history.push(url)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
            .finally(() => {
                setIsLoading(false)
            })
    }





    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((res) => {
                setIsLoading(true)
                setUser(res.user)
                history.push(url)
            }
            )
            .catch((err) => console.log(err))
            .finally(() => {
                setIsLoading(false)
            })
    };

    return (

        <div className="login-container">
            <h2>Please Login</h2>
            {/* email password authentication form */}
            <form onSubmit={handleLoginWithEmailAndPassword} className="mb-3 w-50 mx-auto">
                <div className="mb-3">
                    <input onBlur={handleGetEmail} type="email" className="form-control mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your E-mail" required />
                    <input onBlur={handleGetPassword} type="password" className="form-control mb-3" id="exampleInputPassword1" placeholder="Your Password" required />
                </div>
                <button type="submit" className="btn btn-warning fw-bold">Sign In</button>
            </form>
            <p className="fw-bold">Are you a new user? <Link to="/register">Register Now</Link></p>

            {/* google pop us sign in method */}
            <button onClick={handleGoogleLogin} className="btn btn-warning fw-bold">Sign In with Google</button>
        </div>
    );
};

export default Login;