"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Heart, Users, FileCheck, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const StepsSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description:
        "We start with a free 30-45 minute consultation to understand your vision and assess your readiness. We discuss your care model, location ideas, timeline, and personal goals.",
      icon: Heart,
    },
    {
      number: "02",
      title: "Strategic Planning",
      description:
        "A deep-dive 1.5-2 hour strategy session to define your service model, map your regulatory path, and plan your next moves. You'll receive a written Emerge Strategic Action Plan.",
      icon: Users,
    },
    {
      number: "03",
      title: "Choose Your Package",
      description:
        "Select from our flexible packages tailored to your goals and budget - from Registration Ready to Inspection Confident, with comprehensive support options.",
      icon: FileCheck,
    },
    {
      number: "04",
      title: "Implementation & Growth",
      description:
        "We execute the plan together, handling documentation, compliance, and preparation while you focus on building your exceptional children's service.",
      icon: TrendingUp,
    },
  ];

  // Auto-advance timer
  useEffect(() => {
    const interval = setInterval(() => {
      if (activeStep < steps.length - 1) {
        setActiveStep((prev) => prev + 1);
      } else {
        setActiveStep(0); // Restart from beginning
      }
    }, 5000); // 5 seconds per step

    return () => clearInterval(interval);
  }, [activeStep, steps.length]);

  const nextStep = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
    }
  };

  const contentVariants = {
    enter: {
      opacity: 0,
      y: 20,
    },
    center: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.4,
        ease: "easeIn",
      },
    },
  };

  return (
    <div className="min-h-fit py-12 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light uppercase text-start text-primary mb-2">
            Our Process
          </h1>
          <p className="text-xs md:text-sm font-light uppercase text-start text-primary">
            A Clear, Structured Path to Success
          </p>
        </div>

        {/* Steps Container */}
        <div className="w-full">
          {/* Step Indicators */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              {steps.map((step, index) => (
                <React.Fragment key={index}>
                  <div className="relative flex items-center">
                    <button
                      onClick={() => setActiveStep(index)}
                      className="flex items-center gap-3 text-left rounded-md cursor-pointer"
                    >
                      <div
                        className={cn(
                          "flex justify-center items-center shrink-0 rounded-full font-semibold w-10 h-10 md:w-12 md:h-12 text-sm md:text-base border-2 transition-all duration-300",
                          index < activeStep
                            ? "bg-primary text-white border-primary"
                            : index === activeStep
                            ? "bg-primary text-white border-primary"
                            : "bg-gray-100 text-gray-500 border-gray-200"
                        )}
                      >
                        {step.number}
                      </div>
                    </button>
                  </div>
                  {index !== steps.length - 1 && (
                    <div
                      className={cn(
                        "flex-1 h-0.5 mx-2 md:mx-3 transition-all duration-300",
                        index < activeStep ? "bg-primary" : "bg-gray-200"
                      )}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Content Card */}
          <div className="overflow-hidden rounded-2xl bg-primary/5 border border-primary/10">
            <div className="p-6 md:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  variants={contentVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="bg-gray-300  p-6 rounded-lg text-xs md:text-sm font-mono text-primary/60">
                          {steps[activeStep].number}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                      </div>
                      <h2 className="text-2xl md:text-3xl font-light tracking-tight text-foreground mb-4">
                        {steps[activeStep].title}
                      </h2>
                      <p className="text-xs leading-relaxed text-muted-foreground max-w-3xl">
                        {steps[activeStep].description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex space-x-4 mt-8">
                <button
                  onClick={prevStep}
                  disabled={activeStep === 0}
                  className="w-10 h-10 md:w-12 md:h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Previous step"
                >
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                </button>
                <button
                  onClick={nextStep}
                  disabled={activeStep === steps.length - 1}
                  className="w-10 h-10 md:w-12 md:h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Next step"
                >
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsSection;