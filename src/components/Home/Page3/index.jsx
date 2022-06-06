import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import banner from "../../../assets/BANNER.png";
import Button from "@mui/material/Button";

export default function AutoGrid({ text1, text2, text3 }) {
  return (
    <>
      <Container>
        <Grid
          mt="7%"
          pb="3%"
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
              justifyContent: "space-evenly",
            }}
          >
            <Typography
              sx={{
                fontSize: "38px",
                fontWeight: 700,
                fontFamily: "Montserrat",
                width: "55%",
              }}
            >
              {text1}
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 500,
                fontFamily: "Montserrat",
              }}
            >
              {text2}{" "}
            </Typography>
            <Button
              sx={{
                marginTop: "5%",
                color: "white",
                backgroundColor: "black",
                borderRadius: "33px",
                fontSize: "65%",
                height: "20%",
                width: "45%",
                fontWeight: 700,
                fontFamily: "Montserrat",
                border: 1,
              }}
            >
              {text3}{" "}
            </Button>
          </Grid>
          <Grid xs={12} sm={6} md={6} p="10%">
            <img src={banner} width="90%" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
