import React from "react";
import { Box, Typography } from "@mui/material";
import CountUp from "react-countup";
import { useTheme } from "@mui/material/styles";

const CustomCountUp = ({ targetNumber, bottomLine }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column", // Arrange count and bottom text vertically
        justifyContent: "center",
        alignItems: "center",
        gap: 1,
        height: "200px",
      }}
    >
      {/* CountUp Number */}
      <CountUp
        start={40}
        end={targetNumber}
        duration={3} // Control speed of count
        suffix="+" // Adding "+" symbol
        delay={1} // Delay before starting
        separator="," // Thousands separator
        decimals={0} // No decimal points
        style={{
          fontFamily: "Roboto, sans-serif",
          fontSize: "3rem", // Font size for the count
          fontWeight: "bold",
          color: theme.palette.primary.main, // Use theme's primary color
        }}
      />

      {/* Bottom Line Text */}
      {bottomLine && (
        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: "Roboto, sans-serif",
            textAlign: "center",
            color: theme.palette.text.secondary, // Use theme's secondary text color
            fontSize: "2rem",
            marginTop: "8px",
          }}
        >
          {bottomLine}
        </Typography>
      )}
    </Box>
  );
};

export default CustomCountUp;
