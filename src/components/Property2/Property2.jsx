/* eslint-disable import/no-anonymous-default-export */
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import React from "react";
import Button from "@mui/material/Button";

import Container from "@mui/material/Container";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "#484848",
  boxShadow: "none",
}));
const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor: "#EFF0F2",
  ...theme.typography.body2,
  margin: 4,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "#484848",
  boxShadow: "none",
}));
export default () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          // width: "90%",
          // marginLeft: "5%",
          marginTop: "4%",
          marginBottom: "13%",
        }}
      >
        <Grid container>
          <Grid xs={12}>
            <Item
              sx={{ fontSize: "200%", fontWeight: "800", textAlign: "left" }}
            >
              Add a short description of your place.
            </Item>
          </Grid>
          <Grid md={6} xs={12} sx={{ marginTop: "3%" }}>
            <Item2>
              <Item2
                sx={{
                  fontSize: "16px",
                  fontWeight: "700",
                  fontFamily: "Montserrat",
                  textAlign: "left",
                }}
              >
                Rental unit
              </Item2>
              <Item2 sx={{ color: "#9A9A9A", textAlign: "left" }}>
                A rented place within a multi-unit residential building or
                complex.
              </Item2>
            </Item2>
          </Grid>
          <Grid md={6} xs={12} sx={{ marginTop: "3%" }}>
            <Item2>
              <Item2
                sx={{
                  fontSize: "16px",
                  fontWeight: "700",
                  fontFamily: "Montserrat",
                  textAlign: "left",
                }}
              >
                Shared unit
              </Item2>
              <Item2 sx={{ color: "#9A9A9A", textAlign: "left" }}>
                A rented place within a multi-unit residential building or
                complex.
              </Item2>
            </Item2>
          </Grid>
        </Grid>
        <Item>
          <Grid container>
            <Grid item xs={6} sx={{ textAlign: "left", marginTop: "3%" }}>
              <Button
                href="/pro-tort"
                variant="contained"
                sx={{
                  color: "white",
                  borderRadius: "20px",
                  backgroundColor: " #9A9A9A",
                }}
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </Item>
      </Box>
    </Container>
  );
};
