"use client";

import React from "react";
import { FiSearch, FiMapPin } from "react-icons/fi";
import { assets } from "../../assets/assets";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center py-16 overflow-hidden relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={assets.Hero}
          alt="Emerge Social Care Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-4 w-full relative z-10">
        <div className="flex flex-col items-start text-left max-w-2xl">
          {/* Content */}
          <div className="space-y-4 w-full">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                EMERGE SOCIAL CARE
              </h1>
              <h2 className="text-lg md:text-xl font-light text-white/90 mt-2">
                Building Compliance. Inspiring Quality.
              </h2>
            </div>

            <p className="text-xs text-white/80 leading-relaxed">
              Expert Ofsted registration, advisory services, and compliance support 
              for children homes and supported accommodation providers across the UK.
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-full shadow-md p-2 flex flex-col border border-primary sm:flex-row gap-2 sm:gap-0 items-center w-full max-w-xl">
              <div className="flex items-center flex-1 px-4 w-full sm:w-auto">
                <FiSearch className="w-4 h-4 text-primary mr-2" />
                <input
                  type="text"
                  placeholder="What service do you need?"
                  className="flex-1 outline-none text-xs text-primary placeholder-gray-400 bg-transparent"
                />
              </div>

              <div className="hidden sm:block w-px h-8 bg-primary"></div>

              <div className="flex items-center flex-1 px-4 w-full sm:w-auto">
                <FiMapPin className="w-4 h-4 text-primary mr-2" />
                <input
                  type="text"
                  placeholder="Your location"
                  className="flex-1 outline-none text-xs text-primary placeholder-gray-400 bg-transparent"
                />
              </div>

              <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full text-xs font-medium transition-colors w-full sm:w-auto">
                Get Started
              </button>
            </div>

            <div className="text-white/80">
              <p className="text-xs mb-1">Our Expertise:</p>
              <p className="text-xs text-primary">
                Ofsted Registration • Advisory Services • Training & Development
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;