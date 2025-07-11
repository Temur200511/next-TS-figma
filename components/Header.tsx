"use client";
import { IoWatchOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { useTheme } from "./ThemeProvider";

const Header = () => {
  const { toggleTheme } = useTheme();

  return (
    <header className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="w-[90%] max-w-7xl mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 text-lg font-bold text-[#3858D6]"
        >
          <IoWatchOutline size={22} />
          Mohid
        </a>

        {/* Navigation Links */}
        <nav>
          <ul className="hidden md:flex gap-6 text-gray-600 font-medium">
            <li className="hover:text-[#3858D6] cursor-pointer transition">Home</li>
            <li className="hover:text-[#3858D6] cursor-pointer transition">Brands</li>
            <li className="hover:text-[#3858D6] cursor-pointer transition">
              Recent Products
            </li>
            <li className="hover:text-[#3858D6] cursor-pointer transition">Contact</li>
            <li className="hover:text-[#3858D6] cursor-pointer transition">About</li>
          </ul>
        </nav>

        {/* Icons */}
        <div className="flex gap-4 items-center text-gray-700 text-xl">
          <button className="hover:text-[#3858D6] transition">
            <CiSearch />
          </button>
          <button className="hover:text-[#3858D6] transition">
            <FaUser />
          </button>
          <button className="hover:text-[#3858D6] transition">
            <FaCartShopping />
          </button>
          <button onClick={toggleTheme} className="hover:text-[#3858D6] transition">
            <MdDarkMode />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
