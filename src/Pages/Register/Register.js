import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
const Register = () => {
    const { handelName, error, signUpwithPassword, HandelPassword, HandelEmail } = useAuth();
    return (
        <div className='container  register-back'>
            <div className="login-box d-flex align-items-center justify-content-center">
                <div className="login">
                    <div className="login-box">
                        <form >
                            <input
                                onBlur={handelName}
                                className="input-felid"
                                type="text"
                                name="text"
                                placeholder="Enter your Name"
                            />
                            <br />
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
                                onClick={signUpwithPassword}
                                className="mt-3 w-50 btn btn-danger m-auto"
                                type="submit"
                                value="Sign Up Now"
                            />
                        </form>
                        <Link to="/login" className='new-user text-danger' >
                            <p >Already Have An Account</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;