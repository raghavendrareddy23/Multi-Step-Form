import React from 'react';

const Modal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-lg p-8 shadow-lg max-w-md mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Form Submitted!</h2>
        <p className="mb-6">Your form has been successfully submitted.</p>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default Modal;
