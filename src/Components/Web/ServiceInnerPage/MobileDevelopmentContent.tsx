import { Box } from "@mui/material";
import { WebContact } from "../HomeInnerPage/WebContact";

export const MobileDevelopmentContent = () => {
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
                Our Mobile Development Services
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
                We create innovative mobile applications that deliver
                exceptional user experiences across all platforms. Our mobile
                development expertise covers native iOS and Android apps,
                cross-platform solutions, and progressive web apps.
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
                      Native iOS Development
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        lineHeight: "1.5",
                        fontFamily: "Syne",
                      }}
                    >
                      High-performance iOS apps built with Swift and Objective-C
                      for optimal user experience.
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
                      Native Android Development
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        lineHeight: "1.5",
                        fontFamily: "Syne",
                      }}
                    >
                      Robust Android applications using Kotlin and Java with
                      Material Design principles.
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
                      Cross-Platform Development
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        lineHeight: "1.5",
                        fontFamily: "Syne",
                      }}
                    >
                      Cost-effective solutions using React Native and Flutter
                      for multiple platforms.
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
                      Progressive Web Apps
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        lineHeight: "1.5",
                        fontFamily: "Syne",
                      }}
                    >
                      Web-based applications that provide native app-like
                      experiences across devices.
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
                      UI/UX Design for Mobile
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        lineHeight: "1.5",
                        fontFamily: "Syne",
                      }}
                    >
                      Intuitive and engaging mobile interfaces designed for
                      optimal user interaction.
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
                      App Store Optimization
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        lineHeight: "1.5",
                        fontFamily: "Syne",
                      }}
                    >
                      Complete app deployment and optimization for App Store and
                      Google Play.
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
                Why Choose Our Mobile Development Services
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
                    <rect
                      x="5"
                      y="2"
                      width="14"
                      height="20"
                      rx="2"
                      ry="2"
                      stroke="white"
                      strokeWidth="2"
                    />
                    <line
                      x1="12"
                      y1="18"
                      x2="12.01"
                      y2="18"
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
                  Mobile-First Approach
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.5",
                    fontFamily: "Syne",
                  }}
                >
                  We design and develop with mobile users in mind, ensuring
                  optimal performance on all devices.
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
                      d="M12 2L2 7L12 12L22 7L12 2Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 17L12 22L22 17"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 12L12 17L22 12"
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
                  Cross-Platform Expertise
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.5",
                    fontFamily: "Syne",
                  }}
                >
                  Our team excels in both native and cross-platform development
                  technologies.
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
                      d="M19.4 15A1.65 1.65 0 0 0 21 13.09A1.65 1.65 0 0 0 19.4 9A1.65 1.65 0 0 0 21 6.91A1.65 1.65 0 0 0 19.4 3"
                      stroke="white"
                      strokeWidth="2"
                    />
                    <path
                      d="M4.6 9A1.65 1.65 0 0 0 3 10.91A1.65 1.65 0 0 0 4.6 15A1.65 1.65 0 0 0 3 17.09A1.65 1.65 0 0 0 4.6 21"
                      stroke="white"
                      strokeWidth="2"
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
                  Performance Optimization
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.5",
                    fontFamily: "Syne",
                  }}
                >
                  We optimize apps for speed, battery life, and smooth user
                  interactions.
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
                      d="M9 12L11 14L15 10"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="white"
                      strokeWidth="2"
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
                  Quality Assurance
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.5",
                    fontFamily: "Syne",
                  }}
                >
                  Rigorous testing across multiple devices and platforms to
                  ensure flawless functionality.
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
                      d="M12 22S8 18 8 13V6L12 4L16 6V13C16 18 12 22 12 22Z"
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
                  Security First
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.5",
                    fontFamily: "Syne",
                  }}
                >
                  We implement robust security measures to protect user data and
                  app integrity.
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
                      d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="9"
                      cy="7"
                      r="4"
                      stroke="white"
                      strokeWidth="2"
                    />
                    <path
                      d="M23 21V19C23 18.1645 22.7155 17.3541 22.2094 16.6977C21.7033 16.0414 20.9999 15.5735 20.2 15.3726"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 3.37256C16.8003 3.57331 17.5037 4.04136 18.0098 4.69772C18.5159 5.35407 18.8004 6.16454 18.8004 7C18.8004 7.83546 18.5159 8.64593 18.0098 9.30228C17.5037 9.95864 16.8003 10.4267 16 10.6274"
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
                  Ongoing Support
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.5",
                    fontFamily: "Syne",
                  }}
                >
                  Comprehensive post-launch support including updates,
                  maintenance, and feature enhancements.
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
              Mobile App Development Process
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "40px",
            }}
          >
            <div style={{ textAlign: "center", padding: "30px 20px" }}>
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
                Discovery & Planning
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "1.6",
                  fontFamily: "Syne",
                }}
              >
                We analyze your requirements, target audience, and business
                goals to create a comprehensive development strategy.
              </p>
            </div>
            <div style={{ textAlign: "center", padding: "30px 20px" }}>
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
                UI/UX Design
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "1.6",
                  fontFamily: "Syne",
                }}
              >
                Our designers create intuitive wireframes and stunning visual
                designs that enhance user engagement.
              </p>
            </div>
            <div style={{ textAlign: "center", padding: "30px 20px" }}>
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
                Development
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "1.6",
                  fontFamily: "Syne",
                }}
              >
                Our skilled developers bring your app to life using the latest
                technologies and best practices.
              </p>
            </div>
            <div style={{ textAlign: "center", padding: "30px 20px" }}>
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
                Testing & QA
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "1.6",
                  fontFamily: "Syne",
                }}
              >
                Comprehensive testing across multiple devices and platforms to
                ensure optimal performance and user experience.
              </p>
            </div>
            <div style={{ textAlign: "center", padding: "30px 20px" }}>
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
                5
              </div>
              <h3
                style={{
                  fontSize: "20px",
                  marginBottom: "15px",
                  fontFamily: "Syne",
                }}
              >
                Deployment
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "1.6",
                  fontFamily: "Syne",
                }}
              >
                We handle the complete app store submission process and ensure
                successful deployment to App Store and Google Play.
              </p>
            </div>
            <div style={{ textAlign: "center", padding: "30px 20px" }}>
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
                6
              </div>
              <h3
                style={{
                  fontSize: "20px",
                  marginBottom: "15px",
                  fontFamily: "Syne",
                }}
              >
                Support & Maintenance
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "1.6",
                  fontFamily: "Syne",
                }}
              >
                Ongoing support, updates, and feature enhancements to keep your
                app competitive and up-to-date.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WebContact />
    </>
  );
};
