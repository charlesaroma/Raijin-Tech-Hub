const FilterSection = ({ industries, filter, setFilter }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {industries.map((industry) => (
        <button
          key={industry}
          onClick={() => setFilter(industry)}
          className={`px-5 py-2.5 rounded-full font-semibold text-xs transition-all duration-300 cursor-pointer ${
            filter === industry
              ? 'bg-[var(--color-bg-primary)] text-[var(--color-primary-600)] shadow-[inset_4px_4px_8px_var(--shadow-dark),inset_-4px_-4px_8px_var(--shadow-light)]'
              : 'bg-[var(--color-bg-primary)] text-[var(--color-primary-600)] shadow-[6px_6px_12px_var(--shadow-dark),-6px_-6px_12px_var(--shadow-light)] hover:shadow-[3px_3px_6px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)]'
          }`}
        >
          {industry === 'all' ? 'All Projects' : industry}
        </button>
      ))}
    </div>
  );
};

export default FilterSection;

