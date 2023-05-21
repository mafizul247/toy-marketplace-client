import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';

const MyToys = () => {
    const {user} = useContext(AuthContext)
    const [myToys, setMyToys] = useState();
    console.log(myToys);

    // const url = `http://localhost:5000/myToys?email=${user.email}`
    useEffect(() => {
        fetch(`http://localhost:5000/myToys?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
            })
    }, [])

    return (
        <div>
            <h2>My Toys</h2>
        </div>
    );
};

export default MyToys;