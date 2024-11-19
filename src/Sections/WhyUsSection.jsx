import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";

const WhyUsCard = ({ title, description }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        maxWidth: 345,
        textAlign: "center",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: `0 6px 25px ${theme.palette.primary.main}`,
        },
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          sx={{ color: theme.palette.primary.main, fontWeight: "bold" }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginTop: 1, color: "text.secondary" }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

const WhyUsSection = () => {
  const cards = [
    {
      title: "Timely Publication",
      description: "Swift and care-free publishing process.",
    },
    {
      title: "Expert Review",
      description: "Reviewed by highly skilled professionals.",
    },
    {
      title: "Global Reach",
      description: "Expand your work across the globe.",
    },
    {
      title: "24/7 Support",
      description: "We are here for you anytime, anywhere.",
    },
    { title: "High Standards", description: "Top-tier quality for your work." },
    {
      title: "Affordable Pricing",
      description: "Quality services at a reasonable cost.",
    },
  ];

  return (
    <section style={{ padding: "20px 5px" }}>
      <Box sx={{ margin: "60px 0" }}>
        {/* Section Heading */}
        <Box
          sx={{
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              fontFamily: "Roboto, sans-serif",
              color: "primary.main",
            }}
          >
            Why Choose Us?
          </Typography>
        </Box>

        {/* Cards Grid */}
        <Grid container spacing={4} justifyContent="center">
          {cards.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <WhyUsCard title={card.title} description={card.description} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
};

export default WhyUsSection;
