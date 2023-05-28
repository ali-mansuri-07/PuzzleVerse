import { useState } from 'react';
import UserContext from './userContext';

const UserState = (props) => {
    const host = "http://localhost:5000"
    const [solvedQuestions, setSolvedQuestions] = useState([]);
    const [user, setFinduser] = useState({});
    const [currentuser, setCurrentUser] = useState(null);
    const [data, setData] = useState([]);
    //Get the array of solved question id's of the user
    const getSolvedQuestions = async () => {
        const response = await fetch(`${host}/api/user/solvedquestion`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        });
        const json = await response.json();
        setSolvedQuestions(json);
    }

    //update the array with the id of the solve equation
    const addSolvedQuestion = async (questionid) => {
        const response = await fetch(`${host}/api/user/addsolvedquestion`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ questionid })
        });
        const json = await response.json();
        setSolvedQuestions(json);
    }

    //find the user data by its username
    const finduser = async (username) => {
        const response = await fetch(`${host}/api/user/finduser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ username })
        });
        const json = await response.json();
        setFinduser(json);
    }

    //follow route user1(logged in person) follows user2(found person)
    const follow = async (username) => {
        const response = await fetch(`${host}/api/user/follow`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ username })
        });
        const json = await response.json();
        setFinduser(json);
    }

    //follow route user1(logged in person) follows user2(found person)
    const unfollow = async (username) => {
        const response = await fetch(`${host}/api/user/unfollow`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ username })
        });
        const json = await response.json();
        setFinduser(json);
    }

    //find the current logged in user details to api : /api/auth/getuser
    const loggedInUser = async () => {
        const response = await fetch(`${host}/api/auth/getuser`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        });
        const json = await response.json();
        setCurrentUser(json);
    }

    //a function to find all the question in the database api call /api/question/getquestionset
    const getExercise = async () => {
        const response = await fetch("http://localhost:5000/api/question/getquestionset", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            }
        });
        const json = await response.json();
        setData(json);
    }

    return (
        <UserContext.Provider value={{ solvedQuestions, getSolvedQuestions, addSolvedQuestion, user, finduser, follow, unfollow, loggedInUser, currentuser, data, getExercise }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState
