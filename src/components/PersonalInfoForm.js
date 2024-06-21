import React from 'react';

const PersonalInfoForm = ({ formData, errors, handleChange, nextStep }) => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h3 className="text-2xl font-semibold mb-6">Step 1: Personal Information</h3>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200`}
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200`}
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200`}
          />
          {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
        </div>
        <button
          type="button"
          onClick={nextStep}
          className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default PersonalInfoForm;
