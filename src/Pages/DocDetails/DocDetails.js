import React from 'react';
import Header from '../Shared/Header/Header';

const DocDetails = () => {
    return (
        <div className="w-100 team" >
            <Header></Header>
            <div>
                <h1>Our Team</h1>
                <h4>Meet with everyone</h4>
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
                <div className="card m-3" style={{ width: '18rem' }}>
                    <img src="https://i.ibb.co/RPpQ0L4/D2.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title fw-bolder">MARK CINA</h5>
                        <p className="card-text">Medical Director</p>
                    </div>
                </div>
                <div className="card m-3" style={{ width: '18rem' }}>
                    <img src="https://i.ibb.co/Vt8gBfP/D3.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title fw-bolder">MARK Martin</h5>
                        <p className="card-text">Medical Director</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default DocDetails;