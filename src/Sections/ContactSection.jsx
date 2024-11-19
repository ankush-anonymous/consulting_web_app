import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Grid,
  Typography,
  IconButton,
  Paper,
  Divider,
  Fade,
} from "@mui/material";
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
} from "@mui/icons-material";
import { keyframes } from "@mui/system";

// Animation for button hover
const hoverAnimation = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  }
  100% {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }
`;

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., sending email or storing data)
    console.log("Form submitted", formData);
  };

  return (
    <Box sx={{ padding: 4, backgroundColor: "#f7f7f7" }}>
      <Grid container spacing={4}>
        {/* Left Section with Contact Info */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 3, backgroundColor: "#fff", boxShadow: 3 }}>
            <Typography
              variant="h4"
              gutterBottom
              align="center"
              sx={{
                color: "#176B87",
                fontWeight: "bold",
                textShadow: "0 1px 3px rgba(0,0,0,0.1)",
              }}
            >
              Contact Us
            </Typography>
            <Typography variant="body1" paragraph align="center">
              Feel free to reach out to us with any inquiries or feedback. We
              would love to hear from you.
            </Typography>

            {/* Contact Info */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transition: "all 0.3s ease-in-out",
              }}
            >
              <Fade in timeout={500}>
                <IconButton color="primary" sx={{ marginBottom: 2 }}>
                  <EmailIcon fontSize="large" />
                </IconButton>
              </Fade>
              <Typography variant="h6">email@example.com</Typography>

              <Divider sx={{ width: "100%", marginTop: 2, marginBottom: 2 }} />

              <Fade in timeout={700}>
                <IconButton color="primary" sx={{ marginBottom: 2 }}>
                  <PhoneIcon fontSize="large" />
                </IconButton>
              </Fade>
              <Typography variant="h6">+1 (234) 567-8901</Typography>

              <Divider sx={{ width: "100%", marginTop: 2, marginBottom: 2 }} />

              {/* Social Links */}
              <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
                <IconButton
                  color="primary"
                  href="https://linkedin.com"
                  target="_blank"
                  sx={{
                    animation: `${hoverAnimation} 0.3s ease-in-out`,
                    "&:hover": {
                      transform: "scale(1.1)",
                      boxShadow: "0 0 25px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <LinkedInIcon fontSize="large" />
                </IconButton>
                <IconButton
                  color="primary"
                  href="https://github.com"
                  target="_blank"
                  sx={{
                    animation: `${hoverAnimation} 0.3s ease-in-out`,
                    "&:hover": {
                      transform: "scale(1.1)",
                      boxShadow: "0 0 25px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <GitHubIcon fontSize="large" />
                </IconButton>
              </Box>
            </Box>
          </Paper>
        </Grid>

        {/* Right Section with Contact Form */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 3, backgroundColor: "#fff", boxShadow: 3 }}>
            <Typography
              variant="h4"
              gutterBottom
              align="center"
              sx={{
                color: "#176B87",
                fontWeight: "bold",
                textShadow: "0 1px 3px rgba(0,0,0,0.1)",
              }}
            >
              Send a Message
            </Typography>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <TextField
                label="Your Name"
                variant="outlined"
                fullWidth
                margin="normal"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      borderColor: "#176B87",
                    },
                  },
                }}
              />
              <TextField
                label="Your Email"
                variant="outlined"
                fullWidth
                margin="normal"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      borderColor: "#176B87",
                    },
                  },
                }}
              />
              <TextField
                label="Your Message"
                variant="outlined"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      borderColor: "#176B87",
                    },
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  width: "100%",
                  marginTop: 2,
                  padding: "12px",
                  fontSize: "16px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "#176B87",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    backgroundColor: "#125D70",
                    transform: "scale(1.05)",
                  },
                }}
              >
                Submit
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactSection;
