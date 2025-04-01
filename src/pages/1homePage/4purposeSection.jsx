import { FaRocket, FaHandshake, FaLightbulb, FaUsers, FaBullseye, FaStar } from "react-icons/fa";

const PurposeSection = () => {
  const values = [
    {
      title: "Vision",
      description:
        "To be a global leader in providing innovative and sustainable digital solutions that empower businesses and industries, shaping a smarter and more efficient future.",
      icon: <FaRocket className="text-4xl text-[var(--color-primary-500)]" />,
    },
    {
      title: "Mission",
      description:
        "To deliver cutting-edge technology solutions with excellence in software development, consultancy, and digital transformation, enabling businesses to thrive.",
      icon: <FaHandshake className="text-4xl text-[var(--color-primary-500)]" />,
    },
    {
      title: "Objectives",
      description:
        "To drive business growth through tailored software solutions, foster customer engagement, and lead digital transformation initiatives that ensure measurable results.",
      icon: <FaLightbulb className="text-4xl text-[var(--color-primary-500)]" />,
    },
    {
      title: "Core Values",
      description:
        "We embrace integrity, innovation, collaboration, customer-first mindset, and continuous improvement in all our projects and partnerships.",
      icon: <FaUsers className="text-4xl text-[var(--color-primary-500)]" />,
    },
    {
      title: "Strategic Goals",
      description:
        "To expand into new markets, enhance operational efficiency, and continuously innovate our services to maintain competitive advantage.",
      icon: <FaBullseye className="text-4xl text-[var(--color-primary-500)]" />,
    },
    {
      title: "Unique Strengths",
      description:
        "Our expertise in emerging technologies, customer-centric approach, and commitment to sustainability set us apart in the industry.",
      icon: <FaStar className="text-4xl text-[var(--color-primary-500)]" />,
    },
  ];

  return (
    <section className="bg-[var(--color-accent-500)] py-12">
      <div className="container mx-auto px-6 sm:px-8 lg:px-16 text-center py-16">
        <h2 className="text-4xl font-extrabold text-[var(--color-primary-500)] mb-12">
          Our Purpose & Values
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
          {values.map(({ title, description, icon }, index) => (
            <div
              key={index}
              className="group bg-[var(--color-accent-500)]/90 border border-[var(--color-primary-500)] p-6 rounded-lg shadow-lg flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105"
            >
              {/* Icon */}
              <div className="mb-4">{icon}</div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-primary-500)] transition-colors duration-300 group-hover:text-[var(--color-primary-500)]">
                {title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-[var(--color-primary-500)]">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;
