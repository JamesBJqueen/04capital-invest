type TopicFiltersProps = {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

const categories = ["All topics", "Products", "Application", "Funding", "Repayment", "General"];

export const TopicFilters = (props: TopicFiltersProps) => {
  const handleCategoryClick = (category: string) => {
    props.onCategoryChange(category);
  };

  return (
    <div className="box-border caret-transparent gap-x-2 flex flex-wrap justify-center gap-y-2 mt-8 mb-4">
      {categories.map((category) => {
        const isSelected = props.selectedCategory === category;
        return (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`text-[13.12px] caret-transparent block leading-[normal] px-[14.4px] py-[5.6px] rounded-[999px] border-solid font-arial transition-colors ${
              isSelected
                ? "text-gray-900 bg-sky-100 border border-sky-700"
                : "text-gray-600 bg-white border border-slate-300 hover:text-gray-900 hover:bg-sky-100 hover:border-sky-700"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
