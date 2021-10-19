import React from 'react';
import './SubHeader.css';

const SubHeader = () => {
    return (
        <div className="w-100 row align-items-center justify-content-center  ">
            <div className="col-md-6">
                <h2 id="sologan" className=" fw-bolder ">Get better care for your health with <br /><span className=" fw-bolder learn-up ">We Care</span></h2>
            </div>
            <div className="col-md-6">
                <img className="img-fluid w-100 p-5" src="https://i.ibb.co/7Wjq0NY/Medicine-bro.png" border="0"></img>
            </div>

        </div>
    );
};

export default SubHeader;