import { useState } from "react";
import { Navbar } from "../sections/Navbar";
import { LoadingModal } from "../sections/Apply/Components/LoadingModal"; 
import { Apply } from "../sections/Apply";
import { Footer } from "../sections/Footer";

export const ApplicationForm = () => {
  const [isSubmitting, _setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCloseError = () => {
    setIsError(false);
    setErrorMessage("");
  };

  return (
    <>
      <Navbar/>      
      <LoadingModal 
        isSubmitting={isSubmitting}
        isError={isError}
        errorMessage={errorMessage}
        onCloseError={handleCloseError}
      />
      <Apply/>
      <Footer/>
    </>
  );
};
