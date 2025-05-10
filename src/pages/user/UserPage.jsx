import React, { useState, useEffect } from "react";
import {  getUsers} from "../../api/userApi.js";


import UserTable from "../../components/user/UserList.jsx";


const UserPage = () => {
    const [users, setUsers] = useState([]);
    const [mobile,setMobile]=useState('')
    const [name,setName]=useState('')


    // const onSubmit =()=>{
    //   console.log('submitted value is',mobile,name)
    // }





    const fetchUsers = async () => {
        const response = await getUsers();
        setUsers(response.data);
    };



    useEffect(() => {
        fetchUsers();
    }, []);



    return (
        <>
            <div className="">
                {/*Value store in a state */}

                {/*<div className="space-y-2">*/}
                {/*    <div>*/}
                {/*        <input*/}
                {/*            name="mobile"*/}
                {/*            className="p-2 rounded-md border border-gray-300"*/}
                {/*            placeholder="Enter Mobile Number"*/}
                {/*            value={mobile}*/}
                {/*            onChange={(e) => setMobile(e.target.value)}*/}

                {/*        />*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <input*/}
                {/*            name="name"*/}
                {/*            className="p-2 rounded-md border border-gray-300"*/}
                {/*            placeholder="Enter Name"*/}
                {/*            value={name}*/}
                {/*            onChange={(e) => setName(e.target.value)}*/}

                {/*        />*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <button className="bg-green-500 text-white px-4 py-2 rounded-md shadow"*/}
                {/*                onClick={onSubmit}>Submit*/}
                {/*        </button>*/}
                {/*    </div>*/}


                {/*</div>*/}

                {/*Value get from json server and show into UI*/}



                <div>
                    <h2 className="text-xl font-semibold mb-2">User List</h2>
                    <UserTable users={users}/>
                </div>
            </div>

        </>
    );
};

export default UserPage;