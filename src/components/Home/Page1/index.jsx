/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import banner from "../../../assets/BANNER.png";
import Divider from "@mui/material/Divider";
import SearchIcon from "@mui/icons-material/Search";

import Button from "@mui/material/Button";

export default () => {
  return (
    <>
      <Grid pt="16%" pb="10%" sx={{ backgroundColor: "#EFF0F2" }}>
        <Grid>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={banner} width="50%" />
          </Grid>

          <Container maxWidth="md">
            <Grid
              pl="3%"
              mt="10%"
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "40px",
                  fontWeight: 700,
                  color: "#484848",
                  fontFamily: "Montserrat",
                }}
              >
                FIND
              </Typography>
              <Typography
                ml="2%"
                color="#484848"
                sx={{
                  fontSize: "16px ",
                  fontFamily: "Montserrat",
                  fontWeight: 600,
                }}
              >
                Rooms
              </Typography>
              <Typography
                ml="2%"
                color="#484848"
                sx={{
                  fontSize: "16px ",
                  fontFamily: "Montserrat",
                  fontWeight: 600,
                }}
              >
                Flats
              </Typography>
              <Typography
                ml="2%"
                color="#484848"
                sx={{
                  fontSize: "16px ",
                  fontFamily: "Montserrat",
                  fontWeight: 600,
                }}
              >
                Hostels
              </Typography>
              <Typography
                ml="2%"
                color="#484848"
                sx={{
                  fontSize: "16px ",
                  fontFamily: "Montserrat",
                  fontWeight: 600,
                }}
              >
                Villas
              </Typography>
            </Grid>
            <Grid
              container
              pl="3%"
              pt="1%"
              pb="1%"
              sx={{
                borderRadius: "30px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
              }}
            >
              <Grid
                xs={4}
                sm={2.4}
                md={2.4}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <Typography
                  color="#484848"
                  sx={{
                    fontSize: "12px ",
                    fontFamily: "Montserrat",
                    fontWeight: 600,
                  }}
                >
                  Location
                </Typography>
                <Typography
                  color="#C2C6CC"
                  sx={{
                    fontSize: "14px ",
                    fontFamily: "Montserrat",
                    fontWeight: 600,
                  }}
                >
                  Which city do you prefer?
                </Typography>
              </Grid>
              <Divider orientation="vertical" variant="middle" flexItem />

              <Grid
                xs={4}
                sm={2.4}
                md={2.4}
                ml="3%"
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <Typography
                  color="#484848"
                  sx={{
                    fontSize: "12px ",
                    fontFamily: "Montserrat",
                    fontWeight: 600,
                  }}
                >
                  Check in
                </Typography>
                <Typography
                  color="#C2C6CC"
                  sx={{
                    fontSize: "14px ",
                    fontFamily: "Montserrat",
                    fontWeight: 600,
                  }}
                >
                  add Dates
                </Typography>
              </Grid>
              <Divider orientation="vertical" variant="middle" flexItem />

              <Grid
                xs={4}
                sm={2.4}
                md={2.4}
                ml="3%"
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <Typography
                  color="#484848"
                  sx={{
                    fontSize: "12px ",
                    fontFamily: "Montserrat",
                    fontWeight: 600,
                  }}
                >
                  Check out
                </Typography>
                <Typography
                  color="#C2C6CC"
                  sx={{
                    fontSize: "14px ",
                    fontFamily: "Montserrat",
                    fontWeight: 600,
                  }}
                >
                  add Dates
                </Typography>
              </Grid>
              <Divider orientation="vertical" variant="middle" flexItem />

              <Grid
                xs={4}
                sm={2.4}
                md={2.4}
                ml="3%"
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <Typography
                  color="#484848"
                  sx={{
                    fontSize: "12px ",
                    fontFamily: "Montserrat",
                    fontWeight: 600,
                  }}
                >
                  Guests{" "}
                </Typography>
                <Typography
                  color="#C2C6CC"
                  sx={{
                    fontSize: "14px ",
                    fontFamily: "Montserrat",
                    fontWeight: 600,
                  }}
                >
                  add Dates
                </Typography>
              </Grid>

              <Grid
                p="1%"
                sx={{ backgroundColor: "#484848", borderRadius: "100%" }}
              >
                <Button
                  href="/search"
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    lineHeight: "17.07px",
                    color: "black",
                  }}
                >
                  <SearchIcon sx={{ color: "white" }} />
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};
