import React, { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import Swal from 'sweetalert2';

const AddAToy = () => {
    useTitle('Add A Toy')
    const { user } = useContext(AuthContext);
    const { displayName, email } = user;

    const handelAddAToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.toyName.value;
        const price = form.price.value;
        const supplier = form.supplier.value;
        const subCategory = form.subCategory.value;
        const email = form.email.value;
        const quantity = form.quantity.value;
        const rating = form.rating.value;
        const photo = form.photo.value;
        const details = form.details.value;

        const newToy = {
            name, price, supplier, subCategory, email, quantity, rating, photo, details
        }
        console.log(newToy);

        fetch('http://localhost:5000/toys', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Add A Toy successfully',
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
            <h2 className='text-center text-4xl font-bold text-slate-700'>Add A Toy</h2>

            <form onSubmit={handelAddAToy}>
                <div className='md:flex mt-2'>
                    <div className="form-control w-full px-2 ">
                        <label className="label">
                            <h5 className='text-xl font-bold text-slate-700'>Toy Name</h5>
                        </label>
                        <input type="text" name='toyName' placeholder="Toy Name" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full px-2 ">
                        <label className="label">
                            <h5 className='text-xl font-bold text-slate-700'>Price</h5>
                        </label>
                        <input type="number" name='price' placeholder="Price" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className='md:flex mt-2'>
                    <div className="form-control w-full px-2 ">
                        <label className="label">
                            <h5 className='text-xl font-bold text-slate-700'>Supplier Name</h5>
                        </label>
                        <input type="text" name='supplier' defaultValue={displayName} placeholder="Supplier Name" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full px-2 ">
                        <label className="label">
                            <h5 className='text-xl font-bold text-slate-700'>Sub Category</h5>
                        </label>
                        <select name='subCategory' className="select w-full">
                            <option disabled selected>Select Sub Category</option>
                            <option value='sports'>Sports Car</option>
                            <option value='truck'>Truck</option>
                            <option value='regular'>Regular Car</option>
                        </select>
                    </div>
                </div>
                <div className='md:flex mt-2'>
                    <div className="form-control w-full px-2 ">
                        <label className="label">
                            <h5 className='text-xl font-bold text-slate-700'>Supplier Email</h5>
                        </label>
                        <input type="email" name='email' defaultValue={email} placeholder="Supplier Email" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full px-2 ">
                        <label className="label">
                            <h5 className='text-xl font-bold text-slate-700'>Available Quantity</h5>
                        </label>
                        <input type="number" name='quantity' defaultValue={email} placeholder="Available Quantity" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className='md:flex mt-2'>
                    <div className="form-control w-full px-2 ">
                        <label className="label">
                            <h5 className='text-xl font-bold text-slate-700'>Photo URL</h5>
                        </label>
                        <input type="url" name='photo' placeholder="Photo URL" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full px-2 ">
                        <label className="label">
                            <h5 className='text-xl font-bold text-slate-700'>Rating</h5>
                        </label>
                        <input type="text" name='rating' placeholder="Rating" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className='md:flex mt-2'>
                    <div className="form-control w-full px-2 ">
                        <label className="label">
                            <h5 className='text-xl font-bold text-slate-700'>Details</h5>
                        </label>
                        <textarea className="textarea textarea-bordered" name='details' placeholder="Details"></textarea>
                    </div>
                </div>
                <div className='text-center mt-4 px-2'>
                    <input type="submit" className='btn btn-block' value="Add A Toy" />
                </div>
            </form>
        </div>
    );
};

export default AddAToy;