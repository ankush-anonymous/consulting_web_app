import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; // Import carousel styles

const Partners = () => {
  // Responsive breakpoints for carousel
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const theme = useTheme();

  return (
    <section
      style={{
        padding: "35px",
        marginBottom: "100px",
        backgroundColor: "#f8f9fa", // Optional background color for the section
      }}
    >
      {/* Section Title */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Source Sans Pro, sans-serif",
            fontWeight: "bold",
            textAlign: "center",
            [theme.breakpoints.down("sm")]: {
              fontSize: "2rem",
              padding: "15px",
            },
          }}
        >
          Our Partners
        </Typography>
      </Box>

      {/* Partners Carousel */}
      <Carousel
        responsive={responsive}
        infinite
        draggable={false}
        swipeable={false}
        centerMode
        autoPlay
        autoPlaySpeed={2000}
        keyBoardControl
        customTransition="transform 500ms ease-in-out"
        arrows={false}
      >
        {/* Partner 1 */}
        <div>
          <img
            src="https://res.cloudinary.com/dtjg2hgky/image/upload/v1706396771/google_scholar_sfmhmy.png"
            alt="Google Scholar"
            style={{
              maxWidth: "200px",
              height: "auto",
              margin: "0 auto", // Center the image in the carousel item
            }}
          />
        </div>

        {/* Partner 2 */}
        <div>
          <img
            src="https://res.cloudinary.com/dtjg2hgky/image/upload/v1706397110/ieee_lgkfbf.png"
            alt="IEEE"
            style={{
              maxWidth: "200px",
              height: "auto",
              margin: "0 auto", // Center the image in the carousel item
            }}
          />
        </div>

        {/* Partner 3 */}
        <div>
          <img
            src="https://res.cloudinary.com/dtjg2hgky/image/upload/v1706397008/springer_jguhov.png"
            alt="Springer"
            style={{
              maxWidth: "200px",
              height: "auto",
              margin: "0 auto", // Center the image in the carousel item
            }}
          />
        </div>

        {/* You can add more partner images here */}
      </Carousel>
    </section>
  );
};

export default Partners;
