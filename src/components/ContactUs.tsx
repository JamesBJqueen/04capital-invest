import { Navbar } from "../sections/Navbar";
import { ContactSection } from "../sections/ContactSection";
import { Footer } from "../sections/Footer";

export const Contact = () => {
  return (
    <div className="box-border caret-transparent">
      <Navbar/>      
      <ContactSection />
      <Footer/>
    </div>
  );
};
