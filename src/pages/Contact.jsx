import React, { useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

export default function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const { email, subject, message } = formData;
    const newErrors = {};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid';
    }

    if (!subject) {
      newErrors.subject = 'Subject is required';
    } else if (subject.length < 10) {
      newErrors.subject = 'Subject must be at least 10 characters long';
    }

    if (!message) {
      newErrors.message = 'Message is required';
    } else if (message.length < 20) {
      newErrors.message = 'Message must be at least 20 characters long';
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
        <h2 className="mb-4 text-4xl font-bold text-center">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
        Have questions about our rental policies? Need assistance with your booking or have a special request? We're here to help. Reach out to us with any inquiries or feedback.
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
            <input
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
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500"
              placeholder="Let us know how we can help you"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            {errors.subject && <p className="text-red-500 text-sm mt-2">{errors.subject}</p>}
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg shadow-sm border border-gray-300 focus:ring-red-500 focus:border-red-500"
              placeholder="Leave a comment..."
              value={formData.message}
              onChange={handleChange}
              required
            />
            {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center rounded-lg bg-red-500 text-white transform transition-transform duration-300 hover:scale-105 hover:bg-red-600"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
