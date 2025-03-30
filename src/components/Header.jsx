import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Drawer,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleNavigation = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setDrawerOpen(false);
  };

  // ✅ ใช้ Intersection Observer เพื่อดูว่าอยู่ Section ไหน
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // ✅ 60% ของ Section ต้องแสดงผลถึงจะ Active
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const menuItems = (
    <>
      {["home", "about", "projects", "contact"].map((section) => (
        <Button
          key={section}
          color='inherit'
          onClick={() => handleNavigation(section)}
          sx={{
            position: "relative",
            fontWeight: activeSection === section ? "bold" : "normal",
            "&::after":
              activeSection === section
                ? {
                    content: '""',
                    position: "absolute",
                    width: "100%",
                    height: "2px",
                    backgroundColor: "white",
                    bottom: 0,
                    left: 0,
                  }
                : {},
          }}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </Button>
      ))}
    </>
  );

  return (
    <AppBar
      position='fixed'
      sx={{ backgroundColor: "rgba(0, 0, 0, 0.7)", boxShadow: "none" }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant='h6'></Typography>

        {!isMobile && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexGrow: 1,
              gap: 3,
            }}
          >
            {menuItems}
          </Box>
        )}

        {isMobile && (
          <IconButton edge='end' color='inherit' onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        )}

        <Drawer anchor='right' open={drawerOpen} onClose={toggleDrawer}>
          <Box
            sx={{
              width: 250,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 2,
              gap: 2,
            }}
          >
            <IconButton
              edge='end'
              color='inherit'
              onClick={toggleDrawer}
              sx={{ alignSelf: "flex-end" }}
            >
              <CloseIcon />
            </IconButton>
            {menuItems}
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
