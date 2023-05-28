import React from 'react'
import { useContext } from 'react';
import UserContext from '../../../context/user/userContext';

const Unfollow = () => {
    const context = useContext(UserContext);
    const { user, unfollow } = context;
    const handleSubmit = async (e) => {
        e.preventDefault();
        unfollow(user.username);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button type="submit" className="btn btn-primary btn-rounded btn-lg">
                    Unfollow
                </button>
            </form>
        </div>
    )
}

export default Unfollow

