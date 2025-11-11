"use client";

import React, { useState } from "react";
import { ChevronDown, PhoneCall } from "lucide-react";

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      q: "How does Dev by Dev's vetting process work?",
      a: "Our rigorous vetting process includes technical assessments, coding challenges, portfolio reviews, and behavioral interviews to ensure we match you with developers who have proven skills and fit your team culture."
    },
    {
      q: "How long does the hiring process typically take?",
      a: "Most companies find their ideal developer within 1-2 weeks. Our streamlined process reduces traditional hiring timelines from months to days by providing pre-vetted candidates ready for interviews."
    },
    {
      q: "What if the developer isn't a good fit after hiring?",
      a: "We offer a 90-day replacement guarantee. If your hired developer doesn't meet expectations, we'll find you a replacement at no additional cost."
    },
    {
      q: "What tech stacks and roles do you specialize in?",
      a: "We cover all major tech stacks including JavaScript, Python, Java, Go, Rust, and more. We recruit for frontend, backend, full-stack, mobile, AI/ML, DevOps, and specialized roles."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-fit py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Your exact header pattern */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-light uppercase text-start text-primary">
              Frequently Asked Questions{" "}
            </h1>
            <h1 className="text-sm font-light uppercase text-start text-primary">
              Everything You Need to Know About Our Process
            </h1>
          </div>

          <div className="group inline-block">
            <button className="text-xs uppercase bg-primary py-2 px-5 rounded-full text-white border border-transparent transition-all duration-300 ease-in-out group-hover:bg-transparent group-hover:text-primary group-hover:border-primary">
              Contact Support
            </button>
          </div>
        </div>

        {/* New FAQ Design - Vertically Centered */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <div className="flex gap-2 flex-col">
                <h4 className="text-3xl md:text-4xl tracking-tighter max-w-xl text-left font-regular text-gray-900">
                  Find answers to common questions about our recruitment process
                </h4>
                <p className="text-xs max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-gray-600 text-left">
                  We've compiled the most frequently asked questions about how Dev by Dev 
                  connects companies with top-tier developers through our streamlined vetting 
                  and matching process.
                </p>
              </div>
              <div className="mt-4">
                <button className="inline-flex items-center justify-center gap-4 px-4 py-2 text-xs border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition-colors">
                  Need more help ? Reach out
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Custom Accordion with Bottom Borders */}
          <div className="w-full">
            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="border-b border-gray-200 last:border-b-0 transition-colors hover:border-primary"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="flex items-center justify-between w-full py-6 text-left hover:bg-gray-50/50 transition-colors"
                  >
                    <span className="text-xs font-semibold text-gray-900 pr-4">
                      {faq.q}
                    </span>
                    <ChevronDown 
                      className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${
                        openItems.includes(index) ? "rotate-180" : ""
                      }`} 
                    />
                  </button>
                  
                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      openItems.includes(index) 
                        ? "max-h-96 opacity-100 pb-6" 
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pr-8">
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}