import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation();

    if (loading) {
        return <div className='text-center mt-60'>
            <button className="btn btn-square loading"></button>
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace />
};

export default PrivateRouter;