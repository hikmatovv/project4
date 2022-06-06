import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import vector from "../../../assets/Vector.png";
import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { IoIosAppstore } from "react-icons/io";

export default function AutoGrid({ text1, text2, text3 }) {
  return (
    <>
      <Container>
        <Grid
          mt="7%"
          container
          sx={{ backgroundColor: "#EFF0F2", borderRadius: "10px" }}
        >
          <Grid
            pl="5%"
            xs={12}
            sm={6}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography
              mt="5%"
              sx={{
                fontSize: "38px",
                fontWeight: 700,
                fontFamily: "Montserrat",
                width: "75%",
              }}
            >
              Download Our Mobile App
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 500,
                fontFamily: "Montserrat",
              }}
            >
              Available for free on these platforms{" "}
            </Typography>

            <Grid
              mt="5%"
              sx={{ display: "flex", flexDirection: "row", width: "100%" }}
            >
              <Button sx={{ color: "black", backgroundColor: "#E0E2E6" }}>
                <PlayArrowIcon sx={{ fontSize: "150%", marginRight: "4%" }} />{" "}
                Play Store
              </Button>
              <Button
                sx={{
                  marginLeft: "5%",
                  marginRight: "5%",
                  color: "black",
                  backgroundColor: "#E0E2E6",
                }}
              >
                <IoIosAppstore
                  style={{ fontSize: "150%", marginRight: "4%" }}
                />{" "}
                Apple Store
              </Button>
            </Grid>
          </Grid>
          <Grid xs={12} sm={6} md={6} pl="30%" pt="5%" pb="8%">
            <img src={vector} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
