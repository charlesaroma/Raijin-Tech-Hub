import { motion } from "framer-motion";

const HeaderSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-(--color-primary-500) mb-6">
        About{" "}
        <span className="text-(--color-secondary-500)">Raijin Tech Hub</span>
      </h1>
      <div className="w-24 h-1.5 bg-linear-to-r from-transparent via-(--color-secondary-500) to-transparent mx-auto mb-8"></div>
      <p className="text-sm sm:text-base md:text-lg text-(--color-off-black-500) max-w-2xl mx-auto leading-relaxed opacity-80">
        Empowering businesses across Uganda and East Africa with cutting-edge
        technology solutions since 2020.
      </p>
    </motion.div>
  );
};

export default HeaderSection;
