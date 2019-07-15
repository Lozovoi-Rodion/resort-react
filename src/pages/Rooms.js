import React from 'react';
// import PropTypes from 'prop-types';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
import RoomsContainer from "../components/RoomsContainer";

const Rooms = () => {
    return <>
    <Hero hero="roomsHero">
        <Banner title="Our Rooms">
            <Link
                to="/" className="btn-primary">Return Home</Link>
        </Banner>
    </Hero>
        <RoomsContainer/>
        </>
};

// Rooms.propTypes = {};

export default Rooms;