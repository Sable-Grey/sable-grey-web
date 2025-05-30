"use client";
import { useRef } from "react";
import Image from "next/image";
import Button from "@/modules/button";
import { socialLightIcons } from "./(icons)/entry";
import { MdLocationPin, MdLocalPhone, MdMail } from "react-icons/md";
import { FaTiktok } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoFacebook } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

/* --------------------------------------------------------------------------- */

const navStyle =
  "w-aut0 h-[40px] px-[10px] py-[8px] bg-transparent hover:bg-[#FFFFFF0D] rounded-md";

export default function Home() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="relative">
      <nav className="w-full flex h-[6.25rem] item-start md:gap-[3rem] lg:gap-[20rem] sm:absolute top-0 left-0 z-20 px-8">
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
          <a href="#hero" className={navStyle}>
            Home
          </a>
          <a href="#main" className={navStyle}>
            About Us
          </a>
          <a href="#contact" className={navStyle}>
            Contact
          </a>
        </div>
      </nav>

      <main>
        {/* Hero section */}
        <div id="hero-caption" className="h-screen relative">
          <div className="size-full flex flex-col items-center justify-evenly gap-[40px] sticky pt-40 z-10">
            <div className="w-full lg:w-[52.25rem] flex flex-col items-center justify-center">
              <h1 className="text-[5.124rem] md:text-[6.25rem] lg:text-[12.5rem] font-bold leading-tight lg:leading-[212px] uppercase text-center mb-[24px]">
                Sable & Grey
              </h1>

              <p className="max-w-[39rem] text-[20px] sm:text-[24px] text-white text-center font-light md:font-normal leading-[32px]">
                We build what others promise, quality that shows, and investment
                that outperforms.
              </p>
            </div>

            <Button
              variant="dark"
              className="w-[340px] flex items-center justify-around rounded-full bg-[#212121] hover:bg-[#484848] text-white"
            >
              <span className="uppercase">Talk To us today</span>

              <div className="size-[2.5rem] rounded-full bg-black flex items-center justify-center">
                <Image
                  src="/icons/arrow-right-up.svg"
                  alt=""
                  className="size-fit rotate-[135deg]"
                  width={0}
                  height={0}
                />
              </div>
            </Button>

            {/* Social media links */}
            <div
              id="socials"
              className="w-[210px] h-[50px] sm:w-[50px] sm:h-[210px] bg-glass flex sm:flex-col items-center justify-evenly gap-[8px] p-[8px] rounded-md sm:absolute top-[300px] left-3.5"
            >
              {socialLightIcons.map((icon, idx) => (
                <a href="" title="social" key={idx}>
                  <Image
                    src={icon}
                    alt=""
                    width={40}
                    height={40}
                    className="size-fit"
                  />
                </a>
              ))}
            </div>

            {/* Slider indicator */}
            <div className="w-auto h-auto sm:w-[2.5rem] flex sm:flex-col gap-[8px] sm:absolute top-[300px] right-3.5">
              {Array.from({ length: 5 }, (_, idx) => (
                <div
                  key={idx}
                  className="size-[1.5rem] sm:size-[2.5rem] bg-[#FFFFFF1A] border border-white flex items-center justify-center rounded-full cursor-pointer"
                >
                  <div className="size-[5px] rounded-full bg-white" />
                </div>
              ))}
            </div>
          </div>

          {/* dark overlay */}
          <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-[#00000066] to-[#000000]" />
        </div>

        {/* About section */}
        <div className="size-auto flex flex-col gap-y-[5rem] my-10 px-2">
          <div
            id="who-we-are"
            className="w-full h-auto lg:h-[500px] flex flex-col lg:flex-row items-center p-1.5 sm:p-0 lg:border-y sm:border-gray-400 lg:divide-gray-400 lg:divide-x"
          >
            <div className="w-full h-[150px] sm:h-full sm:w-auto grow flex rounded-lg lg:rounded-none">
              <div className="size-full border border-y border-black">
                <Image
                  src="/images/construction.jpg"
                  alt=""
                  width={0}
                  height={0}
                  className="size-full object-cover object-right rounded-l-lg lg:rounded-none"
                />
              </div>

              <div className="w-full flex flex-col items-center pl-3 sm:pl-20 sm:pt-4 grow">
                <div className="w-full">
                  <span className="block sm:text-[28px] text-gray-400 font-bold underline pb-2">
                    01
                  </span>

                  <p className="max-w-[290px] font-light text-white sm:text-[22px] leading-[1.7rem] pt">
                    Founded: 2022 - Based in Nigeria
                  </p>
                </div>
                <h2 className="w-full text-gray-400 text-[20px] lg:text-[36px] ">
                  Who are we?
                </h2>
              </div>
            </div>

            <div className="size-full lg:w-[37.5rem] text-white flex flex-col items-center pt-6 gap-[24px]">
              <p className="w-full lg:w-[500px] text-[15px] sm:text-[23px] text-gray-400 px-1 lg:px-4">
                At Sable and Grey, we believe excellence lives in the details.
                Every line, every finish, every space is shaped with purpose,
                and every investment with us is a commitment to enduring value,
                trust, and rewarding returns.
              </p>

              <p className="w-full lg:w-[500px] text-[15px] sm:text-[23px] px-1 lg:px-4">
                We believe in building not just homes but immersive experiences
                where every nuance is thoughtfully considered.
              </p>
            </div>
          </div>

          <div id="our-vision" className="w-full px-4">
            <div className="w-full h-auto xl:h-[500px] bg-gradient-to-b from-[#51515166] to-[#FFFFFF00] rounded-lg md:rounded-4xl p-2 sm:p-8 flex flex-col xl:flex-row gap-15">
              <div className="w-full sm-w-auto flex flex-col sm:flex-row gap-10 md:grow">
                <div className="w-full sm:w-[170px]">
                  <div className="">
                    <span className="block sm:text-[28px] text-gray-400 font-bold underline pb-2">
                      02
                    </span>

                    <p className="w-full font-light text-white sm:text-[22px] leading-[1.7rem] pt">
                      We exist for your luxury
                    </p>
                  </div>

                  <h2 className="w-full text-gray-400 text-[20px] lg:text-[36px] hidden xl:block">
                    Our <br />
                    <span className="md:pl-6">Vision</span>
                  </h2>

                  <h2 className="w-full text-gray-400 text-[20px] lg:text-[36px] block xl:hidden">
                    Our Vision
                  </h2>
                </div>

                <div className="w-full sm:w-[473px]">
                  <p className="text-[20px] sm:text-[24px] text-gray-500 leading-[32px] mb-[40px]">
                    To be a top-tier and dependable real estate development and
                    investment company defined by quality, trust, and
                    transparency.
                  </p>

                  <ul className="text-[18px] list-disc space-y-4">
                    <li>
                      <div className="text-gray-500">
                        {" "}
                        <span className="text-white">Excellence:</span> We
                        pursue the highest standards in everything we do.
                      </div>
                    </li>

                    <li>
                      <div className="text-gray-500">
                        {" "}
                        <span className="text-white">Integrity:</span> We
                        operate with honesty, fairness, and transparency.
                      </div>
                    </li>

                    <li>
                      <div className="text-gray-500">
                        {" "}
                        <span className="text-white">Quality:</span> We deliver
                        real estate solutions that stand the test of time.
                      </div>
                    </li>

                    <li>
                      <div className="text-gray-500">
                        {" "}
                        <span className="text-white">
                          Customer Centricity:
                        </span>{" "}
                        Our clients' needs shape our designs, service, and
                        strategy.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-full h-full relative sm:grow">
                <Image
                  src="/images/design.jpg"
                  alt=""
                  width={0}
                  height={0}
                  className="w-full h-[450px] lg:size-full rounded-[20px] object-cover"
                />

                <Button className="max-w-[250px] h-[4rem] sm:w-[301px] sm:h-auto absolute bottom-[10px] right-[10px] rounded-[10px] flex items-center justify-around bg-glass !bg-gray-300 hover:!bg-white">
                  <span className="">Learn More</span>

                  <div className="size-[2.5rem] rounded-full bg-black flex items-center justify-center rotate-[135deg]">
                    <Image
                      src="/icons/arrow-right-up.svg"
                      alt=""
                      className="size-fit"
                      width={0}
                      height={0}
                    />
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="w-full h-auto  px-2">
          <div
            id="office-design-bg"
            className="w-full h-auto sm:h-[652px] bg-[url(/images/office.jpg)] bg-cover bg-bottom flex items-center justify-center relative"
          >
            <div className="size-full flex flex-col items-center justify-center gap-y-10 sm:gap-y-20 sticky z-10 py-10">
              <div className="w-full flex flex-col items-center justify-center">
                <Image
                  src="/logo-icon-white.svg"
                  alt=""
                  width={0}
                  height={0}
                  className="w-[150px] sm:!w-[200px] mb-10"
                />
                <Image
                  src="/logo-full-white.svg"
                  alt=""
                  width={0}
                  height={0}
                  className="w-[200px]"
                />
              </div>

              <div className="w-full flex flex-col items-center gap-[32px]">
                <div className="w-full md:w-auto flex flex-col sm:flex-row gap-6 sm:gap-4">
                  <div className="w-auto h-[70px] inline-flex items-center justify-center text-white py-[16px] px-[24px] bg-glass rounded-full cursor-pointer">
                    <MdMail className="mr-2 w-[26.13px] h-[30px]" />
                    <a href="mailto:info@sableandgreyrealestate.com?subject=">
                      info@sableandgreyrealestate.com
                    </a>
                  </div>

                  <div className="flex items-center justify-evenly gap-4 flex-wrap">
                    <a
                      href=""
                      className="size-[70px] sm:size-[80px] flex items-center justify-center text-white py-[16px] px-[24px] bg-glass rounded-full"
                    >
                      <AiFillInstagram className="w-[26.13px] h-[30px]" />
                    </a>
                    <a
                      href=""
                      className="size-[70px] sm:size-[80px] flex items-center justify-center text-white py-[16px] px-[24px] bg-glass rounded-full"
                    >
                      <IoLogoFacebook className="w-[26.13px] h-[30px]" />
                    </a>
                    <a
                      href=""
                      className="size-[70px] sm:size-[80px] flex items-center justify-center text-white py-[16px] px-[24px] bg-glass rounded-full"
                    >
                      <FaXTwitter className="w-[26.13px] h-[30px]" />
                    </a>
                    <a
                      href=""
                      className="size-[70px] sm:size-[80px] flex items-center justify-center text-white py-[16px] px-[24px] bg-glass rounded-full"
                    >
                      <FaTiktok className="w-[26.13px] h-[30px]" />
                    </a>
                  </div>
                </div>

                <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
                  <div className="w-auto inline-flex items-center justify-center text-white py-[16px] px-[24px] bg-glass rounded-full cursor-pointer">
                    <MdLocationPin className="mr-2 w-[26.13px] h-[30px]" />
                    <a href="https">7, Howeidy A. street Kado, Abuja</a>
                  </div>

                  <div className="w-auto inline-flex items-center justify-center text-white py-[16px] px-[24px] bg-glass rounded-full cursor-pointer">
                    <MdLocalPhone className="mr-2 w-[26.13px] h-[30px]" />
                    <a href="tel:+2349122582603">+2349122582603</a>
                  </div>

                  <div className="w-auto inline-flex items-center justify-center text-white py-[16px] px-[24px] bg-glass rounded-full">
                    <MdLocalPhone className="mr-2 w-[26.13px] h-[30px]" />
                    <a href="tel:+2349122582603">+2349122582603</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="size-full bg-gradient-to-b from-[#00000066] to-[#000000] absolute left-0 top-0" />
          </div>

          <div className="w-full h-auto hidden md:flex items-center justify-center">
            <h2 className="text-[90px] lg:text-[170px] text-[#212121] leading-[200px]">
              SABLE & GREY
            </h2>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer id="#footer" className="px-2 divide-y divide-gray-700 space-y-2">
        <div className="w-full h-auto sm:h-[5rem]  text-white flex flex-col sm:flex-row items-start sm:items-center justify-around px-3 gap-8">
          <div className="w-full flex items-center justify-center sm:justify-start">
            <img
              src="/logo-full-white.svg"
              alt=""
              className="max-w-[200px] h-auto"
            />
          </div>

          <div className="w-full sm:w-[400px] flex items-center justify-around">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact us</a>
          </div>

          <div className="w-full sm:w-[210px] h-[50px] flex items-center justify-evenly gap-[8px] p-[8px] rounded-md">
            {socialLightIcons.map((icon, idx) => (
              <a href="" title="social" key={idx} className="cursor-pointer">
                <Image
                  src={icon}
                  alt=""
                  width={40}
                  height={40}
                  className="size-fit"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="w-full h-[3rem] flex items-center justify-center">
          <p className="text-white">
            &copy; 2025 Sable & Grey. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
