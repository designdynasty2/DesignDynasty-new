import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Chip,
} from "@mui/material";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Person4Icon from "@mui/icons-material/Person4";
export const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});

  const handleToggle = (label: string) => {
    setOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  interface NavItem {
    label: string;
    path: string;
    icon: React.ReactElement;
    badge?: string;
    children?: NavItem[];
  }

  const navLinks = useMemo<NavItem[]>(
    () => [
      {
        label: "Dashboard",
        path: "/dashboard",
        icon: <DashboardOutlinedIcon fontSize="small" />,
      },
      {
        label: "Users",
        path: "/users",
        icon: <Person4Icon fontSize="small" />,
      },
    ],
    []
  );

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#fff",
        borderRight: "1px solid #e5e7eb",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Logo */}
      <Box sx={{ p: 3, fontWeight: 700, fontSize: 22, color: "#111" }}>
        <Box
          className="navbar-brand w-nav-brand w--current"
          sx={{
            color: "var(--coral-primary-color)",
            fontSize: "30px",
            lineHeight: "20px",
            textAlign: "center",
            fontFamily: "Syne",
          }}
        >
          <span style={{ color: "var(--black-body-color)" }}>Design</span>{" "}
          <br />
          Dynasty
        </Box>
      </Box>

      {/* Menu */}
      <List sx={{ flex: 1 }}>
        {navLinks.map((item) => {
          const isSelected = location.pathname === item.path;

          return (
            <Box key={item.label} sx={{ px: 1.5 }}>
              <ListItemButton
                selected={isSelected}
                onClick={() =>
                  item?.children
                    ? handleToggle(item.label)
                    : handleNavigation(item.path)
                }
                sx={{
                  borderRadius: 2,
                  mb: 0.5,
                  color: "var(--text-secondary)",
                  fontFamily: "Syne",
                  "&.Mui-selected": {
                    backgroundColor: "#ffe2d2",
                    color: "var(--coral-primary-color)",
                    "& .MuiListItemIcon-root": {
                      color: "var(--coral-primary-color)",
                    },
                  },
                  "& .MuiTypography-root ": {
                    fontFamily: "Syne",
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 36 }}>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{ fontSize: 14, fontWeight: 600 }}
                />
                {item.badge && (
                  <Chip
                    label={item.badge}
                    size="small"
                    sx={{
                      ml: "auto",
                      fontSize: 10,
                      bgcolor: "#dcfce7",
                      color: "#16a34a",
                      fontFamily: "Bold_M",
                    }}
                  />
                )}
                {item.children &&
                  (openMenus[item.label] ? <ExpandLess /> : <ExpandMore />)}
              </ListItemButton>

              {/* Submenu */}
              {item.children && (
                <Collapse
                  in={openMenus[item.label]}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {item.children.map((sub) => (
                      <ListItemButton
                        key={sub.path}
                        selected={location.pathname === sub.path}
                        onClick={() => handleNavigation(sub.path)}
                        sx={{
                          pl: 6,
                          "&.Mui-selected": {
                            backgroundColor: "rgba(59,130,246,0.08)",
                            color: "#2563eb",
                          },
                          "& .MuiTypography-root ": {
                            fontFamily: "Regular_M",
                          },
                        }}
                      >
                        <ListItemText
                          primary={sub.label}
                          primaryTypographyProps={{ fontSize: 13 }}
                        />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              )}
            </Box>
          );
        })}
      </List>
    </Box>
  );
};
