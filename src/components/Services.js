import React, {Component} from 'react';
import Title from "./Title";
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa";

class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail/>,
                title: "Free Cocktails",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam."
            },
            {
                icon: <FaHiking/>,
                title: "Hiking Possibility",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam."
            },
            {
                icon: <FaShuttleVan/>,
                title: "Free Shuttles",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam."
            },
            {
                icon: <FaBeer/>,
                title: "Endless Beer",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam."
            }
        ]
    };

    render() {
        const {services} = this.state;
        return (
            <section className="services">
                <Title title="Services"/>
                <div className="services-center">
                    {services.map((item, index) => {
                        return   <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        );
    }
}

export default Services;