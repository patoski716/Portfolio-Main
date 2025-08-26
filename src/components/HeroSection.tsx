"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="mb-10 overflow-hidden" id="home">
      <section className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 py-12">
        <div className="flex-shrink-0 mx-auto md:mx-0" data-aos="fade-right">
          <div
            className="
              max-h-[350px] max-w-[350px] 
              border-4 border-[#1e1e1e] shadow-lg overflow-hidden
              rounded-none md:rounded-full
              bg-gradient-to-r from-blue-500 to-purple-500
            "
          >
            <Image
              src="/Assets/proc.JPG"
              alt="Profile Picture - Mobile"
              width={350}
              height={350}
              loading="lazy"
              priority={false}
              className="object-cover w-full h-full block md:hidden"
            />

            <Image
              src="/Assets/proc.JPG"
              alt="Profile Picture - Desktop"
              width={350}
              height={350}
              loading="lazy"
              priority={false}
              className="object-cover w-full h-full hidden md:block object-top -translate-y-3"
            />
          </div>
        </div>

        <div
          className="max-w-[700px] text-center md:text-left space-y-4"
          data-aos="fade-left"
        >
          <p className="font-medium text-[20px] md:text-[24px]">
            I&apos;m Patrick Chimezie Chukwudifu
          </p>
          <h1 className="font-bold text-[32px] md:text-[40px] leading-tight">
            UIUX Designer/Product Manager
          </h1>
          <p className="font-normal text-[14px] md:text-[16px] text-justify md:text-left ">
            I design intuitive, scalable, and user-centered digital products that seamlessly connect business goals with customer needs. With over 4 years of experience in UI/UX design and product management, I bridge the gap between design and strategy—crafting experiences that are both visually engaging and business-driven. Skilled in tools like Figma, Trello, Microsoft Suite, and Google Workspace, I lead cross-functional teams from ideation to launch, ensuring every product delivers measurable value. My approach combines research-driven design, agile product development, and strategic roadmapping to create impactful solutions that drive growth, efficiency, and exceptional user satisfaction.
          </p>
          <a
            href="https://docs.google.com/document/d/1y1VdzvZD_VY_8ZisEa39zHwqRyi-JW8n68II1EeQfeA/edit?usp=sharing"
            
            target="_blank"
          >
            <div
              className="p-[10px] rounded-[8px]  bg-[#48484A] dark:bg-[#FFFFFF] inline-flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
              data-aos="zoom-in"
            >
              <p className="font-[500] text-[16px] text-[#ffffff] dark:text-[#48484A]">
                View My Resume
              </p>
              <Image
                src="/Assets/link-square-02.svg"
                alt="Resume Link"
                width={24}
                height={24}
              />
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
