import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

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
            <h2 className='text-center text-3xl font-bold text-slate-600 mb-8'>Toy Category</h2>
            <Tabs>
                <TabList>
                    <Tab onClick={() => handleTabClick("sports")} >Sports Car</Tab>
                    <Tab onClick={() => handleTabClick("truck")}>Truck</Tab>
                    <Tab onClick={() => handleTabClick("regular")}>Regular Car</Tab>
                </TabList>

                <TabPanel>
                    {
                        toys.map((toy, index) => <h2 key={index}>{toy.name} -- {toy.subCategory}</h2>)
                    }
                </TabPanel>
                <TabPanel>
                    {
                        toys.map((toy, index) => <h2 key={index}>{toy.name} -- {toy.subCategory}</h2>)
                    }
                </TabPanel>
                <TabPanel>
                    {
                        toys.map((toy, index) => <h2 key={index}>{toy.name} -- {toy.subCategory}</h2>)
                    }
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Category;