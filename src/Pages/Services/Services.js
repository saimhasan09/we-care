import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Shared/Header/Header';
import TestCard from '../TestCard/TestCard';
import './Service.css';

const Services = () => {

    const [tests, setTests] = useState('');

    useEffect(() => {
        const url = `./service.json`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTests(data))
    }, []);

    return (

        <div className="w-100">
            <Header></Header>

            <h1 className="text-center test-title fw-bolder ">All  Tests</h1>

            <div className="d-flex flex-wrap justify-content-center">
                {
                    tests && tests.map(test => <TestCard
                        test={test}
                        key={test.id}
                    >
                    </TestCard>)
                }

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Services;