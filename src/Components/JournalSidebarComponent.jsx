import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const JournalSidebarComponent = () => {
  const [isAboutExtended, setIsAboutExtended] = useState(false);
  const [yourContributionValue, setYourContributionValue] = useState(null);
  const [mainTabsValue, setMainTabsValue] = useState(0);

  const location = useLocation();

  const yourContributionTabs = [
    { label: "Submit your paper", link: "/journal/submitPaper" },
    { label: "Raise an Issue", link: "/journal/raiseIssue" },
  ];

  useEffect(() => {
    // Find the index of the tab whose link matches the current pathname
    const tabIndex = mainTabs.findIndex(
      (tab) => tab.link === location.pathname
    );
    setMainTabsValue(tabIndex !== -1 ? tabIndex : 0); // Set the value to the found index or 0 if not found
  }, [location.pathname]);

  const mainTabs = [
    {
      label: "About Journal",
      link: "/journal/about",
      tabs: [
        { label: "Intro & Scope", link: "/journal/about" },
        { label: "Special Issue", link: "/journal/editorialBoard" },
        { label: "Archives", link: "/journal/authors" },
        { label: "Indexing", link: "/journal/indexing" },
      ],
    },
    { label: "Editorial Board", link: "/journal/editorial" },
    { label: "Indexing", link: "/journal/indexing" },
    { label: "Authors Guide", link: "/journal/authors" },
    { label: "Authors Guide2", link: "/journal/authors2" },
  ];

  const handleYourContributionChange = (event, newValue) => {
    setYourContributionValue(newValue);
  };

  const handleMainTabsChange = (event, newValue) => {
    setIsAboutExtended(false);
    setMainTabsValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          minWidth: "290px",
          maxWidth: "290px",
          minHeight: "100%",
          marginLeft: { xs: "25px", md: "5px" },
          marginTop: "25px",
        }}
      >
        <Box
          sx={{
            height: "200px",
            padding: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "2px solid #255D42",
            borderRadius: "8px",
            margin: "4px",
          }}
        >
          <Box sx={{ width: "100%", height: "100%" }}>
            <Box sx={{ padding: "20px" }}>
              <Typography variant="h6" sx={{ fontFamily: "source sans pro" }}>
                Your Contribution
              </Typography>
            </Box>
            <Box sx={{ height: "100%" }}>
              <Tabs
                orientation="vertical"
                value={yourContributionValue}
                onChange={handleYourContributionChange}
                sx={{ borderRight: 1, padding: "5px" }}
              >
                {yourContributionTabs.map((item, key) => (
                  <Tab
                    key={key}
                    label={item.label}
                    sx={{
                      backgroundColor:
                        yourContributionValue === key ? "#255D42" : "#255D42",
                      color: "white",
                      marginBottom: "5px",
                    }}
                  />
                ))}
              </Tabs>
            </Box>
          </Box>
        </Box>
        <Box sx={{ height: "100%" }}>
          <Tabs
            orientation="vertical"
            value={mainTabsValue}
            onChange={handleMainTabsChange}
            sx={{ borderRight: 1, borderColor: "#176B87", padding: "5px" }}
          >
            {mainTabs.map((item, key) => (
              <Tab
                key={key}
                label={item.label}
                // Introducing the Link component for seamless navigation
                component={Link}
                to={item.link}
                sx={{
                  backgroundColor:
                    mainTabsValue === key ? "#86B6F6" : "#233B59",
                  marginRight: "0px",
                  paddingRight: "16px",
                  marginBottom: "5px",
                  color: mainTabsValue === key ? "black" : "white",
                }}
              />
            ))}
          </Tabs>
        </Box>
      </Box>
    </>
  );
};

export default JournalSidebarComponent;
