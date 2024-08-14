import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const ProtectedRoute = ({ component: Component, roles, ...rest }) => {
    const user = useAuth();

    return (
        <Route {...rest} render={(props) => {
            if (!user) {
                return <Navigate to={'/login'}/>;
            }

            if (roles && !roles.includes(user.role)) {
                return <Navigate to={'/'}/>;
            }

            return <Component {...props}/>;
        }}
        />
    )
}

export default ProtectedRoute;