import "./contact.css";

const Contact = () => {
  return (
    <section className="contact section dark:text-white" id="contact">
      <h2 className="section__title">Contact</h2>

      <div className="contact__container container ">
        <div className="contact__data">
          <div className="contact__button text-black ">
            <a href="mailto:solares.josue@outlook.com" className="button button--flex bg-neutral-50">
              Email 📫
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
