
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import LogoSVG from "./LogoSVG";

const Navbar = () => {
  const pathname = usePathname();
  const showNavbar = ["/", "/about", "/services1", "/home", "/pricing1","/contact","/faq","/term","/privacy",].includes(pathname);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
          {showNavbar && (
  <nav
    className="fixed top- z-50 w-[100vw] right flex justify-between items-center
                px-6 py-4 shadow-lg
               backdrop-blur-xl bg-black border border-black"
  >
     <Link href="/home" className="flex items-center">
          <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
            <img
              src="/logo.jpg.svg"
              alt="Salon Logo"
              className="w-full h-full object-contain"
            />
          </div>
     <div className="text-2xl font-bold text-white tracking-wide  underline underline-offset-4">SCISSORS VIP SALON </div>
        </Link>

    {/* Desktop Menu */}
    <ul className="hidden md:flex gap-8 items-center text-white font-bold text-xl">
      <Link href="/home"><li className={pathname === "/home" ? "underline underline-offset-4 font-bold " : ""}>Home</li></Link>
      <Link href="/services1"><li className={pathname === "/services1" ? "underline underline-offset-4 font-bold  " : ""}>Services</li></Link>
      <Link href="/pricing1"><li className={pathname === "/pricing1" ? "underline underline-offset-4 font-bold" : ""}>Pricing</li></Link>
      <Link href="/about"><li className={pathname === "/about" ? "underline underline-offset-4 font-bold" : ""}>About us</li></Link>
      <Link href="/contact"><li className={pathname === "/contact" ? "underline underline-offset-4 font-bold" : ""}>Contact us</li></Link>
    </ul>

    {/* Mobile Toggle Button */}
    <div className="md:hidden text-white">
      {isOpen ? (
        <X className="cursor-pointer" onClick={() => setIsOpen(false)} />
      ) : (
        <Menu className="cursor-pointer" onClick={() => setIsOpen(true)} />
      )}
    </div>
  </nav>
)}


      {/* Mobile Menu Dropdown */}
      {isOpen && showNavbar && (
        <div className="md:hidden fixed top-20 right-[5vw] w-[90vw]  bg-black rounded-xl z-40 p-5 shadow-xl backdrop-blur-xl border border-gray-200">
          <ul className="flex flex-col gap-4 text-white font-medium text-sm">
            <Link href="/home" onClick={() => setIsOpen(false)}><li>Home</li></Link>
            <Link href="/services1" onClick={() => setIsOpen(false)}><li>Services</li></Link>
            <Link href="/pricing1" onClick={() => setIsOpen(false)}><li>Pricing</li></Link>
            <Link href="/about" onClick={() => setIsOpen(false)}><li>About us</li></Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}><li>Contact us</li></Link>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;



