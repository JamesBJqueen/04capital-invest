import { useState } from "react";
import { Navbar } from "../sections/Navbar";
import { HeroSection } from "../sections/FAQ-Page/Hero-Sec";
import { FAQSection } from "../sections/FAQ-Page/FAQ-Sec";
import { Footer } from "../sections/Footer";

export const FAQs = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All topics");

  return (
    <body className="text-gray-900 text-base not-italic normal-nums font-normal accent-auto bg-slate-100 bg-[radial-gradient(circle_at_0%_0%,rgba(0,80,179,0.12),rgba(0,0,0,0)_55%),radial-gradient(circle_at_100%_100%,rgba(245,128,37,0.08),rgba(0,0,0,0)_55%),none] bg-size-[auto,auto,auto] box-border caret-transparent block tracking-[normal] leading-[25.6px] list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible bg-[position:0%,0%,0%_0%,0%,0%] border-separate font-montserrat">
      <div className="absolute pointer-events-none box-border caret-transparent leading-4 text-left w-full z-[2147483638] left-0 top-0 font-helvetica"></div>
      <Navbar />
      <HeroSection selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
      <FAQSection selectedCategory={selectedCategory} />
      <Footer />
      <iframe
        name="__uspapiLocator"
        className="box-border caret-transparent hidden border-zinc-100"
      ></iframe>
    </body>
  );
};
