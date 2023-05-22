import useTitle from '../../../hooks/useTitle';
import { Link, useLoaderData } from 'react-router-dom';

const AllToys = () => {
    useTitle('All Toys');
    const toys = useLoaderData();
    console.log(toys);

    return (
        <div className='my-8 mx-8 p-4 '>
            <h2 className='text-center text-3xl bg-slate-200 p-4 font-bold'>All Toys</h2>

            <div className="overflow-x-auto">
                <table className="table min-w-full divide-y">
                    {/* table head*/}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    {/* table body*/}
                    <tbody>
                        {
                            toys.map((toy, index) => <tr key={index}>
                                <th></th>
                                <td>{toy.supplier ? toy.supplier : ''}</td>
                                <td>{toy.name ? toy.name : ''}</td>
                                <td>{toy.subCategory ? toy.subCategory : ''}</td>
                                <td>{toy.price ? toy.price : ''}</td>
                                <td >{toy.quantity ? toy.quantity : ''}</td>
                                <td>
                                    <Link to={`/allToys/${toy._id}`}><button className="btn btn-outline btn-secondary">View Details</button></Link>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;