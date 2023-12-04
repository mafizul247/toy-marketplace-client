import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom';

const Category = () => {
    const [toys, setToys] = useState([]);
    const [activeTab, setActiveTab] = useState("sports");

    useEffect(() => {
        fetch(`http://localhost:5000/toys/${activeTab}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [activeTab])
    console.log(toys)

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };


    return (
        <div className='mx-8 my-8'>
            <h2 className='text-center text-3xl font-bold text-slate-600 mb-8'>Toy Car</h2>
            <Tabs>
                <TabList>
                    <Tab onClick={() => handleTabClick("sports")} >Sports Car</Tab>
                    <Tab onClick={() => handleTabClick("truck")}>Truck</Tab>
                    <Tab onClick={() => handleTabClick("regular")}>Regular Car</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3'>
                        {
                            toys.map((toy, index) => <div key={index} className='mt-8'>
                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img src={toy.photo} alt="Shoes" className="rounded-xl" style={{ height: '200px' }} />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{toy.name}</h2>
                                        <div className='flex'>
                                            <p className='me-32'>Price: {toy.price}</p>
                                            <p>Rating: {toy.rating}</p>
                                        </div>
                                        <Link to={`/allToys/${toy._id}`}>
                                            <div className="card-actions">
                                                <button className="btn btn-primary">View Details</button>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid md:grid-cols-2 lg:grid-cols-3'>
                        {
                            toys.map((toy, index) => <div key={index} className='mt-8'>
                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img src={toy.photo} alt="Shoes" className="rounded-xl" style={{ height: '200px' }} />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{toy.name}</h2>
                                        <div className='flex'>
                                            <p className='me-32'>Price: {toy.price}</p>
                                            <p>Rating: {toy.rating}</p>
                                        </div>
                                        <Link to={`/allToys/${toy._id}`}>
                                            <div className="card-actions">
                                                <button className="btn btn-primary">View Details</button>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid md:grid-cols-2 lg:grid-cols-3'>
                        {
                            toys.map((toy, index) => <div key={index} className='mt-8'>
                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img src={toy.photo} alt="Shoes" className="rounded-xl" style={{ height: '200px' }} />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{toy.name}</h2>
                                        <div className='flex'>
                                            <p className='me-32'>Price: {toy.price}</p>
                                            <p>Rating: {toy.rating}</p>
                                        </div>
                                        <Link to={`/allToys/${toy._id}`}>
                                            <div className="card-actions">
                                                <button className="btn btn-primary">View Details</button>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Category;