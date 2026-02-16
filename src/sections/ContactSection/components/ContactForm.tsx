import { useState } from "react";
import Swal from "sweetalert2";

export const ContactForm = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "08e554fe-298a-47e2-ab9f-a92d08259ab1");
    formData.append("subject", "New Contact Form Submission");
    formData.append("from_name", "Your Website Name");
    formData.append("replyto", formData.get("email") as string);

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



  return (
    <div className="bg-white shadow-[rgba(15,23,42,0.12)_0px_18px_45px_0px] box-border caret-transparent border border-slate-200 px-[25.6px] py-[28.8px] rounded-[22px] border-solid">
      <h2 className="text-gray-900 text-xl font-bold box-border caret-transparent leading-8 mb-[6.4px]">
        Send us a message
      </h2>
      <p className="text-gray-600 text-[14.4px] box-border caret-transparent leading-[23.04px] mb-[22.4px]">
        Share a few details and a member of our team will follow up.
      </p>
      <form onSubmit={onSubmit} className="bg-white shadow-[rgba(15,23,42,0.12)_0px_18px_45px_0px] box-border caret-transparent max-w-[520px] text-left border border-slate-200 mx-auto px-6 py-[28.8px] rounded-3xl border-solid">
        <div className="box-border caret-transparent gap-x-[5.6px] flex flex-col gap-y-[5.6px] mb-[14.4px]">
          <label className="text-gray-700 text-[13.6px] box-border caret-transparent block leading-[21.76px] mb-[8.8px]">
            Full name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Jane Doe"
            className="text-[14.4px] bg-gray-50 box-border caret-transparent block leading-[normal] text-start w-full border border-slate-300 mt-1 mb-[14.4px] px-[15.2px] py-[8.8px] rounded-[999px] border-solid font-arial"
          />
        </div>
        <div className="box-border caret-transparent gap-x-[5.6px] flex flex-col gap-y-[5.6px] mb-[14.4px]">
          <label className="text-gray-700 text-[13.6px] box-border caret-transparent block leading-[21.76px] mb-[8.8px]">
            Business name
          </label>
          <input
            type="text"
            name="business_name"
            placeholder="Your Company LLC"
            className="text-[14.4px] bg-gray-50 box-border caret-transparent block leading-[normal] text-start w-full border border-slate-300 mt-1 mb-[14.4px] px-[15.2px] py-[8.8px] rounded-[999px] border-solid font-arial"
          />
        </div>
        <div className="box-border caret-transparent gap-x-[5.6px] flex flex-col gap-y-[5.6px] mb-[14.4px]">
          <label className="text-gray-700 text-[13.6px] box-border caret-transparent block leading-[21.76px] mb-[8.8px]">
            Email address
          </label>
          <input
            type="email"
            name="email"
            placeholder="you@business.com"
            className="text-[14.4px] bg-gray-50 box-border caret-transparent block leading-[normal] text-start w-full border border-slate-300 mt-1 mb-[14.4px] px-[15.2px] py-[8.8px] rounded-[999px] border-solid font-arial"
          />
        </div>
        <div className="box-border caret-transparent gap-x-[5.6px] flex flex-col gap-y-[5.6px] mb-[14.4px]">
          <label className="text-gray-700 text-[13.6px] box-border caret-transparent block leading-[21.76px] mb-[8.8px]">
            Phone number
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="+1 000 000 0000"
            className="text-[14.4px] bg-gray-50 box-border caret-transparent block leading-[normal] text-start w-full border border-slate-300 mt-1 mb-[14.4px] px-[15.2px] py-[8.8px] rounded-[999px] border-solid font-arial"
          />
        </div>
        <div className="box-border caret-transparent gap-x-[5.6px] flex flex-col gap-y-[5.6px] mb-[14.4px]">
          <label className="text-gray-700 text-[13.6px] box-border caret-transparent block leading-[21.76px] mb-[8.8px]">
            How can we help?
          </label>
          <select
            name="topic"
            className="text-[14.4px] bg-gray-50 caret-transparent block leading-[normal] opacity-70 text-start w-full border border-slate-300 px-[15.2px] py-[8.8px] rounded-[999px] font-arial"
          >
            <option
              value=""
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Select an option
            </option>
            <option
              value="New funding request"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              New funding request
            </option>
            <option
              value="Existing application"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Existing application
            </option>
            <option
              value="Partnership / referral"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              Partnership / referral
            </option>
            <option
              value="General question"
              className="items-center box-border caret-transparent gap-x-[7.2px] min-h-6 min-w-6 gap-y-[7.2px]"
            >
              General question
            </option>
          </select>
        </div>
        <div className="box-border caret-transparent gap-x-[5.6px] flex flex-col gap-y-[5.6px] mb-[14.4px]">
          <label className="text-gray-700 text-[13.6px] box-border caret-transparent block leading-[21.76px] mb-[8.8px]">
            What else should we know?
          </label>
          <textarea
            name="message"
            placeholder="Tell us about your business and what you’re looking to accomplish."
            className="text-[14.4px] bg-gray-50 box-border caret-transparent block leading-[normal] resize-y text-start w-full border-slate-300 mt-1 mb-[14.4px] px-[15.2px] py-[8.8px] rounded-2xl font-monospace"
          ></textarea>
        </div>
        <button
          type="submit"
          className="text-white text-[14.4px] font-semibold items-center bg-transparent bg-[linear-gradient(135deg,rgb(0,80,179),rgb(29,143,255))] shadow-[rgba(0,80,179,0.35)_0px_16px_35px_0px] caret-transparent gap-x-[5.6px] inline-flex justify-center leading-[normal] gap-y-[5.6px] text-center w-full border px-[20.8px] py-[9.6px] rounded-[999px] border-solid border-transparent font-arial hover:shadow-[rgba(0,80,179,0.45)_0px_20px_45px_0px]"
        >
          Submit
        </button>
        <p>{result}</p>
        <p className="text-[14.4px] font-medium box-border caret-transparent inline-block leading-[20.88px] mt-3 mb-[14.4px] px-4 py-3 rounded-md"></p>
        <p className="text-gray-600 text-xs box-border caret-transparent leading-[19.2px] text-center mt-[11.2px] mb-3">
          By submitting this form you agree that 04-Capital Investment may contact
          you about funding options.
        </p>
      </form>
    </div>
  );
};
