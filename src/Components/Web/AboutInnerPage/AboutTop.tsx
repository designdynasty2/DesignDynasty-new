import { useState } from "react";
import { commonWord } from "../../../assets/CommonWord";
import { images } from "../../../assets/Images/Images";

export const AboutTop = () => {
  const [openItems, setOpenItems] = useState({
    faq1: false,
    faq2: false,
    faq3: false,
    faq4: false,
    faq5: false,
  });

  const toggleItem = (id: keyof typeof openItems) => {
    setOpenItems((prev) => {
      if (prev[id]) {
        return { ...prev, [id]: false };
      } else {
        const newState = { ...prev };
        Object.keys(newState).forEach(
          (key) => (newState[key as keyof typeof newState] = false)
        );
        newState[id] = true;
        return newState;
      }
    });
  };

  return (
    <>
      <section className="fun-fact-section">
        <div className="container service-container w-container">
          <div className="fun-fact-wrapper-block">
            <div className="fun-fact-inner-block">
              <h2
                className="fun-fact-title about-responsive"
                style={{ fontSize: "30px" }}
              >
                Empowering businesses with innovative technology solutions .
                
                We're more than a <span style={{ color: "var(--coral-primary-color)" }}>
                  {" "}
                  service provider
                </span>{" "}  - we're your technology
                partners.
              </h2>
            </div>
            <div className="fun-fact-divider"></div>
            {/* <div className="fun-fact-counter-block">
              <div className="all-archive-block fun-fact">
                <div className="single-archive">
                  <h3 className="archive-title fun-fact">
                    {" "}
                    {new Date().getFullYear() - commonWord.startYear}+
                  </h3>
                  <div className="archive-summary home-three">
                    Years of Excellence
                  </div>
                </div>
                <div className="divider-high home-three"></div>
                <div className="single-archive">
                  <h3 className="archive-title fun-fact">98%</h3>
                  <div className="archive-summary home-three">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <section
        data-w-id="57914c1b-ed0c-f7ec-4dd8-3d071be8c268"
        className="faq-section"
      >
        <div className="faq-container container service-container w-container">
          <div className="faq-container-inner">
            <div className="faq-image-block">
              <img
                src={images.faq}
                loading="lazy"
                sizes="(max-width: 991px) 75vw, (max-width: 1279px) 630px, (max-width: 1439px) 723px, (max-width: 1919px) 715px, 875px"
                alt="FAQ Image "
                className="faq-image"
              />
            </div>
            <div className="faq-content-block">
              <div className="faq-content-inner">
                <div className="section-title-block max-w-620">
                  <div className="section-intro-text">FAQ’s</div>
                  <h2 className="section-title small-title">Our Answers</h2>
                </div>
                <div className="faq-content-block">
                  <div className="contact-us-info-block">
                    <div className="accordion-wrapper mt-0px">
                      <div
                        data-hover="false"
                        data-delay="500"
                        data-w-id="23412f7c-f04f-740f-1ab3-14f739d76f90"
                        className="accordion-item w-dropdown"
                      >
                        <div
                          className="accordion-toggle color-black w-dropdown-toggle"
                          onClick={() => toggleItem("faq1")}
                        >
                          <div className="faq-icon-block color-white">
                            <div
                              style={{ opacity: openItems["faq1"] ? 0 : 1 }}
                              className="plus-icon w-embed"
                            >
                              <svg
                                width="12"
                                height="13"
                                viewBox="0 0 12 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="5"
                                  y="0.5"
                                  width="2"
                                  height="12"
                                  rx="1"
                                  fill="currentColor"
                                />
                                <rect
                                  y="5.5"
                                  width="12"
                                  height="2"
                                  rx="1"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                            <div
                              style={{ opacity: openItems["faq1"] ? 1 : 0 }}
                              className="minus-icon w-embed"
                            >
                              <svg
                                width="12"
                                height="3"
                                viewBox="0 0 12 3"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  y="0.5"
                                  width="12"
                                  height="2"
                                  rx="1"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="question about-responsive-paraFaq">
                            What services does your company provide?
                          </div>
                        </div>
                        <nav
                          style={{
                            maxHeight: openItems["faq1"] ? "1000px" : "0px",
                            overflow: "hidden",
                            transition: "max-height 0.3s ease",
                          }}
                          className={`accordion-list w-dropdown-list ${
                            openItems["faq1"] ? "w--open" : ""
                          }`}
                        >
                          <p
                            className="answer color-black"
                            style={{ fontSize: "14px", fontFamily: "Syne" }}
                          >
                            We specialize in Web Development, Mobile App
                            Development, Digital Marketing, E-commerce
                            Solutions, and Graphic Design tailored to your
                            business needs.
                          </p>
                        </nav>
                      </div>
                      <div
                        data-hover="false"
                        data-delay="500"
                        data-w-id="23412f7c-f04f-740f-1ab3-14f739d76f9a"
                        className="accordion-item w-dropdown"
                      >
                        <div
                          className="accordion-toggle color-black w-dropdown-toggle"
                          onClick={() => toggleItem("faq2")}
                        >
                          <div className="faq-icon-block color-white">
                            <div
                              style={{ opacity: openItems["faq2"] ? 0 : 1 }}
                              className="plus-icon w-embed"
                            >
                              <svg
                                width="12"
                                height="13"
                                viewBox="0 0 12 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="5"
                                  y="0.5"
                                  width="2"
                                  height="12"
                                  rx="1"
                                  fill="currentColor"
                                />
                                <rect
                                  y="5.5"
                                  width="12"
                                  height="2"
                                  rx="1"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                            <div
                              style={{ opacity: openItems["faq2"] ? 1 : 0 }}
                              className="minus-icon w-embed"
                            >
                              <svg
                                width="12"
                                height="3"
                                viewBox="0 0 12 3"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  y="0.5"
                                  width="12"
                                  height="2"
                                  rx="1"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="question about-responsive-paraFaq">
                            How long does it take to build a website or mobile
                            app?
                          </div>
                        </div>
                        <nav
                          style={{
                            maxHeight: openItems["faq2"] ? "1000px" : "0px",
                            overflow: "hidden",
                            transition: "max-height 0.3s ease",
                          }}
                          className={`accordion-list w-dropdown-list ${
                            openItems["faq2"] ? "w--open" : ""
                          }`}
                        >
                          <p
                            className="answer color-black"
                            style={{ fontSize: "14px", fontFamily: "Syne" }}
                          >
                            Timelines vary depending on project scope. A basic
                            website may take 2–4 weeks, while complex web apps
                            or mobile applications may take 6–12 weeks.
                          </p>
                        </nav>
                      </div>
                      <div
                        data-hover="false"
                        data-delay="500"
                        data-w-id="23412f7c-f04f-740f-1ab3-14f739d76fa4"
                        className="accordion-item w-dropdown"
                      >
                        <div
                          className="accordion-toggle color-black w-dropdown-toggle"
                          onClick={() => toggleItem("faq3")}
                        >
                          <div className="faq-icon-block color-white">
                            <div
                              style={{ opacity: openItems["faq3"] ? 0 : 1 }}
                              className="plus-icon w-embed"
                            >
                              <svg
                                width="12"
                                height="13"
                                viewBox="0 0 12 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="5"
                                  y="0.5"
                                  width="2"
                                  height="12"
                                  rx="1"
                                  fill="currentColor"
                                />
                                <rect
                                  y="5.5"
                                  width="12"
                                  height="2"
                                  rx="1"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                            <div
                              style={{ opacity: openItems["faq3"] ? 1 : 0 }}
                              className="minus-icon w-embed"
                            >
                              <svg
                                width="12"
                                height="3"
                                viewBox="0 0 12 3"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  y="0.5"
                                  width="12"
                                  height="2"
                                  rx="1"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="question about-responsive-paraFaq">
                            Do you offer ongoing support and maintenance?
                          </div>
                        </div>
                        <nav
                          style={{
                            maxHeight: openItems["faq3"] ? "1000px" : "0px",
                            overflow: "hidden",
                            transition: "max-height 0.3s ease",
                          }}
                          className={`accordion-list w-dropdown-list ${
                            openItems["faq3"] ? "w--open" : ""
                          }`}
                        >
                          <p
                            className="answer color-black"
                            style={{ fontSize: "14px", fontFamily: "Syne" }}
                          >
                            Yes, we provide long-term maintenance packages to
                            ensure your website or app stays secure, updated,
                            and optimized.
                          </p>
                        </nav>
                      </div>
                      <div
                        data-hover="false"
                        data-delay="500"
                        data-w-id="23412f7c-f04f-740f-1ab3-14f739d76fae"
                        className="accordion-item w-dropdown"
                      >
                        <div
                          className="accordion-toggle color-black w-dropdown-toggle"
                          onClick={() => toggleItem("faq4")}
                        >
                          <div className="faq-icon-block color-white">
                            <div
                              style={{ opacity: openItems["faq4"] ? 0 : 1 }}
                              className="plus-icon w-embed"
                            >
                              <svg
                                width="12"
                                height="13"
                                viewBox="0 0 12 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="5"
                                  y="0.5"
                                  width="2"
                                  height="12"
                                  rx="1"
                                  fill="currentColor"
                                />
                                <rect
                                  y="5.5"
                                  width="12"
                                  height="2"
                                  rx="1"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                            <div
                              style={{ opacity: openItems["faq4"] ? 1 : 0 }}
                              className="minus-icon w-embed"
                            >
                              <svg
                                width="12"
                                height="3"
                                viewBox="0 0 12 3"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  y="0.5"
                                  width="12"
                                  height="2"
                                  rx="1"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="question about-responsive-paraFaq">
                            Can you redesign my existing website or app?
                          </div>
                        </div>
                        <nav
                          style={{
                            maxHeight: openItems["faq4"] ? "1000px" : "0px",
                            overflow: "hidden",
                            transition: "max-height 0.3s ease",
                          }}
                          className={`accordion-list w-dropdown-list ${
                            openItems["faq4"] ? "w--open" : ""
                          }`}
                        >
                          <p
                            className="answer color-black"
                            style={{ fontSize: "14px", fontFamily: "Syne" }}
                          >
                            Absolutely! We offer redesign services to modernize
                            outdated designs, improve performance, and enhance
                            user experience.
                          </p>
                        </nav>
                      </div>
                      <div
                        data-hover="false"
                        data-delay="500"
                        data-w-id="23412f7c-f04f-740f-1ab3-14f739d76fae"
                        className="accordion-item w-dropdown"
                      >
                        <div
                          className="accordion-toggle color-black w-dropdown-toggle"
                          onClick={() => toggleItem("faq5")}
                        >
                          <div className="faq-icon-block color-white">
                            <div
                              style={{ opacity: openItems["faq5"] ? 0 : 1 }}
                              className="plus-icon w-embed"
                            >
                              <svg
                                width="12"
                                height="13"
                                viewBox="0 0 12 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="5"
                                  y="0.5"
                                  width="2"
                                  height="12"
                                  rx="1"
                                  fill="currentColor"
                                />
                                <rect
                                  y="5.5"
                                  width="12"
                                  height="2"
                                  rx="1"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                            <div
                              style={{ opacity: openItems["faq5"] ? 1 : 0 }}
                              className="minus-icon w-embed"
                            >
                              <svg
                                width="12"
                                height="3"
                                viewBox="0 0 12 3"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  y="0.5"
                                  width="12"
                                  height="2"
                                  rx="1"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="question about-responsive-paraFaq">
                            How much does a project cost?
                          </div>
                        </div>
                        <nav
                          style={{
                            maxHeight: openItems["faq5"] ? "1000px" : "0px",
                            overflow: "hidden",
                            transition: "max-height 0.3s ease",
                          }}
                          className={`accordion-list w-dropdown-list ${
                            openItems["faq5"] ? "w--open" : ""
                          }`}
                        >
                          <p
                            className="answer color-black"
                            style={{ fontSize: "14px", fontFamily: "Syne" }}
                          >
                            Project cost depends on complexity, features, and
                            timeline. We provide a free consultation and custom
                            quote after understanding your requirements.
                          </p>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                src={images.scratch}
                loading="lazy"
                alt="FAQ Design Image"
                className="faq-design-image"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container service-container w-container">
          <h2
            className="fun-fact-title about-responsive"
            style={{ fontSize: "30px", textAlign: "center", marginTop: "20px" }}
          >
            Our Mission & Vision
          </h2>
          <h2
            className="fun-fact-title about-responsive-para"
            style={{
              fontSize: "26px",
              textAlign: "center",
              marginBottom: "80px",
              paddingTop: "25px",
            }}
          >
            To deliver cutting-edge IT solutions that transform businesses and
            drive growth. We believe in the power of technology to solve complex
            challenges and create opportunities for our clients to thrive in the
            digital age.
          </h2>
        </div>
      </section>
      <section
        className="vision-mission-section"
        style={{ marginBottom: "40px" }}
      >
        <div className="container service-container w-container">
          <div className="vision-mission-wrapper-block">
            <div
              className="vision-mission-content-block"
              style={{ gridRowGap: "10px" }}
            >
              <div className="vision-mission-single-content color-white">
                <h3 className="vision-mission-title">Excellence</h3>
                <p
                  className="vision-mission-description color-white"
                  style={{
                    fontFamily: "Syne",
                    opacity: ".8",
                    fontSize: "16px",
                  }}
                >
                  We strive for perfection in every project, delivering
                  solutions that exceed expectations and drive real business
                  results.
                </p>
              </div>
              <div className="vision-mission-single-content color-white">
                <h3 className="vision-mission-title">Innovation</h3>
                <p
                  className="vision-mission-description color-white"
                  style={{
                    fontFamily: "Syne",
                    opacity: ".8",
                    fontSize: "16px",
                  }}
                >
                  We constantly explore new technologies and approaches to
                  deliver cutting-edge solutions.
                </p>
              </div>
              <div className="vision-mission-single-content color-white">
                <h3 className="vision-mission-title">Collaboration</h3>
                <p
                  className="vision-mission-description color-white"
                  style={{
                    fontFamily: "Syne",
                    opacity: ".8",
                    fontSize: "16px",
                  }}
                >
                  We work closely with our clients as partners, ensuring
                  transparent communication and shared success throughout every
                  project.
                </p>
              </div>
              <div className="vision-mission-single-content color-white">
                <h3 className="vision-mission-title">Quality</h3>
                <p
                  className="vision-mission-description color-white"
                  style={{
                    fontFamily: "Syne",
                    opacity: ".8",
                    fontSize: "16px",
                  }}
                >
                  Every project is executed with meticulous attention to detail
                  and highest standards.
                </p>
              </div>
              <div className="vision-mission-single-content color-white">
                <h3 className="vision-mission-title">Reliability</h3>
                <p
                  className="vision-mission-description color-white"
                  style={{
                    fontFamily: "Syne",
                    opacity: ".8",
                    fontSize: "16px",
                  }}
                >
                  Our clients trust us to deliver on time, within budget, and
                  with the highest standards of quality and security.
                </p>
              </div>
              <div className="vision-mission-single-content color-white">
                <h3 className="vision-mission-title">Integrity</h3>
                <p
                  className="vision-mission-description color-white"
                  style={{
                    fontFamily: "Syne",
                    opacity: ".8",
                    fontSize: "16px",
                  }}
                >
                  Transparency, honesty, and ethical practices guide all our
                  business relationships.
                </p>
              </div>
            </div>
            <div className="vision-mission-image-block">
              <img
                src={images.vision}
                loading="lazy"
                sizes="(max-width: 479px) 94vw, (max-width: 621px) 95vw, (max-width: 991px) 590px, (max-width: 1279px) 446px, 590px"
                alt="Vision Mission Image"
                className="vision-mission-image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
