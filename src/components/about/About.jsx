import "./about.css";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section dark:text-white" id="about">
      <h2 className="section__title">About me</h2>
      <span className="section__subtitle"></span>

      <div className="about__container container ">
        <div className="about__data">
          <p className="about__description">
            I am passionate about chaos engineering, deeply interested in application security and the rigorous
            implementation of the non-functional requirements essential for a solutions architect. With over 5 years of
            experience in the field of informatics, I am committed to excellence in every project I undertake. My focus
            is on excelling at the ordinary while rejecting the conventional, always with the goal of innovating,
            exceeding expectations, and leaving a positive impact on every initiative I participate in. Throughout my
            career, I have prioritized security and resilience, applying advanced AWS principles to build robust and
            scalable systems. My aim is not just to meet standards, but to elevate them, delivering significant and
            sustainable value to every project.
          </p>
          <Info />
          <div className="about__button"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
