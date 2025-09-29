import LogoutIcon from "@mui/icons-material/Logout";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { useState, } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  onMenuClick?: () => void;
  isSidebarCollapsed?: boolean;
}

export const Header = ({ onMenuClick }: HeaderProps) => {
  const [profileAnchorEl, setProfileAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const navigate = useNavigate();

  // Profile dropdown handlers
  const openProfile = (e: React.MouseEvent<HTMLElement>) =>
    setProfileAnchorEl(e.currentTarget);
  const closeProfile = () => {
    setProfileAnchorEl(null);
  };

  const handleSignOut = () => {
    closeProfile();
    Cookies.remove("DDToken"); 
    Cookies.remove("role"); 
    Cookies.remove("name"); 
    navigate("/login");
  };

  const userData = {
    name: "John Doe",
    userId: "JD001",
    avatar: "/path/to/avatar.jpg",
  };

  return (
    <Box
      component="header"
      sx={{
        width: "100%",
        position: "sticky",
        top: 0,
        zIndex: 10,
        backgroundColor: "var(--white)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          justifyContent: "space-between",
          px: { xs: 2, md: 3 },
          py: { xs: 1, md: 2 },
          backgroundColor: "var(--white)",
        }}
      >
        {/* Left: menu + title */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            flex: 1,
            minWidth: 0,
          }}
        >
          {/* Menu button - only show on desktop */}
          <IconButton
            onClick={onMenuClick}
            aria-label="toggle sidebar"
            size="small"
            sx={{
              color: "var(--text-secondar)",
              border: "1px solid var(--border)",
              borderRadius: "6px",
              width: "38px",
              height: "38px",
              display: { xs: "none", md: "flex" },
            }}
          >
            <HiBars3CenterLeft />
          </IconButton>

          {/* Logo/Brand on mobile */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              gap: 1,
              fontWeight: 700,
              fontSize: 18,
              color: "#111",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "SemiBold_M",
                fontSize: "18px",
                color: "var(--primary)",
                lineHeight: "13px",
              }}
            >
              {" "}
              <span style={{ color: "var(--black-body-color)" }}>
                Design
              </span>{" "}
              <br />
              Dynasty
            </Typography>
          </Box>
        </Box>

        {/* Center: search (md+) */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flex: 1,
            justifyContent: "center",
            px: 2,
          }}
        ></Box>

        {/* Right: actions */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 0.5, md: 1 },
          }}
        >

          {/* Profile Dropdown */}
          <Box
            onClick={openProfile}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
              padding: { xs: "6px", md: "6px 12px" },
              borderRadius: "6px",
              "&:hover": {
                backgroundColor: "var(--hover-bg, #f5f5f5)",
              },
            }}
          >
            <Avatar
              src={userData.avatar}
              sx={{
                width: 28,
                height: 28,
                fontSize: "12px",
                backgroundColor: "var(--primary)",
              }}
            >
              {userData.name.charAt(0)}
            </Avatar>
            <Typography
              variant="body2"
              sx={{
                fontSize: "13px",
                fontFamily: "Regular_M",
                color: "var(--text-primary)",
                display: { xs: "none", sm: "block" },
              }}
            >
              {userData.name}
            </Typography>
            <KeyboardArrowDownIcon
              sx={{
                fontSize: 16,
                display: { xs: "none", sm: "block" },
              }}
            />
          </Box>
        </Box>

        {/* Profile Dropdown Menu */}
        <Menu
          anchorEl={profileAnchorEl}
          open={Boolean(profileAnchorEl)}
          onClose={closeProfile}
          PaperProps={{
            sx: {
              mt: 1,
              minWidth: 220,
              border: "1px solid var(--border)",
              borderRadius: "8px",
            },
          }}
        >
          <Box sx={{ py: 1, px: 2, borderBottom: "1px solid var(--border)" }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: "14px",
                fontWeight: 600,
                fontFamily: "Regular_M",
              }}
            >
              {userData.name}
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "var(--text-secondary)", fontFamily: "Regular_M" }}
            >
              role: {userData.userId}
            </Typography>
          </Box>

          <Divider />

          <MenuItem
            onClick={handleSignOut}
            sx={{ minHeight: "0px !important" }}
          >
            <ListItemIcon>
              <LogoutIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="Sign Out"
              primaryTypographyProps={{
                fontSize: "13px",
                fontFamily: "Regular_M",
              }}
            />
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};
