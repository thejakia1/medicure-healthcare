import React, { useState } from "react";
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from "../../../hooks/useAuth";
import '../Register/Register.css'

const Register = () => {


    const { signInWithGoogle, createAccountWithGoogle, setUser, setIsLoading, updateName } = useAuth();

    const history = useHistory()
    const location = useLocation()
    const url = location.state?.from || "/home"

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');


    const handleGetName = (e) => {
        console.log(e.target.value);
        setName(e.target.value)
    }

    const handleGetEmail = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value)
    }

    const handleGetPassword = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value)
    }



    const handleRegistration = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case');
            return;
        }
        createAccountWithGoogle(email, password)
            .then((res) => {
                setIsLoading(true)
                updateName(name)
                setUser(res.user)
                history.push(url)
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
        <div>
            <div className="register-container">
                <h2>Create Account</h2>
                {/* email password authentication */}
                <form onSubmit={handleRegistration} className="mb-3 w-50 mx-auto">
                    <div className="mb-3">
                        {/* Registration form */}
                        <input onBlur={handleGetName} type="text" className="form-control mb-3" id="usr" placeholder="Your Name" />
                        <input onBlur={handleGetEmail} type="email" className="form-control mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your E-mail" />
                        <input onBlur={handleGetPassword} type="password" className="form-control mb-3" id="exampleInputPassword1" placeholder="Your Password" />

                    </div>
                    <div className="mb-3 text-danger">{error}</div>
                    
                    <button type="submit" className="btn btn-warning fw-bold">Register</button>
                </form>

                <p className="fw-bold">Already have an account? <Link to="/login">Login Now</Link></p>

                {/* google pop us sign in method */}
                <button onClick={handleGoogleLogin} className="btn btn-warning fw-bold">Sign In with Google</button>
            </div>
        </div>
    );
};

export default Register;