import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  useTheme,
} from "@mui/material";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const AnimatedCard = ({ title, description, Icon }) => {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      sx={{
        maxWidth: 345,
        textAlign: "center",
        backgroundColor: isHovered
          ? theme.palette.grey[200]
          : theme.palette.background.paper,
        transition: "transform 0.5s ease, box-shadow 0.5s ease",
        transform: isHovered ? "scale(1.05)" : "scale(1)",
        boxShadow: isHovered
          ? `0 8px 20px ${theme.palette.grey[500]}`
          : "0 4px 10px rgba(0, 0, 0, 0.1)",
        padding: "20px",
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
            }}
          >
            <Icon />
          </Avatar>
        }
        title={
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", fontSize: "1.2rem" }}
          >
            {title}
          </Typography>
        }
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

const VisionMissionSection = () => {
  const cardsData = [
    {
      title: "Our Mission",
      description:
        "We aim to facilitate the global exchange and review of research, ideas, and expertise among individuals in the scientific community. Our vision is simple: to partner with researchers and scientific institutes, to enable a realization of the full potential of their content in the digital environment, and to increase the efficiency of research in our world.",
      icon: TrackChangesIcon,
    },
    {
      title: "Our Vision",
      description:
        "We envision a collaborative platform where scientific minds can connect and share ideas, driving innovation and advancing human understanding through meaningful exchanges.",
      icon: AccessibilityNewIcon,
    },
    {
      title: "Our Values",
      description:
        "Integrity, inclusivity, and a commitment to excellence define our values. We believe in empowering individuals to contribute to the progress of humanity.",
      icon: RemoveRedEyeIcon,
    },
  ];

  return (
    <section style={{ backgroundColor: "#FFDD95", padding: "40px " }}>
      <Box sx={{ margin: "60px 0" }}>
        {/* Section Header */}
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
              fontFamily: "Source Sans Pro, sans-serif",
              color: "text.primary",
            }}
          >
            Where it All Started!
          </Typography>
        </Box>

        {/* Cards Grid */}
        <Grid container spacing={4} justifyContent="center">
          {cardsData.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <AnimatedCard
                title={card.title}
                description={card.description}
                Icon={card.icon}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
};

export default VisionMissionSection;
