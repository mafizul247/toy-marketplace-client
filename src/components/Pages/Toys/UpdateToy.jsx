import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import Swal from 'sweetalert2';

const UpdateToy = () => {
    useTitle('UpdateToy')
    const myToy = useLoaderData();
    const { _id, name, price, supplier, subCategory, email, quantity, rating, photo, details } = myToy;

    console.log(myToy);

    const handelUpdateToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const details = form.details.value;

        const updateToy = {
            price, quantity, details
        }
        console.log(updateToy);

        fetch(`http://localhost:5000/toys/${_id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updateToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
            .catch(error => {
                console.log(error.message);
            })
        event.target.reset();
    }

    return (
        <div className='my-8 mx-8 p-8 rounded-md bg-red-100'>
            <h2 className='text-center text-4xl font-bold text-slate-700'>Update Toy: {}</h2>

            <form onSubmit={handelUpdateToy}>
                <div className='md:flex mt-2'>
                    <div className="form-control w-full px-2 ">
                        <label className="label">
                            <h5 className='text-xl font-bold text-slate-700'>Price</h5>
                        </label>
                        <input type="number" name='price'  defaultValue={price} placeholder="Price" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full px-2 ">
                        <label className="label">
                            <h5 className='text-xl font-bold text-slate-700'>Available Quantity</h5>
                        </label>
                        <input type="number" name='quantity' defaultValue={quantity}  placeholder="Available Quantity" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className='md:flex mt-2'>
                    <div className="form-control w-full px-2 ">
                        <label className="label">
                            <h5 className='text-xl font-bold text-slate-700'>Details</h5>
                        </label>
                        <textarea className="textarea textarea-bordered" name='details' defaultValue={details} placeholder="Details"></textarea>
                    </div>
                </div>
                <div className='text-center mt-4 px-2'>
                    <input type="submit" className='btn btn-block' value="Update Toy" />
                </div>
            </form>
        </div>
    );
};

export default UpdateToy;