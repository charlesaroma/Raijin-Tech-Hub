import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';

const RequestQuote = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Available service options
  const services = [
    { label: 'Cybersecurity & Pen testing', value: 'cybersecurity' },
    { label: 'IT Consultancy & Strategy', value: 'it-consultancy' },
    { label: 'Cloud Solutions & Migration', value: 'cloud-migration' },
    { label: 'UI/UX Design & Development', value: 'ui-ux' },
    { label: 'Digital Transformation & Automation', value: 'digital-transformation' },
    { label: 'Website Development', value: 'website-development' },
    { label: 'Mobile App Development', value: 'mobile-app-development' },
    { label: 'CCTV Camera Installation', value: 'cctv-installation' },
    { label: 'Training & Capacity Building', value: 'training-capacity-building' },
    { label: 'Software License Purchase', value: 'software-license' },
  ];

  const initialValues = {
    name: '',
    email: '',
    service: [],
    otherService: '',
    comments: '',
    phone: '',
    website: '',
    company: '', // Company name
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    service: Yup.array().min(1, 'Please select at least one service').required('Please select a service'),
    comments: Yup.string().required('Please provide additional comments'),
    phone: Yup.string().required('Phone number is required'),
    website: Yup.string().url('Invalid website URL'),
  });

  const handleSubmit = async (values, actions) => {
    try {
      const selectedServices = values.service.join(', ') + (values.otherService ? `, Other Service: ${values.otherService}` : '');
      const result = await emailjs.send(
        'service_ndt5wdl',
        'template_dgreisk',
        {
          to_name: 'Raijin Tech Hub',
          from_name: values.name,
          message: values.comments,
          services: selectedServices,
          from_email: values.email,
          from_phone: values.phone,
          company_name: values.company || 'N/A',
          website: values.website || 'N/A',
        },
        '8KTDGoFLmKVPlRQFZ'
      );
      console.log('Email successfully sent:', result.text);
      setIsSubmitted(true);
      actions.resetForm();
    } catch (error) {
      console.error('Failed to send email:', error);
      setError('Something went wrong while sending your request. Please try again.');
    }
    actions.setSubmitting(false);
  };

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        {/* Heading Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600">
            Request a Quote
          </h2>
          <p className="text-lg text-gray-600 mt-4">Let us know your needs and we'll provide a custom quote for you.</p>
        </div>

        {/* Form Section */}
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
                  {/* Error Message */}
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

                  {/* Phone Field */}
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">Your Phone</label>
                    <Field
                      type="text"
                      id="phone"
                      name="phone"
                      className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Enter your phone number"
                    />
                    <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
                  </div>

                  {/* Company Name Field */}
                  <div className="mb-4">
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700">Company Name (Optional)</label>
                    <Field
                      type="text"
                      id="company"
                      name="company"
                      className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Enter your company name (optional)"
                    />
                  </div>

                  {/* Website Field */}
                  <div className="mb-4">
                    <label htmlFor="website" className="block text-sm font-semibold text-gray-700">Your Website (Optional)</label>
                    <Field
                      type="text"
                      id="website"
                      name="website"
                      className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Enter your website URL (optional)"
                    />
                    <ErrorMessage name="website" component="div" className="text-red-500 text-sm" />
                  </div>

                  {/* Service Selection Section */}
                  <div className="mb-4">
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700">Service(s) Needed</label>
                    <div className="grid grid-cols-2 gap-3 pt-3">
                      {services.map((service) => (
                        <label key={service.value} className="inline-flex items-center">
                          <Field
                            type="checkbox"
                            name="service"
                            value={service.value}
                            className="form-checkbox text-teal-500"
                          />
                          <span className="ml-2 text-gray-700">{service.label}</span>
                        </label>
                      ))}
                    </div>
                    <ErrorMessage name="service" component="div" className="text-red-500 text-sm" />
                  </div>

                  {/* Other Services Section */}
                  <div className="mb-4">
                    <label htmlFor="otherService" className="block text-sm font-semibold text-gray-700">Other Services (if not listed above)</label>
                    <Field
                      type="text"
                      id="otherService"
                      name="otherService"
                      className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Describe any other services"
                    />
                  </div>

                  {/* Comments Section */}
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
