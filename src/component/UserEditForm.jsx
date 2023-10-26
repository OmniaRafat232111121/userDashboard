import { updateUser } from '@/store/action';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const UserEditForm = ({ user, onClose }) => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({ ...user });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    dispatch(updateUser(userData)); // Dispatch update action

    // Save the updated user data in local storage
    const updatedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUserIndex = updatedUsers.findIndex((u) => u.id === userData.id);
    if (updatedUserIndex !== -1) {
      updatedUsers[updatedUserIndex] = userData;
      localStorage.setItem('users', JSON.stringify(updatedUsers));
    }

    onClose();
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Edit User</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={userData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            type="text"
            name="email"
            id="email"
            value={userData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
            Role:
          </label>
          <input
            type="text"
            name="role"
            id="role"
            value={userData.role}
            onChange={handleInputChange}
          />
        </div>
        <button
          onClick={handleSave}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default UserEditForm;
