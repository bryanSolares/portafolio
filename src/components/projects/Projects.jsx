export default function Projects() {
  return (
    <div className=" py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Proyectos destacados</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          <div className=" rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 md:p-6">
              <h3 className="text-xl font-bold mb-2">Backend para POS de ventas</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4 text-xs">
                Backend para control de ventas en punto de venta, con autenticación de usuarios y gestión de productos,
                clientes, facturas y pagos.
              </p>
              <div className="flex items-center gap-2">
                <div className="bg-gray-950		 rounded-full px-3 py-1 text-xs font-medium text-white	">Node.js</div>
                <div className="bg-gray-950		 rounded-full px-3 py-1 text-xs font-medium text-white	">Express</div>
                <div className="bg-gray-950		 rounded-full px-3 py-1 text-xs font-medium text-white	">MongoDB</div>
              </div>
              <div className="mt-4 flex gap-2">
                <a
                  href="https://github.com/bryanSolares/backend_pos"
                  target="_blank"
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <GithubIcon className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className=" rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 md:p-6">
              <h3 className="text-xl font-bold mb-2">Plantilla para API REST</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4 text-xs">
                Plantilla para desarrollo de API REST, con configuración de documentación y pruebas unitarias.
              </p>
              <div className="flex items-center gap-2">
                <div className="bg-gray-950		 rounded-full px-3 py-1 text-xs font-medium text-white	">Node.js</div>
                <div className="bg-gray-950		 rounded-full px-3 py-1 text-xs font-medium text-white	">Express</div>
                <div className="bg-gray-950		 rounded-full px-3 py-1 text-xs font-medium text-white	">
                  Supertest/Swagger
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <a
                  href="https://github.com/bryanSolares/simple-skeleton-backend-nodejs-express"
                  target="_blank"
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <GithubIcon className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className=" rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 md:p-6">
              <h3 className="text-xl font-bold mb-2">Sito web estático en S3</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4 text-xs">
                Implementación de sitio estático en bucket S3.
              </p>
              <div className="flex items-center gap-2">
                <div className="bg-gray-950		 rounded-full px-3 py-1 text-xs font-medium text-white	">AWS</div>
                <div className="bg-gray-950		 rounded-full px-3 py-1 text-xs font-medium text-white	">Terraform</div>
                <div className="bg-gray-950		 rounded-full px-3 py-1 text-xs font-medium text-white	">HTML</div>
              </div>
              <div className="mt-4 flex gap-2">
                <a
                  href="https://github.com/bryanSolares/s3-public-page-with-terraform"
                  target="_blank"
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <GithubIcon className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className=" rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 md:p-6">
              <h3 className="text-xl font-bold mb-2">API para administración de imágenes</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4 text-xs">
                Integración con AWS S3. Desarrollo de API para gestión de imágenes.
              </p>
              <div className="flex items-center gap-2">
                <div className="bg-gray-950		 rounded-full px-3 py-1 text-xs font-medium text-white	">AWS</div>
                <div className="bg-gray-950		 rounded-full px-3 py-1 text-xs font-medium text-white	">Nodejs/Express</div>
                <div className="bg-gray-950		 rounded-full px-3 py-1 text-xs font-medium text-white	">Swagger</div>
              </div>
              <div className="mt-4 flex gap-2">
                <a
                  href="https://github.com/bryanSolares/manage-files-with-s3-and-nodejs-express"
                  target="_blank"
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <GithubIcon className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GithubIcon(props) {
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
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}
