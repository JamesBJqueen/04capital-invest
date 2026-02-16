import { FAQList } from "./FAQList";
import { Sidebar } from "./SideBar";

type FAQContainerProps = {
  selectedCategory: string;
};

export const FAQContainer = (props: FAQContainerProps) => {
  return (
    <div className="box-border caret-transparent gap-x-[28.8px] grid grid-cols-[minmax(0px,1fr)] max-w-[1140px] gap-y-[28.8px] w-full mt-[22.4px] mx-auto px-4 md:grid-cols-[minmax(0px,2.1fr)_minmax(0px,1fr)] md:px-5">
      <FAQList selectedCategory={props.selectedCategory} />
      <Sidebar />
    </div>
  );
};
