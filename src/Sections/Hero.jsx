import React from "react";
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

const Hero = () => {
  return (
    <>
      {/* Hero Section  */}
      <section>
        <Box
          sx={{
            height: "55vh",
            backgroundColor: "#A0E9FF",
            backgroundImage:
              'url("https://res.cloudinary.com/dtjg2hgky/image/upload/v1706551559/circle3_vbnqvp.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "contrast(120%) brightness(110%) blur(10%)", // Adjust these values as needed
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "white",
              fontWeight: "semibold",
              fontFamily: "source sans pro ",
            }}
          >
            Our research today is the
          </Typography>
          <Typography variant="h4" sx={{ color: "white", fontWeight: "bold" }}>
            science of tomorrow
          </Typography>
          <Typography
            variant="body1"
            sx={{ maxWidth: "500px", color: "white", marginTop: "10px" }}
          >
            We realize this belief by encouraging exceptional ideas,
            facilitating new researchers and spreading innovative concepts
            globally.
          </Typography>
        </Box>
      </section>
    </>
  );
};

export default Hero;
