import React from 'react';
import PropTypes from 'prop-types';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

const Home = props => {
    return <>
        <Hero>
            <Banner
                title="luxorious rooms"
                subtitle="deluxe rooms starting at $199">
                <Link to="/rooms" className="btn-primary">
                    Our Rooms
                </Link>
            </Banner>
        </Hero>
        <Services/>
        <FeaturedRooms/>
    </>
};

// Home.propTypes = {};

export default Home;