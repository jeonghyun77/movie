import React, {useEffect, useState} from 'react';
import axios from 'axios';
import UserList from '../components/UserList';
import Spinner from '../components/Spinner';


const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) =>{
            setUsers(response.data)
            setLoading(false);
        })

    }, []);
    return (
        <div>
            <h2>axios 활용하여 데이터 불러올 곳입니다.</h2>
            <h3>Users</h3>
            {loading ? <Spinner /> :  <UserList users={users}/>}  {/* 삼항연산자(변수 = (조건) ? 참 : 거짓;) => 참이면 <Spinner />, 거짓이면 <UserList users={users}/> */}
           
        </div>
    );
};

export default Users;