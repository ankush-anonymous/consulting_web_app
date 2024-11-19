import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
  useTheme,
  Avatar,
  CardMedia,
} from "@mui/material";
import React from "react";
import { AccountCircle } from "@mui/icons-material";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";

import NavbarComponent from "../Components/NavbarComponent";
import NumberScrollAnimation from "../Components/NumberScrollAnimation";
import Divider from "@mui/material/Divider";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Hero from "../Sections/Hero";
import AboutContent from "../Sections/AboutContent";
import WhyUsSection from "../Sections/WhyUsSection";
import VisionMissionSection from "../Sections/VissionMissionSection";
import TeamSection from "../Sections/TeamSection";
import Partners from "../Sections/Partners";
import ContactSection from "../Sections/ContactSection";

const DashboardPage = () => {
  const theme = useTheme();

  return (
    <>
      <NavbarComponent />
      <section id="about-us">
        <Hero />
      </section>
      <section id="journals">
        <AboutContent />
      </section>
      <section id="mission-vision">
        <VisionMissionSection />
      </section>
      <section id="why-us">
        <WhyUsSection />
      </section>
      <section id="team">
        <TeamSection />
      </section>
      <section id="partners">
        <Partners />
      </section>
      <section id="contact-us">
        <ContactSection />
      </section>
    </>
  );
};

export default DashboardPage;
