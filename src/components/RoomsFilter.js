import React from 'react';
import {useContext} from "react";
import {RoomContext} from "../Context";
import Title from './Title';

const getUnique = (items, value) => {
    // looking for unique values
    return [...new Set(items.map(item => item[value]))]
};

const RoomsList = ({rooms}) => {
    const context = useContext(RoomContext);
    const {
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets,
        handleChange
    } = context;


    let types = getUnique(rooms, "type");
    types = ["all", ...types];
    types = types.map((type, index) => <option key={index} value={type}>{type}</option>);

    let people = getUnique(rooms, "capacity");
    people = people.map((peopleQuantity, index) => <option key={index}
                                                           value={peopleQuantity}>{peopleQuantity}</option>);
    return (
        <section className="filter-container">
            <Title title="search rooms"/>
            <form className="filter-form">
                {/*start select type*/}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type"
                            id="type" value={type} className="form-control" onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/*end of select type*/}
                {/*start capacity*/}
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select name="capacity"
                            id="capacity"
                            value={capacity}
                            className="form-control"
                            onChange={handleChange}
                    >
                        {people}
                    </select>
                </div>
                {/*end of select capacity*/}
                {/* room price */}
                <div className="form-group">
                    <label htmlFor="price">
                        room price {price}
                    </label>
                    <input type="range"
                           name="price"
                           min={minPrice}
                           max={maxPrice}
                           id="price"
                           value={price}
                           onChange={handleChange}
                           className="form-control"
                    />
                </div>
                {/*end of room price*/}
                {/*size*/}
                <label htmlFor="size">room size</label>
                <div className="size-inputs">
                    <input type="number"
                           name="minSize"
                           id="size"
                           value={minSize}
                           onChange={handleChange}
                           className="size-input"/>
                    <input type="number"
                           name="maxSize"
                           id="size"
                           value={maxSize}
                           onChange={handleChange}
                           className="size-input"/>
                </div>
                {/*end of size*/}
                {/*extras*/}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox"
                               name="breakfast"
                               id="breakfast"
                               checked={breakfast}
                               onChange={handleChange}
                        />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                </div>
                {/*end of extras*/}
                {/*pets*/}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox"
                               name="pets"
                               id="pets"
                               checked={pets}
                               onChange={handleChange}
                        />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/*end of pets*/}
            </form>
        </section>
    );
};

export default RoomsList;