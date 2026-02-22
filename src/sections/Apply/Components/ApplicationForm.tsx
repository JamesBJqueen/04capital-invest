import React, { useState, useRef } from 'react';

import Swal from "sweetalert2";

type ApplicationFormProps = {
  onSubmit?: () => void;
  onSubmitComplete?: () => void;
  onError?: (message?: string) => void;
  onStepChange?: (step: number) => void;
};

export const ApplicationForm = (props: ApplicationFormProps) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "08e554fe-298a-47e2-ab9f-a92d08259ab1");

    // Add uploaded files to the form data
    uploadedFiles.forEach((file, index) => {
      if (file) {
        formData.append(`bank_statements[${index}]`, file);
      }
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          title: "Good job!",
          text: "Your message has been sent successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });

        event.currentTarget.reset(); // optional: clear form
        setResult("Success!");
      } else {
        Swal.fire({
          title: "Submission failed",
          text: "Something went wrong. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
        });

        setResult("Error");
      }
    } catch (error) {
      Swal.fire({
          title: "Good job!",
          text: "Your message has been sent successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });

        event.currentTarget.reset(); // optional: clear form
        setResult("Success!");
    }
  };  

  const [step, setStep] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showManualUpload, setShowManualUpload] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<(File | null)[]>([null, null, null]);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const fileInputRefs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];

  const steps = ['basic', 'funding', 'business', 'review', 'documents', 'submitted'];

  const handleFileSelect = (index: number, file: File | null) => {
    if (file && (file.type !== 'application/pdf' || file.size > 10 * 1024 * 1024)) {
      Swal.fire({
        title: "Invalid file",
        text: "Please upload a PDF file smaller than 10 MB.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }
    const newFiles = [...uploadedFiles];
    newFiles[index] = file;
    setUploadedFiles(newFiles);
  };

  const handleFileInputChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    handleFileSelect(index, file);
  };

  const handleDrop = (index: number, e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOverIndex(null);
    const file = e.dataTransfer.files?.[0] || null;
    handleFileSelect(index, file);
  };

  const handleRemoveFile = (index: number) => {
    const newFiles = [...uploadedFiles];
    newFiles[index] = null;
    setUploadedFiles(newFiles);
    if (fileInputRefs[index].current) {
      fileInputRefs[index].current.value = '';
    }
  };

  const triggerFileInput = (index: number) => {
    fileInputRefs[index].current?.click();
  };

  const validateStep = (s:number) => {
    setErrorMessage(null);
    const form = formRef.current;
    if (!form) return false;
    const fm = new FormData(form);
    const errors:string[] = [];
    if (s === 0) {
      const first = (fm.get('merchant_first_name') || '').toString().trim();
      const last = (fm.get('merchant_last_name') || '').toString().trim();
      const email = (fm.get('merchant_email') || '').toString().trim();
      const accept = fm.get('accept_privacy_terms');
      if (!first) errors.push('First name is required');
      if (!last) errors.push('Last name is required');
      if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) errors.push('Please enter a valid email');
      if (!accept) errors.push('You must accept the Terms & Conditions');
    }
    if (s === 1) {
      const amount = (fm.get('merchant_amount_requested') || '').toString().trim();
      const use = (fm.get('merchant_use_of_funds') || '').toString().trim();
      if (!use) errors.push('Please select how you will use the funds');
      if (!amount) errors.push('Please enter the funding amount');
    }
    if (s === 2) {
      const name = (fm.get('company_legal_corporate_name') || '').toString().trim();
      if (!name) errors.push('Legal business name is required');
    }
    if (errors.length) {
      setErrorMessage(errors.join('. '));
      return false;
    }
    return true;
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.preventDefault();
    if (step >= steps.length - 1) return;
    if (!validateStep(step)) return;
    if (step === steps.length - 2) {
      handleSubmit();
      return;
    }
    const newStep = step + 1;
    setStep(newStep);
    props.onStepChange?.(newStep);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = (e?: React.MouseEvent) => {
    e?.preventDefault();
    setErrorMessage(null);
    const newStep = Math.max(0, step - 1);
    setStep(newStep);
    props.onStepChange?.(newStep);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = () => {
    setErrorMessage(null);
    props.onSubmit?.();
    setIsSubmitting(true);
    const form = formRef.current;
    const fm = new FormData(form || undefined);
    const payload: Record<string, any> = {};
    fm.forEach((v,k) => { payload[k] = v; });
    setTimeout(() => {
      setIsSubmitting(false);
      props.onSubmitComplete?.();
      setIsSubmitted(true);
      setStep(steps.length - 1);
    }, 1200);
  };

  return (
    <form onSubmit={onSubmit} ref={formRef} className="box-border caret-transparent">
      <div className={step === 0 ? 'box-border caret-transparent' : 'box-border caret-transparent hidden'}>
        <h2 className="text-gray-900 text-[25.6px] font-bold box-border caret-transparent leading-[40.96px] mb-[6.4px]">
          Basic information
        </h2>
        <p className="text-gray-600 text-[15.2px] box-border caret-transparent leading-[24.32px] mb-[22.4px]">
          Tell us who we’re working with.
        </p>
        <div className="box-border caret-transparent gap-x-[14.4px] grid grid-cols-[minmax(0px,1fr)] gap-y-[14.4px] md:grid-cols-[repeat(2,minmax(0px,1fr))]">
          <div className="box-border caret-transparent gap-x-[5.6px] flex flex-col gap-y-[5.6px] mb-[14.4px]">
            <label className="text-gray-700 text-[13.6px] box-border caret-transparent block leading-[21.76px] after:accent-auto after:box-border after:caret-transparent after:text-red-600 after:text-[13.6px] after:not-italic after:normal-nums after:font-semibold after:tracking-[normal] after:leading-[21.76px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-montserrat">
              First name
            </label>
            <input
              type="text"
              id="merchant_first_name"
              name="merchant_first_name"
              className="text-[14.4px] bg-gray-50 box-border caret-transparent block leading-[normal] w-full border border-slate-300 px-[15.2px] py-[8.8px] rounded-[999px] border-solid font-arial"
            />
          </div>
          <div className="box-border caret-transparent gap-x-[5.6px] flex flex-col gap-y-[5.6px] mb-[14.4px]">
            <label className="text-gray-700 text-[13.6px] box-border caret-transparent block leading-[21.76px]">
              Middle name (optional)
            </label>
            <input
              type="text"
              id="merchant_middle_name"
              name="merchant_middle_name"
              className="text-[14.4px] bg-gray-50 box-border caret-transparent block leading-[normal] w-full border border-slate-300 px-[15.2px] py-[8.8px] rounded-[999px] border-solid font-arial"
            />
          </div>
          <div className="box-border caret-transparent gap-x-[5.6px] flex flex-col gap-y-[5.6px] mb-[14.4px]">
            <label className="text-gray-700 text-[13.6px] box-border caret-transparent block leading-[21.76px] after:accent-auto after:box-border after:caret-transparent after:text-red-600 after:text-[13.6px] after:not-italic after:normal-nums after:font-semibold after:tracking-[normal] after:leading-[21.76px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-montserrat">
              Last name
            </label>
            <input
              type="text"
              id="merchant_last_name"
              name="merchant_last_name"
              className="text-[14.4px] bg-gray-50 box-border caret-transparent block leading-[normal] w-full border border-slate-300 px-[15.2px] py-[8.8px] rounded-[999px] border-solid font-arial"
            />
          </div>
          <div className="box-border caret-transparent gap-x-[5.6px] flex flex-col gap-y-[5.6px] mb-[14.4px]">
            <label className="text-gray-700 text-[13.6px] box-border caret-transparent block leading-[21.76px] after:accent-auto after:box-border after:caret-transparent after:text-red-600 after:text-[13.6px] after:not-italic after:normal-nums after:font-semibold after:tracking-[normal] after:leading-[21.76px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-montserrat">
              Email address
            </label>
            <input
              type="email"
              id="merchant_email"
              name="merchant_email"
              className="text-[14.4px] bg-gray-50 box-border caret-transparent block leading-[normal] w-full border border-slate-300 px-[15.2px] py-[8.8px] rounded-[999px] border-solid font-arial"
            />
            <div className="text-red-500 text-[11px] box-border caret-transparent hidden leading-[14.3px] mt-[3px] md:text-xs md:leading-[15.6px] md:mt-1">
              Please enter a valid email address.
            </div>
            <div className="text-red-500 text-[11px] box-border caret-transparent hidden leading-[14.3px] mt-[3px] md:text-xs md:leading-[15.6px] md:mt-1">
              Email already in use, please sign in.
            </div>
            <div className="text-red-500 text-[11px] box-border caret-transparent hidden leading-[14.3px] mt-[3px] md:text-xs md:leading-[15.6px] md:mt-1">
              Too many requests. Please try again later.
            </div>
          </div>
          <div className="box-border caret-transparent gap-x-[5.6px] flex flex-col gap-y-[5.6px] mb-[14.4px]">
            <label className="text-gray-700 text-[13.6px] box-border caret-transparent block leading-[21.76px] after:accent-auto after:box-border after:caret-transparent after:text-red-600 after:text-[13.6px] after:not-italic after:normal-nums after:font-semibold after:tracking-[normal] after:leading-[21.76px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-montserrat">
              Personal gross annual revenue
            </label>
            <div className="relative box-border caret-transparent">
              <span className="absolute text-neutral-700 text-[15.2px] box-border caret-transparent block leading-[24.32px] translate-y-[-50.0%] left-3 top-2/4">
                $
              </span>
              <input
                type="text"
                name="merchant_gross_annual_revenue"
                placeholder="e.g. 350,000"
                className="text-[14.4px] bg-gray-50 box-border caret-transparent block leading-[normal] w-full border border-slate-300 pl-7 pr-[15.2px] py-[8.8px] rounded-[999px] border-solid font-arial"
              />
            </div>
          </div>
          <div className="box-border caret-transparent gap-x-[5.6px] flex flex-col gap-y-[5.6px] mb-[14.4px]">
            <label className="text-gray-700 text-[13.6px] box-border caret-transparent block leading-[21.76px] after:accent-auto after:box-border after:caret-transparent after:text-red-600 after:text-[13.6px] after:not-italic after:normal-nums after:font-semibold after:tracking-[normal] after:leading-[21.76px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-montserrat">
              Mobile phone
            </label>
            <div className="box-border caret-transparent">
              <input
                type="tel"
                name="merchant_cell_phone_number"
                placeholder="212-555-1234"
                className="text-[14.4px] bg-gray-50 box-border caret-transparent block basis-[0%] grow leading-[normal] w-full border border-slate-300 px-[15.2px] py-[8.8px] rounded-[999px] border-solid font-arial"
              />
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent mt-[17.6px]">
          <label className="text-gray-600 text-[13.76px] items-start box-border caret-transparent gap-x-2 flex leading-[22.016px] gap-y-2 cursor-pointer">
            <input type="checkbox" id="accept_privacy_terms" name="accept_privacy_terms" className="w-4 h-4 mt-1" />
            <span className="text-[13.6px] block leading-[20.4px]">
              By clicking Continue, you authorize 04-Capital Investment and its
              representatives to deliver telemarketing calls and text messages
              to the telephone number you’ve provided above, including by using
              an automatic telephone dialing system, pre-recorded and artificial
              voice messages, and automated text message technology. You
              understand that message and data rates may apply and that your
              consent is not a condition of receiving funding or any other
              services. You acknowledge that you have read and agree to Gate
              Rock Capital’s
              <a
                href="https://04capitalinvestment.com/terms-and-conditions"
                className="text-sky-700 font-semibold box-border caret-transparent underline px-0.5 hover:text-blue-500 hover:border-blue-500"
              >
                Terms &amp; Conditions
              </a>
              and
              <a
                href="https://04capitalinvestment.com/privacy-policy"
                className="text-sky-700 font-semibold box-border caret-transparent underline px-0.5 hover:text-blue-500 hover:border-blue-500"
              >
                Privacy Policy
              </a>
              , and you understand that additional details about how we may
              contact you are provided in the Privacy Policy.
            </span>
          </label>
        </div>
      </div>
      <div className={step === 1 ? 'box-border caret-transparent' : 'box-border caret-transparent hidden'}>
        <h2 className="text-gray-900 text-[20.8px] font-bold box-border caret-transparent leading-[33.28px] mb-[6.4px]">
          Funding details
        </h2>
        <p className="text-gray-600 text-[14.4px] box-border caret-transparent leading-[23.04px] mb-[22.4px]">
          Help us understand how to structure your offer.
        </p>
        <div className="box-border caret-transparent gap-x-[5.6px] flex flex-col gap-y-[5.6px] mb-[14.4px]">
          <label className="text-gray-700 text-[13.6px] box-border caret-transparent block leading-[21.76px] after:accent-auto after:box-border after:caret-transparent after:text-red-600 after:text-[13.6px] after:not-italic after:normal-nums after:font-semibold after:tracking-[normal] after:leading-[21.76px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-montserrat">
            How will you use the funds?
          </label>
          <select
            id="merchant_use_of_funds"
            name="merchant_use_of_funds"
            className="text-[14.4px] bg-gray-50 caret-transparent block leading-[normal] opacity-70 w-full border-slate-300 px-[15.2px] py-[8.8px] rounded-[999px] font-arial"
          >
            <option
              value=""
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Select an option
            </option>
            <option
              value="Business expenses"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Business expenses
            </option>
            <option
              value="Working capital"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Working capital
            </option>
            <option
              value="Other business purposes"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Other business purposes
            </option>
          </select>
        </div>
        <div className="box-border caret-transparent gap-x-[5.6px] flex flex-col gap-y-[5.6px] mb-[14.4px]">
          <label className="text-gray-700 text-[13.6px] box-border caret-transparent block leading-[21.76px] after:accent-auto after:box-border after:caret-transparent after:text-red-600 after:text-[13.6px] after:not-italic after:normal-nums after:font-semibold after:tracking-[normal] after:leading-[21.76px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-montserrat">
            How much funding do you think you need?
          </label>
          <div className="relative box-border caret-transparent">
            <span className="absolute text-neutral-700 text-[15.2px] box-border caret-transparent block leading-[24.32px] left-3 top-2/4">
              $
            </span>
            <input
              type="text"
              id="merchant_amount_requested"
              name="merchant_amount_requested"
              placeholder="e.g. 30,000"
              className="text-[14.4px] bg-gray-50 box-border caret-transparent block leading-[normal] w-full border border-slate-300 pl-7 pr-[15.2px] py-[8.8px] rounded-[999px] border-solid font-arial"
            />
          </div>
        </div>
        <div className="box-border caret-transparent gap-x-[5.6px] flex flex-col gap-y-[5.6px] mb-[14.4px]">
          <label className="text-gray-700 text-[13.6px] box-border caret-transparent block leading-[21.76px] after:accent-auto after:box-border after:caret-transparent after:text-red-600 after:text-[13.6px] after:not-italic after:normal-nums after:font-semibold after:tracking-[normal] after:leading-[21.76px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-montserrat">
            How soon do you need the funds?
          </label>
          <select
            id="merchant_how_soon_need_funding"
            name="merchant_how_soon_need_funding"
            className="text-[14.4px] bg-gray-50 caret-transparent block leading-[normal] opacity-70 w-full border-slate-300 px-[15.2px] py-[8.8px] rounded-[999px] font-arial"
          >
            <option
              value=""
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Select a timeframe
            </option>
            <option
              value="24 hours"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Within 24 hours
            </option>
            <option
              value="72 hours"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Within 72 hours
            </option>
            <option
              value="3 days"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Within 3 days
            </option>
            <option
              value="1 week"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Within 1 week
            </option>
            <option
              value="1 month"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Within 1 month
            </option>
            <option
              value="3-6 months"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              In 3 – 6 months
            </option>
          </select>
        </div>
      </div>
      <div className={step === 2 ? 'box-border caret-transparent' : 'box-border caret-transparent hidden'}>
        <h2 className="text-gray-900 text-[20.8px] font-bold box-border caret-transparent leading-[33.28px] mb-[6.4px]">
          Your business
        </h2>
        <p className="text-gray-600 text-[14.4px] box-border caret-transparent leading-[23.04px] mb-[22.4px]">
          Tell us about your company and where it operates.
        </p>
        <h3 className="text-gray-600 text-[15.04px] font-bold box-border caret-transparent tracking-[1.2032px] leading-[24.064px] uppercase mt-[22.4px] mb-[11.2px]">
          Business contact info
        </h3>
        <div className="box-border caret-transparent gap-x-[5.6px] flex flex-col gap-y-[5.6px] mb-[14.4px]">
          <label className="text-gray-700 text-[13.6px] box-border caret-transparent block leading-[21.76px] after:accent-auto after:box-border after:caret-transparent after:text-red-600 after:text-[13.6px] after:not-italic after:normal-nums after:font-semibold after:tracking-[normal] after:leading-[21.76px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-montserrat">
            Legal business name
          </label>
          <input
            type="text"
            id="company_legal_corporate_name"
            name="company_legal_corporate_name"
            className="text-[14.4px] bg-gray-50 box-border caret-transparent block leading-[normal] w-full border border-slate-300 px-[15.2px] py-[8.8px] rounded-[999px] border-solid font-arial"
          />
        </div>
        <div className="box-border caret-transparent gap-x-[5.6px] flex flex-col gap-y-[5.6px] mb-[14.4px]">
          <label className="text-gray-700 text-[13.6px] box-border caret-transparent block leading-[21.76px]">
            Doing business as (DBA, if applicable)
          </label>
          <input
            type="text"
            name="company_dba"
            placeholder="Optional"
            className="text-[14.4px] bg-gray-50 box-border caret-transparent block leading-[normal] w-full border border-slate-300 px-[15.2px] py-[8.8px] rounded-[999px] border-solid font-arial"
          />
        </div>
        <div className="box-border caret-transparent gap-x-[14.4px] grid grid-cols-[minmax(0px,1fr)] gap-y-[14.4px] md:grid-cols-[repeat(2,minmax(0px,1fr))]">
          <div className="box-border caret-transparent gap-x-[5.6px] flex flex-col gap-y-[5.6px] mb-[14.4px]">
            <label className="text-gray-700 text-[13.6px] box-border caret-transparent block leading-[21.76px] after:accent-auto after:box-border after:caret-transparent after:text-red-600 after:text-[13.6px] after:not-italic after:normal-nums after:font-semibold after:tracking-[normal] after:leading-[21.76px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-montserrat">
              Street address
            </label>
            <input
              type="text"
              name="company_address_line1"
              placeholder="123 Main St"
              className="text-[14.4px] bg-gray-50 box-border caret-transparent block leading-[normal] w-full border border-slate-300 px-[15.2px] py-[8.8px] rounded-[999px] border-solid font-arial"
            />
          </div>
          <div className="box-border caret-transparent gap-x-[5.6px] flex flex-col gap-y-[5.6px] mb-[14.4px]">
            <label className="text-gray-700 text-[13.6px] box-border caret-transparent block leading-[21.76px]">
              Suite / unit (optional)
            </label>
            <input
              type="text"
              name="company_apt_unit"
              className="text-[14.4px] bg-gray-50 box-border caret-transparent block leading-[normal] w-full border border-slate-300 px-[15.2px] py-[8.8px] rounded-[999px] border-solid font-arial"
            />
          </div>
        </div>
        <div className="box-border caret-transparent gap-x-[14.4px] grid grid-cols-[minmax(0px,1fr)] gap-y-[14.4px] md:grid-cols-[repeat(2,minmax(0px,1fr))]">
          <div className="box-border caret-transparent gap-x-[5.6px] flex flex-col gap-y-[5.6px] mb-[14.4px]">
            <label className="text-gray-700 text-[13.6px] box-border caret-transparent block leading-[21.76px] after:accent-auto after:box-border after:caret-transparent after:text-red-600 after:text-[13.6px] after:not-italic after:normal-nums after:font-semibold after:tracking-[normal] after:leading-[21.76px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-montserrat">
              City
            </label>
            <input
              type="text"
              name="company_city"
              className="text-[14.4px] bg-gray-50 box-border caret-transparent block leading-[normal] w-full border border-slate-300 px-[15.2px] py-[8.8px] rounded-[999px] border-solid font-arial"
            />
          </div>
          <div className="box-border caret-transparent gap-x-[5.6px] flex flex-col gap-y-[5.6px] mb-[14.4px]">
            <label className="text-gray-700 text-[13.6px] box-border caret-transparent block leading-[21.76px] after:accent-auto after:box-border after:caret-transparent after:text-red-600 after:text-[13.6px] after:not-italic after:normal-nums after:font-semibold after:tracking-[normal] after:leading-[21.76px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-montserrat">
              State
            </label>
            <select
              id="company_state"
              name="company_state"
              className="text-[14.4px] bg-gray-50 caret-transparent block leading-[normal] opacity-70 w-full border-slate-300 px-[15.2px] py-[8.8px] rounded-[999px] font-arial"
            >
              <option
                value=""
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Select a state
              </option>
              <option
                value="AL"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Alabama
              </option>
              <option
                value="AK"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Alaska
              </option>
              <option
                value="AZ"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Arizona
              </option>
              <option
                value="AR"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Arkansas
              </option>
              <option
                value="CA"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                California
              </option>
              <option
                value="CO"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Colorado
              </option>
              <option
                value="CT"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Connecticut
              </option>
              <option
                value="DE"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Delaware
              </option>
              <option
                value="FL"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Florida
              </option>
              <option
                value="GA"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Georgia
              </option>
              <option
                value="HI"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Hawaii
              </option>
              <option
                value="ID"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Idaho
              </option>
              <option
                value="IL"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Illinois
              </option>
              <option
                value="IN"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Indiana
              </option>
              <option
                value="IA"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Iowa
              </option>
              <option
                value="KS"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Kansas
              </option>
              <option
                value="KY"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Kentucky
              </option>
              <option
                value="LA"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Louisiana
              </option>
              <option
                value="ME"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Maine
              </option>
              <option
                value="MD"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Maryland
              </option>
              <option
                value="MA"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Massachusetts
              </option>
              <option
                value="MI"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Michigan
              </option>
              <option
                value="MN"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Minnesota
              </option>
              <option
                value="MS"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Mississippi
              </option>
              <option
                value="MO"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Missouri
              </option>
              <option
                value="MT"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Montana
              </option>
              <option
                value="NE"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Nebraska
              </option>
              <option
                value="NV"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Nevada
              </option>
              <option
                value="NH"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                New Hampshire
              </option>
              <option
                value="NJ"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                New Jersey
              </option>
              <option
                value="NM"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                New Mexico
              </option>
              <option
                value="NY"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                New York
              </option>
              <option
                value="NC"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                North Carolina
              </option>
              <option
                value="ND"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                North Dakota
              </option>
              <option
                value="OH"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Ohio
              </option>
              <option
                value="OK"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Oklahoma
              </option>
              <option
                value="OR"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Oregon
              </option>
              <option
                value="PA"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Pennsylvania
              </option>
              <option
                value="RI"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Rhode Island
              </option>
              <option
                value="SC"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                South Carolina
              </option>
              <option
                value="SD"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                South Dakota
              </option>
              <option
                value="TN"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Tennessee
              </option>
              <option
                value="TX"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Texas
              </option>
              <option
                value="UT"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Utah
              </option>
              <option
                value="VT"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Vermont
              </option>
              <option
                value="VA"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Virginia
              </option>
              <option
                value="WA"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Washington
              </option>
              <option
                value="WV"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                West Virginia
              </option>
              <option
                value="WI"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Wisconsin
              </option>
              <option
                value="WY"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Wyoming
              </option>
            </select>
          </div>
        </div>
        <div className="box-border caret-transparent gap-x-[5.6px] flex flex-col gap-y-[5.6px] mb-[14.4px]">
          <label className="text-gray-700 text-[13.6px] box-border caret-transparent block leading-[21.76px] after:accent-auto after:box-border after:caret-transparent after:text-red-600 after:text-[13.6px] after:not-italic after:normal-nums after:font-semibold after:tracking-[normal] after:leading-[21.76px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-montserrat">
            ZIP code
          </label>
          <input
            type="text"
            name="company_zip"
            className="text-[14.4px] bg-gray-50 box-border caret-transparent block leading-[normal] w-full border border-slate-300 px-[15.2px] py-[8.8px] rounded-[999px] border-solid font-arial"
          />
        </div>
        <div className="box-border caret-transparent gap-x-[5.6px] flex flex-col gap-y-[5.6px] mb-[14.4px]">
          <span className="box-border caret-transparent block after:accent-auto after:box-border after:caret-transparent after:text-red-600 after:text-base after:not-italic after:normal-nums after:font-semibold after:tracking-[normal] after:leading-[25.6px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-montserrat">
            Do you own or rent the business property?
          </span>
          <div className="box-border caret-transparent gap-x-2 flex flex-wrap gap-y-2">
            <label className="text-gray-700 text-[13.6px] items-center bg-gray-50 box-border caret-transparent gap-x-[5.6px] flex leading-[21.76px] gap-y-[5.6px] border border-slate-300 px-[13.6px] py-[5.6px] rounded-[999px] border-solid cursor-pointer">
              <input type="radio" name="company_own_or_rent_the_business_property" value="1" className="w-4 h-4" />
              <span>Own</span>
            </label>
            <label className="text-gray-700 text-[13.6px] items-center bg-gray-50 box-border caret-transparent gap-x-[5.6px] flex leading-[21.76px] gap-y-[5.6px] border border-slate-300 px-[13.6px] py-[5.6px] rounded-[999px] border-solid cursor-pointer">
              <input type="radio" name="company_own_or_rent_the_business_property" value="0" className="w-4 h-4" />
              <span>Rent</span>
            </label>
          </div>
        </div>
        <h3 className="text-gray-600 text-[15.04px] font-bold box-border caret-transparent tracking-[1.2032px] leading-[24.064px] uppercase mt-[22.4px] mb-[11.2px]">
          Business details
        </h3>
        <div className="box-border caret-transparent gap-x-[14.4px] grid grid-cols-[minmax(0px,1fr)] gap-y-[14.4px] md:grid-cols-[repeat(2,minmax(0px,1fr))]">
          <div className="box-border caret-transparent gap-x-[5.6px] flex flex-col gap-y-[5.6px] mb-[14.4px]">
            <label className="text-gray-700 text-[13.6px] box-border caret-transparent block leading-[21.76px] after:accent-auto after:box-border after:caret-transparent after:text-red-600 after:text-[13.6px] after:not-italic after:normal-nums after:font-semibold after:tracking-[normal] after:leading-[21.76px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-montserrat">
              Business start date
            </label>
            <input
              type="text"
              name="company_business_start_date"
              placeholder="MM/DD/YYYY"
              className="text-[14.4px] bg-gray-50 box-border caret-transparent block leading-[normal] w-full border border-slate-300 px-[15.2px] py-[8.8px] rounded-[999px] border-solid font-arial"
            />
          </div>
          <div className="box-border caret-transparent gap-x-[5.6px] flex flex-col gap-y-[5.6px] mb-[14.4px]">
            <label className="text-gray-700 text-[13.6px] box-border caret-transparent block leading-[21.76px] after:accent-auto after:box-border after:caret-transparent after:text-red-600 after:text-[13.6px] after:not-italic after:normal-nums after:font-semibold after:tracking-[normal] after:leading-[21.76px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-montserrat">
              Entity type
            </label>
            <select
              id="company_type_of_entity"
              name="company_type_of_entity"
              className="text-[14.4px] bg-gray-50 caret-transparent block leading-[normal] opacity-70 w-full border-slate-300 px-[15.2px] py-[8.8px] rounded-[999px] font-arial"
            >
              <option
                value=""
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Select
              </option>
              <option
                value="Sole Proprietorship"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Sole Proprietorship
              </option>
              <option
                value="Limited Liability Company"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Limited Liability Company
              </option>
              <option
                value="Partnership"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Partnership
              </option>
              <option
                value="Corporation"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Corporation
              </option>
              <option
                value="Other"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Other
              </option>
            </select>
          </div>
        </div>
        <div className="box-border caret-transparent gap-x-[5.6px] flex flex-col gap-y-[5.6px] mb-[14.4px]">
          <label className="text-gray-700 text-[13.6px] box-border caret-transparent block leading-[21.76px] after:accent-auto after:box-border after:caret-transparent after:text-red-600 after:text-[13.6px] after:not-italic after:normal-nums after:font-semibold after:tracking-[normal] after:leading-[21.76px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-montserrat">
            State of Incorporation
          </label>
          <select
            id="company_state_of_incorporation"
            name="company_state_of_incorporation"
            className="text-[14.4px] bg-gray-50 caret-transparent block leading-[normal] opacity-70 w-full border-slate-300 px-[15.2px] py-[8.8px] rounded-[999px] font-arial"
          >
            <option
              value=""
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Select a state
            </option>
            <option
              value="AL"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Alabama
            </option>
            <option
              value="AK"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Alaska
            </option>
            <option
              value="AZ"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Arizona
            </option>
            <option
              value="AR"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Arkansas
            </option>
            <option
              value="CA"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              California
            </option>
            <option
              value="CO"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Colorado
            </option>
            <option
              value="CT"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Connecticut
            </option>
            <option
              value="DE"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Delaware
            </option>
            <option
              value="FL"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Florida
            </option>
            <option
              value="GA"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Georgia
            </option>
            <option
              value="HI"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Hawaii
            </option>
            <option
              value="ID"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Idaho
            </option>
            <option
              value="IL"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Illinois
            </option>
            <option
              value="IN"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Indiana
            </option>
            <option
              value="IA"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Iowa
            </option>
            <option
              value="KS"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Kansas
            </option>
            <option
              value="KY"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Kentucky
            </option>
            <option
              value="LA"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Louisiana
            </option>
            <option
              value="ME"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Maine
            </option>
            <option
              value="MD"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Maryland
            </option>
            <option
              value="MA"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Massachusetts
            </option>
            <option
              value="MI"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Michigan
            </option>
            <option
              value="MN"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Minnesota
            </option>
            <option
              value="MS"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Mississippi
            </option>
            <option
              value="MO"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Missouri
            </option>
            <option
              value="MT"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Montana
            </option>
            <option
              value="NE"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Nebraska
            </option>
            <option
              value="NV"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Nevada
            </option>
            <option
              value="NH"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              New Hampshire
            </option>
            <option
              value="NJ"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              New Jersey
            </option>
            <option
              value="NM"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              New Mexico
            </option>
            <option
              value="NY"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              New York
            </option>
            <option
              value="NC"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              North Carolina
            </option>
            <option
              value="ND"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              North Dakota
            </option>
            <option
              value="OH"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Ohio
            </option>
            <option
              value="OK"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Oklahoma
            </option>
            <option
              value="OR"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Oregon
            </option>
            <option
              value="PA"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Pennsylvania
            </option>
            <option
              value="RI"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Rhode Island
            </option>
            <option
              value="SC"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              South Carolina
            </option>
            <option
              value="SD"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              South Dakota
            </option>
            <option
              value="TN"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Tennessee
            </option>
            <option
              value="TX"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Texas
            </option>
            <option
              value="UT"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Utah
            </option>
            <option
              value="VT"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Vermont
            </option>
            <option
              value="VA"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Virginia
            </option>
            <option
              value="WA"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Washington
            </option>
            <option
              value="WV"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              West Virginia
            </option>
            <option
              value="WI"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Wisconsin
            </option>
            <option
              value="WY"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Wyoming
            </option>
          </select>
        </div>
        <div className="box-border caret-transparent gap-x-[5.6px] flex flex-col gap-y-[5.6px] mb-[14.4px]">
          <label className="text-gray-700 text-[13.6px] box-border caret-transparent block leading-[21.76px] after:accent-auto after:box-border after:caret-transparent after:text-red-600 after:text-[13.6px] after:not-italic after:normal-nums after:font-semibold after:tracking-[normal] after:leading-[21.76px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-montserrat">
            Industry Type
          </label>
          <select
            id="company_industry_type"
            name="company_industry_type"
            className="text-[14.4px] bg-gray-50 caret-transparent block leading-[normal] opacity-70 w-full border-slate-300 px-[15.2px] py-[8.8px] rounded-[999px] font-arial"
          >
            <option
              value=""
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Select an industry
            </option>
            <option
              value="Construction"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Construction
            </option>
            <option
              value="Real Estate"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Real Estate
            </option>
            <option
              value="Retail"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Retail
            </option>
            <option
              value="E-Commerce"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              E-Commerce
            </option>
            <option
              value="Transportation / Trucking"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Transportation / Trucking
            </option>
            <option
              value="Hospitality / Restaurants"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Hospitality / Restaurants
            </option>
            <option
              value="Food & Beverage"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Food &amp; Beverage
            </option>
            <option
              value="Healthcare / Medical"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Healthcare / Medical
            </option>
            <option
              value="Professional Services"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Professional Services
            </option>
            <option
              value="Manufacturing"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Manufacturing
            </option>
            <option
              value="Wholesale"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Wholesale
            </option>
            <option
              value="Automotive"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Automotive
            </option>
            <option
              value="Beauty / Personal Care"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Beauty / Personal Care
            </option>
            <option
              value="Cleaning Services"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Cleaning Services
            </option>
            <option
              value="Education / Training"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Education / Training
            </option>
            <option
              value="Financial Services"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Financial Services
            </option>
            <option
              value="Technology / IT"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Technology / IT
            </option>
            <option
              value="Marketing / Advertising"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Marketing / Advertising
            </option>
            <option
              value="Real Estate Investment"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Real Estate Investment
            </option>
            <option
              value="Entertainment / Media"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Entertainment / Media
            </option>
            <option
              value="Nonprofit / Charity"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Nonprofit / Charity
            </option>
            <option
              value="Other"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Other
            </option>
          </select>
        </div>
        <div className="box-border caret-transparent gap-x-[5.6px] flex flex-col gap-y-[5.6px] mb-[14.4px]">
          <label className="text-gray-700 text-[13.6px] box-border caret-transparent block leading-[21.76px] after:accent-auto after:box-border after:caret-transparent after:text-red-600 after:text-[13.6px] after:not-italic after:normal-nums after:font-semibold after:tracking-[normal] after:leading-[21.76px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-montserrat">
            Number of Employees
          </label>
          <input
            type="number"
            name="company_number_of_employees"
            placeholder="e.g. 25"
            className="text-[14.4px] bg-gray-50 box-border caret-transparent block leading-[normal] w-full border border-slate-300 px-[15.2px] py-[8.8px] rounded-[999px] border-solid font-arial"
          />
        </div>
        <div className="box-border caret-transparent gap-x-[14.4px] grid grid-cols-[minmax(0px,1fr)] gap-y-[14.4px] md:grid-cols-[repeat(2,minmax(0px,1fr))]">
          <div className="box-border caret-transparent gap-x-[5.6px] flex flex-col gap-y-[5.6px] mb-[14.4px]">
            <label className="text-gray-700 text-[13.6px] box-border caret-transparent block leading-[21.76px] after:accent-auto after:box-border after:caret-transparent after:text-red-600 after:text-[13.6px] after:not-italic after:normal-nums after:font-semibold after:tracking-[normal] after:leading-[21.76px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-montserrat">
              Your ownership percentage
            </label>
            <input
              type="number"
              name="company_ownership_percent"
              placeholder="e.g. 100"
              className="text-[14.4px] bg-gray-50 box-border caret-transparent block leading-[normal] w-full border border-slate-300 px-[15.2px] py-[8.8px] rounded-[999px] border-solid font-arial"
            />
          </div>
          <div className="box-border caret-transparent gap-x-[5.6px] flex flex-col gap-y-[5.6px] mb-[14.4px]">
            <label className="text-gray-700 text-[13.6px] box-border caret-transparent block leading-[21.76px] after:accent-auto after:box-border after:caret-transparent after:text-red-600 after:text-[13.6px] after:not-italic after:normal-nums after:font-semibold after:tracking-[normal] after:leading-[21.76px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-montserrat">
              Business tax ID (EIN)
            </label>
            <input
              type="text"
              name="company_tax_id"
              className="text-[14.4px] bg-gray-50 box-border caret-transparent block leading-[normal] w-full border border-slate-300 px-[15.2px] py-[8.8px] rounded-[999px] border-solid font-arial"
            />
            <small className="text-gray-600 text-[12.48px] box-border caret-transparent block leading-[19.968px] mt-[4.8px]">
              9 digits, formatted (XX-XXXXXXX).
            </small>
            <div className="text-red-500 text-[11px] box-border caret-transparent hidden leading-[14.3px] mt-[3px] md:text-xs md:leading-[15.6px] md:mt-1">
              EIN must be 9 digits.
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent gap-x-[5.6px] flex flex-col gap-y-[5.6px] mb-[14.4px]">
          <label className="text-gray-700 text-[13.6px] box-border caret-transparent block leading-[21.76px]">
            Business website (Optional)
          </label>
          <input
            type="url"
            name="company_website_com"
            placeholder="https://www.yourbusiness.com"
            className="text-[14.4px] bg-gray-50 box-border caret-transparent block leading-[normal] w-full border border-slate-300 px-[15.2px] py-[8.8px] rounded-[999px] border-solid font-arial"
          />
          <div className="text-red-500 text-[11px] box-border caret-transparent hidden leading-[14.3px] mt-[3px] md:text-xs md:leading-[15.6px] md:mt-1">
            Please enter a valid website URL (example: https://example.com).
          </div>
        </div>
        <div className="box-border caret-transparent gap-x-[14.4px] grid grid-cols-[minmax(0px,1fr)] gap-y-[14.4px] md:grid-cols-[repeat(2,minmax(0px,1fr))]">
          <div className="box-border caret-transparent gap-x-[5.6px] flex flex-col gap-y-[5.6px] mb-[14.4px]">
            <span className="box-border caret-transparent block after:accent-auto after:box-border after:caret-transparent after:text-red-600 after:text-base after:not-italic after:normal-nums after:font-semibold after:tracking-[normal] after:leading-[25.6px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-montserrat">
              Is your business seasonal?
            </span>
            <div className="box-border caret-transparent gap-x-2 flex flex-wrap gap-y-2">
              <label className="text-gray-700 text-[13.6px] items-center bg-gray-50 box-border caret-transparent gap-x-[5.6px] flex leading-[21.76px] gap-y-[5.6px] border border-slate-300 px-[13.6px] py-[5.6px] rounded-[999px] border-solid cursor-pointer">
                <input type="radio" name="company_is_your_business_seasonal" value="1" className="w-4 h-4" />
                <span>Yes</span>
              </label>
              <label className="text-gray-700 text-[13.6px] items-center bg-gray-50 box-border caret-transparent gap-x-[5.6px] flex leading-[21.76px] gap-y-[5.6px] border border-slate-300 px-[13.6px] py-[5.6px] rounded-[999px] border-solid cursor-pointer">
                <input type="radio" name="company_is_your_business_seasonal" value="0" className="w-4 h-4" />
                <span>No</span>
              </label>
            </div>
          </div>
          <div className="box-border caret-transparent gap-x-[5.6px] flex flex-col gap-y-[5.6px] mb-[14.4px]">
            <span className="box-border caret-transparent block after:accent-auto after:box-border after:caret-transparent after:text-red-600 after:text-base after:not-italic after:normal-nums after:font-semibold after:tracking-[normal] after:leading-[25.6px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-montserrat">
              Has the business ever filed for bankruptcy?
            </span>
            <div className="box-border caret-transparent gap-x-2 flex flex-wrap gap-y-2">
              <label className="text-gray-700 text-[13.6px] items-center bg-gray-50 box-border caret-transparent gap-x-[5.6px] flex leading-[21.76px] gap-y-[5.6px] border border-slate-300 px-[13.6px] py-[5.6px] rounded-[999px] border-solid cursor-pointer">
                <input type="radio" name="company_filed_for_bankruptcy" value="1" className="w-4 h-4" />
                <span>Yes</span>
              </label>
              <label className="text-gray-700 text-[13.6px] items-center bg-gray-50 box-border caret-transparent gap-x-[5.6px] flex leading-[21.76px] gap-y-[5.6px] border border-slate-300 px-[13.6px] py-[5.6px] rounded-[999px] border-solid cursor-pointer">
                <input type="radio" name="company_filed_for_bankruptcy" value="0" className="w-4 h-4" />
                <span>No</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent hidden">
        <h2 className="text-gray-900 text-[20.8px] font-bold box-border caret-transparent leading-[33.28px] mb-[6.4px]">
          About you
        </h2>
        <p className="text-gray-600 text-[14.4px] box-border caret-transparent leading-[23.04px] mb-[22.4px]">
          Your personal details help us verify identity and protect against
          fraud.
        </p>
        <div className="box-border caret-transparent gap-x-[5.6px] flex flex-col gap-y-[5.6px] mb-[14.4px]">
          <label className="text-gray-700 text-[13.6px] box-border caret-transparent block leading-[21.76px] after:accent-auto after:box-border after:caret-transparent after:text-red-600 after:text-[13.6px] after:not-italic after:normal-nums after:font-semibold after:tracking-[normal] after:leading-[21.76px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-montserrat">
            Business Title
          </label>
          <select
            name="merchant_business_title"
            className="text-[14.4px] bg-gray-50 caret-transparent block leading-[normal] opacity-70 w-full border-slate-300 px-[15.2px] py-[8.8px] rounded-[999px] font-arial"
          >
            <option
              value=""
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Select your title
            </option>
            <option
              value="Owner"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Owner
            </option>
            <option
              value="Co-Owner"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Co-Owner
            </option>
            <option
              value="Managing Member"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Managing Member
            </option>
            <option
              value="Member"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Member
            </option>
            <option
              value="Managing Partner"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Managing Partner
            </option>
            <option
              value="Partner"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Partner
            </option>
            <option
              value="CEO"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              CEO
            </option>
            <option
              value="President"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              President
            </option>
            <option
              value="COO"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              COO
            </option>
            <option
              value="CFO"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              CFO
            </option>
            <option
              value="Vice President"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Vice President
            </option>
            <option
              value="Director"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Director
            </option>
            <option
              value="General Manager"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              General Manager
            </option>
            <option
              value="Manager"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Manager
            </option>
            <option
              value="Controller"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Controller
            </option>
            <option
              value="Treasurer"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Treasurer
            </option>
            <option
              value="Secretary"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Secretary
            </option>
            <option
              value="Founder"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Founder
            </option>
            <option
              value="Sole Proprietor"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Sole Proprietor
            </option>
            <option
              value="Authorized Representative"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Authorized Representative
            </option>
            <option
              value="Authorized Signer"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Authorized Signer
            </option>
            <option
              value="Other"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Other
            </option>
          </select>
        </div>
        <h3 className="text-gray-600 text-[15.04px] font-bold box-border caret-transparent tracking-[1.2032px] leading-[24.064px] uppercase mt-[22.4px] mb-[11.2px]">
          Home address
        </h3>
        <div className="box-border caret-transparent flex justify-start mb-3">
          <label className="text-gray-600 text-[14.4px] items-center box-border caret-transparent gap-x-[6.4px] flex leading-[23.04px] gap-y-[6.4px]">
            <input
              type="checkbox"
              className="text-neutral-600 text-[13.3333px] bg-transparent box-border caret-transparent block leading-[normal] ml-1 mr-[3px] mt-[1.6px] mb-[3px] p-0 font-arial"
            />
            <span className="box-border caret-transparent block">
              My home address is the same as my business address
            </span>
          </label>
        </div>
        <div className="box-border caret-transparent gap-x-[14.4px] grid grid-cols-[minmax(0px,1fr)] gap-y-[14.4px] md:grid-cols-[repeat(2,minmax(0px,1fr))]">
          <div className="box-border caret-transparent gap-x-[5.6px] flex flex-col gap-y-[5.6px] mb-[14.4px]">
            <label className="text-gray-700 text-[13.6px] box-border caret-transparent block leading-[21.76px] after:accent-auto after:box-border after:caret-transparent after:text-red-600 after:text-[13.6px] after:not-italic after:normal-nums after:font-semibold after:tracking-[normal] after:leading-[21.76px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-montserrat">
              Street address
            </label>
            <input
              type="text"
              name="merchant_address_line1"
              placeholder="123 Main St"
              className="text-[14.4px] bg-gray-50 box-border caret-transparent block leading-[normal] w-full border border-slate-300 px-[15.2px] py-[8.8px] rounded-[999px] border-solid font-arial"
            />
          </div>
          <div className="box-border caret-transparent gap-x-[5.6px] flex flex-col gap-y-[5.6px] mb-[14.4px]">
            <label className="text-gray-700 text-[13.6px] box-border caret-transparent block leading-[21.76px]">
              Apt / Unit (optional)
            </label>
            <input
              type="text"
              name="merchant_apt_unit"
              className="text-[14.4px] bg-gray-50 box-border caret-transparent block leading-[normal] w-full border border-slate-300 px-[15.2px] py-[8.8px] rounded-[999px] border-solid font-arial"
            />
          </div>
        </div>
        <div className="box-border caret-transparent gap-x-[14.4px] grid grid-cols-[minmax(0px,1fr)] gap-y-[14.4px] md:grid-cols-[repeat(2,minmax(0px,1fr))]">
          <div className="box-border caret-transparent gap-x-[5.6px] flex flex-col gap-y-[5.6px] mb-[14.4px]">
            <label className="text-gray-700 text-[13.6px] box-border caret-transparent block leading-[21.76px] after:accent-auto after:box-border after:caret-transparent after:text-red-600 after:text-[13.6px] after:not-italic after:normal-nums after:font-semibold after:tracking-[normal] after:leading-[21.76px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-montserrat">
              City
            </label>
            <input
              type="text"
              id="merchant_city"
              name="merchant_city"
              className="text-[14.4px] bg-gray-50 box-border caret-transparent block leading-[normal] w-full border border-slate-300 px-[15.2px] py-[8.8px] rounded-[999px] border-solid font-arial"
            />
          </div>
          <div className="box-border caret-transparent gap-x-[5.6px] flex flex-col gap-y-[5.6px] mb-[14.4px]">
            <label className="text-gray-700 text-[13.6px] box-border caret-transparent block leading-[21.76px] after:accent-auto after:box-border after:caret-transparent after:text-red-600 after:text-[13.6px] after:not-italic after:normal-nums after:font-semibold after:tracking-[normal] after:leading-[21.76px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-montserrat">
              State
            </label>
            <select
              id="merchant_state"
              name="merchant_state"
              className="text-[14.4px] bg-gray-50 caret-transparent block leading-[normal] opacity-70 w-full border-slate-300 px-[15.2px] py-[8.8px] rounded-[999px] font-arial"
            >
              <option
                value=""
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Select a state
              </option>
              <option
                value="AL"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Alabama
              </option>
              <option
                value="AK"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Alaska
              </option>
              <option
                value="AZ"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Arizona
              </option>
              <option
                value="AR"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Arkansas
              </option>
              <option
                value="CA"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                California
              </option>
              <option
                value="CO"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Colorado
              </option>
              <option
                value="CT"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Connecticut
              </option>
              <option
                value="DE"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Delaware
              </option>
              <option
                value="FL"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Florida
              </option>
              <option
                value="GA"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Georgia
              </option>
              <option
                value="HI"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Hawaii
              </option>
              <option
                value="ID"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Idaho
              </option>
              <option
                value="IL"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Illinois
              </option>
              <option
                value="IN"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Indiana
              </option>
              <option
                value="IA"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Iowa
              </option>
              <option
                value="KS"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Kansas
              </option>
              <option
                value="KY"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Kentucky
              </option>
              <option
                value="LA"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Louisiana
              </option>
              <option
                value="ME"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Maine
              </option>
              <option
                value="MD"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Maryland
              </option>
              <option
                value="MA"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Massachusetts
              </option>
              <option
                value="MI"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Michigan
              </option>
              <option
                value="MN"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Minnesota
              </option>
              <option
                value="MS"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Mississippi
              </option>
              <option
                value="MO"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Missouri
              </option>
              <option
                value="MT"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Montana
              </option>
              <option
                value="NE"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Nebraska
              </option>
              <option
                value="NV"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Nevada
              </option>
              <option
                value="NH"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                New Hampshire
              </option>
              <option
                value="NJ"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                New Jersey
              </option>
              <option
                value="NM"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                New Mexico
              </option>
              <option
                value="NY"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                New York
              </option>
              <option
                value="NC"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                North Carolina
              </option>
              <option
                value="ND"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                North Dakota
              </option>
              <option
                value="OH"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Ohio
              </option>
              <option
                value="OK"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Oklahoma
              </option>
              <option
                value="OR"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Oregon
              </option>
              <option
                value="PA"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Pennsylvania
              </option>
              <option
                value="RI"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Rhode Island
              </option>
              <option
                value="SC"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                South Carolina
              </option>
              <option
                value="SD"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                South Dakota
              </option>
              <option
                value="TN"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Tennessee
              </option>
              <option
                value="TX"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Texas
              </option>
              <option
                value="UT"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Utah
              </option>
              <option
                value="VT"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Vermont
              </option>
              <option
                value="VA"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Virginia
              </option>
              <option
                value="WA"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Washington
              </option>
              <option
                value="WV"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                West Virginia
              </option>
              <option
                value="WI"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Wisconsin
              </option>
              <option
                value="WY"
                className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
              >
                Wyoming
              </option>
            </select>
          </div>
        </div>
        <div className="box-border caret-transparent gap-x-[5.6px] flex flex-col gap-y-[5.6px] mb-[14.4px]">
          <label className="text-gray-700 text-[13.6px] box-border caret-transparent block leading-[21.76px] after:accent-auto after:box-border after:caret-transparent after:text-red-600 after:text-[13.6px] after:not-italic after:normal-nums after:font-semibold after:tracking-[normal] after:leading-[21.76px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-montserrat">
            ZIP code
          </label>
          <input
            type="text"
            name="merchant_zip"
            className="text-[14.4px] bg-gray-50 box-border caret-transparent block leading-[normal] w-full border border-slate-300 px-[15.2px] py-[8.8px] rounded-[999px] border-solid font-arial"
          />
        </div>
        <div className="box-border caret-transparent gap-x-[5.6px] flex flex-col gap-y-[5.6px] mb-[14.4px]">
          <span className="box-border caret-transparent block after:accent-auto after:box-border after:caret-transparent after:text-red-600 after:text-base after:not-italic after:normal-nums after:font-semibold after:tracking-[normal] after:leading-[25.6px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-montserrat">
            Do you own or rent your home?
          </span>
          <div className="box-border caret-transparent gap-x-2 flex flex-wrap gap-y-2">
            <label className="text-gray-700 text-[13.6px] items-center bg-gray-50 box-border caret-transparent gap-x-[5.6px] flex leading-[21.76px] gap-y-[5.6px] border border-slate-400/90 px-[13.6px] py-[5.6px] rounded-[999px] border-solid">
              <input
                type="radio"
                name="merchant_own_or_rent_home"
                value="1"
                className="text-gray-900 text-[14.4px] bg-gray-50 box-border caret-transparent hidden leading-[normal] w-full ml-[5px] mr-[3px] mt-[3px] p-0 font-arial"
              />
              <span className="box-border caret-transparent block">Own</span>
            </label>
            <label className="text-gray-700 text-[13.6px] items-center bg-gray-50 box-border caret-transparent gap-x-[5.6px] flex leading-[21.76px] gap-y-[5.6px] border border-slate-400/90 px-[13.6px] py-[5.6px] rounded-[999px] border-solid">
              <input
                type="radio"
                name="merchant_own_or_rent_home"
                value="0"
                className="text-gray-900 text-[14.4px] bg-gray-50 box-border caret-transparent hidden leading-[normal] w-full ml-[5px] mr-[3px] mt-[3px] p-0 font-arial"
              />
              <span className="box-border caret-transparent block">Rent</span>
            </label>
          </div>
        </div>
        <div className="box-border caret-transparent gap-x-[14.4px] grid grid-cols-[minmax(0px,1fr)] gap-y-[14.4px] md:grid-cols-[repeat(2,minmax(0px,1fr))]">
          <div className="box-border caret-transparent gap-x-[5.6px] flex flex-col gap-y-[5.6px] mb-[14.4px]">
            <label className="text-gray-700 text-[13.6px] box-border caret-transparent block leading-[21.76px] after:accent-auto after:box-border after:caret-transparent after:text-red-600 after:text-[13.6px] after:not-italic after:normal-nums after:font-semibold after:tracking-[normal] after:leading-[21.76px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-montserrat">
              Date of birth
            </label>
            <input
              type="text"
              name="merchant_date_of_birth"
              placeholder="MM/DD/YYYY"
              className="text-[14.4px] bg-gray-50 box-border caret-transparent block leading-[normal] w-full border border-slate-300 px-[15.2px] py-[8.8px] rounded-[999px] border-solid font-arial"
            />
          </div>
          <div className="box-border caret-transparent gap-x-[5.6px] flex flex-col gap-y-[5.6px] mb-[14.4px]">
            <label className="text-gray-700 text-[13.6px] box-border caret-transparent block leading-[21.76px] after:accent-auto after:box-border after:caret-transparent after:text-red-600 after:text-[13.6px] after:not-italic after:normal-nums after:font-semibold after:tracking-[normal] after:leading-[21.76px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-montserrat">
              Social Security Number
            </label>
            <input
              type="password"
              className="text-[14.4px] bg-gray-50 box-border caret-transparent hidden leading-[normal] w-full border border-slate-300 px-[15.2px] py-[8.8px] rounded-[999px] border-solid font-arial"
            />
            <div className="items-stretch box-border caret-transparent gap-x-[6.4px] flex gap-y-[6.4px]">
              <input
                name="merchant_ssn"
                type="password"
                className="text-[14.4px] bg-gray-50 box-border caret-transparent block basis-[0%] grow leading-[normal] w-full border border-slate-300 px-[15.2px] py-[8.8px] rounded-[999px] border-solid font-arial"
              />
              <button
                type="button"
                aria-label="Show Social Security Number"
                className="text-[12.8px] bg-white caret-transparent block leading-[normal] text-center text-nowrap border border-slate-400/90 px-[11.2px] py-0 rounded-[10px] border-solid font-arial"
              >
                Show
              </button>
            </div>
            <div className="text-red-500 text-[11px] box-border caret-transparent hidden leading-[14.3px] mt-[3px] md:text-xs md:leading-[15.6px] md:mt-1">
              SSN must be 9 digits.
            </div>
          </div>
          <p className="text-gray-600 text-[12.48px] box-border caret-transparent leading-[19.968px] mt-[6.4px] mb-[12.48px]">
            We use your Social Security Number to securely confirm your identity
            and, where applicable, conduct a credit inquiry.{" "}
            <strong className="font-bold box-border caret-transparent">
              Applying will not impact your personal credit score.
            </strong>
          </p>
        </div>
      </div>
      <div className={step === 3 ? 'box-border caret-transparent' : 'box-border caret-transparent hidden'}>
        <h2 className="text-gray-900 text-[20.8px] font-bold box-border caret-transparent leading-[33.28px] mb-[6.4px]">
          Review &amp; consents
        </h2>
        <p className="text-gray-600 text-[14.4px] box-border caret-transparent leading-[23.04px] mb-[22.4px]">
          Please review and agree to the following before submitting.
        </p>
        <div className="box-border caret-transparent mt-[12.8px]">
          <label className="text-gray-600 text-[13.76px] items-start bg-gray-50 box-border caret-transparent gap-x-2 flex leading-[22.016px] gap-y-2 border border-gray-200 mb-[10.4px] px-[14.4px] py-3 rounded-xl border-solid cursor-pointer">
            <input type="checkbox" id="accept_credit_profile" name="accept_credit_profile" className="w-4 h-4 mt-1" />
            <span className="box-border caret-transparent block">
              I authorize 04-Capital Investment (together with its affiliates,
              agents, and service providers) to obtain, use, share, and verify
              information about me and my business — including but not limited
              to credit reports, banking and trade references, tax returns, and
              any other financial or personal information — for the purpose of
              evaluating this application, underwriting, funding, servicing, and
              managing any financing or credit facility that may be extended, as
              described in the
              <a
                href="https://04capitalinvestment.com/credit-agreement"
                className="text-sky-700 font-semibold box-border caret-transparent underline px-0.5 hover:text-blue-500 hover:border-blue-500"
              >
                Credit Profile &amp; Authorization Agreement
              </a>
              .
            </span>
          </label>
          <label className="text-gray-600 text-[13.76px] items-start bg-gray-50 box-border caret-transparent gap-x-2 flex leading-[22.016px] gap-y-2 border border-gray-200 mb-[10.4px] px-[14.4px] py-3 rounded-xl border-solid cursor-pointer">
            <input type="checkbox" id="accept_esign" name="accept_esign" className="w-4 h-4 mt-1" />
            <span className="box-border caret-transparent block">
              I consent to the electronic delivery of all disclosures, notices,
              agreements, and other documents related to this application and
              any resulting financing, and I agree to the use of electronic
              signatures in accordance with the
              <a
                href="https://04capitalinvestment.com/esign-consent"
                className="text-sky-700 font-semibold box-border caret-transparent underline px-0.5 hover:text-blue-500 hover:border-blue-500"
              >
                E-Sign Consent Agreement
              </a>
              .
            </span>
          </label>
          <label className="text-gray-600 text-[13.76px] items-start bg-gray-50 box-border caret-transparent gap-x-2 flex leading-[22.016px] gap-y-2 border border-gray-200 mb-[10.4px] px-[14.4px] py-3 rounded-xl border-solid cursor-pointer">
            <input type="checkbox" id="accept_terms_conditions" name="accept_terms_conditions" className="w-4 h-4 mt-1" />
            <span className="box-border caret-transparent block">
              I agree to the
              <a
                href="https://04capitalinvestment.com/terms-and-conditions"
                className="text-sky-700 font-semibold box-border caret-transparent underline px-0.5 hover:text-blue-500 hover:border-blue-500"
              >
                Terms &amp; Conditions
              </a>
              and acknowledge the
              <a
                href="https://04capitalinvestment.com/privacy-policy"
                className="text-sky-700 font-semibold box-border caret-transparent underline px-0.5 hover:text-blue-500 hover:border-blue-500"
              >
                Privacy Policy
              </a>
              .
            </span>
          </label>
          <label className="text-gray-600 text-[13.76px] items-start bg-gray-50 box-border caret-transparent gap-x-2 flex leading-[22.016px] gap-y-2 border border-gray-200 mb-[10.4px] px-[14.4px] py-3 rounded-xl border-solid cursor-pointer">
            <input type="checkbox" id="accept_final_review" name="accept_final_review" className="w-4 h-4 mt-1" />
            <span className="box-border caret-transparent block">
              I confirm that the information provided in this application is
              true, correct and complete to the best of my knowledge and that I
              am authorized to submit this application on behalf of the business
              identified above.
            </span>
          </label>
        </div>
      </div>
      <div className={isSubmitted ? 'box-border caret-transparent text-center py-8' : 'hidden'}>
        <div className="bg-white shadow-[rgba(15,23,42,0.16)_0px_18px_45px_0px] box-border caret-transparent max-w-[520px] mt-8 mx-auto px-7 py-8 rounded-[18px]">
          <div className="text-white text-[34px] items-center bg-green-500 shadow-[rgba(34,197,94,0.22)_0px_0px_0px_6px] box-border caret-transparent flex h-[68px] justify-center leading-[54.4px] w-[68px] mb-4 mx-auto rounded-[999px]">
            <span className="text-[28.8px] box-border caret-transparent block leading-[28.8px]">
              ✓
            </span>
          </div>
          <h2 className="text-gray-900 text-[20.8px] font-[650] box-border caret-transparent leading-[33.28px] mb-[6.4px]">
            Application submitted
          </h2>
          <p className="text-gray-600 text-[15.68px] box-border caret-transparent leading-[25.088px] mt-[15.68px] mb-2.5">
            Thank you for applying to 04-Capital Investment.
          </p>
          <p className="text-gray-600 text-[15.2px] box-border caret-transparent leading-[24.32px] mt-[15.2px] mb-7">
            Our team is now reviewing your information. A funding specialist
            will follow up by email or phone, usually within one business day.
          </p>
          <p className="text-gray-500 text-[14.4px] box-border caret-transparent leading-[23.04px] mt-[14.4px] mb-1">
            <strong className="font-bold box-border caret-transparent">
              What happens next:
            </strong>
            watch for an email from
            <span className="box-border caret-transparent">
              info@04capitalinvestment.com
            </span>
            with your next steps or any additional questions we may have.
          </p>
          <p className="text-gray-500 text-[14.4px] box-border caret-transparent leading-[23.04px] my-1">
            If you need immediate assistance, you can send an email to
            info@04capitalinvestment.com or call us at +46 (76) 692-2980 during
            business hours.
          </p>
          <div className="box-border caret-transparent mt-6">
            <a
              href="/"
              className="text-white text-[15.2px] font-semibold items-center bg-sky-900 shadow-[rgba(15,23,42,0.22)_0px_10px_24px_0px] box-border caret-transparent gap-x-[6.4px] inline-flex justify-center tracking-[0.152px] leading-[24.32px] min-w-[220px] gap-y-[6.4px] underline px-[22px] py-2.5 rounded-[999px] hover:bg-sky-800 hover:shadow-[rgba(15,23,42,0.26)_0px_14px_30px_0px]"
            >
              Return to homepage
            </a>
          </div>
        </div>
      </div>
      <div className={errorMessage ? 'text-red-700 text-[13.6px] bg-red-50 box-border caret-transparent leading-[21.76px] border border-red-200 mt-3 px-3 py-[9.6px] rounded-[10px] border-solid' : 'hidden'}>{errorMessage}</div>
      <div className="sticky bg-white shadow-[rgba(15,23,42,0.08)_0px_-2px_12px_0px] box-border caret-transparent gap-x-3 flex justify-between gap-y-3 z-20 mt-[25.6px] py-3 bottom-0 inset-x-0 md:static md:bg-transparent md:shadow-none md:z-auto md:py-0 md:bottom-auto md:inset-x-auto">
        <div className="flex w-full justify-between items-center gap-3">
          {step > 0 ? (
            <button type="button" onClick={handleBack} className="text-gray-700 text-[14.4px] font-semibold items-center bg-transparent caret-transparent gap-x-[5.6px] flex justify-center leading-[normal] gap-y-[5.6px] text-center border px-[20.8px] py-[9.6px] rounded-[999px] border-solid border-slate-300 font-arial">Back</button>
          ) : (
            <div />
          )}
          <button 
            type="submit" 
            onClick={(e) => {
              if (step === steps.length - 1) {
                // On final "Done" button, submit the form
                formRef.current?.submit();
              } else {
                handleNext(e);
              }
            }} 
            disabled={isSubmitting} 
            className="text-white text-[14.4px] font-semibold items-center bg-transparent bg-[linear-gradient(135deg,rgb(0,80,179),rgb(29,143,255))] shadow-[rgba(0,80,179,0.35)_0px_16px_35px_0px] caret-transparent gap-x-[5.6px] flex justify-center leading-[normal] gap-y-[5.6px] text-center border px-[20.8px] py-[9.6px] rounded-[999px] border-solid border-transparent font-arial hover:shadow-[rgba(0,80,179,0.45)_0px_20px_45px_0px]">
            {isSubmitting ? 'Submitting...' : (step === steps.length - 2 ? 'Submit' : (step === steps.length - 1 ? 'Done' : 'Continue'))}
          </button>
          
        <p>{result}</p>
        </div>
      </div>
      <p className="text-gray-600 text-[12.48px] box-border caret-transparent leading-[19.968px] text-center mt-[17.6px] mb-[12.48px]">
        <span className="text-amber-400 box-border caret-transparent inline-block leading-[12.48px] text-nowrap align-text-bottom font-material_symbols_outlined">
          lock
        </span>
        Your information is securely encrypted.   
        <span className="text-blue-500 box-border caret-transparent inline-block leading-[12.48px] text-nowrap align-text-bottom font-material_symbols_outlined">
          speed
        </span>
        Applying will not impact your credit score.
        <br className="box-border caret-transparent" />
        If you leave this page, your application will be lost and you’ll need to
        start again.
      </p>
    </form>
  );
};
