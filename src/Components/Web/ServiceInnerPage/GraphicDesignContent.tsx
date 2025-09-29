import { Box } from "@mui/material";
import { WebContact } from "../HomeInnerPage/WebContact";

export const GraphicDesignContent = () => {
  return (
    <>
      <section
        className="service-details-section"
        style={{ background: "var(--black-body-color)" }}
      >
        <div className="container service-container w-container">
          <div
            className="service-details-wrapper"
            style={{ flexDirection: "column", gap: "10px" }}
          >
            <div className="section-title-block">
              <div
                className="section-intro-text"
                style={{ textAlign: "start" }}
              >
                Our Services
              </div>
              <h2
                className="section-title small-title"
                style={{ textAlign: "start" }}
              >
                Our Graphic Design Services
              </h2>
            </div>
            <div
              className="service-details-content"
              style={{ maxWidth: "unset !important" }}
            >
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.6",
                  fontFamily: "Syne",
                  textAlign: "start",
                }}
              >
                We offer comprehensive graphic design services that bring your
                brand to life. Our creative team specializes in visual
                storytelling, brand identity, and impactful design solutions
                that resonate with your target audience.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                  marginTop: "40px",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: "30px",
                    "@media (max-width: 600px)": { flexDirection: "column" },
                  }}
                >
                  <div
                    style={{
                      padding: "20px",
                      border: "1px solid #e0e0e0",
                      borderRadius: "10px",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "20px",
                        marginBottom: "10px",
                        fontFamily: "Syne",
                      }}
                    >
                      Brand Identity Design
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        lineHeight: "1.5",
                        fontFamily: "Syne",
                      }}
                    >
                      Complete brand identity packages including logos, color
                      schemes, and brand guidelines.
                    </p>
                  </div>
                  <div
                    style={{
                      padding: "20px",
                      border: "1px solid #e0e0e0",
                      borderRadius: "10px",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "20px",
                        marginBottom: "10px",
                        fontFamily: "Syne",
                      }}
                    >
                      Print Design
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        lineHeight: "1.5",
                        fontFamily: "Syne",
                      }}
                    >
                      Business cards, brochures, flyers, posters, and other
                      print materials with professional quality.
                    </p>
                  </div>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: "30px",
                    "@media (max-width: 600px)": { flexDirection: "column" },
                  }}
                >
                  <div
                    style={{
                      padding: "20px",
                      border: "1px solid #e0e0e0",
                      borderRadius: "10px",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "20px",
                        marginBottom: "10px",
                        fontFamily: "Syne",
                      }}
                    >
                      Digital Graphics
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        lineHeight: "1.5",
                        fontFamily: "Syne",
                      }}
                    >
                      Social media graphics, web banners, digital ads, and
                      online marketing materials.
                    </p>
                  </div>
                  <div
                    style={{
                      padding: "20px",
                      border: "1px solid #e0e0e0",
                      borderRadius: "10px",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "20px",
                        marginBottom: "10px",
                        fontFamily: "Syne",
                      }}
                    >
                      Packaging Design
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        lineHeight: "1.5",
                        fontFamily: "Syne",
                      }}
                    >
                      Eye-catching product packaging that stands out on shelves
                      and communicates your brand values.
                    </p>
                  </div>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: "30px",
                    "@media (max-width: 600px)": { flexDirection: "column" },
                  }}
                >
                  <div
                    style={{
                      padding: "20px",
                      border: "1px solid #e0e0e0",
                      borderRadius: "10px",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "20px",
                        marginBottom: "10px",
                        fontFamily: "Syne",
                      }}
                    >
                      Illustration & Icons
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        lineHeight: "1.5",
                        fontFamily: "Syne",
                      }}
                    >
                      Custom illustrations, icons, and graphic elements tailored
                      to your brand and message.
                    </p>
                  </div>
                  <div
                    style={{
                      padding: "20px",
                      border: "1px solid #e0e0e0",
                      borderRadius: "10px",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "20px",
                        marginBottom: "10px",
                        fontFamily: "Syne",
                      }}
                    >
                      UI/UX Design
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        lineHeight: "1.5",
                        fontFamily: "Syne",
                      }}
                    >
                      User interface and experience design for websites, mobile
                      apps, and digital platforms.
                    </p>
                  </div>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="fun-fact-section"
        style={{ backgroundColor: "var(--black-body-color)", padding: "0px" }}
      >
        <div className="container service-container w-container">
          <div className="fun-fact-wrapper-block">
            <div
              className="section-title-block "
              style={{ textAlign: "start", marginBottom: "0px" }}
            >
              <div className="section-intro-text">Why Choose Us</div>
              <h2
                className="section-title small-title"
                style={{ textAlign: "start" }}
              >
                Why Choose Our Graphic Design Services
              </h2>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "30px",
              }}
            >
              <div style={{ textAlign: "center", padding: "20px" }}>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    margin: "0 auto 20px",
                    backgroundColor: "var(--coral-primary-color)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L3 7L12 12L21 7L12 2Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 17L12 22L21 17"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 12L12 17L21 12"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3
                  style={{
                    fontSize: "18px",
                    marginBottom: "10px",
                    fontFamily: "Syne",
                  }}
                >
                  Creative Excellence
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.5",
                    fontFamily: "Syne",
                  }}
                >
                  Our talented designers create visually stunning and impactful
                  designs that capture your brand essence.
                </p>
              </div>
              <div style={{ textAlign: "center", padding: "20px" }}>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    margin: "0 auto 20px",
                    backgroundColor: "var(--coral-primary-color)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 2H6A2 2 0 0 0 4 4V20A2 2 0 0 0 6 22H18A2 2 0 0 0 20 20V8L14 2Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <polyline
                      points="14,2 14,8 20,8"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <line
                      x1="16"
                      y1="13"
                      x2="8"
                      y2="13"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <line
                      x1="16"
                      y1="17"
                      x2="8"
                      y2="17"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3
                  style={{
                    fontSize: "18px",
                    marginBottom: "10px",
                    fontFamily: "Syne",
                  }}
                >
                  Brand Consistency
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.5",
                    fontFamily: "Syne",
                  }}
                >
                  We ensure all designs align with your brand identity and
                  maintain consistency across all platforms.
                </p>
              </div>
              <div style={{ textAlign: "center", padding: "20px" }}>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    margin: "0 auto 20px",
                    backgroundColor: "var(--coral-primary-color)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      stroke="white"
                      strokeWidth="2"
                    />
                    <path
                      d="M19.4 15A1.65 1.65 0 0 0 21 13.09A1.65 1.65 0 0 0 19.4 9A1.65 1.65 0 0 0 21 6.91A1.65 1.65 0 0 0 19.4 3A1.65 1.65 0 0 0 17.09 1A1.65 1.65 0 0 0 15 2.6A1.65 1.65 0 0 0 12.91 1A1.65 1.65 0 0 0 9 2.6A1.65 1.65 0 0 0 6.91 1A1.65 1.65 0 0 0 3 2.6A1.65 1.65 0 0 0 4.6 5A1.65 1.65 0 0 0 3 7.09A1.65 1.65 0 0 0 4.6 9A1.65 1.65 0 0 0 3 10.91A1.65 1.65 0 0 0 4.6 15A1.65 1.65 0 0 0 3 17.09A1.65 1.65 0 0 0 4.6 19A1.65 1.65 0 0 0 3 20.91A1.65 1.65 0 0 0 6.91 23A1.65 1.65 0 0 0 9 21.4A1.65 1.65 0 0 0 10.91 23A1.65 1.65 0 0 0 15 21.4A1.65 1.65 0 0 0 17.09 23A1.65 1.65 0 0 0 19.4 21.4A1.65 1.65 0 0 0 21 17.09A1.65 1.65 0 0 0 19.4 15Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3
                  style={{
                    fontSize: "18px",
                    marginBottom: "10px",
                    fontFamily: "Syne",
                  }}
                >
                  Custom Solutions
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.5",
                    fontFamily: "Syne",
                  }}
                >
                  Every design is tailored to your specific needs, target
                  audience, and business objectives.
                </p>
              </div>
              <div style={{ textAlign: "center", padding: "20px" }}>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    margin: "0 auto 20px",
                    backgroundColor: "var(--coral-primary-color)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 12H18L15 21L9 3L6 12H2"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3
                  style={{
                    fontSize: "18px",
                    marginBottom: "10px",
                    fontFamily: "Syne",
                  }}
                >
                  Fast Turnaround
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.5",
                    fontFamily: "Syne",
                  }}
                >
                  We deliver high-quality designs within agreed timelines
                  without compromising on creativity or quality.
                </p>
              </div>
              <div style={{ textAlign: "center", padding: "20px" }}>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    margin: "0 auto 20px",
                    backgroundColor: "var(--coral-primary-color)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3
                  style={{
                    fontSize: "18px",
                    marginBottom: "10px",
                    fontFamily: "Syne",
                  }}
                >
                  Unlimited Revisions
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.5",
                    fontFamily: "Syne",
                  }}
                >
                  We work with you until you're completely satisfied with the
                  final design outcome.
                </p>
              </div>
              <div style={{ textAlign: "center", padding: "20px" }}>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    margin: "0 auto 20px",
                    backgroundColor: "var(--coral-primary-color)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 14S9.5 16 12 16S16 14 16 14"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <line
                      x1="9"
                      y1="9"
                      x2="9.01"
                      y2="9"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <line
                      x1="15"
                      y1="9"
                      x2="15.01"
                      y2="9"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3
                  style={{
                    fontSize: "18px",
                    marginBottom: "10px",
                    fontFamily: "Syne",
                  }}
                >
                  Client Satisfaction
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.5",
                    fontFamily: "Syne",
                  }}
                >
                  Our priority is your satisfaction. We build long-term
                  relationships through exceptional design services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="process-section"
        style={{
          backgroundColor: "var(--black-body-color)",
          padding: "80px 0",
        }}
      >
        <div className="container service-container w-container">
          <div
            className="section-title-block"
            style={{ textAlign: "center", marginBottom: "60px" }}
          >
            <div className="section-intro-text">Our Process</div>
            <h2 className="section-title small-title">
              How We Create Amazing Designs
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "40px",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  margin: "0 auto 20px",
                  backgroundColor: "var(--coral-primary-color)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                1
              </div>
              <h3
                style={{
                  fontSize: "20px",
                  marginBottom: "15px",
                  fontFamily: "Syne",
                }}
              >
                Discovery & Research
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "1.6",
                  fontFamily: "Syne",
                }}
              >
                We start by understanding your brand, target audience, and
                project goals through detailed consultation.
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  margin: "0 auto 20px",
                  backgroundColor: "var(--coral-primary-color)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                2
              </div>
              <h3
                style={{
                  fontSize: "20px",
                  marginBottom: "15px",
                  fontFamily: "Syne",
                }}
              >
                Concept Development
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "1.6",
                  fontFamily: "Syne",
                }}
              >
                Our team brainstorms and develops initial concepts and design
                directions based on your requirements.
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  margin: "0 auto 20px",
                  backgroundColor: "var(--coral-primary-color)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                3
              </div>
              <h3
                style={{
                  fontSize: "20px",
                  marginBottom: "15px",
                  fontFamily: "Syne",
                }}
              >
                Design & Creation
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "1.6",
                  fontFamily: "Syne",
                }}
              >
                We create detailed designs using industry-standard tools and
                techniques to bring your vision to life.
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  margin: "0 auto 20px",
                  backgroundColor: "var(--coral-primary-color)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                4
              </div>
              <h3
                style={{
                  fontSize: "20px",
                  marginBottom: "15px",
                  fontFamily: "Syne",
                }}
              >
                Review & Refinement
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "1.6",
                  fontFamily: "Syne",
                }}
              >
                We present the designs for your feedback and make revisions
                until you're completely satisfied.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WebContact />
    </>
  );
};
