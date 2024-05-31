import "./contact.css";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contacto</h2>

      <div className="contact__container container ">
        <div className="contact__data">
          <p className="contact__description">
            Si estás interesado en trabajar conmigo o tienes alguna pregunta, no dudes en contactarme.
          </p>
          <div className="contact__button">
            <a href="mailto:solares.josue@outlook.com" className="button button--flex">
              Enviar correo 📫
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
