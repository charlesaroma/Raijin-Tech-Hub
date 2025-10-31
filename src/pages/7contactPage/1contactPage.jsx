import { useState } from 'react';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Icon } from '@iconify/react';
import SEO from '../../components/SEO';
import { BreadcrumbStructuredData } from '../../components/StructuredData';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [sendError, setSendError] = useState('');

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
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setSendError('');
      
      try {
        const formData = new FormData();
        formData.append('access_key', '61acac76-4335-4ae8-9aed-244567db8faa');
        formData.append('name', values.name);
        formData.append('email', values.email);
        formData.append('message', values.message);
        formData.append('subject', 'Contact Form Submission from Raijin Tech Hub Website');
        formData.append('from_name', 'Raijin Tech Hub Contact Form');
        
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });
        
        const data = await response.json();
        
        if (data.success) {
          console.log('✅ Message sent successfully:', data);
          setSubmitted(true);
          resetForm();
          setTimeout(() => setSubmitted(false), 5000);
        } else {
          throw new Error(data.message || 'Failed to send message');
        }
      } catch (error) {
        console.error('❌ Error sending message:', error);
        setSendError(`Failed to send message: ${error.message || 'Unknown error'}`);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      <SEO 
        title="Contact Us | Raijin Tech Hub Uganda"
        description="Get in touch with Raijin Tech Hub for all your IT and software development needs in Uganda. We're here to transform your business with cutting-edge technology solutions. WhatsApp: +256777982066"
        keywords="contact Raijin Tech Hub, IT company Uganda contact, software development inquiry, tech consultation Kampala"
      />
      <BreadcrumbStructuredData 
        items={[
          { name: 'Home', path: '/' },
          { name: 'Contact Us', path: '/contact' }
        ]}
      />
      <section className="relative w-full min-h-screen py-16 px-4 md:px-6 lg:px-[5%] bg-transparent overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Gradient Orbs */}
          <div className="absolute top-20 -left-20 w-72 h-72 bg-[var(--color-primary-500)]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-[var(--color-primary-600)]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[var(--color-primary-500)]/30 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[var(--color-primary-500)]/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-[var(--color-primary-500)]/25 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Add custom animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}
      </style>

      <div className="relative max-w-5xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-primary-600)] mb-4">
            Get in Touch
          </h1>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[var(--color-primary-500)] to-transparent mx-auto mb-6"></div>
          <p className="text-sm sm:text-sm text-[var(--color-primary)] max-w-2xl mx-auto leading-relaxed">
            We would love to hear from you. Drop us a message and we&apos;ll get back to you as soon as possible!
          </p>
        </motion.div>

        {/* Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="group relative"
        >
          <div className="relative rounded-3xl p-8 lg:p-12 bg-[var(--color-bg-card)] transition-all duration-300 overflow-hidden shadow-[12px_12px_24px_var(--shadow-dark),-12px_-12px_24px_var(--shadow-light)] hover:shadow-[6px_6px_12px_var(--shadow-dark),-6px_-6px_12px_var(--shadow-light)]">

            {/* Content */}
            <div className="relative z-10">
              {submitted ? (
                <motion.div 
                  className="text-center py-12"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg">
                      <Icon icon="mdi:check-circle" className="text-4xl text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-[var(--color-primary-600)] mb-4">
                    Thank You for Your Message!
                  </h3>
                  <p className="text-sm lg:text-base text-[var(--color-primary-600)]">
                    We&apos;ve received your message and will get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={formik.handleSubmit} className="space-y-6">
                  {/* Error Message */}
                  {sendError && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-r-lg"
                    >
                      <div className="flex items-center gap-2">
                        <Icon icon="mdi:alert-circle" className="text-xl" />
                        <div>
                          <p className="font-semibold">Error Sending Message</p>
                          <p className="text-sm">{sendError}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="flex items-center gap-2 text-sm font-semibold text-[var(--color-primary-600)] mb-2">
                      <Icon icon="mdi:account" className="text-sm text-[var(--color-primary-500)]" />
                      Your Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full p-3 bg-[var(--color-bg-primary)] rounded-xl focus:outline-none transition-all duration-300 text-[var(--color-primary-600)] text-base placeholder:text-[var(--color-primary-600)] shadow-[inset_4px_4px_8px_var(--shadow-dark),inset_-4px_-4px_8px_var(--shadow-light)] focus:shadow-[inset_6px_6px_12px_var(--shadow-dark),inset_-6px_-6px_12px_var(--shadow-light)]"
                        placeholder="Enter your full name"
                      />
                    </div>
                    {formik.touched.name && formik.errors.name && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-sm mt-1 flex items-center gap-1"
                      >
                        ⚠️ {formik.errors.name}
                      </motion.p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-[var(--color-primary-600)] mb-2">
                      <Icon icon="mdi:email" className="text-sm text-[var(--color-primary-500)]" />
                      Your Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full p-3 bg-[var(--color-bg-primary)] rounded-xl focus:outline-none transition-all duration-300 text-[var(--color-primary-600)] text-base placeholder:text-[var(--color-primary-600)] shadow-[inset_4px_4px_8px_var(--shadow-dark),inset_-4px_-4px_8px_var(--shadow-light)] focus:shadow-[inset_6px_6px_12px_var(--shadow-dark),inset_-6px_-6px_12px_var(--shadow-light)]"
                        placeholder="Enter your email address"
                      />
                    </div>
                    {formik.touched.email && formik.errors.email && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-sm mt-1 flex items-center gap-1"
                      >
                        ⚠️ {formik.errors.email}
                      </motion.p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="flex items-center gap-2 text-sm font-semibold text-[var(--color-primary-600)] mb-2">
                      <Icon icon="mdi:message-text" className="text-sm text-[var(--color-primary-500)]" />
                      Your Message
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full p-3 bg-[var(--color-bg-primary)] rounded-xl focus:outline-none transition-all duration-300 text-[var(--color-primary-600)] text-base placeholder:text-[var(--color-primary-600)] resize-none shadow-[inset_4px_4px_8px_var(--shadow-dark),inset_-4px_-4px_8px_var(--shadow-light)] focus:shadow-[inset_6px_6px_12px_var(--shadow-dark),inset_-6px_-6px_12px_var(--shadow-light)]"
                        rows="6"
                        placeholder="Write your message here..."
                      ></textarea>
                    </div>
                    {formik.touched.message && formik.errors.message && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-sm mt-1 flex items-center gap-1"
                      >
                        ⚠️ {formik.errors.message}
                      </motion.p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-4">
                    <button
                      type="submit"
                      disabled={formik.isSubmitting}
                      className="group relative px-6 py-3 bg-[var(--color-bg-primary)] text-[var(--color-primary-600)] rounded-full font-semibold text-sm overflow-hidden transition-all duration-300 inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shadow-[8px_8px_16px_var(--shadow-dark),-8px_-8px_16px_var(--shadow-light)] hover:shadow-[4px_4px_8px_var(--shadow-dark),-4px_-4px_8px_var(--shadow-light)] hover:translate-y-0.5 active:shadow-[inset_4px_4px_8px_var(--shadow-dark),inset_-4px_-4px_8px_var(--shadow-light)]"
                    >
                      <span className="relative z-10">
                        {formik.isSubmitting ? 'Sending...' : 'Send Message'}
                      </span>
                      <Icon icon="mdi:send" className="text-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </motion.div>

        {/* Additional Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-[var(--color-primary-600)]">
            You can also reach us via email at{' '}
            <a href="mailto:raijintechug@gmail.com" className="text-[var(--color-primary-500)] font-semibold hover:text-[var(--color-primary-600)] transition-colors duration-300 cursor-pointer">
              raijintechug@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
      </section>
    </>
  );
};

export default Contact;