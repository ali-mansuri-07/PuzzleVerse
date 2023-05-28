import React from 'react'
import { useContext } from 'react';
import UserContext from '../../../context/user/userContext';

const Follow = () => {
    const context = useContext(UserContext);
    const { user, follow } = context;
    const handleSubmit = async (e) => {
        e.preventDefault();
        follow(user.username);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button type="submit" className="btn btn-primary btn-rounded btn-lg">
                    Follow
                </button>
            </form>
        </div>
    )
}

export default Follow
