import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';

const RequestQuote = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Available service options
  const services = [
    { label: 'Custom Software & Web Development', value: 'software-web' },
    { label: 'IT Consultancy & Strategy', value: 'it-consultancy' },
    { label: 'Cloud Solutions & Migration', value: 'cloud-migration' },
    { label: 'UI/UX Design & Development', value: 'ui-ux' },
    { label: 'Digital Transformation & Automation', value: 'digital-transformation' },
  ];

  const initialValues = {
    name: '',
    email: '',
    service: '',
    comments: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    service: Yup.string().required('Please select a service'),
    comments: Yup.string().required('Please provide additional comments'),
  });

  const handleSubmit = async (values, actions) => {
    try {
      // Send form data using EmailJS
      const result = await emailjs.send(
        'service_t7fhx7f', // Service ID
        'template_swwold8', // Template ID
        values, // The values we want to send (form data)
        '4mPjDv9VLtCcH9UML' // Replace with your EmailJS user ID
      );
      console.log('Email successfully sent:', result.text);
      setIsSubmitted(true); // Show thank you message
      actions.resetForm(); // Reset the form after submission
    } catch (error) {
      console.error('Failed to send email:', error);
      setError('Something went wrong while sending your request. Please try again.');
    }
    actions.setSubmitting(false);
  };

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600">
            Request a Quote
          </h2>
          <p className="text-lg text-gray-600 mt-4">Let us know your needs and we'll provide a custom quote for you.</p>
        </div>

        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          {isSubmitted ? (
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-teal-500">Thank you for your request!</h3>
              <p className="mt-4 text-gray-600">We will contact you with a custom quote shortly.</p>
            </div>
          ) : (
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  {error && <p className="text-red-500 text-center mb-4">{error}</p>}

                  {/* Name Field */}
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Your Name</label>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Enter your full name"
                    />
                    <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                  </div>

                  {/* Email Field */}
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Your Email</label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Enter your email address"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                  </div>

                  {/* Service Dropdown */}
                  <div className="mb-4">
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700">Service Needed</label>
                    <Field as="select" id="service" name="service" className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500">
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage name="service" component="div" className="text-red-500 text-sm" />
                  </div>

                  {/* Comments Field */}
                  <div className="mb-4">
                    <label htmlFor="comments" className="block text-sm font-semibold text-gray-700">Additional Comments</label>
                    <Field
                      as="textarea"
                      id="comments"
                      name="comments"
                      className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      rows="5"
                      placeholder="Provide more details about your requirements"
                    />
                    <ErrorMessage name="comments" component="div" className="text-red-500 text-sm" />
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-teal-500 to-purple-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                      {isSubmitting ? 'Submitting...' : 'Request Quote'}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          )}
        </div>
      </div>
    </section>
  );
};

export default RequestQuote;
