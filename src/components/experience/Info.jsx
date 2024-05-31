const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">AWS Solutions Architect</h3>
        <span className="about__subtitle">
          <a href="https://www.credly.com/badges/9363b3b2-d251-40ae-9c47-37cf01483948/public_url" target="_blank">
            Badge
          </a>
        </span>
      </div>

      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">AWS Developer Associate</h3>
        <span className="about__subtitle">
          <a href="https://www.credly.com/badges/e5e017d2-6e0e-4bde-95f3-8b7a251dc968/public_url" target="_blank">
            Badge
          </a>
        </span>
      </div>
    </div>
  );
};

export default Info;
