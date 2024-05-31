import "./experience.css";
import Info from "./Info";

const Experience = () => {
  return (
    <section className="py-12 md:py-24">
      <div className="max-w-4xl mx-auto px-4 md:px-0">
        <h2 className="text-3xl font-bold text-center text-gray-900">Experiencia</h2>
        <div className="mt-8 relative before:absolute before:inset-x-0 before:h-full before:border-l-2 before:border-gray-200 before:dark:border-gray-700">
          <div className="relative flex items-start space-x-4 pb-8 ml-4">
            <div className="flex-shrink-0">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-white">
                <BriefcaseIcon className="h-5 w-5" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900">Analista de proyectos y Arquitecto AWS</h3>
              <p className="text-gray-600">Claro Centroamérica</p>
              <p className="text-gray-600">2022 - Presente</p>
              <p className="mt-1 text-gray-600">
                Líder de análisis, diseño, implementación y seguimiento de soluciones tecnológicas para el ámbito
                comercial y corporativo, manteniendo una comunicación constante con las áreas corporativas en
                Centroamérica para el desarrollo e implementación de proyectos estratégicos y de alto valor, priorizando
                la automatización y disminución de procesos manuales.
              </p>
            </div>
          </div>
          <div className="relative flex items-start space-x-4 pb-8 ml-4">
            <div className="flex-shrink-0">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-white">
                <BriefcaseIcon className="h-5 w-5" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900">Analista/Desarrollador/Soporte y Atención al Cliente</h3>
              <p className="text-gray-600">Compumundo S.A.</p>
              <p className="text-gray-600">2018 - 2022</p>
              <p className="mt-1 text-gray-600">
                Líder en el equipo de desarrollo, proponiendo diseños de arquitectura, gestionando tiempos,
                desarrollando soluciones efectivas y facilitando la comunicación entre el equipo y los clientes.
                Involucrado en el mantenimiento y mejora de aplicaciones móviles híbridas, implementando nuevas
                funcionalidades para mejorar el rendimiento y la satisfacción del cliente.
              </p>
            </div>
          </div>
          <div className="relative flex items-start space-x-4 pb-8 ml-4">
            <div className="flex-shrink-0">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-white">
                <BriefcaseIcon className="h-5 w-5" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900">Analísta de proyectos</h3>
              <p className="text-gray-600">Imperial Fashion S.A.</p>
              <p className="text-gray-600">2015 - 2018</p>
              <p className="mt-1 text-gray-600">
                Responsable del control, recepción y despacho de productos de bodega, así como la planificación del
                calendario y tiempos para cumplir con los objetivos de producción y la verificación de estándares de
                calidad. Desarrollo de herramientas informáticas para control de calidad mejorando significativamente
                los tiempos y la precisión en el control de productos auditados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  function BriefcaseIcon(props) {
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
        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        <rect width="20" height="14" x="2" y="6" rx="2" />
      </svg>
    );
  }
};

export default Experience;
