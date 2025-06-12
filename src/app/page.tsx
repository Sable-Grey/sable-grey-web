"use client";
import { useState, useEffect, createElement } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "@/modules/button";
import { MdLocationPin, MdLocalPhone, MdMail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import {
  FaLinkedin,
  FaLinkedinIn,
  FaTiktok,
  FaFacebook,
  FaInstagram,
  FaStar,
  FaHandshake,
  FaGem,
  FaUserCheck,
} from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { RiFacebookCircleLine } from "react-icons/ri";
import Nav from "./(nav)/nav";
import sliderImages from "@/slider-images/slider-entry";
import { IconType } from "react-icons";

/* ----------------------------------------------------------------------------------------------------- */

const socialMediaHandles: Record<
  any,
  { link: string; lightIcon: IconType; filledIcon: IconType }
> = {
  ig: {
    link: "https://instagram.com/sableandgreyrealestateltd",
    lightIcon: FaInstagram,
    filledIcon: AiFillInstagram,
  },
  facebook: {
    link: "https://instagram.com/sableandgreyrealestateltd",
    lightIcon: RiFacebookCircleLine,
    filledIcon: FaFacebook,
  },
  twitter: {
    link: "https://x.com/sableandgreyltd",
    lightIcon: FaXTwitter,
    filledIcon: FaXTwitter,
  },
  tiktok: {
    link: "https://tiktok.com/@sableandgreyrealestate",
    lightIcon: FaTiktok,
    filledIcon: AiFillTikTok,
  },
  linkedIn: {
    link: "https://linkedin.com/company/sable-and-grey/",
    lightIcon: FaLinkedinIn,
    filledIcon: FaLinkedin,
  },
};

const coreValues = [
  {
    value: "Excellence",
    caption: "We pursue the highest standards in everything we do.",
    icon: FaStar,
  },
  {
    value: "Integrity",
    caption: "We operate with honesty, fairness, and transparency.",
    icon: FaHandshake,
  },
  {
    value: "Quality",
    caption: "We deliver real estate solutions that stand the test of time.",
    icon: FaGem,
  },
  {
    value: "Customer Centricity",
    caption: "Our clients' needs shape our designs, service, and strategy",
    icon: FaUserCheck,
  },
];

export default function Home() {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIdx) =>
        prevIdx === sliderImages.length - 1 ? 0 : prevIdx + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const goToImage = (imageIdx: number) => setCurrentImageIndex(imageIdx);

  return (
    <div className="relative">
      {/* Nav */}
      <Nav />

      <main>
        {/* Hero section */}
        <div id="home" className="size-full md:h-screen 2xhl:h-full relative">
          <div className="size-full flex flex-col items-center justify-evenly gap-[40px] sticky pt-40 z-20">
            <div className="w-full lg:w-[52.25rem] flex flex-col items-center justify-center">
              <h1 className="text-[3.124rem] md:text-[6.25rem] font-bold leading-[90px] lg:leading-[190px] uppercase text-center mb-[12px] sm:mb-[24px]">
                Sable & Grey
              </h1>

              <p className="max-w-[39rem] px-1 sm:px-0 text-[18px] sm:text-[24px] text-white text-center font-light md:font-normal leading-[32px]">
                We build what others promise, quality that shows, and investment
                that outperforms.
              </p>
            </div>

            <Button
              className="w-[300px]  md:w-[340px] flex items-center justify-around rounded-full bg-[#212121] hover:bg-[#484848] text-white"
              onClick={() => router.push("/#contact")}
            >
              <span className="uppercase mr-3">Talk To us today</span>

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
              className="w-[210px] h-[50px] sm:w-[50px] sm:h-[210px] bg-glass flex sm:flex-col items-center justify-evenly gap-[9px] p-[8px] rounded-md sm:absolute top-[300px] left-3.5"
            >
              {Object.keys(socialMediaHandles).map((item, idx) => (
                <a
                  href={socialMediaHandles[item].link}
                  title="social"
                  key={idx}
                  target="_blank"
                  rel="noopener"
                >
                  {createElement(socialMediaHandles[item].lightIcon, {
                    className: "size-[25px] text-white",
                  })}
                </a>
              ))}
            </div>

            {/* Slider indicator */}
            <div className="w-auto h-auto sm:w-[2.5rem] flex sm:flex-col gap-[8px] sm:absolute top-[300px] right-3.5 hidden sm:block">
              {sliderImages.map((_, idx) => (
                <div
                  key={idx}
                  onClick={() => goToImage(idx)}
                  className={`size-[1.5rem] sm:size-[2.5rem] rounded-full flex items-center justify-center cursor-pointer ${
                    idx === currentImageIndex
                      ? "bg-[#FFFFFF1A] border border-white"
                      : ""
                  }`}
                >
                  <div className="size-[5px] rounded-full bg-white" />
                </div>
              ))}
            </div>
          </div>

          {/* dark overlay */}
          <div className="size-full absolute top-0 left-0 bg-gradient-to-b from-[#00000066] to-[#000000] z-10" />

          {/* Background image */}
          {sliderImages.map((image, idx) => (
            <div
              key={idx}
              className={`size-full md:h-screen lg:h-full absolute top-0 left-0 inset-0 transition-opacity duration-1000 ease-in-out hidden sm:block ${
                idx === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${image.src})`,
                backgroundSize: "cover",
                backgroundPosition: idx === 0 ? "50% 33%" : "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          ))}

          <div
            className="size-full md:h-screen lg:h-full absolute top-0 left-0 block sm:hidden"
            style={{
              backgroundImage: `url(/images/slider/image-1.avif)`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>

        {/* About section */}
        <div
          id="about"
          className="size-auto flex flex-col gap-y-[5rem] my-10 px-2"
        >
          <div
            id="who-we-are"
            className="w-full h-auto lg:h-[500px] flex flex-col lg:flex-row items-center p-1.5 sm:p-0"
          >
            <div
              id="cover"
              className="w-full lg:w-[350px] h-[300px] sm:h-[450px] rounded-lg lg:rounded-none grow relative flex items-center justify-center"
            >
              <div className="z-10">
                <h2 className="w-full text-white text-[20px] md:text-4xl lg:text-[60px] text-center">
                  Who are we?
                </h2>
              </div>

              <div className="absolute top-0 left-0 size-full bg-[#0000008a]" />
            </div>

            <div className="size-full lg:w-[37.5rem] text-white flex flex-col items-center justify-center pt-6 gap-[24px]">
              <p className="w-full text-[15px] sm:text-[23px] lg:w-[500px] text-gray-400 px-1 lg:px-4">
                At Sable and Grey, we believe excellence lives in the details.
                Every line, every finish, every space is shaped with purpose,
                and every investment with us is a commitment to enduring value,
                trust, and rewarding returns.
              </p>

              <p className="w-full text-[15px] sm:text-[23px] lg:w-[500px] px-1 lg:px-4">
                We believe in building not just homes but immersive experiences
                where every nuance is thoughtfully considered.
              </p>
            </div>
          </div>

          <div id="our-vision" className="w-full px-4">
            <div className="w-full h-auto bg-gradient-to-b from-[#51515166] to-[#FFFFFF00] rounded-lg md:rounded-4xl p-2 sm:p-8">
              <div className="flex flex-col xl:flex-row gap-15 mb-40">
                <div className="w-full sm-w-auto flex flex-col gap-6 md:grow">
                  <h2 className="w-full text-white text-[20px] md:text-4xl lg:text-[60px]">
                    Our Vision
                  </h2>

                  <p className="text-[15px] sm:text-[23px] text-gray-500 leading-[32px] mb-[40px]">
                    To be a top-tier and dependable real estate development and
                    investment company defined by quality, trust, and
                    transparency.
                  </p>
                </div>

                <div className="w-full h-full relative sm:grow">
                  <div className="w-full h-[450px] lg:size-full relative">
                    <Image
                      src="/images/visionary-scraper.avif"
                      alt=""
                      width={0}
                      height={0}
                      className="size-full rounded-[20px] object-cover"
                      loading="lazy"
                    />

                    <div className="absolute top-0 left-0 size-full bg-[#00000032]" />
                  </div>

                  <Button
                    className="max-w-[250px] h-[4rem] sm:w-[301px] absolute bottom-[10px] left-[10px] rounded-[10px] flex items-center justify-around bg-glass !bg-[#FFFFFF80] hover:!bg-white"
                    onClick={() => router.push("/#contact")}
                  >
                    <span className="">Reach Us</span>

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

              <div className="w-full">
                <h2 className="w-full text-white text-[20px] md:text-4xl lg:text-[60px] mb-10">
                  Our Core Values
                </h2>

                <div className="w-full flex flex-col md:flex-row items-start justify-start md:items-center md:justify-center gap-10 flex-wrap">
                  {coreValues.map((value, idx) => (
                    <div
                      key={idx}
                      className="w-full lg:max-w-[400px] h-[200px] text-white bg-glass rounded-xl flex flex-col items-center justify-center px-8"
                    >
                      <div className="flex items-center gap-4 mb-10 text-[1.5rem]">
                        <strong className="text-white">{value.value}</strong>
                        {createElement(value.icon, { className: "text-white" })}
                      </div>
                      <p>{value.caption}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div id="contact" className="w-full h-auto  px-2">
          <div
            id="office-design-bg"
            className="w-full h-auto sm:h-[652px] bg-[url(/images/office.avif)] bg-cover bg-bottom flex items-center justify-center relative"
          >
            <div className="size-full flex flex-col items-center justify-center gap-y-10 sm:gap-y-20 sticky z-10 py-10">
              <div className="w-full flex flex-col items-center justify-center">
                <Image
                  src="/logo-icon-white.svg"
                  alt=""
                  width={0}
                  height={0}
                  className="w-[120px] sm:!w-[130px] mb-10"
                  loading="lazy"
                />

                <div className="max-w-[800px] flex flex-col items-center justify-center gap-4">
                  <h3 className="text-[20px] lg:text-[36px] text-white">
                    Serious about returns? So are we
                  </h3>
                  <p className="max-w-[650px] text-white text-[18px] sm:text-[20px] leading-[32px] text-center">
                    Whether you&apos;re an entrepreneur seeking bold vision or a
                    partner seeking meaningful impact, we&apos;d love to
                    connect.
                  </p>
                  <i className="text-white text-center">
                    Reach out to us by clicking or tapping on any of the contact
                    directives below.
                  </i>
                </div>
              </div>

              <div className="w-full flex flex-col items-center gap-[32px]">
                <div className="w-full px-2 md:w-auto flex flex-col sm:flex-row gap-6 sm:gap-4">
                  <div className="w-auto h-[70px] inline-flex items-center justify-center text-white py-[16px] px-[24px] bg-glass rounded-full cursor-pointer">
                    <MdMail className="mr-2 w-[26.13px] h-[30px]" />
                    <a
                      href="mailto:info@sableandgreyrealestate.com?subject="
                      target="_blank"
                      rel="noopener"
                    >
                      info@sableandgreyrealestate.com
                    </a>
                  </div>

                  <div className="flex items-center gap-4 flex-wrap">
                    {Object.keys(socialMediaHandles).map((social, idx) => {
                      return (
                        <a
                          key={idx}
                          href={socialMediaHandles[social].link}
                          className="size-[70px] sm:size-[80px] flex items-center justify-center text-white py-[16px] px-[24px] bg-glass rounded-full"
                          target="_blank"
                        >
                          {createElement(
                            socialMediaHandles[social].filledIcon,
                            { className: "w-[26.13px] h-[30px]" }
                          )}
                        </a>
                      );
                    })}
                  </div>
                </div>

                <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
                  <div className="w-auto text-white bg-glass rounded-full cursor-pointer">
                    <a
                      href="https://google.com/maps?q=7+Howeidy+A.+Street+Kado,+Abuja"
                      target="_blank"
                      rel="noopener"
                      className="size-full py-[16px] px-[24px] inline-flex items-center justify-center"
                    >
                      <MdLocationPin className="mr-5 w-[26.13px] h-[30px]" />
                      <span>7 Howeidy A. street Kado, Abuja</span>
                    </a>
                  </div>

                  <div className="w-auto text-white bg-glass rounded-full cursor-pointer">
                    <a
                      href="tel:+2349163622081"
                      className="size-full py-[16px] px-[24px] inline-flex items-center justify-center"
                    >
                      <MdLocalPhone className="mr-5 w-[26.13px] h-[30px]" />
                      <span>(+234)9163622081</span>
                    </a>
                  </div>

                  <div className="w-auto text-white bg-glass rounded-full cursor-pointer">
                    <a
                      href="tel:+2349122582603"
                      className="size-full py-[16px] px-[24px] inline-flex items-center justify-center"
                    >
                      <MdLocalPhone className="mr-5 w-[26.13px] h-[30px]" />
                      <span>(+234)9122582603</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="size-full bg-gradient-to-b from-[#00000066] to-[#000000] absolute left-0 top-0" />
          </div>

          <div className="w-full h-auto hidden md:flex items-center justify-center">
            <h2 className="text-[4.124rem] md:text-[6.25rem] text-[#212121] leading-[200px]">
              SABLE & GREY
            </h2>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer id="#footer" className="px-2 divide-y divide-gray-700 space-y-2">
        <div className="w-full h-auto sm:h-[5rem]  text-white flex flex-col sm:flex-row items-start sm:items-center justify-between px-3 gap-8">
          <div className="w-full sm:w-[400px] flex items-center justify-around">
            <Link href="/#home">Home</Link>
            <Link href="/#about">About</Link>
            <Link href="/#contact">Contact us</Link>
          </div>

          <div className="w-full sm:w-[210px] h-[50px] flex items-center justify-evenly gap-[8px] p-[8px] rounded-md">
            {Object.keys(socialMediaHandles).map((item, idx) => (
              <a
                href={socialMediaHandles[item].link}
                title="social"
                key={idx}
                className="cursor-pointer"
                target="_blank"
                rel="noopener"
              >
                {createElement(socialMediaHandles[item].lightIcon, {
                  className: "size-[25px]",
                })}
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
