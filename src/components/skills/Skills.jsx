const Skills = () => {
  return (
    <section className="py-12  md:py-24">
      <div className="max-w-4xl mx-auto px-4 md:px-0">
        <h2 className="text-3xl font-bold text-center text-gray-900">Habilidades</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
            <div className="flex flex-wrap gap-2 justify-center">
              <CodeIcon className="h-12 w-12 text-gray-700" />
              <div>
                <h3 className="text-xl font-bold text-gray-900">Desarrollo de Software</h3>
                <p className="text-gray-600">Node.js, Javascript, Typescript</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
            <div className="flex flex-wrap gap-2 justify-center">
              <CloudIcon className="h-12 w-12 text-gray-700" />
              <div>
                <h3 className="text-xl font-bold text-gray-900">Arquitectura de AWS</h3>
                <p className="text-gray-600">EC2, S3, Lambda, Well Architected Framework</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
            <div className="flex flex-wrap gap-2 justify-center">
              <DatabaseIcon className="h-12 w-12 text-gray-700" />
              <div>
                <h3 className="text-xl font-bold text-gray-900">Bases de Datos</h3>
                <p className="text-gray-600">SQL Server, PostgreSQL, DynamoDB</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
            <div className="flex flex-wrap gap-2 justify-center">
              <ContainerIcon className="h-12 w-12 text-gray-700" />
              <div>
                <h3 className="text-xl font-bold text-gray-900">Contenedores y Orquestación</h3>
                <p className="text-gray-600">Docker, Kubernetes, Terraform.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  function CloudIcon(props) {
    return (
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
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    );
  }

  function CodeIcon(props) {
    return (
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
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    );
  }

  function ContainerIcon(props) {
    return (
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
        <path d="M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z" />
        <path d="M10 21.9V14L2.1 9.1" />
        <path d="m10 14 11.9-6.9" />
        <path d="M14 19.8v-8.1" />
        <path d="M18 17.5V9.4" />
      </svg>
    );
  }

  function DatabaseIcon(props) {
    return (
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
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5V19A9 3 0 0 0 21 19V5" />
        <path d="M3 12A9 3 0 0 0 21 12" />
      </svg>
    );
  }
};

export default Skills;
