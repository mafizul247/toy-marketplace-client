import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import Swal from 'sweetalert2';

const MyToys = () => {
    useTitle('My Toys');
    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([]);
    console.log(myToys);

    // const url = `http://localhost:5000/myToys?email=${user.email}`
    useEffect(() => {
        fetch(`http://localhost:5000/myToys?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
            })
    }, [])

    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/toys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className='my-8 mx-8'>
            <h2 className='text-center text-3xl font-bold p-4 bg-slate-200'>My Total Toys {myToys.length}</h2>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* Table head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Toy Image</th>
                            <th>Toy Name</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map((myToy, index) => <tr key={index}>
                                <td></td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-24 h-24">
                                                {myToy.photo ? <img src={myToy.photo} alt="Avatar Tailwind CSS Component" /> : ''}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{myToy.name}</td>
                                <td>{myToy.price}</td>
                                <th >
                                    <button className="btn btn-outline me-2">Update</button>
                                </th>
                                <th>
                                    <button onClick={() => handleDelete(myToy._id)} title='Delete' className="btn btn-circle btn-outline">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </th>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>


        </div>
    );
};

export default MyToys;