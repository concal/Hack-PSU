import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <Link to="./" className="navbar-logo-link">Project Name</Link>
            <div className="navbar-links">
                <Link to="./" className="navbar-link">Home</Link>
            </div>
        </div>
    )
}

export default Navbar;