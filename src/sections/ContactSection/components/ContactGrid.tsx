import { ContactInfoCard } from "./ContactInfoCard";
import { ContactForm } from "./ContactForm";

export const ContactGrid = () => {
  return (
    <div className="items-start box-border caret-transparent gap-x-8 grid grid-cols-[minmax(0px,1fr)] max-w-[1140px] gap-y-8 w-full mx-auto px-4 md:grid-cols-[minmax(0px,1.1fr)_minmax(0px,1fr)] md:px-5">
      <div className="box-border caret-transparent gap-x-[17.6px] flex flex-col gap-y-[17.6px]">
        <ContactInfoCard
          title="New funding inquiries"
          description="Speak with a funding specialist about options for your business, timing, and requirements."
          contactItems={[
            {
              label: "Phone",
              content: (
                <a
                  href="tel://+46766926492"
                  className="box-border caret-transparent"
                >
                  +46 (76) 692-6492
                </a>
              ),
            },
            {
              label: "Email",
              content: (
                <a
                  href="mailto://info@04capitalinvestment.com"
                  className="box-border caret-transparent"
                >
                  info@04capitalinvestment.com
                </a>
              ),
            },
          ]}
        />
        <ContactInfoCard
          title="Existing applications"
          description="Already in process? Reach out to us with your application ID or business name for faster support."
          contactItems={[
            {
              label: "Client support",
              content: (
                <a href="mailto://info@04capitalinvestment.com">
                  info@04capitalinvestment.com
                </a>
              ),
            },
          ]}
        />
        <ContactInfoCard
          title="Support hours & availability"
          description="Our SWEDISH.-based support team is available during the following hours:"
          contactItems={[
            { label: "Monday – Thursday", content: "9:00 AM – 6:00 PM GMT" },
            { label: "Friday", content: "9:00 AM – 12:00 PM GMT" },
            { label: "Location", content: "SWEDISH.-based support team" },
          ]}
        />
      </div>
      <ContactForm />
    </div>
  );
};
