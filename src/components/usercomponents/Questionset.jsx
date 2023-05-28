import React, { useContext } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../context/user/userContext';
import { toast } from 'react-toastify';

function Questionset() {
    const context = useContext(UserContext);
    const { solvedQuestions, getSolvedQuestions, data, getExercise } = context;
    //function to get all the questions from database
    //We will useEffect so that our function runs only once when the page loads for exerciseset
    useEffect(() => {
        getExercise();
    }, []);

    //function to display the solved icon if the question is solved
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getSolvedQuestions();
        } else {
            toast("You are not signed in");
        }
    }, []);

    return (
        <div className="container mx-auto" style={{ marginTop: "70px", }}>
            {data.map((e) => (
                <div className="card mb-2">
                    <div class="card-header">
                        {e.title}
                    </div>
                    <div className="card-body">
                        <p className="card-text">{e.question}</p>
                        <div className="container">
                            <Link to={`/practice/${e._id}`}><button className="btn btn-primary">Solve</button></Link>
                            {solvedQuestions.indexOf(`${e._id}`) > -1 &&
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-check" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00b341" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <circle cx="12" cy="12" r="9" />
                                    <path d="M9 12l2 2l4 -4" />
                                </svg>
                            }
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Questionset

