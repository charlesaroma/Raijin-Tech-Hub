import { useState } from 'react';
import { motion } from 'framer-motion';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaUser, FaEnvelope, FaPhone, FaBuilding, FaGlobe, FaCommentDots, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import SEO from '../components/SEO';
import { BreadcrumbStructuredData } from '../components/StructuredData';

const RequestQuote = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const services = [
    { label: 'Cybersecurity & Pen testing', value: 'cybersecurity' },
    { label: 'IT Consultancy & Strategy', value: 'it-consultancy' },
    { label: 'AI Integration & Chatbot Solutions', value: 'ai-chatbot-integration' },
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
    setError('');
    
    try {
      const selectedServices = values.service.join(', ') + (values.otherService ? `, Other Service: ${values.otherService}` : '');
      
      const formData = new FormData();
      formData.append('access_key', '61acac76-4335-4ae8-9aed-244567db8faa');
      formData.append('subject', 'Quotation Request from Raijin Tech Hub Website');
      formData.append('from_name', 'Raijin Tech Hub Request Quote Form');
      formData.append('name', values.name);
      formData.append('email', values.email);
      formData.append('phone', values.phone);
      formData.append('company', values.company || 'N/A');
      formData.append('website', values.website || 'N/A');
      formData.append('services', selectedServices);
      formData.append('message', values.comments);
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        console.log('✅ Email successfully sent:', data);
        setIsSubmitted(true);
        actions.resetForm();
      } else {
        throw new Error(data.message || 'Failed to send request');
      }
    } catch (error) {
      console.error('❌ Failed to send email:', error);
      setError(`Failed to send request: ${error.message || 'Unknown error'}`);
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <>
      <SEO 
        title="Request a Quote | Raijin Tech Hub Uganda"
        description="Get a custom quote for your software development, IT consultancy, or digital transformation project. Professional tech solutions tailored to your business needs in Uganda."
        keywords="request quote Uganda, software development quote, IT services pricing, custom quote Kampala, tech consultation Uganda"
      />
      <BreadcrumbStructuredData 
        items={[
          { name: 'Home', path: '/' },
          { name: 'Request Quote', path: '/request-quote' }
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

        <div className="relative max-w-4xl mx-auto">
          {/* Heading Section */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-primary-600)] mb-4">
              Request a Quote
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-primary-600)] mx-auto mb-6 rounded-full"></div>
            <p className="text-base sm:text-lg text-[var(--color-primary-500)]/80 max-w-2xl mx-auto">
              Let us know your needs and we&apos;ll provide a custom quote tailored to your business requirements.
            </p>
          </motion.div>

          {/* Form Section */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Futuristic Card Container */}
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 border-2 border-[var(--color-primary-500)]/20 overflow-hidden group hover:border-[var(--color-primary-500)]/40 transition-all duration-300">
              {/* Grid Pattern Overlay */}
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(var(--color-primary-500) 1px, transparent 1px),
                                   linear-gradient(90deg, var(--color-primary-500) 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }}
              ></div>

              {/* Gradient Orbs */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary-500)]/5 rounded-full blur-2xl group-hover:bg-[var(--color-primary-500)]/10 transition-all duration-500"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[var(--color-primary-600)]/5 rounded-full blur-2xl group-hover:bg-[var(--color-primary-600)]/10 transition-all duration-500"></div>

              {isSubmitted ? (
                <motion.div 
                  className="text-center py-12"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <FaCheckCircle className="text-6xl text-[var(--color-primary-500)] mx-auto mb-6" />
                  </motion.div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary-600)] mb-4">
                    Thank You for Your Request!
                  </h3>
                  <p className="text-base sm:text-lg text-[var(--color-primary-500)]/80 mb-8">
                    We&apos;ve received your quote request and will contact you with a custom proposal shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-primary-600)] text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              ) : (
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ isSubmitting }) => (
                    <Form className="relative z-10 space-y-6">
                      {/* Error Message */}
                      {error && (
                        <motion.div 
                          className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-r-lg"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                        >
                          <p className="font-semibold">{error}</p>
                        </motion.div>
                      )}

                      {/* Name Field */}
                      <div className="space-y-2">
                        <label htmlFor="name" className="flex items-center gap-2 text-sm font-semibold text-[var(--color-primary-600)]">
                          <FaUser className="text-[var(--color-primary-500)]" />
                          Your Name *
                        </label>
                        <Field
                          type="text"
                          id="name"
                          name="name"
                          className="w-full px-4 py-3 bg-white/50 border-2 border-[var(--color-primary-500)]/20 rounded-lg focus:outline-none focus:border-[var(--color-primary-500)] focus:bg-white transition-all duration-300 text-[var(--color-primary-600)] placeholder-[var(--color-primary-500)]/40"
                          placeholder="Enter your full name"
                        />
                        <ErrorMessage name="name" component={motion.div} className="text-red-500 text-sm flex items-center gap-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
                      </div>

                      {/* Email Field */}
                      <div className="space-y-2">
                        <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-[var(--color-primary-600)]">
                          <FaEnvelope className="text-[var(--color-primary-500)]" />
                          Your Email *
                        </label>
                        <Field
                          type="email"
                          id="email"
                          name="email"
                          className="w-full px-4 py-3 bg-white/50 border-2 border-[var(--color-primary-500)]/20 rounded-lg focus:outline-none focus:border-[var(--color-primary-500)] focus:bg-white transition-all duration-300 text-[var(--color-primary-600)] placeholder-[var(--color-primary-500)]/40"
                          placeholder="your.email@example.com"
                        />
                        <ErrorMessage name="email" component={motion.div} className="text-red-500 text-sm flex items-center gap-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
                      </div>

                      {/* Phone Field */}
                      <div className="space-y-2">
                        <label htmlFor="phone" className="flex items-center gap-2 text-sm font-semibold text-[var(--color-primary-600)]">
                          <FaPhone className="text-[var(--color-primary-500)]" />
                          Your Phone *
                        </label>
                        <Field
                          type="text"
                          id="phone"
                          name="phone"
                          className="w-full px-4 py-3 bg-white/50 border-2 border-[var(--color-primary-500)]/20 rounded-lg focus:outline-none focus:border-[var(--color-primary-500)] focus:bg-white transition-all duration-300 text-[var(--color-primary-600)] placeholder-[var(--color-primary-500)]/40"
                          placeholder="+256 XXX XXX XXX"
                        />
                        <ErrorMessage name="phone" component={motion.div} className="text-red-500 text-sm flex items-center gap-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
                      </div>

                      {/* Two Column Layout for Company and Website */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Company Name Field */}
                        <div className="space-y-2">
                          <label htmlFor="company" className="flex items-center gap-2 text-sm font-semibold text-[var(--color-primary-600)]">
                            <FaBuilding className="text-[var(--color-primary-500)]" />
                            Company Name
                          </label>
                          <Field
                            type="text"
                            id="company"
                            name="company"
                            className="w-full px-4 py-3 bg-white/50 border-2 border-[var(--color-primary-500)]/20 rounded-lg focus:outline-none focus:border-[var(--color-primary-500)] focus:bg-white transition-all duration-300 text-[var(--color-primary-600)] placeholder-[var(--color-primary-500)]/40"
                            placeholder="Your company (optional)"
                          />
                        </div>

                        {/* Website Field */}
                        <div className="space-y-2">
                          <label htmlFor="website" className="flex items-center gap-2 text-sm font-semibold text-[var(--color-primary-600)]">
                            <FaGlobe className="text-[var(--color-primary-500)]" />
                            Your Website
                          </label>
                          <Field
                            type="text"
                            id="website"
                            name="website"
                            className="w-full px-4 py-3 bg-white/50 border-2 border-[var(--color-primary-500)]/20 rounded-lg focus:outline-none focus:border-[var(--color-primary-500)] focus:bg-white transition-all duration-300 text-[var(--color-primary-600)] placeholder-[var(--color-primary-500)]/40"
                            placeholder="https://example.com"
                          />
                          <ErrorMessage name="website" component={motion.div} className="text-red-500 text-sm flex items-center gap-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
                        </div>
                      </div>

                      {/* Service Selection Section */}
                      <div className="space-y-3">
                        <label className="block text-sm font-semibold text-[var(--color-primary-600)] mb-3">
                          Service(s) Needed *
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {services.map((service) => (
                            <label 
                              key={service.value} 
                              className="flex items-start p-3 bg-white/50 border-2 border-[var(--color-primary-500)]/20 rounded-lg hover:border-[var(--color-primary-500)]/40 hover:bg-white/80 transition-all duration-300 cursor-pointer group"
                            >
                              <Field
                                type="checkbox"
                                name="service"
                                value={service.value}
                                className="mt-1 mr-3 h-4 w-4 text-[var(--color-primary-500)] border-[var(--color-primary-500)]/30 rounded focus:ring-[var(--color-primary-500)] cursor-pointer"
                              />
                              <span className="text-sm text-[var(--color-primary-600)] group-hover:text-[var(--color-primary-500)] transition-colors">
                                {service.label}
                              </span>
                            </label>
                          ))}
                        </div>
                        <ErrorMessage name="service" component={motion.div} className="text-red-500 text-sm flex items-center gap-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
                      </div>

                      {/* Other Services Section */}
                      <div className="space-y-2">
                        <label htmlFor="otherService" className="block text-sm font-semibold text-[var(--color-primary-600)]">
                          Other Services <span className="text-xs font-normal text-[var(--color-primary-500)]/60">(if not listed above)</span>
                        </label>
                        <Field
                          type="text"
                          id="otherService"
                          name="otherService"
                          className="w-full px-4 py-3 bg-white/50 border-2 border-[var(--color-primary-500)]/20 rounded-lg focus:outline-none focus:border-[var(--color-primary-500)] focus:bg-white transition-all duration-300 text-[var(--color-primary-600)] placeholder-[var(--color-primary-500)]/40"
                          placeholder="Describe any other services you need"
                        />
                      </div>

                      {/* Comments Section */}
                      <div className="space-y-2">
                        <label htmlFor="comments" className="flex items-center gap-2 text-sm font-semibold text-[var(--color-primary-600)]">
                          <FaCommentDots className="text-[var(--color-primary-500)]" />
                          Project Details *
                        </label>
                        <Field
                          as="textarea"
                          id="comments"
                          name="comments"
                          className="w-full px-4 py-3 bg-white/50 border-2 border-[var(--color-primary-500)]/20 rounded-lg focus:outline-none focus:border-[var(--color-primary-500)] focus:bg-white transition-all duration-300 text-[var(--color-primary-600)] placeholder-[var(--color-primary-500)]/40 resize-none"
                          rows="5"
                          placeholder="Tell us more about your project requirements, timeline, budget range, and any specific features you need..."
                        />
                        <ErrorMessage name="comments" component={motion.div} className="text-red-500 text-sm flex items-center gap-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
                      </div>

                      {/* Submit Button */}
                      <motion.div 
                        className="pt-4"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full px-8 py-4 bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-primary-600)] text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:from-[var(--color-primary-600)] hover:to-[var(--color-primary-500)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 cursor-pointer group"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                              <span>Submitting...</span>
                            </>
                          ) : (
                            <>
                              <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
                              <span>Request Your Custom Quote</span>
                            </>
                          )}
                        </button>
                      </motion.div>

                      {/* Privacy Notice */}
                      <p className="text-xs text-center text-[var(--color-primary-500)]/60 mt-4">
                        We respect your privacy. Your information will only be used to provide you with a quote.
                      </p>
                    </Form>
                  )}
                </Formik>
              )}
            </div>
          </motion.div>
        </div>

        {/* Custom Float Animation */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}</style>
      </section>
    </>
  );
};

export default RequestQuote;
