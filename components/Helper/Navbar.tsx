import NavLinks from "@/constants/NavbarLinks";
import { images } from "@/public/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMenu } from "react-icons/io5";

interface Props {
  openNav: () => void;
}

const Navbar = ({ openNav }: Props) => {
  return (
    <div className="w-full bg-white shadow-md">
      <div className="flex w-[85%] mx-auto items-center justify-between py-4 lg:py-6">
        <div className="relative cursor-pointer">
          <Image
            src={images.logo}
            alt="logo"
            className="object-contain w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="hidden lg:flex items-center space-x-8">
          {NavLinks.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className="text-gray-800 hover:text-green-600 text-lg font-medium transition-colors duration-200 nav-link"
            >
              {link.title}
            </Link>
          ))}
          <Link
            href=""
            className="relative hidden lg:inline-flex items-center justify-center px-10 py-3 overflow-hidden font-medium tracking-tighter text-white bg-gray-600 rounded-lg group"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-600 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -m-1 rounded-lg opacity-30 bg-gradient-to-t from-transparent via-transparent to-gray-700"></span>
            <span className="relative">Book Now</span>
          </Link>
        </div>

        <IoMenu
          onClick={openNav}
          className="text-blue-800 w-8 h-8 lg:hidden cursor-pointer transition-transform duration-300 hover:scale-110"
        />
      </div>
    </div>
  );
};

export default Navbar;
