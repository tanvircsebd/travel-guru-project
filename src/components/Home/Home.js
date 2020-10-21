import React from 'react';
import Slider from '../Slider/Slider'
import './Home.css';
const Home = (props) => {
    return (
        <div className="HomeBackground">
            <div className="main-content">
               <Slider setCity={props.setCity}></Slider>
            </div>
        </div>
    );
};

export default Home;