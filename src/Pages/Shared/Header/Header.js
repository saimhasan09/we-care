import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../../images/logo1 (2).png";
import useAuth from '../../Hooks/useAuth';
import './Header.css';


const Header = () => {

    const { logOut, user } = useAuth();
    // console.log(user);

    return (

        <div className="container w-100">
            <nav className="navbar navbar-expand-lg navbar-light ">

                <div className="container-fluid">

                    <img className="img-fluid w-25" src={logo} alt="" />

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">

                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">

                        <ul className="navbar-nav ms-auto header-text ">

                            <li className="nav-item">
                                <Link className="nav-item-style" to="/home">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-item-style" to="/services">services </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-item-style" to="/aboutUs">About us </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-item-style" to="/contact">Contact </Link>
                            </li>

                            <li className="nav-item">
                                {user.email ?
                                    <Link to="" className="nav-item-style" onClick={logOut} >LogOut</Link>
                                    :
                                    <Link to="/login" className="nav-item-style">Login</Link>
                                }
                            </li>
                            <img className="img-fluid profile-pic" src={user.photoURL} ></img>
                            <h4> {user.displayName}</h4>


                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;