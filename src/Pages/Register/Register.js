import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import Header from '../Shared/Header/Header';
const Register = () => {
    const { handelName, error, signUpwithPassword, HandelPassword, HandelEmail } = useAuth();
    return (
        <div className='container  register-back w-100'>
            <Header></Header>
            <div className="m-5 login-box d-flex align-items-center justify-content-center">
                <div className="login p-5 border">
                    <h3 className="pb-2 text-danger">Register</h3>
                    <div className="login-box">
                        <form >
                            <input
                                onBlur={handelName}
                                className="input-felid form-control"
                                type="text"
                                name="text"
                                placeholder="Enter your Name"
                            />
                            <br />
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
                                onClick={signUpwithPassword}
                                className="mt-3 w-100 btn btn-danger m-auto form-control"
                                type="submit"
                                value="Sign Up Now"
                            />
                        </form>
                        <Link to="/login" className='new-user text-danger' >
                            <p className='pt-2'>Already Have An Account</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;