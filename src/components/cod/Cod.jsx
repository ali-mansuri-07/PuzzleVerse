import React, { useContext, useEffect } from 'react'
import Navbar from '../Navbar';
import UserContext from '../../context/user/userContext';
import { useNavigate } from 'react-router-dom';
const Cod = () => {
    const navigate = useNavigate();
    const context = useContext(UserContext);
    const { data, getExercise } = context;
    useEffect(() => {
        getExercise();
        if (data.length !== 0) {
            const datalength = data.length;
            console.log(datalength)
            const randomIndex = Math.floor(Math.random() * (datalength)) + 0;
            navigate(`/practice/${data[randomIndex]._id}`)
        }
    }, [])

    return (
        <div>
            <Navbar />
        </div>
    )
}

export default Cod
