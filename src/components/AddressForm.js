import React from "react";

const AddressForm = ({
  formData,
  errors,
  handleChange,
  nextStep,
  prevStep,
}) => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h3 className="text-2xl font-semibold mb-6">
        Step 2: Address Information
      </h3>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Address Line 1</label>
          <input
            type="text"
            name="addressLine1"
            value={formData.addressLine1}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.addressLine1 ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200`}
          />
          {errors.addressLine1 && (
            <span className="text-red-500 text-sm">{errors.addressLine1}</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Address Line 2</label>
          <input
            type="text"
            name="addressLine2"
            value={formData.addressLine2}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.addressLine2 ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200`}
          />
          {errors.addressLine2 && (
            <span className="text-red-500 text-sm">{errors.addressLine2}</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.city ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200`}
          />
          {errors.city && (
            <span className="text-red-500 text-sm">{errors.city}</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.state ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200`}
          />
          {errors.state && (
            <span className="text-red-500 text-sm">{errors.state}</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Zip Code</label>
          <input
            type="text"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.zip ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200`}
          />
          {errors.zip && (
            <span className="text-red-500 text-sm">{errors.zip}</span>
          )}
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={prevStep}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md shadow hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Back
          </button>
          <button
            type="button"
            onClick={nextStep}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
