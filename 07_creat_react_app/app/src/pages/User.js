import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import {useParams} from 'react-router-dom';


const User = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/' +id)
        .then((response) =>{
            setUser(response.data);
            setLoading(false);
        })

    }, []);
    const userDeatil = loading ? <Spinner /> : (
        <div>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.phone}</div>
        </div>
    )
    return (
        <div>
            <h3>User 정보</h3>
            {userDeatil}  
           
        </div>
    );
};

export default User;