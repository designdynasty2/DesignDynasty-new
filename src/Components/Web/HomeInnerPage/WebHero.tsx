import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { images } from "../../../assets/Images/Images";

export const WebHero = () => {
  return (
    <>
      <div className="hero-section">
        <div className="container hero-container w-container">
          <Box className="hero-wrapper">
            <div className="hero-content">
              <div className="overflow-hidden">
                <div className="hero-intro-text">We’re a Creative</div>
              </div>
              <div className="overflow-hidden">
                <h1 className="hero-title" style={{ textAlign: "center" }}>
                  Transforming Ideas into{" "}
                </h1>
              </div>
              <div className="overflow-hidden">
                <h2 className="hero-title hero-title-two">Digital Reality</h2>
              </div>
              <div className="hero-button-block">
                <Link to="/contact">
                  <Box
                    sx={{
                      backgroundColor: "transparent",
                      color: "#fff",
                      padding: "15px 25px",
                    }}
                    className="button-secondary w-button"
                  >
                    Contact
                  </Box>
                </Link>
                <Link to="/services">
                  <Box
                    sx={{
                      backgroundColor: "transparent",
                      color: "#fff",
                      padding: "15px 25px",
                    }}
                    className="button-secondary style-two w-button"
                  >
                    Our Services
                  </Box>
                </Link>
              </div>
              <div className="rotating-circle">
                <svg viewBox="0 0 200 200">
                  <defs>
                    <path
                      id="circlePath"
                      d="M 100, 100
                      m -75, 0
                      a 75,75 0 1,1 150,0
                      a 75,75 0 1,1 -150,0"
                    />
                  </defs>
                  <text>
                    <textPath xlinkHref="#circlePath">
                      THE DIGITAL AGENCY · GROW UP BUSINESS ·
                    </textPath>
                  </text>
                </svg>
                <div className="arrow">↓</div>
              </div>
              <div className="hero-image-block">
                <img
                  src={images.heroIcon}
                  loading="lazy"
                  alt="Hero Image"
                  className="hero-image-three"
                />
              </div>
            </div>
          </Box>
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
