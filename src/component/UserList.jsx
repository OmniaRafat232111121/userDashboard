" use client";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "@/store/action";
import Link from "next/link"; // Import Link from Next.js
import UserAddModal from "./UserAddModal";
import { Router } from "next/router";
const UserList = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.user);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of users per page
  const [isAdding, setIsAdding] = useState(false);
 
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!users || users.length === 0) {
    return <div>No users found.</div>;
  }

  if (currentUsers.length === 0) {
    const lastPage = Math.ceil(users.length / itemsPerPage);
    setCurrentPage(lastPage);
    return null;
  }
  console.log('List of Users:', users);

  return (
    <div>
      <h2 className="mx-auto text-center  
       mt-3 font-semibold md:text-2xl text-lg  leading-4">
        User List
      </h2>

      <div className="p-10">
      <button
        onClick={() => setIsAdding(true)} // Open the modal
        className="bg-green-500 hover:bg-green-600
         text-white font-bold py-2 px-4 rounded mt-10"
      >
        Add User
      </button>

      <UserAddModal isOpen={isAdding} onClose={() => setIsAdding(false)} />

      </div>
      <div className="overflow-x-auto p-10 relative z-[-10]">
        <table className="min-w-full bg-white border divide-y divide-gray-200  ">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
            </tr>
          </thead>
          <tbody>
          {currentUsers.map((user) => (
  <tr key={user.id} className="bg-white">
    <td className="px-6 py-4 whitespace-nowrap">
      <Link href={`/user/${user.id}`}>{user.name}</Link>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
      <div className="text-sm text-gray-500">{user.email}</div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
      <div className="text-sm text-gray-500">{user.role}</div>
    </td>
    
  </tr>
))}

</tbody>
        </table>
      </div>

      <div className="pagination mt-4 p-10">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`mr-2 ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          } text-white font-bold py-2 px-4 rounded`}
        >
          Previous
        </button>
        <span className="text-gray-700 text-sm">Page {currentPage}</span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage * itemsPerPage >= users.length}
          className={`ml-2 ${
            currentPage * itemsPerPage >= users.length
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover-bg-blue-600"
          } text-white font-bold py-2 px-4 rounded`}
        >
          Next
        </button>
      </div>


    


    </div>
  );
};

export default UserList;
