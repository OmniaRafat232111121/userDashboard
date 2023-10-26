import React,{useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { AddUser } from '@/store/action';

const UserForm = ({ onClose, isEditing }) => {
  const dispatch = useDispatch();
  const { handleSubmit, register, formState: { errors }, reset } = useForm();

  const isRoleValid = (value) => {
    return ['user', 'admin'].includes(value.toLowerCase());
  };

  const onSubmit = (data) => {
    console.log(data)
    // Check if the role is valid
    if (!isRoleValid(data.role)) {
      // Set an error for the role field
      alert('Role must be "user" or "admin"');
      return;
    }
    // Dispatch the create user action
    dispatch(AddUser(data));
    onClose();
    
  };


  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">{isEditing ? 'Edit User' : 'Add User'}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className='p-5'>
        <div className="mb-5 mt-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            {...register("name", { required: "Name is required" })}
            className={`w-full px-3 py-2 placeholder-gray-300 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 ${errors.name ? 'border-red-500' : ''}`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            type="text"
            name="email"
            id="email"
            {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" } })}
            className={`w-full px-3 py-2 placeholder-gray-300 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
            Role:
          </label>
          <input
            type="text"
            name="role"
            id="role"
            {...register("role", { required: "Role is required" })}
            className={`w-full px-3 py-2 placeholder-gray-300 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 ${errors.role ? 'border-red-500' : ''}`}
          />
          {errors.role && <p className="text-red-500 text-sm mt-2">{errors.role.message}</p>}
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          {isEditing ? 'Save' : 'Add'}
        </button>
      </form>
    </div>
  );
};

export default UserForm;
