import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import processData from "../data/processData.json";

const ProcessDiagram = () => {
  const { phases } = processData;

  return (
    <div className="w-full px-4 py-10">
      <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {phases.map((phase, index) => {
          const phaseColor =
            index % 3 === 0
              ? "var(--color-primary-500)"
              : index % 3 === 1
                ? "var(--color-secondary-500)"
                : "var(--color-accent-500)";

          return (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.25, delay: index * 0.05 }}
              className="group relative rounded-3xl p-6 bg-(--color-bg-card) transition-all duration-300 cursor-pointer shadow-[10px_10px_20px_var(--shadow-dark),-10px_-10px_20px_var(--shadow-light)] hover:shadow-[6px_6px_12px_var(--shadow-dark),-6px_-6px_12px_var(--shadow-light)] hover:translate-y-1 overflow-hidden"
            >
              {/* Accent blob */}
              <div
                className="pointer-events-none absolute -top-10 -right-10 w-24 h-24 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                style={{ backgroundColor: phaseColor }}
              />

              {/* Icon + title */}
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 bg-(--color-bg-primary) rounded-2xl flex items-center justify-center shadow-[inset_4px_4px_8px_var(--shadow-dark),inset_-4px_-4px_8px_var(--shadow-light)]">
                  <Icon icon={phase.icon} className="text-xl" />
                </div>
                <div className="flex flex-col">
                  <span
                    className="text-[11px] font-semibold uppercase tracking-wide opacity-80"
                    style={{ color: phaseColor }}
                  >
                    Phase 0{phase.id}
                  </span>
                  <h3 className="text-sm sm:text-base font-extrabold text-(--color-primary-600)">
                    {phase.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-(--color-primary-600) leading-relaxed line-clamp-3">
                {phase.description}
              </p>

              {/* Deliverables */}
              <div className="flex flex-wrap gap-1.5 mt-1">
                {phase.deliverables.slice(0, 3).map((item, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 rounded-full bg-(--color-bg-primary) text-(--color-primary-600) text-[11px] font-medium shadow-[2px_2px_4px_var(--shadow-dark),-2px_-2px_4px_var(--shadow-light)]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Meta: duration + tools */}
              <div className="mt-3 flex items-center justify-between gap-2 text-[11px] text-(--color-off-black-400)">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-(--color-bg-primary) shadow-[2px_2px_4px_var(--shadow-dark),-2px_-2px_4px_var(--shadow-light)]">
                  <Icon icon="mdi:clock-outline" className="text-xs" />
                  <span className="font-semibold text-(--color-primary-600)">
                    {phase.duration}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1 justify-end">
                  {phase.tools.slice(0, 3).map((tool, idx) => (
                    <span key={idx}>#{tool}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ProcessDiagram;
