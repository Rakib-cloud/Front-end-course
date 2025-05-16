// pages/user/UserPage.jsx
import React, { useState, useEffect } from "react";
import { getUsers, createUser, updateUser, deleteUser } from "../../api/userApi";
import UserList from "../../components/user/UserList";
import UserModal from "./components/UserModal.jsx";


const UserPage = () => {
    const [users, setUsers] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const [editingUser, setEditingUser] = useState(null);


    const fetchUsers = async () => {
        const response = await getUsers();
        if(response?.status==200){
            setUsers(response?.data);
        }else{
            setUsers([])
        }

    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleAdd = () => {
        setEditingUser(null);
        setModalOpen(true);
    };

    const handleEdit = (user) => {
        setEditingUser(user);
        setModalOpen(true);
    };

    const handleDelete = async (id) => {
        const confirm = window.confirm("Are you sure you want to delete this user?");
        if (!confirm) return;

        try {
            const response = await deleteUser(id);
            if (response.status === 200) {
                alert("User deleted.");
                fetchUsers();
            }
        } catch (err) {
            console.error("Delete failed:", err);
            alert("Error deleting user.");
        }
    };

    const handleSave = async (userData) => {
        if (editingUser) {
            await updateUser(editingUser.id, userData);
        } else {
            await createUser(userData);
        }

        fetchUsers();
    };


const handleModalClose = () => {
    setModalOpen(false)
}


    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">User List</h2>
            <button
                onClick={handleAdd}
                className="mb-4 bg-green-600 text-white px-4 py-2 rounded cursor-pointer"
            >
                Add User
            </button>
            <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />


            <UserModal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                onSave={handleSave}
                editingUser={editingUser}
            />
        </div>
    );
};

export default UserPage;
