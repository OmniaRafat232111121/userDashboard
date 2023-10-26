import { useState } from 'react';
import { useRouter } from 'next/router';
import usersData from '../../../users.json';
import Image from 'next/image';
import UserEditForm from '@/component/UserEditForm';
const UserDetail = () => {
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();
  const { id } = router.query;


  const user = usersData.users.find((user) => user.id === parseInt(id, 10));

  if (!user) {
    return <div className="text-center text-red-600 font-semibold">User not found.</div>;
  }

  
  const handleEditClick = () => {
    setIsEditing(true);
  };
 
  return (
    <div className="max-w-2xl mx-auto p-10  mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-blue-600">User Detail</h2>
       {/* Edit form */}
       {isEditing ? (
        <>
                <UserEditForm user={user} onClose={() => setIsEditing(false)} />

        </>
      ):(
        <>
         <div className="bg-white p-4 shadow-md rounded-lg  
       cursor-pointer hover:-translate-y-5 duration-300 ease-in-out  ">
        <p className="mb-2">
          <span className="font-semibold">Name:</span> {user.name}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Email:</span> {user.email}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Role:</span> {user.role}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Address:</span> {user.address}
        </p>
        <div className="mt-4" >
          <Image src={user.image} width={800} height={500}  alt="Image " className='rounded-md w-64 h-100 mx-auto'
/>
        </div>


        <div className="mt-4">
          {/* User details content */}
          <button onClick={handleEditClick} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Edit
          </button>
        </div>
      </div>
        </>
      )}
     

     
     
    </div>
  );
};

export default UserDetail;
