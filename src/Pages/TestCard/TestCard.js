import React from 'react';
import { Link } from 'react-router-dom';
import './TestCard.css'

const TestCard = ({ test }) => {

    const { id, img, name, price, description, } = test;
    const url = `/details/${id}`
    return (


        <div className="m-5">
            <div className="card" style={{ width: '18rem' }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className="card-text">{description}</p>
                    <h2>Price: ${price}</h2>
                    <Link to={url}> <button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default TestCard;