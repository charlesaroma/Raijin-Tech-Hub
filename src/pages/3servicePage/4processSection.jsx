import { motion } from "framer-motion";
import ProcessDiagram from "../../components/ProcessDiagram";

const ProcessSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="mb-20"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-primary-600)] mb-4">
          Our Development Process
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[var(--color-primary-500)] to-transparent mx-auto mb-6"></div>
        <p className="text-sm sm:text-base text-[var(--color-primary-600)] max-w-3xl mx-auto leading-relaxed">
          From concept to launch, here&apos;s how we build your project with precision and excellence
        </p>
      </div>
      
      <ProcessDiagram />
    </motion.div>
  );
};

export default ProcessSection;

