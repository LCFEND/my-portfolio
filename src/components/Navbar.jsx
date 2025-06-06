import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__section">
                <Link to="/" className="navbar__logo">
                    <img src="/logo.png" alt="Logo" />
                </Link>
            </div>

            <div className="navbar__section navbar__center">
                <ul className="navbar__links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Me</Link></li>
                    <li><Link to="/resume">Resume</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>

            <div className="navbar__section">
                {/* empty div to balance layout */}
            </div>
        </nav>
    );
};

export default Navbar;