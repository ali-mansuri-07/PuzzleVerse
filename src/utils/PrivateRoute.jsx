import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
    let authToken = localStorage.getItem('token')
    return (
        <div>
            {authToken ? <Outlet /> : <Navigate to='/signin' />}
        </div>
    )
}

export default PrivateRoute
