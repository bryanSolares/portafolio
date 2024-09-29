import React from "react";

const Experience = () => {
  return (
    <section className="py-16 md:py-24 dark:text-white">
      <div className="max-w-5xl mx-auto px-4 md:px-0">
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
        <div className="relative before:absolute before:inset-x-0 before:h-full before:border-l-2 before:border-gray-300">
          <ExperienceItem
            title="Project Analyst / AWS Architect / Backend Developer"
            company="Claro Central America"
            period="2022 - Present"
            description="Leading analysis, design, implementation, and monitoring of technological solutions for commercial and corporate areas, maintaining constant communication with corporate departments across Central America for the development and implementation of high-value strategic projects, focusing on automation and reducing manual processes."
          />
          <ExperienceItem
            title="Analyst/Full Stack Developer/Customer Support"
            company="Compumundo S.A."
            period="2018 - 2022"
            description="Team lead in development, proposing architectural designs, managing timelines, developing effective solutions, and facilitating communication between the team and clients. Involved in maintaining and improving hybrid mobile applications, implementing new features to enhance performance and customer satisfaction."
          />
          <ExperienceItem
            title="Project Analyst"
            company="Imperial Fashion S.A."
            period="2015 - 2018"
            description="Responsible for control, receipt, and dispatch of warehouse products, as well as scheduling and planning timelines to meet production goals and ensuring quality standards. Developed IT tools for quality control, significantly improving time and accuracy in auditing products."
          />
        </div>
      </div>
    </section>
  );
};

const ExperienceItem = ({ title, company, period, description }) => {
  return (
    <div className="relative flex items-start space-x-4 pb-10 ml-6 md:ml-8 dark:text-white">
      <div className="flex-shrink-0">
        <div className="flex h-10 w-10 items-center justify-center rounded-full  text-white shadow-md">
          <BriefcaseIcon className="h-5 w-5" />
        </div>
      </div>
      <div className="flex-1  p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold bg:text-white">{title}</h3>
        <p className="text-gray-200 font-medium">{company}</p>
        <p className="text-gray-200">{period}</p>
        <p className="mt-2 text-gray-200 text-justify">{description}</p>
      </div>
    </div>
  );
};

const BriefcaseIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    <rect width="20" height="14" x="2" y="6" rx="2" />
  </svg>
);

export default Experience;
