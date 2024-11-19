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
import CountUp from "react-countup";
import CountUpAnimation from "../Components/CountUpAnimation";
import Divider from "@mui/material/Divider";

const AboutContent = () => {
  const theme = useTheme();
  return (
    <>
      {/* Countdown Section   */}
      <section
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            marginTop: "60px",
            marginBottom: "100px",
            overflow: "hidden", // Ensure the box doesn't overflow its container
            [theme.breakpoints.down("sm")]: {
              marginTop: "100px",
              marginBottom: "100px",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100px",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                // fontFamily: "Merriweather ",
                fontFamily: "source sans pro",
                [theme.breakpoints.down("sm")]: {
                  fontSize: "2.5rem", // Adjust the font size for small screens
                  padding: "15px",
                  marginTop: "50px",
                },
              }}
            >
              About Us
            </Typography>
            <br />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center", // Center along the x-axis
              alignItems: "center",
              height: "100%",
              maxWidth: "75%",
              margin: "auto",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "source sans ",
                [theme.breakpoints.down("sm")]: {
                  fontSize: "1rem",
                  marginTop: "100px",
                  padding: "15px",
                },
                textAlign: "justify",
              }}
            >
              Science EVE is dedicated community focused on promoting the
              exchange of advanced scientific knowledge. It is not merely a
              publisher. Science EVE allow researchers at all career levels to
              interact, cooperate, and advance scientific discovery through our
              many services. Science EVE have a diverse collection of top-tier,
              peer-reviewed journals covering many fields, guaranteeing the
              distribution of important research results to an international
              readership. Science EVE continue beyond that. We create
              interactive settings through hosting dynamic conferences,
              workshops, and forums, where innovative ideas are introduced,
              discussed, and developed. These meetings facilitate important
              relationships, inspire partnerships, and advance scientific
              advancement beyond traditional communication methods. Science Eve
              invites both experienced researchers looking to discuss their work
              and new scientists wanting to learn and interact. Join us in this
              thrilling scientific expedition and exploration.
            </Typography>
          </Box>

          {/* Countdown  */}
          <Box
            sx={{
              padding: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            <Box sx={{ marginTop: "50px", width: "100%" }}>
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  md={4}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "200px",
                  }}
                >
                  <CountUpAnimation
                    targetNumber={5000}
                    bottomLine={"Trusted Clients"}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "200px",
                  }}
                >
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ marginLeft: "10px", marginRight: "10px" }}
                  />
                  <CountUpAnimation
                    targetNumber={5678}
                    bottomLine={"Countries"}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "200px",
                  }}
                >
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ marginLeft: "10px", marginRight: "10px" }}
                  />
                  <CountUpAnimation
                    targetNumber={91011}
                    bottomLine={"Countries"}
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </section>
    </>
  );
};

export default AboutContent;
