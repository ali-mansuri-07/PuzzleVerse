import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import googleImage from "../images/google.png"
import profileImage from "../images/profileimage.png"
import '../stylesheets/signin.css';
import LandingNavbar from './LandingNavbar';
import { toast } from "react-toastify";
//the sign in page and it links to singup form
const Signin = () => {
    //the below line initializes the values and updates accordingly in the page
    const [data, setData] = useState({ email: "", password: "" })
    const navigate = useNavigate();
    //the below fn's runs after submitting the form
    const handleSubmit = async (e) => {
        // e.preventDefault() is to prevent the form from making an http call. 
        //If we don't use that in a form submission, the page will refresh every time we submit a form.
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/loginUser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: data.email, password: data.password })
        })
        if (response.status === 400) {
            const json = await response.json();
            if (json.error) {
                toast(json.error)
            } else {
                toast(json.errors[0].msg);
            }
        }
        else {
            const json = await response.json();
            localStorage.setItem('token', json.authToken);
            navigate('/practice');
        }
    }

    //the values that you will enter in form will be stored here
    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    //google sigin
    const google = () => {
        window.open("http://localhost:5000/api/auth/google");
    }


    return (
        <>
            <LandingNavbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <h2 className="text-center text-dark mt-4">Login to your account</h2>
                        <div className="card my-3">
                            <form onSubmit={handleSubmit} className="card-body cardbody-color p-lg-5">
                                <div className="text-center">
                                    <img src={profileImage} className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                                        width="200px" alt="profile" />
                                </div>
                                <div className="mb-3">
                                    <input type="email" onChange={onChange} value={data.email} name="email" className="form-control" id="email" aria-describedby="emailHelp"
                                        placeholder="Email" />
                                </div>
                                <div className="mb-3">
                                    <input type="password" onChange={onChange} value={data.password} name="password" className="form-control" id="password" placeholder="password" />
                                </div>
                                <div className="text-center"><button type="submit" className="btn btn-color px-5 mb-3 w-100">Login</button></div>
                                <div className='row mt-2 text-center'>
                                    <div className="col">
                                        <button className="btn btn-dark px-5 mb-2 w-100" onClick={google}>
                                            <img width="30" alt="googleimage" src={googleImage}></img>Google
                                        </button>
                                    </div>
                                </div>
                                <Link to="/signup">
                                    <div id="emailHelp" className="form-text text-center mb-5 text-dark">Not
                                        Registered? <span className="text-dark fw-bold"> Create an
                                            Account</span>
                                    </div>
                                </Link>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin
