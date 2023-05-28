import React from 'react'
import background from '../images/background.svg';
import { Outlet, Link } from "react-router-dom";
import logo from '../images/logo.jpg';
import '../stylesheets/landing.css'
//This is the starting page it will be directing to login/signup with get started page
function Landing() {
  return (
    <>
      <nav className="navbar">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
            PuzzleVerse
          </Link>
        </div>
      </nav>
      <section className="hero">
        <div className='container'>
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="text">
                Start the journey of Puzzles to train your brain
              </div>
              <div className="buttons">
                <Link to="/signup">
                  <div className='btn btn-primary'>Get Started</div>
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <img src={background} alt="back-image" className='w-100'></img>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Landing
