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
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-(--color-primary-500) mb-6">
          Our Development{" "}
          <span className="text-(--color-secondary-500)">Journey</span>
        </h2>
        <div className="w-24 h-1.5 bg-linear-to-r from-transparent via-(--color-secondary-500) to-transparent mx-auto mb-8"></div>
        <p className="text-sm sm:text-base text-(--color-off-black-500) max-w-2xl mx-auto leading-relaxed opacity-80">
          We combine agile methodology with precision engineering to guide your
          project from initial concept to a successful global launch.
        </p>
      </div>

      <ProcessDiagram />
    </motion.div>
  );
};

export default ProcessSection;
