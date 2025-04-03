import { FaLaptopCode, FaCloud, FaBrush, FaChartLine, FaCogs, FaUsers } from 'react-icons/fa';

const services = [
  {
    title: 'Website & App Development',
    description:
      'Bring your ideas to life with custom websites and mobile applications tailored to your business needs and user expectations.',
    icon: <FaLaptopCode className="text-4xl text-[var(--color-primary-500)]" />,
  },
  {
    title: 'Backup & Recovery',
    description:
      'Ensure your data is safe and accessible with our robust backup and recovery solutions designed for businesses of all sizes.',
    icon: <FaCloud className="text-4xl text-[var(--color-primary-500)]" />,
  },
  {
    title: 'Graphics Design & Branding',
    description:
      'Elevate your brand with professional graphic design services, including logos, marketing materials, and complete brand identities.',
    icon: <FaBrush className="text-4xl text-[var(--color-primary-500)]" />,
  },
  {
    title: 'SEO Optimization',
    description:
      'Improve your online visibility and drive traffic to your website with our expert SEO strategies and optimization techniques.',
    icon: <FaChartLine className="text-4xl text-[var(--color-primary-500)]" />,
  },
  {
    title: 'IT Consultancy',
    description:
      'Get expert advice and guidance on leveraging technology to streamline operations, reduce costs, and achieve your goals.',
    icon: <FaCogs className="text-4xl text-[var(--color-primary-500)]" />,
  },
  {
    title: 'Dedicated Support',
    description:
      'Rely on our team for round-the-clock support to ensure your systems run smoothly and efficiently, minimizing downtime.',
    icon: <FaUsers className="text-4xl text-[var(--color-primary-500)]" />,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-transparent">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary-500)]">Our Services</h2>
        <p className="mt-3 md:mt-4 text-lg text-[var(--color-primary-500)] max-w-2xl mx-auto">
          Discover the range of services we offer to help your business grow and thrive.
        </p>
      </div>
      <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative p-6 md:p-8 rounded-xl flex flex-col items-center text-center border-2 border-[var(--color-primary-500)] transition-transform duration-300 hover:scale-105 before:absolute before:top-0 before:left-0 before:w-8 md:w-10 before:h-8 md:h-10 before:border-t-4 before:border-l-4 before:border-[var(--color-primary-500)] after:absolute after:bottom-0 after:right-0 after:w-8 md:w-10 after:h-8 md:h-10 after:border-b-4 after:border-r-4 after:border-[var(--color-primary-500)]"
          >
            <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-[var(--color-primary-100)] rounded-lg mb-3 md:mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-[var(--color-primary-500)] mb-1 md:mb-2">{service.title}</h3>
            <p className="text-sm md:text-base text-[var(--color-primary-600)]">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;