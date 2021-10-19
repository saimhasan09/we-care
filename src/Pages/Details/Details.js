import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Shared/Header/Header';


const Details = () => {

    const { serviceId } = useParams();
    const [diseases, setDisease] = useState([]);
    useEffect(() => {
        fetch('/service.json')
            .then(res => res.json())
            .then(data => setDisease(data))
    }, []);

    return (
        <div className='w-100'>
            <Header />
            <div className="container py-3">
                {
                    diseases.filter(disease => disease.id == serviceId).map(a => <div className="  text-center ">
                        <div className='details-container'>
                            <img src={a.img} alt="" className='service-container' />
                            <h4>{a.name}</h4>
                            <p>{a.description}</p>

                            <Link to='/bookingform'><button className='btn btn-outline-success'>Contact with doctor</button></Link>

                        </div>
                    </div>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Details;
