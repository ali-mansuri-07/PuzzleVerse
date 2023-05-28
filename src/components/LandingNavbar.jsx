import React from 'react'
import logo from '../images/logo.jpg';
import { Link } from 'react-router-dom';
const LandingNavbar = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                        PuzzleVerse
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default LandingNavbar
