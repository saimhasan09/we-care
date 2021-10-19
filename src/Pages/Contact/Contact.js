import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Shared/Header/Header';

const Contact = () => {
    return (
        <div>
            <Header></Header>


            <div className="container row ms-2 w-100 container d-flex flex-wrap justify-content-center align-items-center">

                <img className="img-fluid w-50 col-md-6 " src="https://i.ibb.co/q0hq524/contact.jpg" alt="contact" border="0"></img>

                <div className="col-md-6 ">
                    <h1 className=" fs-1 fw-bolder text-start">Contact US</h1>
                    <h5 className="text-start"> Phone: +3434343</h5>
                    <h5 className="text-start"> Location: 199 Park Ave, San Jose,
                        CA 95110, </h5>
                    <h5 className="text-start">  Email:support@mail.com</h5>


                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;