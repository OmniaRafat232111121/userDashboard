import React, { useState, useEffect } from 'react';
import UserForm from './UserForm';
import {AiOutlineClose} from 'react-icons/ai'
const UserAddModal = ({ isOpen, onClose }) => {
  const [isAdding, setIsAdding] = useState(isOpen);

  useEffect(() => {
    setIsAdding(isOpen);
  }, [isOpen]);

  const closeModal = () => {
    setIsAdding(false);
    onClose();
  };

  return (
    <div className={`modal ${isAdding ? 'block' : 'hidden'} fixed inset-0 flex items-center justify-center`}>
      <div className="modal-background" onClick={closeModal}></div>
      <div className="modal-content p-4 bg-gray-100 rounded-lg w-[600px] h-[500px] relative">
        <button className="modal-close text-black absolute top-4 right-4"
         onClick={closeModal}>
          <AiOutlineClose size={20} />
         </button>
        <UserForm onClose={closeModal} isEditing={false} />
      </div>
    </div>
  );
};

export default UserAddModal;
