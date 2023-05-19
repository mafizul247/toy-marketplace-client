import React from 'react';
import errorImage from './../../assets/404-error.jpg'
import { Link, useRouteError } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const ErrorPage = () => {
    useTitle('ErrorPage')
    const error = useRouteError
    return (
        <div>
            <div className='flex justify-center items-center' style={{height: '100vh'}}>
            <div className='text-center'>
                <h1>Oops!</h1>
                <img src={errorImage} alt="" />
                <p>Sorry, an unexpected error has occurred.</p>
                <p >
                    <i>{error.statusText || error.message}</i>
                </p>
                <Link to='/'><button className='btn btn-outline btn-secondary mt-8'>Go to Home Page</button></Link>
            </div>
        </div>
        </div>
    );
};

export default ErrorPage;