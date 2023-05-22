import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Category from './Category';


const Home = () => {
    useTitle('Home');
    return (
        <div>
            <h2>Home </h2>
            <Category />

            

        </div>
    );
};

export default Home;