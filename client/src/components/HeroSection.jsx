import React from "react";
import heroImage from "../assets/bg.jpg";
import Header from "./Header";

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <Header className="sticky top-0 z-50" />

      <div className="absolute inset-0 bg-black/40 z-0"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 items-center min-h-[90vh]">
        {/* Left: Form Section (moved first) */}
        <div className="bg-white rounded shadow-xl p-6 mt-10 md:mt-0 max-w-md">
          <h2 className="text-xl font-bold mb-2">Apply Today For</h2>
          <p className="text-sm mb-4 text-blue-600 font-semibold whitespace-nowrap">
            Saroj International University Programs
            <br />
            <span className="text-xs">
              Registration Ends: 10<sup>th</sup> June 2025
            </span>
          </p>
        </div>

        {/* Right: Text Section (moved second) */}

        <div className="text-white mt-10 md:mt-0 md:pl-40">
          <h1 className="text-4xl md:text-5xl font-black ">
           SAROJ INTERNATIONAL UNIVERSITY
          </h1>
          <p className="text-sm md:text-base mt-4">
            In an era propelled by the advent of artificial intelligence,
            Chandigarh University, Uttar Pradesh, has embraced a
            multidisciplinary education model enriched by AI integration...
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-black rounded shadow hover:bg-gray-200 transition">
            APPLY NOW →
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
