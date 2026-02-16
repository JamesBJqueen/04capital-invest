import { ContactCard } from "./ContactCard";

export const Sidebar = () => {
  return (
    <aside className="self-start box-border caret-transparent -order-1 md:order-none">
      <ContactCard />
    </aside>
  );
};
