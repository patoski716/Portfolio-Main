"use client";

import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const experiences = [
  {
    role: "Senior UIUX Designer | Unity Bank Nigeria",
    period: "June 2025 – Present (Onsite, Fulltime)",
    details: [
      "Led end-to-end product design for the bank's digital ecosystem, which includes the mobile banking app, Cash Connect financing platform, and an internal Idea Portal.",


      "Authored detailed design specs, user journey maps, and style guidelines, which streamlined development and reduced QA feedback loops by 40%.",


      "Designed interactive wireframes and high-fidelity prototypes using Figma and FigJam, cutting iteration cycles by 35%",


      "Conducted user testing and research on the mobile app and Cash Connect, which boosted transaction completion rates by 40% and increased platform engagement.",

    ],
  },
  // {
  //   role: "Senior UIUX Designer | MyDocki, Nigeria",
  //   period: "March 2025 – July 2025 (Remote, Part-time, Contract)",
   
  //   details: [
  //     "Designed end-to-end user experiences for MyDocki, a telemedicine platform offering doctor consultations, pharmacy ordering, and patient health management.",

  //     "Conducted user research and usability testing with patients and doctors, leading to a 30% faster consultation booking process and a 25% improvement in pharmacy order completion rates.",

  //     "Implemented a scalable design system that ensured consistency across the patient app, doctor portal, and pharmacy interface, reducing UI inconsistencies by 40%.",

  //     "Collaborated with cross-functional teams (engineering, medical consultants, and business stakeholders) to align product features with compliance standards and business goals.",
  //   ],
  // },
  {
    role: "Lead UIUX Designer  | Leptons Multiconcept, Nigeria",
    period: "May 2024 – June 2025 (Onsite, Fulltime)",
    
    details: [
      "Drove UX/UI strategy and system redesigns across platforms for real estate, Fintech, and e-commerce, which enhanced user satisfaction and increased platform adoption.",
      "Authored design specs, user flows, and reusable style guides for PowerKit and Fixam, which ensured consistent development and slashed QA feedback loops by 40%.",

      "Designed interactive wireframes and high-fidelity prototypes using Figma and FigJam, which cut design iteration cycles by 35% and accelerated stakeholder alignment.",

      "Led end-to-end usability testing, which boosted the task success rate by 40% and drove product adoption."
    ],
  },
  {
    role: "Lead UIUX Designer / Product Manager  | Beyond Tech, Nigeria",
    period: "January 2025 – June 2025 (Remote, Part-time, Contract)",
    
    details: [
      "Strategically led the end-to-end product life cycle and designed the UX/UI for Work&Shop, a platform connecting users to service providers. Additionally, I led the redesign of the Ecomarine Group corporate website, improving its user experience and professional appeal, which directly contributed to a 25% increase in client inquiries within the first three months of launch.",

      "Spearheaded user research that informed design iterations, leading to a 25% increase in task completion and a 40% reduction in drop-off during onboarding.",

      "Designed interactive wireframes and high-fidelity prototypes using Figma, which cut design iteration cycles by 35% and accelerated stakeholder alignment.",
      
      "Created detailed user flows, design specs, and style guides, streamlining developer handoff and ensuring 95% design-to-dev accuracy."
    ],
  },
  {
    role: "UIUX Design Tutor | Raadaa Partners International Limited, Nigeria",
    period: "November 2022 - March 2023 (Remote, Fulltime, Contract)",
    
    details: [
      "Taught aspiring UI/UX designers through structured lessons, workshops, and critiques, empowering over 400 students to build professional portfolios.",

      "Developed a comprehensive curriculum that covered UX principles, user flows, wireframing, prototyping, and usability testing with Figma.",

      "Provided one-on-one mentorship and detailed design reviews, leading to a 40% improvement in portfolio quality for the cohort.",
    ],
  },
  {
    role: "UIUX Designer | Khemshield, Nigeria",
    period: "September 2021 - November 2022 (Remote, Part-time)",
    
    details: [
      "Spearheaded UX/UI design for the company's digital learning products, optimizing learning management interfaces and training dashboards.",

      "Structured user flows and learning paths for the Learning Management System (LMS), which improved learner navigation efficiency by 30%.",

      "Led the development of an onboarding flow that increased activation rates by 30%.",

      "Worked with cross-functional teams to run user interviews and usability tests, rapidly iterating on designs and resulting in a 25% drop in student onboarding time."
    ],
  },
];

const Experience = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
  }, []);

  return (
    <div className="mb-[100px] overflow-hidden" id="experience">
      <div className="space-y-[8px]" data-aos="fade-up">
        <p className="font-[500] text-[35px] md:text-[40px]">Experience</p>
        <p className="font-[500] text-[15px] md:text-[20px]">
          Navigating my professional journey, one role at a time
        </p>
      </div>

      <div className="mt-[32px] space-y-[16px]">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-[#f5f5f5] dark:bg-[#48484A] rounded-[8px] overflow-hidden"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <button
  onClick={() => toggleIndex(index)}
  className={`w-full flex justify-between items-center py-[16px] px-[16px] 
    ${openIndex === index ? "border-b border-[#D9D9D9]" : ""} 
    focus:outline-none cursor-pointer`}
>
  <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-2">
    {/* Left: Role */}
    <p className="font-[700] text-[18px] md:text-[20px] text-left">
      {exp.role}
    </p>
    
    {/* Right: Period */}
    <p className="font-[400] text-[14px] md:text-[16px] text-gray-300">
      {exp.period}
    </p>
  </div>

  {openIndex === index ? (
    <FaChevronUp className="text-[#000000] dark:text-white text-[18px] ml-4" />
  ) : (
    <FaChevronDown className=" text-[#000000] dark:text-white text-[18px] ml-4" />
  )}
</button>

            <div
              className={`transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              
              <div className="py-[16px] px-[16px] text-[14px] md:text-[16px] font-[400] space-y-[8px]">
                {exp.details.map((detail, i) => (
                  <p key={i}>{detail}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
