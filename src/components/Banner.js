import React from 'react';
import PropTypes from 'prop-types';

const Banner = ({children, title, subtitle}) => {
    return (
        <div className="banner">
            <h1>{title}</h1>
            <div></div>
            <p>{subtitle}</p>
            {children}
        </div>
    )
};

Banner.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    children: PropTypes.element.isRequired
};

export default Banner;