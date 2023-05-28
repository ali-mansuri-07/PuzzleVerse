import React, { useContext, useState } from 'react'
import Navbar from '../Navbar';
import UserContext from '../../context/user/userContext';
import Usernotfound from './Usernotfound';
import Userfound from './Userfound';

const FindUser = () => {
    const [nameofuser, setNameofuser] = useState({ username: "" });
    const context = useContext(UserContext);
    const { user, finduser } = context;

    //on click run the function finduser with the details of form
    const handleSubmit = async (e) => {
        e.preventDefault();
        await finduser(nameofuser.username);
    }

    //set the current value of username
    const onChange = (e) => {
        setNameofuser({ ...nameofuser, [e.target.name]: e.target.value })
    }
    return (
        <>
            <Navbar />
            <div className='container' style={{ marginTop: "70px", }}>
                <h1 className=''>Find User</h1>
                <div className="row">
                    <form onSubmit={handleSubmit} class="d-flex" role="search">
                        <input name="username" onChange={onChange} value={nameofuser.username} class="form-control me-2" type="search" placeholder="Enter username" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    {
                        JSON.stringify(user) !== '{}' ? <Userfound /> : <Usernotfound />
                    }
                </div>
            </div>
        </>
    )
}

export default FindUser
