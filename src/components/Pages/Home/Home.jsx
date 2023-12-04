import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Category from './Category';
import PhotoGallery from './PhotoGallery';


const Home = () => {
    useTitle('Home');
    return (
        <div>
            <h2>Home </h2>
            <PhotoGallery/>
            <Category />

        </div>
    );
};

export default Home;