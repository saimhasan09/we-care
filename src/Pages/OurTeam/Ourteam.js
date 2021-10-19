import React from 'react';
import { Link } from 'react-router-dom';
import './ourTeam.css';

const Ourteam = () => {

    return (
        <div className="w-100 team" >
            <div>
                <h1>Our Team</h1>
                <h4>Docter’s In The Medical Science</h4>
            </div>
            <div className="d-flex m-5 p-3 flex-wrap justify-content-center">

                <div className="card m-3" style={{ width: '18rem' }}>
                    <img src="https://i.ibb.co/Tgw5b53/D1.jpg"
                        className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title fw-bolder">ROBERT JHON</h5>
                        <p className="card-text">Head of Department</p>
                    </div>

                </div>

                <div className="card m-3" style={{ width: '18rem' }}>
                    <img src="https://i.ibb.co/RbFytvJ/image.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title fw-bolder">WILLIAM DEVID</h5>
                        <p className="card-text">Senior Resident</p>
                    </div>
                </div>


                <div className="card m-3" style={{ width: '18rem' }}>
                    <img src="https://i.ibb.co/gdmkyyk/image.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title fw-bolder">MARK DONALD</h5>
                        <p className="card-text">Medical Director</p>
                    </div>
                </div>

            </div>
            <Link to="/docdetails"><button className="btn btn-primary">Meet Others</button> </Link>
        </div>
    )
}
export default Ourteam;