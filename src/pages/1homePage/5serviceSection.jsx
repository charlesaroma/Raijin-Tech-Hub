import { Icon } from '@iconify/react';

const services = [
  {
    title: 'Website & Software Development',
    description:
      'Bring your ideas to life with custom websites and mobile applications tailored to your business needs and user expectations.',
    icon: <Icon icon="mdi:laptop-account" className="text-3xl sm:text-4xl" />,
    gridClass: 'col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2',
    size: 'large',
  },
  {
    title: 'Backup & Recovery',
    description:
      'Ensure your data is safe and accessible with robust backup and recovery solutions.',
    icon: <Icon icon="mdi:cloud-upload" className="text-2xl sm:text-3xl" />,
    gridClass: 'col-span-1',
    size: 'small',
  },
  {
    title: 'Graphics Design & Branding',
    description:
      'Elevate your brand with professional graphic design services and complete brand identities.',
    icon: <Icon icon="mdi:palette" className="text-2xl sm:text-3xl" />,
    gridClass: 'col-span-1',
    size: 'small',
  },
  {
    title: 'SEO Optimization',
    description:
      'Improve your online visibility and drive traffic to your website with expert SEO strategies and optimization techniques.',
    icon: <Icon icon="mdi:chart-line" className="text-2xl sm:text-3xl" />,
    gridClass: 'col-span-1 sm:col-span-2 lg:col-span-1 lg:row-span-2',
    size: 'tall',
  },
  {
    title: 'IT Consultancy',
    description:
      'Get expert advice and guidance on leveraging technology to streamline operations, reduce costs, and achieve your goals.',
    icon: <Icon icon="mdi:cog-outline" className="text-2xl sm:text-3xl" />,
    gridClass: 'col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-1',
    size: 'wide',
  },
  {
    title: 'Licensed Software Solutions',
    description:
      'Access premium software licenses and solutions tailored to your business needs with flexible pricing and expert implementation support.',
    icon: <Icon icon="mdi:certificate" className="text-2xl sm:text-3xl" />,
    gridClass: 'col-span-1',
    size: 'small',
  },
  {
    title: 'Computer Hardware & Accessories',
    description:
      'Quality laptops, monitors, storage devices, and IT equipment from trusted suppliers at competitive prices.',
    icon: <Icon icon="mdi:desktop-classic" className="text-2xl sm:text-3xl" />,
    gridClass: 'col-span-1',
    size: 'small',
  },
  {
    title: 'Dedicated Support',
    description:
      'Round-the-clock support to ensure your systems run smoothly and efficiently.',
    icon: <Icon icon="mdi:account-group" className="text-2xl sm:text-3xl" />,
    gridClass: 'col-span-1',
    size: 'small',
  },
];

const ServicesSection = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-[var(--color-bg-secondary)] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <div className="inline-block">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-primary-600)] mb-3 relative px-2">
              Our Services
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[var(--color-primary-500)] to-transparent"></div>
            </h2>
          </div>
          <p className="mt-4 text-sm sm:text-sm text-[var(--color-primary-600)] max-w-2xl mx-auto px-4">
            Discover the range of services we offer to help your business grow and thrive in the digital age.
        </p>
      </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 auto-rows-[200px] sm:auto-rows-[220px]">
          {services.map((service, index) => {
            const isLarge = service.size === 'large';
            const isTall = service.size === 'tall';
            const isWide = service.size === 'wide';

            return (
          <div
            key={index}
                className={`
                  group relative
                  ${service.gridClass}
                  bg-[var(--color-bg-card)]
                  rounded-2xl sm:rounded-3xl
                  p-5 sm:p-6 ${isLarge ? 'lg:p-10' : isWide ? 'lg:p-8' : ''}
                  transition-all duration-500 ease-out
                  cursor-pointer
                  shadow-[10px_10px_20px_var(--shadow-dark),-10px_-10px_20px_var(--shadow-light)]
                  hover:shadow-[6px_6px_12px_var(--shadow-dark),-6px_-6px_12px_var(--shadow-light)]
                  hover:translate-y-1
                  active:shadow-[inset_6px_6px_12px_var(--shadow-dark),inset_-6px_-6px_12px_var(--shadow-light)]
                `}
              >
                {/* Animated border glow on hover */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl sm:rounded-3xl shadow-[0_0_20px_rgba(var(--color-primary-rgb),0.3)] sm:shadow-[0_0_30px_rgba(var(--color-primary-rgb),0.3)]"></div>
                </div>

                {/* Grid pattern overlay */}
                <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-500 rounded-2xl sm:rounded-3xl" 
                     style={{
                       backgroundImage: `linear-gradient(var(--color-primary-500) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary-500) 1px, transparent 1px)`,
                       backgroundSize: '20px 20px'
                     }}>
                </div>

                {/* Gradient orb effect on hover */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[var(--color-primary-500)]/0 group-hover:bg-[var(--color-primary-500)]/10 rounded-full blur-3xl transition-all duration-700"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[var(--color-primary-500)]/0 group-hover:bg-[var(--color-primary-500)]/10 rounded-full blur-3xl transition-all duration-700 delay-100"></div>

                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-8 h-8 sm:w-12 sm:h-12 border-t-2 border-l-2 border-[var(--color-primary-500)]/0 group-hover:border-[var(--color-primary-500)] rounded-tl-2xl sm:rounded-tl-3xl transition-all duration-300"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-12 sm:h-12 border-b-2 border-r-2 border-[var(--color-primary-500)]/0 group-hover:border-[var(--color-primary-500)] rounded-br-2xl sm:rounded-br-3xl transition-all duration-300"></div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-center z-10">
                  {/* Icon with animated ring */}
                  <div className={`relative mb-3 sm:mb-4 ${isLarge ? 'lg:mb-6' : ''} w-fit`}>
                    <div className="absolute inset-0 rounded-2xl bg-[var(--color-primary-500)]/10 blur-xl scale-0 group-hover:scale-150 transition-transform duration-500"></div>
                    <div className={`relative w-12 h-12 sm:w-14 sm:h-14 ${isLarge ? 'lg:w-16 lg:h-16' : ''} flex items-center justify-center text-[var(--color-primary-500)] transform transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6`}>
              {service.icon}
            </div>
                    {/* Animated ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-[var(--color-primary-500)]/0 group-hover:border-[var(--color-primary-500)]/50 scale-100 group-hover:scale-125 transition-all duration-500"></div>
                  </div>

                  {/* Title */}
                  <h3 className={`
                    text-sm sm:text-base ${isLarge ? 'lg:text-xl lg:mb-2' : 'lg:text-lg'} 
                    mb-1.5
                    font-bold text-[var(--color-primary-500)] 
                    transition-all duration-300 group-hover:translate-x-1
                    line-clamp-2
                  `}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className={`
                    text-sm sm:text-sm ${isLarge ? 'lg:text-sm' : ''}
                    ${isLarge ? 'line-clamp-4 sm:line-clamp-5' : isWide ? 'line-clamp-2 sm:line-clamp-3' : isTall ? 'line-clamp-4 sm:line-clamp-6' : 'line-clamp-2 sm:line-clamp-3'}
                    text-[var(--color-primary-500)]/80 dark:text-[var(--color-primary-400)]/80 
                    leading-relaxed
                    transition-all duration-300 group-hover:text-[var(--color-primary-500)]
                  `}>
                    {service.description}
                  </p>
                </div>

                {/* Scanning line effect */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--color-primary-500)] to-transparent -translate-y-full group-hover:translate-y-[200px] sm:group-hover:translate-y-[220px] transition-transform duration-[1500ms] ease-linear"></div>
                </div>
              </div>
            );
          })}
          </div>
      </div>
    </section>
  );
};

export default ServicesSection;
