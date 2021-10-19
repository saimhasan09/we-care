import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Footer/Footer';

const Aboutus = () => {
    return (

        <div>
            <Header></Header>

            <div className="container row ms-2 w-100 container d-flex flex-wrap justify-content-center align-items-center">

                <img className="img-fluid w-50 col-md-6 " src="https://i.ibb.co/fkw0GFJ/2672292.jpg" alt="contact" border="0"></img>

                <div className="col-md-6 ">
                    <h1 className=" fs-1 fw-bolder text-start">ABOUT US</h1>
                    <p className="text-start">We care is the most famous diagonstic center in the city, with lots of happy  patients. this center is also known as the most caring place for all the patients.
                        we always ready insure the highest priority about their patients</p>



                </div>

            </div>
            <Footer></Footer>
        </div>

    );
};

export default Aboutus;