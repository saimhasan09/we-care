import React from 'react';
import Header from '../Shared/Header/Header';

const BookingForm = () => {
    return (
        <div className=' d-flex flex-wrap justify-content-center my-5 w-100'>
            <Header></Header>

            <div>
                <h1 className="fw-bolder">Fill the form</h1>
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Phone Number</label>
                        <input type="number" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>

                </form>
            </div>
            <div >
                <img className='img-fluid w-50' src="https://i.ibb.co/JkJsj6T/image.png" alt="image"></img>

            </div>
        </div>

    );
};

export default BookingForm;