const Skills = () => {
  const skills = [
    {
      icon: <CodeIcon className="h-10 w-10 text-gray-700" />,
      title: "Software Development",
      description: "Node.js, Javascript, Typescript",
    },
    {
      icon: <CloudIcon className="h-10 w-10 text-gray-700" />,
      title: "AWS Architecture",
      description: "EC2, S3, Lambda, Well Architected Framework",
    },
    {
      icon: <DatabaseIcon className="h-10 w-10 text-gray-700" />,
      title: "Databases",
      description: "SQL Server, PostgreSQL, DynamoDB",
    },
    {
      icon: <ContainerIcon className="h-10 w-10 text-gray-700" />,
      title: "Containers and Orchestration",
      description: "Docker, Kubernetes, Terraform.",
    },
  ];

  return (
    <section className="py-2 md:py-4">
      <div className="max-w-4xl mx-auto px-4 md:px-0 ">
        <h2 className="text-3xl font-bold text-center text-white">Skills</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ icon, title, description }) => (
  <div className=" rounded-lg shadow-md p-4 flex flex-col items-center justify-center bg-neutral-50">
    <div className="flex flex-wrap gap-2 justify-center">
      {icon}
      <div>
        <h3 className="text-lg font-bold ">{title}</h3>
        <p className=" text-sm">{description}</p>
      </div>
    </div>
  </div>
);

const CloudIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
  </SvgIcon>
);

const CodeIcon = (props) => (
  <SvgIcon {...props}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </SvgIcon>
);

const ContainerIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z" />
    <path d="M10 21.9V14L2.1 9.1" />
    <path d="m10 14 11.9-6.9" />
    <path d="M14 19.8v-8.1" />
    <path d="M18 17.5V9.4" />
  </SvgIcon>
);

const DatabaseIcon = (props) => (
  <SvgIcon {...props}>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5V19A9 3 0 0 0 21 19V5" />
    <path d="M3 12A9 3 0 0 0 21 12" />
  </SvgIcon>
);

const SvgIcon = ({ children, ...props }) => (
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
    {children}
  </svg>
);

export default Skills;
