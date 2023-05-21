import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailsToy = () => {
    const toy = useLoaderData();

    return (
        <div className='my-8 mx-8 p-4'>
            <h2 className='text-center py-4 text-3xl font-bold bg-slate-300'>Toy Details</h2>

            <div className="card lg:card-side bg-base-100 shadow-xl p-4">
                <figure className='md:w-1/2 p-2'><img src={toy.photo} alt="Album" /></figure>
                <div className="card-body md:w-1/2 p-2">
                    <h2 className="card-title">Toy Name: {toy.name}</h2>
                    <h2 className="card-title">Seller Name: {toy.supplier}</h2>
                    <h6><span className='font-bold'>Seller Email:</span> {toy.email}</h6>
                    <h6><span className='font-bold'>Price:</span> {toy.price}</h6>
                    <h6><span className='font-bold'>Rating:</span> {toy.rating}</h6>
                    <h6><span className='font-bold'>Available Quantity:</span> {toy.quantity}</h6>
                    <h6><span className='font-bold'>Description:</span> {toy.details}</h6>
                    <div className="card-actions justify-center">
                        <button className="btn btn-block ">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DetailsToy;