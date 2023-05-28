import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../Navbar'
import profilebg from '../../../images/Oreti.svg'
import UserContext from '../../../context/user/userContext'
const Dashboard = () => {
    const context = useContext(UserContext);
    const { loggedInUser, currentuser } = context;
    useEffect(() => {
        loggedInUser();
    }, [])

    return (
        <>
            <Navbar />
            <div>
                <section className="text-center mb-2" style={{ marginTop: "60px" }}>
                    <div className="p-5 bg-image" style={{ backgroundImage: `url(${profilebg})`, height: "300px" }}></div>
                    <div className="card mx-4 mx-md-5 shadow-5-strong" style={{ marginTop: "-100px", background: "hsla(0,0%,100%,0.8", backdropFilter: "blur(30px" }}
                    >
                        <div className="card-body py-5 px-md-5">
                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-8">
                                    <h2 className="fw-bold mb-5">User Profile</h2>
                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <button className="btn btn-warning">Username</button><p>{currentuser && currentuser.username}</p>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <button className="btn btn-warning">Email</button><p>{currentuser && currentuser.email}</p>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <p className="btn btn-warning">Questions Solved</p><p>{currentuser && currentuser.practiceset.length}</p>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <p className="btn btn-warning">Followers</p><p>{currentuser && currentuser.followers}</p>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <p className="btn btn-warning">Following</p><p>{currentuser && currentuser.following.length}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div >
        </>
    )
}

export default Dashboard



// {/* <button type="submit" className="btn btn-primary btn-block mb-4">
// Sign up
// </button>


// <div className="text-center">
// <p>or sign up with:</p>
// <button type="button" className="btn btn-link btn-floating mx-1">
//     <i className="fab fa-facebook-f"></i>
// </button>

// <button type="button" className="btn btn-link btn-floating mx-1">
//     <i className="fab fa-google"></i>
// </button>

// <button type="button" className="btn btn-link btn-floating mx-1">
//     <i className="fab fa-twitter"></i>
// </button>

// <button type="button" className="btn btn-link btn-floating mx-1">
//     <i className="fab fa-github"></i>
// </button>
// </div> */}