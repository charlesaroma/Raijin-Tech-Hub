import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      emailjs
        .send(
          'service_ann8l9a',
          'template_8ct7xxg',
          {
            from_name: values.name,
            from_email: values.email,
            message: values.message,
          },
          '8KTDGoFLmKVPlRQFZ'
        )
        .then(
          (response) => {
            console.log('Message sent successfully:', response);
            setSubmitting(false);
            resetForm();
          },
          (error) => {
            console.log('Error sending message:', error);
            setSubmitting(false);
          }
        );
    },
  });

  return (
    <section className="w-full py-12" style={{ backgroundColor: 'var(--color-accent-300)' }}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text" style={{ color: 'var(--color-primary-500)' }}>
            Contact Us
          </h2>
          <p className="text-lg" style={{ color: 'var(--color-accent-900)' }}>
            We would love to hear from you. Drop us a message and we'll get back to you as soon as possible!
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          {formik.isSubmitting ? (
            <div className="text-center">
              <h3 className="text-2xl font-semibold" style={{ color: 'var(--color-primary-500)' }}>Thank you for your message!</h3>
              <p className="mt-4" style={{ color: 'var(--color-accent-900)' }}>We will get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-semibold" style={{ color: 'var(--color-primary-700)' }}>Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
                  style={{  focusRingColor: 'var(--color-primary-500)', color: 'var(--color-accent-900)' }}
                  placeholder="Enter your full name"
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-red-500 text-sm">{formik.errors.name}</p>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-semibold" style={{ color: 'var(--color-primary-700)' }}>Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
                  style={{  focusRingColor: 'var(--color-primary-500)', color: 'var(--color-accent-900)' }}
                  placeholder="Enter your email address"
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-sm">{formik.errors.email}</p>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-semibold" style={{ color: 'var(--color-primary-700)' }}>Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
                  style={{  focusRingColor: 'var(--color-primary-500)', color: 'var(--color-accent-900)' }}
                  rows="5"
                  placeholder="Write your message here"
                ></textarea>
                {formik.touched.message && formik.errors.message && (
                  <p className="text-red-500 text-sm">{formik.errors.message}</p>
                )}
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r text-white px-6 py-3 rounded-md shadow-md hover:bg-gradient-to-l focus:outline-none focus:ring-2"
                  style={{ from: 'var(--color-primary-400)', to: 'var(--color-primary-600)', focusRingColor: 'var(--color-primary-500)' }}
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;