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
                Lideré el análisis, diseño, implementación y seguimiento de soluciones tecnológicas para el ámbito
                comercial y corporativo. Manteniendo una comunicación constante con las áreas corporativas en
                Centroamérica, colaboré en el desarrollo e implementación de proyectos y coordiné la comunicación entre
                diversos proveedores de desarrollo, garantizando una colaboración efectiva entre las áreas internas de
                la empresa. Desarrollé e implementé nuevos requerimientos de programación en herramientas internas y
                comerciales. Supervisé y capacité al personal asignado, asegurando la correcta ejecución de tareas y el
                cumplimiento de objetivos. He presentado diseños de arquitectura a la gerencia para mejorar los tiempos
                de implementación de sistemas, priorizando la automatización y disminuyendo procesos manuales e
                implicaciones relacionadas. Estos diseños buscan principalmente la reducción de costos y el
                aprovechamiento de las mejores alternativas tecnológicas de AWS según el caso de uso. Como líder, dirigí
                eficazmente la implementación de proyectos estratégicos centrados en la automatización de auditorías
                relacionadas con el lavado de dinero y en la gestión y automatización de procesos contables y de
                presupuestación, impactando a la corporación a nivel Centroamérica. Coordiné de manera efectiva a todos
                los equipos involucrados, estableciendo acuerdos claros y objetivos que aseguraron el cumplimiento de
                los estándares y regulaciones exigidos por el cliente y el regulador.
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
              <h3 className="text-xl font-bold text-gray-900">
                Analista/Desarrollador - Soporte y Atención al Cliente
              </h3>
              <p className="text-gray-600">Compumundo S.A.</p>
              <p className="text-gray-600">2018 - 2022</p>
              <p className="mt-1 text-gray-600">
                Lideré el análisis, diseño e implementación de proyectos, manteniendo contacto directo con el cliente
                durante todo el proceso de adquisición, implementación y uso inicial de la herramienta. Desempeñé un rol
                de liderazgo en el equipo de desarrollo, gestionando tiempos, proponiendo soluciones efectivas y
                facilitando la comunicación entre el equipo y los clientes. Me encargué del mantenimiento y mejora de
                aplicaciones móviles híbridas, implementando nuevas funcionalidades para mejorar el rendimiento y la
                satisfacción del cliente. Además, proporcioné atención personalizada y soporte técnico a los clientes.
                Logré migrar exitosamente un backend de Node.js/Express de JavaScript a TypeScript en 5 meses, mejorando
                la escalabilidad y reduciendo errores. Integré el backend y frontend con dos CRMs distintos y añadí
                nuevas funcionalidades como la generación de reportes y la gestión de ventas. Mi trabajo tuvo un impacto
                económico positivo, retuvo clientes y facilitó una negociación significativa de retención al final del
                periodo laboral.
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
                Lideré el control, recepción y despacho de productos de bodega, así como la planificación del calendario
                y tiempos para cumplir con los objetivos de producción y la verificación de estándares de calidad. En
                cuanto a aportes informáticos, desarrollé una herramienta de control de calidad utilizando Visual Basic
                que mejoró significativamente los tiempos y la precisión en el control de productos auditados. Esta
                herramienta, basada en una base de datos en Excel, permitía a los usuarios comparar mediciones
                anteriores y generar informes diarios automáticos, agilizando el proceso de autorización de calidad y
                facilitando la búsqueda de mediciones de referencia. Además, desarrollé una herramienta personalizada
                para registrar lotes de inventario e imprimir fichas relacionadas con las mediciones de calidad,
                reduciendo el tiempo necesario para completar estas tareas de 2 horas a solo 20 minutos. Estos
                desarrollos fueron aprobados por el gerente de informática y resultaron en mejoras notables en la
                eficiencia operativa y en la entrega de resultados.
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
