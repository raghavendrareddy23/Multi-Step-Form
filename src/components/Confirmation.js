import React from 'react';

const Confirmation = ({ formData, prevStep, handleSubmit }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md">
      <div className="px-6 py-8">
        <h3 className="text-3xl font-semibold text-center mb-6">Confirmation</h3>

        {/* Personal Information Section */}
        <div className="mb-8">
          <h4 className="text-xl font-semibold mb-4">Personal Information</h4>
          <div>
            <p className="text-lg text-gray-700 mb-2"><strong>Name:</strong> {formData.name}</p>
            <p className="text-lg text-gray-700 mb-2"><strong>Email:</strong> {formData.email}</p>
            <p className="text-lg text-gray-700 mb-2"><strong>Phone:</strong> {formData.phone}</p>
          </div>
        </div>

        {/* Address Information Section */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Address Information</h4>
          <div>
            <p className="text-lg text-gray-700 mb-2"><strong>Address Line 1:</strong> {formData.addressLine1}</p>
            <p className="text-lg text-gray-700 mb-2"><strong>Address Line 2:</strong> {formData.addressLine2}</p>
            <p className="text-lg text-gray-700 mb-2"><strong>City:</strong> {formData.city}</p>
            <p className="text-lg text-gray-700 mb-2"><strong>State:</strong> {formData.state}</p>
            <p className="text-lg text-gray-700 mb-2"><strong>Zip Code:</strong> {formData.zip}</p>
          </div>
        </div>

        {/* Button Section */}
        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={prevStep}
            className="w-full md:w-auto px-4 py-2 bg-gray-300 text-gray-800 rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Back
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full md:w-auto px-4 py-2 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
