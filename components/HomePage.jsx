"use client";
import Image from "next/image";
import React from "react";
import { CiSearch } from "react-icons/ci";
import HomeImg from "../src/assets/homeWatch.png";
import { useTheme } from "./ThemeProvider";

const HomePage = () => {
  const { mode } = useTheme();

  return (
    <section
      className={`w-full flex justify-center items-center ${
        mode ? "bg-white" : "bg-[#121212]"
      } transition-colors duration-300`}
    >
      <div className="w-[90%] max-w-7xl min-h-screen flex flex-col md:flex-row justify-between items-center py-10 gap-10 md:gap-0">
        {/* Left Text Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            Discover Most <br /> Suitable Watches
          </h1>
          <p className="text-[#8B8E99] dark:text-gray-300 text-base">
            Find the best, reliable, and affordable smart watches here. We focus
            on product quality and offer watches from almost every brand.
            So what are you waiting for? Order now!
          </p>

          {/* Search Bar */}
          <label
            htmlFor="click"
            className={`flex items-center justify-between rounded-xl px-3 py-2 w-full max-w-md ${
              mode ? "bg-white shadow-md" : "bg-[#1e1e1e]"
            }`}
          >
            <CiSearch
              className={`text-2xl ${
                mode ? "text-[#3858D6]" : "text-white"
              } mr-2`}
            />
            <input
              type="text"
              id="click"
              placeholder="Find the best brands"
              className={`flex-1 bg-transparent outline-none text-sm ${
                mode ? "text-black placeholder:text-[#8B8E99B2]" : "text-white placeholder:text-gray-400"
              }`}
            />
            <button className="bg-[#3858D6] text-white px-4 py-1.5 rounded-lg text-sm hover:bg-[#2f4bb8] transition">
              Search
            </button>
          </label>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={HomeImg}
            alt="Smart watch illustration"
            className="w-full max-w-sm object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
