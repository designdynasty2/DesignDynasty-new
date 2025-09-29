import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { images } from "../../assets/Images/Images";
export const WebHeader = () => {
  const location = useLocation();
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const isServicesActive = () => {
    const servicePaths = [
      "/web-development",
      "/mobile-developement",
      "/graphic-design",
      "/services",
    ];
    return servicePaths.includes(location.pathname);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Box className={`header-section ${isScrolled ? "scrolledTopped" : ""}`}>
        <div className="container service-container w-container">
          <div
            data-animation="over-left"
            data-collapse="medium"
            data-duration="400"
            data-easing="ease"
            data-easing2="ease"
            role="banner"
            className="navber-wrapper w-nav"
          >
            <div className="navbar-wrapper stickyTop">
              <Link
                to="/"
                className="navbar-brand w-nav-brand w--current"
                style={{
                  color: "var(--coral-primary-color)",
                  fontSize: "30px",
                  lineHeight: "20px",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Box
                  component={"img"}
                  src={images.whiteLogo}
                  sx={{ width: "30px",objectFit:"contain" }}
                ></Box>
                <Box>
                  <span style={{ color: "var(--white)" }}>Design</span> <br />
                  Dynasty
                </Box>
              </Link>
              <nav role="navigation" className="nav-menu-wrapper w-nav-menu">
                <ul role="list" className="nav-menu w-list-unstyled">
                  <li className="list-item">
                    <Link to="/" style={{ textDecoration: "none" }}>
                      <Box
                        className="dropdown-toggle w-dropdown-toggle"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          cursor: "pointer",
                          fontSize: "15px",
                          padding: "0px",
                        }}
                      >
                        <div
                          className="dropdown-text"
                          style={{
                            color: isActive("/")
                              ? "var(--coral-primary-color)"
                              : "inherit",
                            fontWeight: isActive("/") ? "600" : "normal",
                          }}
                        >
                          Home
                        </div>
                      </Box>
                    </Link>
                  </li>
                  <li className="list-item">
                    <Link to="/about" style={{ textDecoration: "none" }}>
                      <Box
                        className="dropdown-toggle w-dropdown-toggle"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          cursor: "pointer",
                          fontSize: "15px",
                          padding: "0px",
                        }}
                      >
                        <div
                          className="dropdown-text"
                          style={{
                            color: isActive("/about")
                              ? "var(--coral-primary-color)"
                              : "inherit",
                            fontWeight: isActive("/about") ? "600" : "normal",
                          }}
                        >
                          About
                        </div>
                      </Box>
                    </Link>
                  </li>
                  <li className="list-item">
                    <div
                      ref={dropdownRef}
                      data-hover="false"
                      data-delay="0"
                      className="dropdown-wrapper w-dropdown"
                      style={{ position: "relative" }}
                    >
                      <Box
                        className="dropdown-toggle w-dropdown-toggle"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          cursor: "pointer",
                          fontSize: "15px",
                          padding: "0px",
                        }}
                        onClick={toggleServicesDropdown}
                      >
                        <div
                          className="dropdown-text"
                          style={{
                            color: isServicesActive()
                              ? "var(--coral-primary-color)"
                              : "inherit",
                            fontWeight: isServicesActive() ? "600" : "normal",
                          }}
                        >
                          Services
                        </div>
                        <ExpandMoreIcon
                          sx={{
                            display: "inline",
                            transform: isServicesDropdownOpen
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                            transition: "transform 0.3s ease",
                          }}
                        />
                      </Box>
                      <nav
                        className={`dropdown-list w-dropdown-list ${
                          isServicesDropdownOpen ? "w--open" : ""
                        }`}
                        style={{
                          display: isServicesDropdownOpen ? "block" : "none",
                          position: "absolute",
                          top: "100%",
                          left: 0,
                          zIndex: 1000,
                        }}
                      >
                        <Link
                          to="/web-development"
                          className="dropdown-link w-dropdown-link"
                          onClick={() => setIsServicesDropdownOpen(false)}
                        >
                          Web Developement
                        </Link>
                        <Link
                          to="/mobile-developement"
                          className="dropdown-link w-dropdown-link"
                          onClick={() => setIsServicesDropdownOpen(false)}
                        >
                          Mobile Developement
                        </Link>
                        <Link
                          to="/graphic-design"
                          className="dropdown-link w-dropdown-link"
                          onClick={() => setIsServicesDropdownOpen(false)}
                        >
                          Graphic Design
                        </Link>
                      </nav>
                    </div>
                  </li>
                  {/* <li className="list-item">
                    <Link to="/pricing" style={{ textDecoration: "none" }}>
                      <Box
                        className="dropdown-toggle w-dropdown-toggle"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          cursor: "pointer",
                          fontSize: "15px",
                          padding: "0px",
                        }}
                      >
                        <div
                          className="dropdown-text"
                          style={{
                            color: isActive("/pricing")
                              ? "var(--coral-primary-color)"
                              : "inherit",
                            fontWeight: isActive("/pricing") ? "600" : "normal",
                          }}
                        >
                          Pricing
                        </div>
                      </Box>
                    </Link>
                  </li> */}
                  <li className="list-item">
                    <Link to="/contact" style={{ textDecoration: "none" }}>
                      <Box
                        className="dropdown-toggle w-dropdown-toggle"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          cursor: "pointer",
                          fontSize: "15px",
                          padding: "0px",
                        }}
                      >
                        <div
                          className="dropdown-text"
                          style={{
                            color: isActive("/contact")
                              ? "var(--coral-primary-color)"
                              : "inherit",
                            fontWeight: isActive("/contact") ? "600" : "normal",
                          }}
                        >
                          Contact
                        </div>
                      </Box>
                    </Link>
                  </li>
                  {/* <li className="nav-button-mobile-wrapper">
                    <Link
                      to="/login"
                      className="button-primary header-button w-button"
                    >
                      Login
                    </Link>
                  </li> */}
                </ul>
              </nav>
              {/* <div className="nav-button-wrapper">
                <Link
                  to="/login"
                  className="button-primary header-button w-button w--current"
                >
                  Login
                </Link>
              </div> */}
              <Box
                className="menu-button w-nav-button"
                onClick={toggleMobileMenu}
                sx={{ cursor: "pointer" }}
              >
                <Box
                  sx={{
                    width: 20,
                    height: 20,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MenuOutlinedIcon />
                </Box>
              </Box>
            </div>
          </div>
        </div>
      </Box>

      {/* Mobile Sidebar */}
      <Drawer
        anchor="left"
        open={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 280,
            backgroundColor: "#fff",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          },
          zIndex: "999999999",
        }}
      >
        <Box sx={{ p: 2, borderBottom: "1px solid #eee" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Link
              to="/"
              className="navbar-brand w-nav-brand w--current"
              style={{
                color: "var(--coral-primary-color)",
                fontSize: "30px",
                lineHeight: "20px",
                textAlign: "center",
              }}
            >
              <span style={{ color: "var(--text-primary)" }}>Design</span>{" "}
              <br />
              Dynasty
            </Link>
            <CloseIcon
              onClick={() => setIsMobileMenuOpen(false)}
              sx={{ cursor: "pointer", color: "#666" }}
            />
          </Box>
        </Box>

        <List sx={{ pt: 0 }}>
          <ListItem
            component={Link}
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            sx={{
              borderBottom: "1px solid #f0f0f0",
              "&:hover": { backgroundColor: "#f8f9fa" },
              backgroundColor: isActive("/") ? "#f0f8ff" : "transparent",
            }}
          >
            <ListItemText
              primary="Home"
              sx={{
                "& .MuiListItemText-primary": {
                  fontSize: "16px",
                  fontFamily: "Regular_M",
                  fontWeight: isActive("/") ? 600 : 400,
                  color: isActive("/") ? "var(--coral-primary-color)" : "#222",
                },
              }}
            />
          </ListItem>

          <ListItem
            component={Link}
            to="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            sx={{
              borderBottom: "1px solid #f0f0f0",
              "&:hover": { backgroundColor: "#f8f9fa" },
              backgroundColor: isActive("/about") ? "#f0f8ff" : "transparent",
            }}
          >
            <ListItemText
              primary="About"
              sx={{
                "& .MuiListItemText-primary": {
                  fontSize: "16px",
                  fontFamily: "Regular_M",
                  fontWeight: isActive("/about") ? 600 : 400,
                  color: isActive("/about")
                    ? "var(--coral-primary-color)"
                    : "#222",
                },
              }}
            />
          </ListItem>

          <ListItem
            onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
            sx={{
              borderBottom: "1px solid #f0f0f0",
              cursor: "pointer",
              "&:hover": { backgroundColor: "#f8f9fa" },
              backgroundColor: isServicesActive() ? "#f0f8ff" : "transparent",
            }}
          >
            <ListItemText
              primary="Services"
              sx={{
                "& .MuiListItemText-primary": {
                  fontSize: "16px",
                  fontFamily: "Regular_M",
                  fontWeight: isServicesActive() ? 600 : 400,
                  color: isServicesActive()
                    ? "var(--coral-primary-color)"
                    : "#222",
                },
              }}
            />
            <ExpandMoreIcon
              sx={{
                transform: isMobileServicesOpen
                  ? "rotate(180deg)"
                  : "rotate(0deg)",
                transition: "transform 0.3s ease",
                color: "#666",
              }}
            />
          </ListItem>

          <Collapse in={isMobileServicesOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                component={Link}
                to="/web-development"
                onClick={() => setIsMobileMenuOpen(false)}
                sx={{
                  pl: 4,
                  borderBottom: "1px solid #f0f0f0",
                  "&:hover": { backgroundColor: "#f8f9fa" },
                }}
              >
                <ListItemText
                  primary="Web Developement"
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontSize: "15px",
                      fontFamily: "Regular_M",
                      fontWeight: 400,
                      color: "#666",
                    },
                  }}
                />
              </ListItem>
              <ListItem
                component={Link}
                to="/mobile-developement"
                onClick={() => setIsMobileMenuOpen(false)}
                sx={{
                  pl: 4,
                  borderBottom: "1px solid #f0f0f0",
                  "&:hover": { backgroundColor: "#f8f9fa" },
                }}
              >
                <ListItemText
                  primary="Mobile Developement"
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontSize: "15px",
                      fontFamily: "Regular_M",
                      fontWeight: 400,
                      color: "#666",
                    },
                  }}
                />
              </ListItem>
              <ListItem
                component={Link}
                to="/graphic-design"
                onClick={() => setIsMobileMenuOpen(false)}
                sx={{
                  pl: 4,
                  borderBottom: "1px solid #f0f0f0",
                  "&:hover": { backgroundColor: "#f8f9fa" },
                }}
              >
                <ListItemText
                  primary="Graphic Design"
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontSize: "15px",
                      fontFamily: "Regular_M",
                      fontWeight: 400,
                      color: "#666",
                    },
                  }}
                />
              </ListItem>
            </List>
          </Collapse>

          {/* <ListItem
            component={Link}
            to="/pricing"
            onClick={() => setIsMobileMenuOpen(false)}
            sx={{
              borderBottom: "1px solid #f0f0f0",
              "&:hover": { backgroundColor: "#f8f9fa" },
              backgroundColor: isActive("/pricing") ? "#f0f8ff" : "transparent",
            }}
          >
            <ListItemText
              primary="Pricing"
              sx={{
                "& .MuiListItemText-primary": {
                  fontSize: "16px",
                  fontFamily: "Regular_M",
                  fontWeight: isActive("/pricing") ? 600 : 400,
                  color: isActive("/pricing")
                    ? "var(--coral-primary-color)"
                    : "#222",
                },
              }}
            />
          </ListItem> */}

          <ListItem
            component={Link}
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            sx={{
              borderBottom: "1px solid #f0f0f0",
              "&:hover": { backgroundColor: "#f8f9fa" },
              backgroundColor: isActive("/contact") ? "#f0f8ff" : "transparent",
            }}
          >
            <ListItemText
              primary="Contact"
              sx={{
                "& .MuiListItemText-primary": {
                  fontSize: "16px",
                  fontFamily: "Regular_M",
                  fontWeight: isActive("/contact") ? 600 : 400,
                  color: isActive("/contact")
                    ? "var(--coral-primary-color)"
                    : "#222",
                },
              }}
            />
          </ListItem>

          {/* <ListItem sx={{ mt: 2, px: 2 }}>
            <Link
              to="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                textDecoration: "none",
                width: "100%",
                display: "block",
                backgroundColor: "var(--coral-primary-color)",
                color: "white",
                padding: "12px 20px",
                borderRadius: "5px",
                textAlign: "center",
                fontSize: "16px",
                fontFamily: "Regular_M",
                fontWeight: 400,
                transition: "background-color 0.3s ease",
              }}
            >
              Login
            </Link>
          </ListItem> */}
        </List>
      </Drawer>
    </>
  );
};
