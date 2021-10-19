import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../Hooks/useAuth'
import { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, } from "firebase/auth";



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
        <div className="login-back">
            <div className="login-box d-flex align-items-center justify-content-center">
                <div className="login">
                    <div className="login-box">
                        <form onSubmit={HandelPasswordLogin} >
                            <input
                                onBlur={HandelEmail}
                                className="input-felid"
                                type="email"
                                name="email"
                                placeholder="Enter your Email"
                            />
                            <br />
                            <input
                                onBlur={HandelPassword}
                                className="input-felid"
                                type="password"
                                name="password"
                                placeholder="Enter your Password"
                            />
                            <p className='text-center text-danger'>{error}</p>
                            <input

                                className="mt-3 w-50 btn btn-outline-danger m-auto"
                                type="submit"
                                value="Login"
                            />
                        </form>

                    </div>
                    <p>----------OR----------</p>
                    <button onClick={handleGoogleLogin} className="me-2 btn btn-outline-danger" >
                        Login with Google <i class="fab fa-google"></i>
                    </button>

                    <Link to="/register" className='new-user text-danger'>
                        <p>Create An Account</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login