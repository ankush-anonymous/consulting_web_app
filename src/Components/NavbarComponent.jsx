import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box, CssBaseline, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

function NavbarComponent() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [value, setValue] = useState(0);
  const location = useLocation(); // Get the current location from react-router-dom

  useEffect(() => {
    // Find the index of the tab whose link matches the current pathname
    const tabIndex = tabs.findIndex((tab) => tab.link === location.pathname);
    setValue(tabIndex !== -1 ? tabIndex : 0); // Set the value to the found index or 0 if not found
  }, [location.pathname]); // Update the effect when the pathname changes

  const tabs = [
    { label: "AboutUs", link: "#about-us" },
    { label: "WhyUs", link: "#why-us" },
    { label: "Our Team", link: "#team" },
    { label: "Our Partners", link: "#partners" },
    { label: "Contact Us", link: "#contact-us" },
  ];

  const socialMediaLinks = [
    { icon: <XIcon />, link: "https://www.twitter.com" },
    { icon: <InstagramIcon />, link: "https://www.instagram.com" },
  ];

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsDrawerOpen(open);
  };

  const handleTabsChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      {/* Container to center content vertically */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Main AppBar with more height */}
        <AppBar
          position="static"
          sx={{
            backgroundColor: "#176B87",
            height: 80,
          }}
        >
          <Toolbar
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "5px",
            }}
          >
            {/* Logo on the left */}
            <Box
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                height: "230px",
                // border: "1px solid black",
                display: "flex",
                // flexDirection: "column",
              }}
            >
              <img src="https://res.cloudinary.com/dsx8eh1hj/image/upload/v1709962586/white_font_paa3tb.png" />
            </Box>

            {/* User Icon on the right */}
            <IconButton color="inherit">
              <AccountCircleIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* SubBar with less height */}
        <AppBar
          position="static"
          sx={{ backgroundColor: "#45889F", height: 40 }}
        >
          {/* All Options view in Larger Screen  */}
          <Box
            sx={{
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              marginTop: "3px",
              flexGrow: 1,
              display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
            }}
          >
            {/* Tabs centered */}
            <Tabs value={value} onChange={handleTabsChange} textColor="inherit">
              {tabs.map((tab, index) => (
                <Tab
                  key={index}
                  label={tab.label.toUpperCase()}
                  component="a"
                  href={tab.link}
                />
              ))}
            </Tabs>
          </Box>
          <Box
            sx={{
              alignItems: "center",
              marginTop: "3px",
              flexGrow: 1,
              display: { xs: "block", sm: "block", md: "none", lg: "none" },
              marginLeft: "5px",
            }}
          >
            <MenuIcon onClick={toggleDrawer(true)} />
          </Box>
        </AppBar>
      </Box>

      {/* Drawer for xs screens */}
      <Drawer
        PaperProps={{
          sx: { width: "90%" },
        }}
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <Box
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            height: "230px",
            width: "230px",
            // border: "1px solid black",
            display: "flex",
            // alignItems: "center",
            // flexDirection: "column",
          }}
        >
          <img src="https://res.cloudinary.com/dsx8eh1hj/image/upload/v1709963119/black_font_xqhdqf.png" />
        </Box>
        <Box
          sx={{
            width: 200,
            display: "flex",
            flexDirection: "column",
            padding: 2,
            marginTop: "5px",
            justifyContent: "center",
            alignItems: "center",
            height: "100%", // Set height to 100% to center vertically
            margin: "auto", // Add this to center horizontally
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Tabs
            value={value}
            onChange={handleTabsChange}
            textColor="inherit"
            orientation="vertical"
          >
            {tabs.map((tab, index) => (
              <Tab
                key={index}
                label={tab.label.toUpperCase()}
                component="a"
                href={tab.link}
              />
            ))}
          </Tabs>
        </Box>

        {/* Social media links */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "auto", // Push the social media links to the bottom
            backgroundColor: "#176B87",
            height: "70px",
          }}
        >
          {socialMediaLinks.map((link, index) => (
            <IconButton key={index} color="inherit" href={link.link}>
              {link.icon}
            </IconButton>
          ))}
        </Box>
      </Drawer>
    </React.Fragment>
  );
}

export default NavbarComponent;
