import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";

const TeamSection = () => {
  const theme = useTheme();

  const teamMembers = [
    {
      name: "Dr. Alfred Colons",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus at sed molestias dignissimos repudiandae itaque deleniti doloremque.",
      image:
        "https://res.cloudinary.com/dtjg2hgky/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1692109846/samples/smile.jpg",
    },
    {
      name: "Dr. Emma Harper",
      description:
        "Provident optio molestiae ea consequuntur enim velit voluptates temporibus veritatis fugit facilis incidunt?",
      image:
        "https://res.cloudinary.com/dtjg2hgky/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1692109846/samples/smile.jpg",
    },
    {
      name: "Dr. John Wright",
      description:
        "Deleniti doloremque, provident optio molestiae ea consequuntur enim velit voluptates temporibus veritatis fugit facilis incidunt?",
      image:
        "https://res.cloudinary.com/dtjg2hgky/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1692109846/samples/smile.jpg",
    },
  ];

  return (
    <section
      style={{
        backgroundColor: "#A0E9FF",
        padding: "50px 20px",
        marginBottom: "100px",
      }}
    >
      {/* Section Title */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Source Sans Pro, sans-serif",
            fontWeight: "bold",
            color: "text.primary",
            [theme.breakpoints.down("sm")]: {
              fontSize: "2rem",
              textAlign: "center",
            },
          }}
        >
          Our Team
        </Typography>
      </Box>

      {/* Team Cards */}
      <Box>
        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <EnhancedTeamCard member={member} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
};

// Enhanced Card Component
const EnhancedTeamCard = ({ member }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      sx={{
        maxWidth: 345,
        textAlign: "center",
        borderRadius: "15px",
        overflow: "hidden",
        boxShadow: isHovered
          ? "0px 10px 20px rgba(0, 0, 0, 0.3)"
          : "0px 5px 15px rgba(0, 0, 0, 0.1)",
        transition: "all 0.4s ease-in-out",
      }}
    >
      {/* Image Section */}
      <CardMedia
        component="img"
        height="200"
        image={member.image}
        alt={member.name}
        sx={{
          filter: isHovered ? "brightness(0.9)" : "brightness(1)",
          transition: "filter 0.3s ease-in-out",
        }}
      />
      {/* Content Section */}
      <CardContent
        sx={{
          backgroundColor: isHovered ? "#f5f5f5" : "white",
          transition: "background-color 0.4s ease-in-out",
          padding: "20px",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "text.primary",
            marginBottom: "10px",
          }}
        >
          {member.name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {member.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TeamSection;
