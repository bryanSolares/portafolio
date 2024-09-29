import "./home.css";

const Data = () => {
  return (
    <div className="home__data dark:text-white">
      <h1 className="home__title">Bryan Solares</h1>
      <h5 className="home__subtitle">
        AWS Solutions Architect <br /> Backend developer
      </h5>
      <p className="home__description"></p>

      <a
        download=""
        href="https://pub-128e9079c0a54d5090dfe4124726e95f.r2.dev/cv-bryan-solares.pdf"
        target="_blank"
        className="button bg-neutral-50 text-black"
      >
        Download CV
      </a>
    </div>
  );
};

export default Data;
