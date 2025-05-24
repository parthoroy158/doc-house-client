import React from 'react';
import Banner from './Banner/Banner';
import Body from './Body/Body';
import OpeningDetails from './OpeningDetails/OpeningDetails';
import PatientsReviews from './PatientsReviews/PatientsReviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Body></Body>
            <OpeningDetails></OpeningDetails>
            <PatientsReviews></PatientsReviews>

        </div>
    );
};

export default Home;