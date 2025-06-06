import React from 'react';
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome to my Portfolio</h1>
            <Link to="/about">
            <button className="home-button">Learn more about Me Here!</button>

            </Link>
        </div>
    );
};

export default Home;
