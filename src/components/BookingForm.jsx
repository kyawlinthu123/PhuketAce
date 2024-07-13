import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  Input,
  Button,
  Textarea,
} from "@material-tailwind/react";

const BookingForm = () => {
  const location = useLocation();
  const vehicle = location.state?.vehicle || {};
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    pickupDate: null,
    dropOffDate: null,
    comments: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleDateChange = (date, field) => {
    setFormData({
      ...formData,
      [field]: date,
    });
  };

  const validateForm = () => {
    const { firstName, lastName, phone, email, pickupDate, dropOffDate, comments } = formData;
    const newErrors = {};

    if (!firstName) {
      newErrors.firstName = 'First Name is required';
    }

    if (!lastName) {
      newErrors.lastName = 'Last Name is required';
    }

    if (!phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^(0[689]{1})?[0-9]{8}$/.test(phone)) {
      newErrors.phone = 'Phone number is invalid. Please enter a valid Thailand phone number';
    }

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid';
    }

    if (!pickupDate) {
      newErrors.pickupDate = 'Pick Up Date is required';
    }

    if (!dropOffDate) {
      newErrors.dropOffDate = 'Drop Off Date is required';
    }

    if (!comments) {
      newErrors.comments = 'Comments are required';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, proceed with form submission (e.g., send to server)
      console.log('Form submitted', formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section className="bg-white font-nunito">
      <div className="py-2 lg:py-4 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-3xl font-bold text-center">Complete the form below to submit your details</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
        We appreciate your reservation! We will respond as soon as possible. If you don't hear from us by tomorrow, please check your spam folder or reach out to us again, as some email services may filter our messages.
        </p>
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold">Booking for : {vehicle.name}</h3>
          <img src={vehicle.image} alt={vehicle.name} className="mx-auto mt-4" style={{ maxHeight: '200px', objectFit: 'cover' }} />
        </div>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900">First Name</label>
            <Input
              type="text"
              id="firstName"
              className="shadow-sm bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            {errors.firstName && <p className="text-red-500 text-sm mt-2">{errors.firstName}</p>}
          </div>
          <div>
            <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900">Last Name</label>
            <Input
              type="text"
              id="lastName"
              className="shadow-sm bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            {errors.lastName && <p className="text-red-500 text-sm mt-2">{errors.lastName}</p>}
          </div>
          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Phone</label>
            <Input
              type="text"
              id="phone"
              className="shadow-sm bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
              placeholder="+66"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            {errors.phone && <p className="text-red-500 text-sm mt-2">{errors.phone}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
            <Input
              type="email"
              id="email"
              className="shadow-sm bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
              placeholder="name@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="pickupDate" className="block mb-2 text-sm font-medium text-gray-900">Pick Up Date</label>
            <DatePicker
              selected={formData.pickupDate}
              onChange={(date) => handleDateChange(date, 'pickupDate')}
              dateFormat="yyyy/MM/dd"
              className="shadow-sm bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
              placeholderText="Select pick up date"
              required
            />
            {errors.pickupDate && <p className="text-red-500 text-sm mt-2">{errors.pickupDate}</p>}
          </div>
          <div>
            <label htmlFor="dropOffDate" className="block mb-2 text-sm font-medium text-gray-900">Drop Off Date</label>
            <DatePicker
              selected={formData.dropOffDate}
              onChange={(date) => handleDateChange(date, 'dropOffDate')}
              dateFormat="yyyy/MM/dd"
              className="shadow-sm bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
              placeholderText="Select drop off date"
              required
            />
            {errors.dropOffDate && <p className="text-red-500 text-sm mt-2">{errors.dropOffDate}</p>}
          </div>
          <div>
            <label htmlFor="comments" className="block mb-2 text-sm font-medium text-gray-900">Comments</label>
            <Textarea
              id="comments"
              rows="4"
              className="shadow-sm bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
              placeholder="Leave a comment..."
              value={formData.comments}
              onChange={handleChange}
            />
            {errors.comments && <p className="text-red-500 text-sm mt-2">{errors.comments}</p>}
          </div>
          <Button
            type="submit"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center rounded-full bg-red-500 text-white transform transition-transform duration-300 hover:scale-105 hover:bg-red-600"
          >
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
