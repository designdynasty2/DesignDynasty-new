import { Link, useLocation } from "react-router-dom";
import { images } from "../../assets/Images/Images";

export const WebServices = () => {
  const location = useLocation();
  return (
    <>
      <div id="Service-Section" className="service-section">
        <div className="container service-container w-container">
          <div className="service-section-title-wrapper">
            <div className="section-title-block mw-720px">
              <div className="section-intro-text">What We Do</div>
              <h2 className="section-title">
                We deliver end-to-end digital solutions
              </h2>
            </div>
            {location.pathname === "/services" ? null : (
              <div className="section-button-block">
                <Link to="/services" className="button-primary">
                  Explore All Services
                </Link>
              </div>
            )}
          </div>
          <div className="service-wrapper">
            <div className="single-service">
              <div className="service-collection-wrapper w-dyn-list">
                <div role="list" className="service-list w-dyn-items">
                  <div role="listitem" className="service-item w-dyn-item">
                    <div className="service-content-wrapper">
                      <div className="service-icon-block">
                        <img
                          alt="Service Icon"
                          loading="lazy"
                          src={images.servicesImageThree}
                          className="service-icon"
                        />
                      </div>
                      <div className="service-content-block">
                        <Link
                          to="/web-development"
                          className="service-title-block w-inline-block"
                        >
                          <h3 className="service-title">Web Development</h3>
                        </Link>
                        <p
                          className="service-summary"
                          style={{ fontFamily: "Syne", fontSize: "14px" }}
                        >
                          We build fast, scalable, and secure websites tailored
                          to your business needs. From simple landing pages to
                          complex enterprise solutions, our web development
                          services ensure seamless performance and modern user
                          experiences.
                        </p>
                        <Link
                          to="/web-development"
                          className="service-details-link-block w-inline-block"
                        >
                          <div className="details-text">Read More</div>
                          <div className="service-svg-icon w-embed">
                            <svg
                              width="27"
                              height="27"
                              viewBox="0 0 27 27"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3.19178 7.78083V1.13699V1H25.9315L26 23.8082H19.0137V12.6438L5.72603 25.9315L1 21.2055L14.2192 7.78083H3.19178Z"
                                stroke="currentColor"
                              />
                            </svg>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-service mt-40px">
              <div className="service-collection-wrapper w-dyn-list">
                <div role="list" className="service-list w-dyn-items">
                  <div role="listitem" className="service-item w-dyn-item">
                    <div className="service-content-wrapper">
                      <div className="service-icon-block">
                        <img
                          alt="Service Icon"
                          loading="lazy"
                          src={images.servicesImageone}
                          className="service-icon"
                        />
                      </div>
                      <div className="service-content-block">
                        <Link
                          to="/mobile-developement"
                          className="service-title-block w-inline-block"
                        >
                          <h3 className="service-title">Mobile Development</h3>
                        </Link>
                        <p
                          className="service-summary"
                          style={{ fontFamily: "Syne", fontSize: "14px" }}
                        >
                          Our team creates high-performing, cross-platform
                          mobile applications with intuitive interfaces. We
                          deliver apps that are reliable, engaging, and
                          optimized for both iOS and Android to keep your users
                          connected on the go.
                        </p>
                        <Link
                          to="/mobile-developement"
                          className="service-details-link-block w-inline-block"
                        >
                          <div className="details-text">Read More</div>
                          <div className="service-svg-icon w-embed">
                            <svg
                              width="27"
                              height="27"
                              viewBox="0 0 27 27"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3.19178 7.78083V1.13699V1H25.9315L26 23.8082H19.0137V12.6438L5.72603 25.9315L1 21.2055L14.2192 7.78083H3.19178Z"
                                stroke="currentColor"
                              />
                            </svg>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-service mt-80px none">
              <div className="service-collection-wrapper w-dyn-list">
                <div role="list" className="service-list w-dyn-items">
                  <div role="listitem" className="service-item w-dyn-item">
                    <div className="service-content-wrapper">
                      <div className="service-icon-block">
                        <img
                          alt="Service Icon"
                          loading="lazy"
                          src={images.servicesImageTwo}
                          className="service-icon"
                        />
                      </div>
                      <div className="service-content-block">
                        <Link
                          to="/graphic-design"
                          className="service-title-block w-inline-block"
                        >
                          <h3 className="service-title">Graphic Design</h3>
                        </Link>
                        <p
                          className="service-summary"
                          style={{ fontFamily: "Syne", fontSize: "14px" }}
                        >
                          We craft visually stunning designs that communicate
                          your brand’s identity. From logos and brand assets to
                          marketing materials, our creative solutions help your
                          business stand out and make a lasting impression.
                        </p>
                        <Link
                          to="/graphic-design"
                          className="service-details-link-block w-inline-block"
                        >
                          <div className="details-text">Read More</div>
                          <div className="service-svg-icon w-embed">
                            <svg
                              width="27"
                              height="27"
                              viewBox="0 0 27 27"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3.19178 7.78083V1.13699V1H25.9315L26 23.8082H19.0137V12.6438L5.72603 25.9315L1 21.2055L14.2192 7.78083H3.19178Z"
                                stroke="currentColor"
                              />
                            </svg>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
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
