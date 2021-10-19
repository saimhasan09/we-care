import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, } from "firebase/auth";

import Header from '../Shared/Header/Header';



const Login = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('')
    const { signInUsingGoogle, signInwithpass, HandelEmail, HandelPassword, auth, email, password } = useAuth()
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.replace(from);

            })
    }
    const HandelPasswordLogin = (e) => {
        e.preventDefault();
        signInwithpass()
            .then(result => {
                history?.replace(from);

            })
    }


    return (
        <div className="login-back w-100">
            <Header></Header>
            <div className="login-box d-flex align-items-center justify-content-center">

                <div className="login m-5 p-5 border">
                    <h3 className="pb-2 text-danger">Login</h3>
                    <div className="login-box">
                        <form onSubmit={HandelPasswordLogin} >
                            <input
                                onBlur={HandelEmail}
                                className="input-felid form-control"
                                type="email"
                                name="email"
                                placeholder="Enter your Email"
                            />
                            <br />
                            <input
                                onBlur={HandelPassword}
                                className="input-felid form-control"
                                type="password"
                                name="password"
                                placeholder="Enter your Password"
                            />
                            <p className='text-center text-danger'>{error}</p>
                            <input

                                className="my-3 w-100 btn btn-outline-danger m-auto form-control"
                                type="submit"
                                value="Login"
                            />
                        </form>

                    </div>
                    <p className='py-3'>----------OR----------</p>
                    <button onClick={handleGoogleLogin} className="me-2 btn btn-outline-danger form-control" >
                        Login with Google <i class="fab fa-google"></i>
                    </button>

                    <Link to="/register" className='new-user text-danger'>
                        <p className='pt-2'>Create An Account</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login