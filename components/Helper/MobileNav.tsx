import NavLinks from "@/constants/NavbarLinks";
import Link from "next/link";
import React from "react";
import { IoClose } from "react-icons/io5";

interface Props {
  showNav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ showNav, closeNav }: Props) => {
  const navAnimation = showNav ? "translate-y-0" : "-translate-x-full";

  return (
    <div
      className={`fixed ${navAnimation} transform transition-transform duration-500 top-0 left-0 right-0 bottom-0 z-[10000] bg-[#200f31]`}
    >
      <div className="w-full h-full flex flex-col items-center justify-center space-y-8">
        {NavLinks.map((link, index) => (
          <Link
            href={link.path}
            key={index}
            className="text-2xl font-semibold text-white hover:text-green-400 transition-colors duration-300 nav-link-mobile"
          >
            {link.title}
          </Link>
        ))}

        <Link
          href=""
          className="relative inline-flex items-center justify-center px-10 py-3 overflow-hidden font-medium tracking-tighter text-white bg-gray-600 rounded-lg group "
        >
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-600 rounded-full group-hover:w-56 group-hover:h-56"></span>
          <span className="absolute inset-0 w-full h-full -m-1 rounded-lg opacity-30 bg-gradient-to-t from-transparent via-transparent to-gray-700"></span>
          <span className="relative">Book Now</span>
        </Link>
      </div>

      <div
        onClick={closeNav}
        className="absolute top-[2rem] right-[2rem] cursor-pointer text-white hover:text-red-500 transition-colors duration-300"
      >
        <IoClose size={30} />
      </div>
    </div>
  );
};

export default MobileNav;
