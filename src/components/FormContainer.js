import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PersonalInfoForm from './PersonalInfoForm';
import AddressForm from './AddressForm';
import Confirmation from './Confirmation';
import Modal from './Modal';

const FormContainer = () => {
  const [currentStep, setCurrentStep] = useState(() => {
    const savedStep = localStorage.getItem('currentStep');
    return savedStep ? parseInt(savedStep) : 1;
  });

  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem('formData');
    return savedData
      ? JSON.parse(savedData)
      : {
          name: '',
          email: '',
          phone: '',
          addressLine1: '',
          addressLine2: '',
          city: '',
          state: '',
          zip: '',
        };
  });

  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    localStorage.setItem('currentStep', currentStep.toString());
  }, [currentStep]);

  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    switch (currentStep) {
      case 1:
        if (!formData.name.trim()) {
          newErrors.name = 'Name is required';
          valid = false;
        }
        if (!formData.email.trim()) {
          newErrors.email = 'Email is required';
          valid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = 'Email address is invalid';
          valid = false;
        }
        if (!formData.phone.trim()) {
          newErrors.phone = 'Phone is required';
          valid = false;
        } else if (!/^\d{10}$/.test(formData.phone)) {
          newErrors.phone = 'Phone number is invalid';
          valid = false;
        }
        break;
      case 2:
        if (!formData.addressLine1.trim()) {
          newErrors.addressLine1 = 'Address Line 1 is required';
          valid = false;
        }
        if (!formData.addressLine2.trim()) {
            newErrors.addressLine2 = 'Address Line 2 is required';
            valid = false;
          }
        if (!formData.city.trim()) {
          newErrors.city = 'City is required';
          valid = false;
        }
        if (!formData.state.trim()) {
          newErrors.state = 'State is required';
          valid = false;
        }
        if (!formData.zip.trim()) {
          newErrors.zip = 'Zip Code is required';
          valid = false;
        } else if (!/^\d{6}$/.test(formData.zip)) {
          newErrors.zip = 'Zip Code is invalid, must be 6 digits';
          valid = false;
        }
        break;
      default:
        break;
    }

    setErrors(newErrors);
    return valid;
  };

  const nextStep = () => {
    if (validateForm()) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setIsLoading(true);
      setTimeout(() => {
        setIsModalOpen(true);
        setIsLoading(false);
      }, 3000); 
    }
  };

  const handleModalClose = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zip: '',
    });
    setCurrentStep(1);
    localStorage.removeItem('formData');
    localStorage.removeItem('currentStep');
    setIsModalOpen(false);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalInfoForm
            formData={formData}
            errors={errors}
            handleChange={handleChange}
            nextStep={nextStep}
          />
        );
      case 2:
        return (
          <AddressForm
            formData={formData}
            errors={errors}
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 3:
        return (
          <Confirmation
            formData={formData}
            prevStep={prevStep}
            handleSubmit={handleSubmit}
          />
        );
      default:
        return null;
    }
  };

  const progressWidth = (currentStep / 3) * 100;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6">
        <h2 className="text-3xl font-semibold text-center mb-6">Multi-Step Form</h2>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
          <div
            className="bg-indigo-600 h-2.5 rounded-full"
            style={{ width: `${progressWidth}%` }}
          ></div>
        </div>
        <TransitionGroup>
          <CSSTransition
            key={currentStep}
            timeout={300}
            classNames="fade"
          >
            <div>
              {renderStepContent()}
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
      <Modal show={isModalOpen} onClose={handleModalClose} />
      {isLoading && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-500"></div>
        </div>
      )}
    </div>
  );
};

export default FormContainer;
