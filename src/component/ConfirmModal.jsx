import React from 'react';

const ConfirmationModal = ({ onCancel, onConfirm }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <p>Are you sure you want to delete this user?</p>
        <div className="modal-buttons">
          <button onClick={onCancel}>Cancel</button>
          <button onClick={onConfirm}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
