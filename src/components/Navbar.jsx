import React from 'react'
import logo from '../images/logo.jpg';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/signin');
    }
    return (
        <>
            <nav className="navbar bg-light fixed-top">
                <div id="navid" className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                        PuzzleVerse
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">PuzzleVerse</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/practice" className="nav-link" href="#">Practice</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/cod" className="nav-link" href="#">Puzzle of the day</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contest" className="nav-link" href="#">Contest</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/finduser" className="nav-link" href="#">Find User</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/dashboard" className="nav-link" href="#">Dashboard</Link>
                                </li>
                                <li className="nav-item">
                                    <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
