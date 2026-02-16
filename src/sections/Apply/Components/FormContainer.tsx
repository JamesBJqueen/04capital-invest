import { useState } from "react";
import { ProgressIndicator } from "./ProgressIndicator";
import { ApplicationForm } from "./ApplicationForm";
import { LoadingModal } from "./LoadingModal";

export const FormContainer = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 7; // Total number of steps

  const handleSubmit = () => {
    setIsSubmitting(true);
  };

  const handleSubmitComplete = () => {
    setIsSubmitting(false);
  };

  const handleError = (message?: string) => {
    setIsSubmitting(false);
    setIsError(true);
    setErrorMessage(message);
  };

  const handleCloseError = () => {
    setIsError(false);
    setErrorMessage(undefined);
  };

  const handleStepChange = (step: number) => {
    setCurrentStep(step);
  };

  return (
    <>
      <div className="bg-white shadow-[rgba(15,23,42,0.12)_0px_18px_45px_0px] box-border caret-transparent border border-slate-200 pt-[30.4px] pb-20 px-4 rounded-3xl border-solid md:pb-[33.6px] md:px-[25.6px]">
        <ProgressIndicator currentStep={currentStep} totalSteps={totalSteps} />
        <ApplicationForm
          onSubmit={handleSubmit}
          onSubmitComplete={handleSubmitComplete}
          onError={handleError}
          onStepChange={handleStepChange}
        />
      </div>
      <LoadingModal
        isSubmitting={isSubmitting}
        isError={isError}
        errorMessage={errorMessage}
        onCloseError={handleCloseError}
      />
    </>
  );
};
