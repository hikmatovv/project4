import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
  backgroundColor: "#EFF0F2",
  boxShadow: "none",
}));

export default function AutoGrid() {
  return (
    <Container maxWidth="xl">
      <Box sx={{ flexGrow: 1, marginTop: "40px", mb: "30px" }}>
        <Grid container justifyContent="center" alignItems="center" spacing={3}>
          <Grid item md={6} sm={12} xs={12}>
            <Item
              sx={{
                fontStyle: "normal",
                fontWeight: "800",
                fontSize: { md: "60px", sm: "50px", xs: "37px" },
                lineHeight: "73px",
                color: "#E8EAEC",
                backgroundColor: "white",
              }}
            >
              Reservation
            </Item>
            <Item
              sx={{
                fontStyle: "normal",
                fontWeight: "800",
                fontSize: "60px",
                lineHeight: "73px",
                color: "#E8EAEC",
                backgroundColor: "white",
              }}
            >
              Form
            </Item>
            <Item
              sx={{
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "18px",
                lineHeight: "28px",
                backgroundColor: "white",
              }}
            >
              Sample reservation form to be provided for the concept and further
              design...
            </Item>
            <Item
              sx={{
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "18px",
                lineHeight: "28px",
                backgroundColor: "white",
              }}
            >
              Go To Home
            </Item>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <Item sx={{ backgroundColor: "#EFF0F2" }}>
              <Grid
                sx={{ width: "90%", ml: "5%" }}
                container
                justifyContent="center"
                alignItems="center"
              >
                <Grid md={3} sm={12} xs={12} item>
                  <Item sx={{ justifyContent: "center", textAlign: "center" }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        "& > :not(style)": {
                          m: 1,
                          width: 128,
                          height: 128,
                        },
                      }}
                    >
                      <Paper
                        elevation={3}
                        sx={{ backgroundColor: "#C2C6CC" }}
                      />
                    </Box>
                  </Item>
                </Grid>
                <Grid item md={9} sm={12} xs={12}>
                  <Item
                    sx={{
                      fontWeight: "700",
                      fontSize: "16px",
                      lineHeight: "20px",
                    }}
                  >
                    Fully Furnished Apartment
                  </Item>
                  <Item
                    sx={{
                      fontWeight: "500",
                      fontSize: "14px",
                      lineHeight: "17px",
                    }}
                  >
                    100 Smart Street, LA, USA
                  </Item>
                  <Item
                    sx={{
                      fontWeight: "600",
                      fontSize: "14px",
                      lineHeight: "17px",
                    }}
                  >
                    1 Bedroom | 1 Bedroom | 1 Bedroom
                  </Item>
                </Grid>
                <Grid sx={{}} xs={12} item>
                  <Item
                    sx={{
                      fontWeight: "700",
                      fontSize: "18px",
                      lineHeight: "22px",
                    }}
                  >
                    Price Details
                  </Item>
                  <Item
                    sx={{
                      fontWeight: "500",
                      fontSize: "15px",
                      lineHeight: "18px",
                      color: "#484848",
                    }}
                  >
                    Short Period: $ 1000
                  </Item>
                  <Item
                    sx={{
                      fontWeight: "500",
                      fontSize: "15px",
                      lineHeight: "18px",
                    }}
                  >
                    Medium Period: $ 2000
                  </Item>
                  <Item
                    sx={{
                      fontWeight: "500",
                      fontSize: "15px",
                      lineHeight: "18px",
                    }}
                  >
                    Long Period: $ 2000
                  </Item>
                </Grid>
              </Grid>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
