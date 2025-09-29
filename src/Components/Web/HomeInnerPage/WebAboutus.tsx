import { Link } from "react-router-dom";
import { images } from "../../../assets/Images/Images";

export const WebAboutus = () => {
  return (
    <>
      <div id="About-Section" className="about-section">
        <div className="container service-container w-container">
          <div className="about-wrapper">
            <div className="about-inner">
              <div className="section-title-block mw-375px">
                <div className="section-intro-text">
                  Empowering Your Digital Growth
                </div>
                <h2 className="section-title">
                  Innovative digital solutions for
                  <span className="stoke-text"> business growth</span>
                </h2>
              </div>
              <div className="about-content-image left-side image-hover-effect max-width-635px overflow-hidden">
                <img
                  src={images.aboutustwo}
                  loading="lazy"
                  sizes="(max-width: 479px) 94vw, (max-width: 767px) 96vw, (max-width: 991px) 97vw, (max-width: 1279px) 471px, (max-width: 1439px) 47vw, 635px"
                  alt="About Image"
                  className="about-image"
                />
              </div>
            </div>
            <div className="about-content-image">
              <div className="image-hover-effect max-width-635px overflow-hidden">
                <img
                  src={images.aboutOne}
                  loading="lazy"
                  sizes="(max-width: 479px) 94vw, (max-width: 668px) 95vw, (max-width: 991px) 635px, (max-width: 1279px) 435px, (max-width: 1439px) 47vw, 635px"
                  alt="About Image"
                  className="about-image"
                />
              </div>
              <p className="section-paragraph" style={{ fontFamily: "Syne" }}>
                <span style={{ color: "var(--coral-primary-color)" }}>
                  Tailored Digital Solutions
                </span>
                <br />
                Whether you need a high-performance website, a feature-rich
                mobile app, or standout branding, we design and develop with
                precision and creativity.
                <br />
                <span style={{ color: "var(--coral-primary-color)" }}>
                  Driving Business Success
                </span>
                <br />
                Our goal is to help your business grow faster, connect with more
                customers, and stay ahead with cutting-edge design and
                technology.
              </p>
              <div className="section-button-block">
                <Link to="/about" className="button-primary">
                  More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="line-design-wrapper">
          <div className="single-line"></div>
          <div className="single-line"></div>
          <div className="single-line"></div>
        </div>
      </div>
    </>
  );
};
