import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";

const JournalSidebarComponent = () => {
  const [isAboutExtened, setIsAboutExtended] = useState(false);

  const yourContributionTabs = [
    { label: "Submit your paper", link: "/journal/submitPaper" },
    { label: "Raise an Issue", link: "/journal/raiseIssue" },
  ];

  const mainTabs = [
    // { label: "About Journal", link: "/journal/about" },
    { label: "Editorial Board", link: "/journal/editorialBoard" },
    { label: "Indexing", link: "/journal/indexing" },
    { label: "Authors Guide", link: "/journal/authors" },
  ];
  const aboutTabs = [
    // { label: "Intro & Scope", link: "/journal/about" },
    { label: "Issue", link: "/journal/editorialBoard" },
    { label: "Archives", link: "/journal/authors" },
    { label: "Indexing", link: "/journal/indexing" },
  ];

  const [yourContributionValue, setYourContributionValue] = useState(null);
  const [mainTabsValue, setMainTabsValue] = useState(null);
  const [aboutTabsValue, setAboutTabsValue] = useState(null);

  const handleYourContributionChange = (event, newValue) => {
    setYourContributionValue(newValue);
  };

  const handleMainTabsChange = (event, newValue) => {
    setMainTabsValue(newValue);
  };
  const handleAboutTabsChange = (event, newValue) => {
    setAboutTabsValue(newValue);
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
            value={aboutTabsValue}
            onChange={handleAboutTabsChange}
            sx={{ borderRight: 1, borderColor: "#176B87", padding: "5px" }}
          >
            <Tab
              label={"About Journal"}
              sx={{
                backgroundColor: "#233B59",
                marginRight: "0px",
                paddingRight: "16px",
                marginBottom: "5px",
                color: "white",
              }}
            />
          </Tabs>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={mainTabsValue}
            onChange={handleMainTabsChange}
            sx={{ borderRight: 1, borderColor: "#176B87", padding: "5px" }}
          >
            {mainTabs.map((item, key) => (
              <Tab
                key={key}
                label={item.label}
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

      {/* Extender version of About Journal  */}
      {isAboutExtened && (
        <Box>
          <Box sx={{ height: "100%" }}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={mainTabsValue}
              onChange={handleMainTabsChange}
              sx={{ borderRight: 1, borderColor: "#176B87", padding: "5px" }}
            >
              {mainTabs.map((item, key) => (
                <Tab
                  key={key}
                  label={item.label}
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
      )}
    </>
  );
};

export default JournalSidebarComponent;
