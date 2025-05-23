
import React, { useState, useEffect } from "react";

const UserModal = ({ isOpen, onClose, onSave, editingUser }) => {
    const [formData, setFormData] = useState({ name: "", email: "" });


    useEffect(() => {
        if (editingUser) {
            setFormData(editingUser);
        } else {
            setFormData({ name: "", email: "" });
        }
    }, [editingUser]);

    if (!isOpen) return null;

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded w-96">
                <h2 className="text-lg font-semibold mb-4">
                    {editingUser ? "Edit User" : "Add User"}
                </h2>
                <form onSubmit={handleSubmit}>
                    <input
                        className="w-full border p-2 mb-2"
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        className="w-full border p-2 mb-4"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />


                    <div className="flex justify-end gap-2">
                        <button type="button" onClick={onClose} className="cursor-pointer bg-gray-400 px-4 py-2 rounded text-white">
                            Cancel
                        </button>
                        <button type="submit" className="cursor-pointer bg-blue-600 px-4 py-2 rounded text-white" >
                            {editingUser ? "Update" : "Add"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserModal;
