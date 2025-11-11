"use client";

import { useState } from "react";
import Image from "next/image";
import { assets } from "../../assets/assets";

const WhyWorkWithUs = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Vetted Talent Pool",
      description: "Access pre-screened developers who have passed rigorous technical assessments and coding challenges."
    },
    {
      title: "Fast Hiring Process", 
      description: "Reduce your time-to-hire from weeks to days with our streamlined recruitment pipeline."
    },
    {
      title: "Quality Guarantee",
      description: "90-day replacement guarantee if your hired developer doesn't meet expectations."
    },
    {
      title: "Cost Effective",
      description: "Save on recruitment costs with our flat-rate pricing and no hidden fees."
    }
  ];

  return (
    <div className="min-h-fit py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-light uppercase text-start text-primary">
              Why Work With Us{" "}
            </h1>
            <h1 className="text-sm font-light uppercase text-start text-primary">
              The Dev by Dev Advantage
            </h1>
          </div>

          <div className="group inline-block">
            <button className="text-xs uppercase bg-primary py-2 px-5 rounded-full text-white border border-transparent transition-all duration-300 ease-in-out group-hover:bg-transparent group-hover:text-primary group-hover:border-primary">
              Get Started
            </button>
          </div>
        </div>

        {/* Content Section - Centered vertically */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <Image
                src={assets.WhyUs}
                alt="Why Work With Us"
                width={400}
                height={500}
                className="rounded-lg object-cover w-full h-auto"
              />
            </div>
          </div>

          {/* Right Side - Stepper */}
          <div className="flex items-center">
            <div className="relative w-full">
              {/* Vertical Line - Fixed to not overlap last step */}
              <div className="absolute left-4 top-2 h-[calc(100%-2rem)] w-0.5 bg-gray-200 dark:bg-gray-700"></div>
              
              {/* Steps */}
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div key={index} className="relative flex items-start gap-4">
                    {/* Step Circle - Updated to match your stepper examples exactly */}
                    <div 
                      className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center z-10 font-semibold text-sm transition-colors ${
                        index === activeStep 
                          ? "bg-primary border-primary text-white" 
                          : "bg-gray-100 text-gray-500 border-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
                      }`}
                    >
                      {index + 1}
                    </div>

                    {/* Step Content */}
                    <div 
                      className="cursor-pointer pt-1 flex-1"
                      onClick={() => setActiveStep(index)}
                    >
                      <h3 className={`text-xs font-semibold mb-1 transition-colors ${
                        index === activeStep ? "text-primary" : "text-gray-700"
                      }`}>
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyWorkWithUs;