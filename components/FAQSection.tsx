"use client";
import { faqs } from "@/utils/data";
import { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="p-6 bg-white">
      <div className="text-center py-16">
        <h1 className="text-[24px] tracking-[10px] text-[#bba085]">FAQ</h1>
        <h1 className="md:text-[48px]">Any Queries?</h1>
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="max-w-3xl mx-auto"
      >
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              className="w-full flex hover:bg-[#EBE7E0] p-4 justify-between items-center py-4 text-left"
              onClick={() => toggleFAQ(index)}
            >
              <h1 className="text-[28px]">{faq.question}</h1>
              {openIndex === index ? (
                <FiX className="text-[38px] text-[#BAA084]" />
              ) : (
                <FiPlus className="text-[38px] text-[#BAA084]" />
              )}
            </button>
            {openIndex === index && (
              <div className="p-4 bg-[#EBE7E0] text-[24px]">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default FAQSection;
