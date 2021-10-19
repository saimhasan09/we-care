import React from 'react';
import { Link } from 'react-router-dom';

const Emergency = () => {
    return (
        <div className="w-100 container d-flex flex-wrap justify-content-center align-items-center">
            <div className="col-md-6">
                <img className="img-fluid " src="https://i.ibb.co/JnBzB4t/image.png" />
            </div>
            <div className="col-md-6">
                <h1>Make An Appointment For Emergency</h1>
                <Link to="/bookingform"> <button className="btn btn-outline-primary">Book Now</button></Link>
            </div>
        </div>
    );
};

export default Emergency;
