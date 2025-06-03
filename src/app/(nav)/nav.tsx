"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";

/* ---------------------------------- */

const navStyle =
  "w-aut0 h-[40px] px-[10px] py-[8px] bg-transparent hover:bg-[#FFFFFF0D] rounded-md";

const navItems = [
  { icon: "🏠", label: "Home", href: "#" },
  { icon: "👤", label: "About", href: "#" },
  { icon: "💼", label: "Services", href: "#" },
  { icon: "📁", label: "Portfolio", href: "#" },
  { icon: "📝", label: "Blog", href: "#" },
  { icon: "📞", label: "Contact", href: "#" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {

    setIsOpen(!isOpen);
  };

  // Close nav with Escape key
  useEffect(() => {
    const handleKeyDown = (e: any) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);



  return (
    <nav className="w-full">
      <div
        id="big-nav"
        className="hidden w-full lg:flex h-[6.25rem] item-start md:gap-[3rem] lg:gap-[20rem] fixed top-0 left-0 z-20 px-8"
      >
        <div className="w-[9rem] lg:w-[12.5rem] h-full">
          <Image
            width={0}
            height={0}
            src="/logo-full-white2.svg"
            alt="logo"
            className="!w-full !h-full"
          />
        </div>

        <div className="w-[373px] h-auto flex items-center justify-center gap-10">
          <a href="#home" className={navStyle}>
            Home
          </a>
          <a href="#about" className={navStyle}>
            About Us
          </a>
          <a href="#contact" className={navStyle}>
            Contact
          </a>
        </div>
      </div>

      {/* phones and tablet */}
      <div id="small-nav" className="w-full lg:hidden">
        <button type="button"
          className="w-auto fixed top-3 right-2.5 z-50 flex items-center justify-center gap-1.5 py-[12px] px-[20px] bg-[#ffffff42] rounded-md cursor-pointer"
          onClick={toggleNav}
        >
          <img src="/logo-icon-white.svg" alt="" className="size-[20px]" />
          <span className="uppercase font-bold text-white">menu</span>
        </button>

        {/* Navigation Overlay - Parent Layer */}
        <div
          className={`fixed top-0 w-full h-screen border-l-4 border-[#ffffff7d] transition-all duration-500 ease-in z-40 ${
            isOpen ? "right-0" : "-right-full"
          }`}
          onClick={(e) => e.target === e.currentTarget && toggleNav()}
        >
          {/* Parent Container - Transparent with white left border */}
          <div
            className={`absolute top-0 w-full h-screen bg-[#00000000] backdrop-blur-sm transition-all duration-500 ease-in ${
              isOpen ? "right-0" : "-right-96"
            }`}
            onClick={(e) => e.target === e.currentTarget && toggleNav()}
          >
            {/* Child Layer - Navigation Menu */}
            <div
              className={`absolute top-0 w-80 h-screen bg-transparent bg-opacity-95 backdrop-blur-xl p-2 transition-all duration-500 ease-linear flex flex-col items-center justify-between pb-20 ${
                isOpen ? "right-0 delay-150" : "-right-80"
              }`}
            >
              {/* Navigation Menu */}
              <ul className="w-full space-y-2">
                {navItems.map((item, index) => (
                  <li
                    key={item.label}
                    className={`transition-all duration-300 ease-out ${
                      isOpen
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-8"
                    }`}
                    style={{
                      transitionDelay: isOpen ? `${300 + index * 50}ms` : "0ms",
                    }}
                  >
                    <a
                      href={item.href}
                      className="group relative block p-4 px-6 bg-[#ffffff42] text-white no-underline rounded-xl transition-all duration-300 font-medium text-lg overflow-hidden hover:translate-x-2"
                    >
                      {/* <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-indigo-500 via-opacity-30 to-transparent transition-transform duration-500 -translate-x-full group-hover:translate-x-full"></span> */}
                      <span className="relative">
                        {item.icon} {item.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="w-full h-[3rem] flex items-center justify-center">
                <p className="text-white">
                  &copy; 2025 Sable & Grey. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
