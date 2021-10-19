import React from 'react';
import './Footer.css';
import logo from "../../images/logo1 (2).png";

const Footer = () => {
    return (
        <div className="footer ">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-6">
                        <img className="img-fluid w-50" src={logo} />
                        <p className="text-start ps-5">We care is the most famous diagonstic center in the city, with lots of happy patients. this center is also known as the most caring place for all the patients. we always ready insure the highest priority about their patients</p>
                    </div>
                    <div className="col-md-6">
                        <div className="text-start row">
                            <div className="col-md">
                                <ul>
                                    <li>Partens</li>
                                    <li>Career</li>
                                    <li>Review</li>
                                    <li>Help</li>
                                </ul>
                            </div>
                            <div className="col-md">
                                <ul>
                                    <li>Terms-Condition</li>
                                    <li>OurTeam</li>
                                    <li>Blog</li>
                                    <li>Projects</li>
                                </ul>
                            </div>

                        </div>
                        <div>
                            <h4>Pay with</h4>
                            <img className="img-fluid w-50" src='https://user-images.githubusercontent.com/52581/44384465-5e312780-a570-11e8-9336-7b54978a9e64.png' />
                        </div>
                    </div>
                </div>

                <h5 className="py-3">© ||Copyright We care 2021</h5>
            </div>
        </div>
    );
};

export default Footer;