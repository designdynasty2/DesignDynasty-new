import { Box, Typography,Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { commonWord } from "../../assets/CommonWord";

export const WebFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box className="footer-section" style={{ paddingBottom: "20px" }}>
      <div className="container service-container w-container">
        <div className="footer-wrapper">
          <div className="footer-logo-block">
            <div className="footer-logo-content">
              <RouterLink
                to="/"
                style={{
                  textDecoration: "none",
                  color: "var(--coral-primary-color)",
                  fontSize: "30px",
                  lineHeight: "20px",
                  textAlign: "left",
                  fontFamily: "Syne, sans-serif",
                  fontWeight: "bold",
                }}
              >
                <span style={{ color: "var(--white)" }}>Design</span> <br />
                Dynasty
              </RouterLink>
              <Typography
                className="footer-logo-title"
                sx={{ fontSize: "16px", fontFamily: "Syne", color: "#fff" }}
              >
                We craft high-performing websites, engaging mobile apps, and
                impactful designs that help businesses stand out and scale.
              </Typography>
            </div>

            {/* Social Media Links */}
            {/* <div className="footer-social-block" style={{marginTop:"0px"}}>
              <IconButton
                href="https://facebook.com"
                target="_blank"
                sx={{
                  color: "#b8b8b8",
                  "&:hover": { color: "var(--coral-primary-color)" },
                  p: 1,
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                href="https://twitter.com"
                target="_blank"
                sx={{
                  color: "#b8b8b8",
                  "&:hover": { color: "var(--coral-primary-color)" },
                  p: 1,
                }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                href="https://linkedin.com"
                target="_blank"
                sx={{
                  color: "#b8b8b8",
                  "&:hover": { color: "var(--coral-primary-color)" },
                  p: 1,
                }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                href="https://instagram.com"
                target="_blank"
                sx={{
                  color: "#b8b8b8",
                  "&:hover": { color: "var(--coral-primary-color)" },
                  p: 1,
                }}
              >
                <InstagramIcon />
              </IconButton>
            </div> */}
          </div>

          {/* Quick Links */}
          <div className="footer-link-block">
            <Box
              className="footer-inner"
              sx={{
                a: {
                  fontSize: "16px",
                  fontFamily: "Syne",
                  color: "#fff",
                },
              }}
            >
              <Typography
                className="footer-title"
                sx={{ fontSize: "18px", fontFamily: "Syne", color: "#fff" }}
              >
                Company
              </Typography>
              <div className="footer-link-inner">
                <Link component={RouterLink} to="/" className="footer-link">
                  Home
                </Link>
                <Link
                  component={RouterLink}
                  to="/about"
                  className="footer-link"
                >
                  About Us
                </Link>
                {/* <Link
                  component={RouterLink}
                  to="/pricing"
                  className="footer-link"
                >
                  Pricing
                </Link> */}
                <Link
                  component={RouterLink}
                  to="/contact"
                  className="footer-link"
                >
                  Contact
                </Link>
              </div>
            </Box>
          </div>

          {/* Services */}
          <div className="footer-link-block">
            <Box
              className="footer-inner"
              sx={{
                a: {
                  fontSize: "16px",
                  fontFamily: "Syne",
                  color: "#fff",
                },
              }}
            >
              <Typography
                className="footer-title"
                sx={{ fontSize: "18px", fontFamily: "Syne", color: "#fff" }}
              >
                Services
              </Typography>
              <div className="footer-link-inner">
                <Link
                  component={RouterLink}
                  to="/web-development"
                  className="footer-link"
                >
                  Web Development
                </Link>
                <Link
                  component={RouterLink}
                  to="/mobile-developement"
                  className="footer-link"
                >
                  Mobile Development
                </Link>
                <Link
                  component={RouterLink}
                  to="/graphic-design"
                  className="footer-link"
                >
                  Graphic Design
                </Link>
              </div>
            </Box>
          </div>

          {/* Contact Information */}
          <div className="footer-contact-info-block">
            <Box
              className="footer-inner"
              sx={{
                a: {
                  fontSize: "16px",
                  fontFamily: "Syne",
                  color: "#fff",
                },
              }}
            >
              <Typography
                className="footer-title"
                sx={{ fontSize: "18px", fontFamily: "Syne", color: "#fff" }}
              >
                Get In Touch
              </Typography>
              <div className="footer-link-inner">
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <EmailIcon
                    sx={{
                      color: "var(--coral-primary-color)",
                      mr: 1,
                      fontSize: 20,
                    }}
                  />
                  <Link
                    href={`mailto:${commonWord.email}`}
                    className="footer-contact-link"
                    sx={{ fontSize: "16px !important" }}
                  >
                    {commonWord.email}
                  </Link>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <PhoneIcon
                    sx={{
                      color: "var(--coral-primary-color)",
                      mr: 1,
                      fontSize: 20,
                    }}
                  />
                  <Link
                    href={`tel:${commonWord.contact}`}
                    className="footer-contact-link"
                    sx={{ fontSize: "16px !important" }}
                  >
                    {commonWord.contact}
                  </Link>
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                  <LocationOnIcon
                    sx={{
                      color: "var(--coral-primary-color)",
                      mr: 1,
                      fontSize: 20,
                      mt: 0.5,
                    }}
                  />
                  <Typography
                    className="footer-address"
                    sx={{
                      fontSize: "14px !important",
                      lineHeight: "1.5 !important",
                      fontFamily: "Syne",
                    }}
                  >
                    {commonWord.address}
                  </Typography>
                </Box>
              </div>
            </Box>
          </div>
        </div>

        {/* Footer Bottom */}
        <Box
          sx={{
            borderTop: "1px solid #333",
            textAlign: "center",
            paddingTop: "20px",
            marginTop: "20px",
          }}
        >
          <div>
            <Typography
              className="footer-buttom-text"
              sx={{ color: "#888", fontSize: "14px", fontFamily: "Syne" }}
            >
              © {currentYear} DesignDynasty. All rights reserved.
            </Typography>
          </div>
        </Box>
      </div>
    </Box>
  );
};
