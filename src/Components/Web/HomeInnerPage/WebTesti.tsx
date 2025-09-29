import { commonWord } from "../../../assets/CommonWord";
import { images } from "../../../assets/Images/Images";
import { testimonialData } from "../../../assets/TestimonialData";
import type { TestimonialType } from "../../../assets/TestimonialData";
import { useState, useEffect } from "react";
export const WebTesti = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonialData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonialData.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonialData.length) % testimonialData.length
    );
  };

  return (
    <section className="testimonial-section">
      <div className="container service-container w-container">
        <div className="testimonial-wrapper">
          <div className="testimonial-image-block">
            <div className="image-hover-effect overflow-hidden">
              <img
                src={images.testi}
                loading="lazy"
                sizes="(max-width: 767px) 94vw, (max-width: 991px) 600px, (max-width: 1279px) 450px, (max-width: 1439px) 600px, (max-width: 1919px) 715px, 875px"
                alt="Testimonial Image"
                className="testimonial-image-one about-image"
              />
            </div>
            <div className="testimonial-image-content-wrapper">
              {/* <div className="testimonial-image-content-block">
                <h3 className="testimonial-image-content-title">
                  {" "}
                  {new Date().getFullYear() - commonWord.startYear}+
                </h3>
                <h5 className="testimonial-image-content-text">
                  Years of Experience
                </h5>
              </div> */}
              <div className="testimonial-image-content-block block-two">
                <h3 className="testimonial-image-content-title">98+</h3>
                <h5 className="testimonial-image-content-text">
                  Client Satisfaction
                </h5>
              </div>
            </div>
          </div>
          <div
            className="testimonial-content-block-one"
            style={{ width: "100%" }}
          >
            <div className="section-title-block testimonial">
              <h2 className="section-title">What Our Clients Say</h2>
            </div>
            <div className="testimonial-slider-wrapper testi-block-one">
              <div style={{ position: "relative", overflow: "hidden" }}>
                <div
                  style={{
                    display: "flex",
                    transform: `translateX(-${currentSlide * 100}%)`,
                    transition: "transform 0.5s ease-in-out",
                  }}
                >
                  {testimonialData.map((testimonial: TestimonialType) => (
                    <div
                      key={testimonial.id}
                      style={{
                        minWidth: "100%",
                        padding: "20px 10px",
                        boxSizing: "border-box",
                      }}
                    >
                      <div className="testimonial-content-block testimonial-two testi-block-one">
                        <p
                          className="testiomonial-text testi-block-one"
                          style={{
                            fontFamily: "Syne",
                            fontSize: "clamp(12px, 2.5vw, 14px)",
                            lineHeight: "1.6",
                            marginBottom: "20px",
                          }}
                        >
                          {testimonial.review}
                        </p>
                        <div
                          style={{
                            display: "flex",
                            gap: "2px",
                            marginBottom: "15px",
                            justifyContent: "flex-start",
                            flexWrap: "wrap",
                          }}
                        >
                          {[...Array(testimonial.rating)].map(
                            (_, starIndex) => (
                              <img
                                key={starIndex}
                                src={images.star}
                                loading="lazy"
                                alt="Star Icon"
                                className="testi-rating-icon"
                                style={{
                                  width: "clamp(14px, 3vw, 16px)",
                                  height: "clamp(14px, 3vw, 16px)",
                                }}
                              />
                            )
                          )}
                        </div>
                        <div className="testimonial-meta-block testi-block-one">
                          <div
                            className="client-name"
                            style={{
                              fontSize: "clamp(14px, 3vw, 16px)",
                              fontWeight: "600",
                            }}
                          >
                            {testimonial.name}
                          </div>
                          <div
                            className="client-title"
                            style={{
                              fontSize: "clamp(12px, 2.5vw, 14px)",
                              opacity: "0.8",
                            }}
                          >
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    gap: "15px",
                    marginTop: "30px",
                    alignItems: "center",
                    position: "relative",
                    zIndex: 9999999,
                  }}
                >
                  <button
                    onClick={prevSlide}
                    style={{
                      backgroundColor: "transparent",
                      color: "var(--coral-primary-color)",
                      border: "solid 1px grey",
                      borderRadius: "50%",
                      width: "50px",
                      height: "50px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "clamp(16px, 4vw, 20px)",
                      transition: "all 0.3s ease",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                  <button
                    onClick={nextSlide}
                    style={{
                      backgroundColor: "transparent",
                      color: "var(--coral-primary-color)",
                      border: "solid 1px grey",
                      borderRadius: "50%",
                      width: "50px",
                      height: "50px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "clamp(16px, 4vw, 20px)",
                      transition: "all 0.3s ease",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <img
              src={images.scratch}
              loading="lazy"
              alt="Hero Image"
              className="hero-image-two testi-design-shape"
            />
          </div>
        </div>
      </div>
      <div className="line-design-wrapper">
        <div className="single-line"></div>
        <div className="single-line"></div>
        <div className="single-line"></div>
      </div>
    </section>
  );
};
