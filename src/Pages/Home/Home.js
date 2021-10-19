import React, { useEffect, useState } from 'react';
import Emergency from '../Emergency/Emergency';
import Footer from '../Footer/Footer';
import Ourteam from '../OurTeam/Ourteam';
import Header from '../Shared/Header/Header';
import SubHeader from '../SubHeader/SubHeader';
import TestCard from '../TestCard/TestCard';
import './Home.css';

const Home = () => {

    const [tests, setTests] = useState('');

    useEffect(() => {
        const url = `./service.json`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTests(data.slice(0, 6)))
    }, []);

    return (

        <div className="w-100">
            <Header></Header>
            <SubHeader></SubHeader>

            <h1 className="text-center test-title fw-bolder ">Available  Tests</h1>

            <div className="d-flex flex-wrap justify-content-center">
                {
                    tests && tests.map(test => <TestCard
                        test={test}
                        key={test.id}
                    >
                    </TestCard>)
                }

            </div>
            <Ourteam></Ourteam>
            <Emergency></Emergency>
            <Footer></Footer>
        </div>
    );
};

export default Home;