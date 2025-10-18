import { useState } from 'react';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import { FaUser, FaEnvelope, FaCommentDots, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import SEO from '../../components/SEO';
import { BreadcrumbStructuredData } from '../../components/StructuredData';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

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
            setSubmitted(true);
            resetForm();
            setTimeout(() => setSubmitted(false), 5000);
          },
          (error) => {
            console.log('Error sending message:', error);
            setSubmitting(false);
          }
        );
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

      <div className="relative max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-primary-600)] mb-4">
            Get in Touch
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[var(--color-primary-500)] to-transparent mx-auto mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-[var(--color-primary-500)]/80 max-w-2xl mx-auto leading-relaxed">
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
          <div className="relative rounded-3xl p-8 lg:p-12 border-2 border-[var(--color-primary-500)]/20 hover:border-[var(--color-primary-500)]/40 transition-all duration-500 overflow-hidden bg-transparent">
            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 rounded-3xl shadow-[0_0_30px_rgba(var(--color-primary-rgb),0.2)]"></div>
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-500 rounded-3xl" 
                 style={{
                   backgroundImage: `linear-gradient(var(--color-primary-500) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary-500) 1px, transparent 1px)`,
                   backgroundSize: '20px 20px'
                 }}>
            </div>

            {/* Gradient orb effects */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[var(--color-primary-500)]/0 group-hover:bg-[var(--color-primary-500)]/10 rounded-full blur-3xl transition-all duration-700"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[var(--color-primary-500)]/0 group-hover:bg-[var(--color-primary-500)]/10 rounded-full blur-3xl transition-all duration-700 delay-100"></div>

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
                      <FaCheckCircle className="text-4xl text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-[var(--color-primary-600)] mb-4">
                    Thank You for Your Message!
                  </h3>
                  <p className="text-base lg:text-lg text-[var(--color-primary-500)]/80">
                    We&apos;ve received your message and will get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={formik.handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="flex items-center gap-2 text-sm font-semibold text-[var(--color-primary-600)] mb-2">
                      <FaUser className="text-[var(--color-primary-500)]" />
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
                        className="w-full p-4 bg-transparent border-2 border-[var(--color-primary-500)]/30 rounded-xl focus:outline-none focus:border-[var(--color-primary-500)] transition-all duration-300 text-[var(--color-primary-600)] placeholder:text-[var(--color-primary-500)]/40"
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
                      <FaEnvelope className="text-[var(--color-primary-500)]" />
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
                        className="w-full p-4 bg-transparent border-2 border-[var(--color-primary-500)]/30 rounded-xl focus:outline-none focus:border-[var(--color-primary-500)] transition-all duration-300 text-[var(--color-primary-600)] placeholder:text-[var(--color-primary-500)]/40"
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
                      <FaCommentDots className="text-[var(--color-primary-500)]" />
                      Your Message
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full p-4 bg-transparent border-2 border-[var(--color-primary-500)]/30 rounded-xl focus:outline-none focus:border-[var(--color-primary-500)] transition-all duration-300 text-[var(--color-primary-600)] placeholder:text-[var(--color-primary-500)]/40 resize-none"
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
                      className="group relative px-8 py-4 bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-primary-600)] text-white rounded-xl font-semibold text-base overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--color-primary-rgb),0.4)] hover:scale-105 inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      <span className="relative z-10">
                        {formik.isSubmitting ? 'Sending...' : 'Send Message'}
                      </span>
                      <FaPaperPlane className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-600)] to-[var(--color-primary-700)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
          <p className="text-sm text-[var(--color-primary-500)]/60">
            You can also reach us via email at{' '}
            <a href="mailto:contact@raijintechhub.com" className="text-[var(--color-primary-600)] font-semibold hover:text-[var(--color-primary-500)] transition-colors duration-300 cursor-pointer">
              contact@raijintechhub.com
            </a>
          </p>
        </motion.div>
      </div>
      </section>
    </>
  );
};

export default Contact;