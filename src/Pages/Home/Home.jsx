import React from 'react';
import Banner from './Banner/Banner';
import Body from './Body/Body';
import OpeningDetails from './OpeningDetails/OpeningDetails';
import PatientsReviews from './PatientsReviews/PatientsReviews';
import PopularDoctor from './PopularDoctor/PopularDoctor';
import BookingFrom from './BookingFrom/BookingFrom';
import Footer from './Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Body></Body>
            <OpeningDetails></OpeningDetails>
            <PatientsReviews></PatientsReviews>
            <PopularDoctor></PopularDoctor>
            <BookingFrom></BookingFrom>
            <Footer></Footer>

        </div>
    );
};

export default Home;