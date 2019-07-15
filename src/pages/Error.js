import React from 'react';
import PropTypes from 'prop-types';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";

const Error = props => {
    return <Hero>
        <Banner
            title="404"
            subtitle="page not found">
            <Link to="/" className="btn-primary">
                To Homepage
            </Link>
        </Banner>
    </Hero>
};

// Error.propTypes = {};

export default Error;