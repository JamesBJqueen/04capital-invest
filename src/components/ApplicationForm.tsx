import { Navbar } from "../sections/Navbar";
import { LoadingModal } from "../sections/Apply/Components/LoadingModal"; 
import { Apply } from "../sections/Apply";
import { Footer } from "../sections/Footer";

export const ApplicationForm = () => {
  return (
    <>
      <Navbar/>      
      <LoadingModal />
      <Apply/>
      <Footer/>
    </>
  );
};
