import React, { useState, useEffect } from "react";
import {  getUsers} from "../../api/userApi.js";


import UserTable from "../../components/user/UserList.jsx";


const UserPage = () => {
    const [users, setUsers] = useState([]);


    const fetchUsers = async () => {
        const res = await getUsers();
        setUsers(res.data);
    };

    useEffect(() => {
        fetchUsers();
    }, []);


    return (
        <>
            <div className="">
                <div>
                    <h2 className="text-xl font-semibold mb-2">User List</h2>
                    <UserTable
                        users={users}
                    />
                </div>
            </div>

        </>
    );
};

export default UserPage;