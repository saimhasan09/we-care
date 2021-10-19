import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="text-center">
            <img className="img-fluid" src="https://i.ibb.co/xY5r02r/404.png" alt="404" border="0" />
            <h2 className="fs-1 fw-bolder">Page Not Found</h2>
        </div>
    );
};

export default NotFound;