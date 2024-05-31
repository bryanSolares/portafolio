import "./about.css";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">Sobre mí</h2>
      <span className="section__subtitle"></span>

      <div className="about__container container ">
        <div className="about__data">
          <p className="about__description">
            Soy un apasionado de la ingeniería del caos, con un profundo interés en la seguridad de las aplicaciones y
            la implementación rigurosa de los requisitos no funcionales esenciales para un arquitecto de soluciones. Con
            más de 5 años de experiencia en el campo de la informática, he cultivado un compromiso inquebrantable con la
            excelencia en cada proyecto. Mi enfoque se centra en destacar en lo ordinario y rechazar lo convencional,
            siempre con el objetivo de innovar, superar expectativas y dejar una huella positiva en cada iniciativa en
            la que participo. En mi trayectoria, he priorizado la seguridad y la resiliencia, aplicando principios
            avanzados de AWS para construir sistemas robustos y escalables. Mi meta es no solo cumplir, sino también
            elevar los estándares, aportando valor significativo y sostenible en cada proyecto.
          </p>
          <Info />
          <div className="about__button"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
