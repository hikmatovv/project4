import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ClearIcon from "@mui/icons-material/Clear";
import MenuIcon from "@mui/icons-material/Menu";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import SpokeIcon from "@mui/icons-material/Spoke";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Maps1 from "./map/index";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: "100%", pt: 5 }}>
      <Container>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Item>
              <Box sx={{ pb: 5 }}>
                <Typography
                  variant="h4"
                  color="#484848"
                  sx={{ fontWeight: "bold", textAlign: "start" }}
                >
                  10 Results Found
                </Typography>{" "}
                <br />
                <Grid container spacing={2}>
                  <Grid item xs={6} sm={6} md={3} lg={3}>
                    <Item>
                      <Typography
                        sx={{
                          fontSize: "15px",
                          display: "flex",
                          border: "1px solid #E0E2E6",
                          borderRadius: "50px",
                          bgcolor: "#E0E2E6",
                          padding: "4%",
                          textAlign: "center",
                        }}
                      >
                        100 Smart <ClearIcon />
                      </Typography>
                    </Item>
                  </Grid>
                  <Grid item xs={6} sm={6} md={3} lg={3}>
                    <Item>
                      <Typography
                        sx={{
                          fontSize: "15px",
                          display: "flex",
                          border: "1px solid #E0E2E6",
                          borderRadius: "50px",
                          bgcolor: "#E0E2E6",
                          padding: "4%",
                          textAlign: "center",
                          width: "70%",
                        }}
                      >
                        12 May <ClearIcon />
                      </Typography>
                    </Item>
                  </Grid>
                  <Grid item xs={6} sm={6} md={3} lg={3}>
                    <Item>
                      <Typography
                        sx={{
                          fontSize: "15px",
                          display: "flex",
                          border: "1px solid #E0E2E6",
                          borderRadius: "50px",
                          bgcolor: "#E0E2E6",
                          padding: "4%",
                          textAlign: "center",
                          width: "70%",
                        }}
                      >
                        Period <ClearIcon />
                      </Typography>
                    </Item>
                  </Grid>
                  <Grid item xs={6} sm={6} md={3} lg={3}>
                    <Item>
                      <Typography
                        sx={{
                          fontSize: "15px",
                          display: "flex",
                          border: "2px solid #E0E2E6",
                          borderRadius: "50px",
                          padding: "6%",
                          textAlign: "center",
                          width: "70%",
                          height: "30px",
                        }}
                      >
                        {" "}
                        <MenuIcon /> Filter{" "}
                      </Typography>
                    </Item>
                  </Grid>
                </Grid>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Item>
                    <Card sx={{ width: "100%", borderRadius: "10px" }}>
                      <CardActionArea sx={{ bgcolor: "#E0E2E6" }}>
                        <Typography
                          sx={{ textAlign: "end", pb: 15, mt: "7%", mr: "7%" }}
                        >
                          <FavoriteBorderIcon
                            sx={{ width: "70px", height: "70px" }}
                          />
                        </Typography>

                        <CardContent>
                          <Typography sx={{ display: "flex", gap: "3%" }}>
                            <Avatar
                              sx={{ width: "80px", height: "80px" }}
                            ></Avatar>
                            <Typography>
                              <Typography
                                color="#484848"
                                sx={{ textAlign: "start" }}
                              >
                                Listed By:
                              </Typography>
                              <Typography
                                color="#484848"
                                sx={{
                                  fontWeight: "bold",
                                  fontSize: "18px",
                                  textAlign: "start",
                                }}
                              >
                                John Doberman
                              </Typography>
                              <Typography
                                color="#484848"
                                sx={{ fontSize: "16px", textAlign: "start" }}
                              >
                                For: $1000 - $5000{" "}
                              </Typography>
                            </Typography>
                          </Typography>
                          <Typography sx={{ textAlign: "end", ml: "85%" }}>
                            <Typography sx={{ display: "flex", gap: "3%" }}>
                              <Typography
                                sx={{
                                  width: "10px",
                                  height: "10px",
                                  bgcolor: "white",
                                  borderRadius: "50%",
                                }}
                              ></Typography>
                              <Typography
                                sx={{
                                  width: "10px",
                                  height: "10px",
                                  bgcolor: "white",
                                  borderRadius: "50%",
                                }}
                              ></Typography>
                              <Typography
                                sx={{
                                  width: "10px",
                                  height: "10px",
                                  bgcolor: "white",
                                  borderRadius: "50%",
                                }}
                              ></Typography>
                              <Typography
                                sx={{
                                  width: "10px",
                                  height: "10px",
                                  bgcolor: "white",
                                  borderRadius: "50%",
                                }}
                              ></Typography>
                            </Typography>
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Typography>
                          <Typography
                            sx={{
                              fontSize: "18px",
                              fontWeight: "bold",
                              textAlign: "start",
                            }}
                          >
                            Well Furnished Apartment
                          </Typography>
                          <Typography sx={{ textAlign: "start" }}>
                            100 Smart Street La,USA
                          </Typography>
                          <Typography
                            sx={{ display: "flex", gap: "4%", pb: 1, pt: 1 }}
                          >
                            {" "}
                            <BedIcon /> 3 <BathtubIcon /> 1{" "}
                            <DirectionsCarIcon />2 <SpokeIcon />0{" "}
                          </Typography>

                          <Typography sx={{ textAlign: "start" }}>
                            Apartment on Rent | For Long Period:1-2 Years
                          </Typography>
                        </Typography>
                      </CardActions>
                    </Card>
                  </Item>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Item>
                    <Card sx={{ width: "100%", borderRadius: "10px" }}>
                      <CardActionArea sx={{ bgcolor: "#E0E2E6" }}>
                        <Typography
                          sx={{ textAlign: "end", pb: 15, mt: "7%", mr: "7%" }}
                        >
                          <FavoriteBorderIcon
                            sx={{ width: "70px", height: "70px" }}
                          />
                        </Typography>

                        <CardContent>
                          <Typography sx={{ display: "flex", gap: "3%" }}>
                            <Avatar
                              sx={{ width: "80px", height: "80px" }}
                            ></Avatar>
                            <Typography>
                              <Typography
                                color="#484848"
                                sx={{ textAlign: "start" }}
                              >
                                Listed By:
                              </Typography>
                              <Typography
                                color="#484848"
                                sx={{
                                  fontWeight: "bold",
                                  fontSize: "18px",
                                  textAlign: "start",
                                }}
                              >
                                John Doberman
                              </Typography>
                              <Typography
                                color="#484848"
                                sx={{ fontSize: "16px", textAlign: "start" }}
                              >
                                For: $1000 - $5000{" "}
                              </Typography>
                            </Typography>
                          </Typography>
                          <Typography sx={{ textAlign: "end", ml: "85%" }}>
                            <Typography sx={{ display: "flex", gap: "3%" }}>
                              <Typography
                                sx={{
                                  width: "10px",
                                  height: "10px",
                                  bgcolor: "white",
                                  borderRadius: "50%",
                                }}
                              ></Typography>
                              <Typography
                                sx={{
                                  width: "10px",
                                  height: "10px",
                                  bgcolor: "white",
                                  borderRadius: "50%",
                                }}
                              ></Typography>
                              <Typography
                                sx={{
                                  width: "10px",
                                  height: "10px",
                                  bgcolor: "white",
                                  borderRadius: "50%",
                                }}
                              ></Typography>
                              <Typography
                                sx={{
                                  width: "10px",
                                  height: "10px",
                                  bgcolor: "white",
                                  borderRadius: "50%",
                                }}
                              ></Typography>
                            </Typography>
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Typography>
                          <Typography
                            sx={{
                              fontSize: "18px",
                              fontWeight: "bold",
                              textAlign: "start",
                            }}
                          >
                            Well Furnished Apartment
                          </Typography>
                          <Typography sx={{ textAlign: "start" }}>
                            100 Smart Street La,USA
                          </Typography>
                          <Typography
                            sx={{ display: "flex", gap: "4%", pb: 1, pt: 1 }}
                          >
                            {" "}
                            <BedIcon /> 3 <BathtubIcon /> 1{" "}
                            <DirectionsCarIcon />2 <SpokeIcon />0{" "}
                          </Typography>

                          <Typography sx={{ textAlign: "start" }}>
                            Apartment on Rent | For Long Period:1-2 Years
                          </Typography>
                        </Typography>
                      </CardActions>
                    </Card>
                  </Item>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Item>
                    <Card sx={{ width: "100%", borderRadius: "10px" }}>
                      <CardActionArea sx={{ bgcolor: "#E0E2E6" }}>
                        <Typography
                          sx={{ textAlign: "end", pb: 15, mt: "7%", mr: "7%" }}
                        >
                          <FavoriteBorderIcon
                            sx={{ width: "70px", height: "70px" }}
                          />
                        </Typography>

                        <CardContent>
                          <Typography sx={{ display: "flex", gap: "3%" }}>
                            <Avatar
                              sx={{ width: "80px", height: "80px" }}
                            ></Avatar>
                            <Typography>
                              <Typography
                                color="#484848"
                                sx={{ textAlign: "start" }}
                              >
                                Listed By:
                              </Typography>
                              <Typography
                                color="#484848"
                                sx={{
                                  fontWeight: "bold",
                                  fontSize: "18px",
                                  textAlign: "start",
                                }}
                              >
                                John Doberman
                              </Typography>
                              <Typography
                                color="#484848"
                                sx={{ fontSize: "16px", textAlign: "start" }}
                              >
                                For: $1000 - $5000{" "}
                              </Typography>
                            </Typography>
                          </Typography>
                          <Typography sx={{ textAlign: "end", ml: "85%" }}>
                            <Typography sx={{ display: "flex", gap: "3%" }}>
                              <Typography
                                sx={{
                                  width: "10px",
                                  height: "10px",
                                  bgcolor: "white",
                                  borderRadius: "50%",
                                }}
                              ></Typography>
                              <Typography
                                sx={{
                                  width: "10px",
                                  height: "10px",
                                  bgcolor: "white",
                                  borderRadius: "50%",
                                }}
                              ></Typography>
                              <Typography
                                sx={{
                                  width: "10px",
                                  height: "10px",
                                  bgcolor: "white",
                                  borderRadius: "50%",
                                }}
                              ></Typography>
                              <Typography
                                sx={{
                                  width: "10px",
                                  height: "10px",
                                  bgcolor: "white",
                                  borderRadius: "50%",
                                }}
                              ></Typography>
                            </Typography>
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Typography>
                          <Typography
                            sx={{
                              fontSize: "18px",
                              fontWeight: "bold",
                              textAlign: "start",
                            }}
                          >
                            Well Furnished Apartment
                          </Typography>
                          <Typography sx={{ textAlign: "start" }}>
                            100 Smart Street La,USA
                          </Typography>
                          <Typography
                            sx={{ display: "flex", gap: "4%", pb: 1, pt: 1 }}
                          >
                            {" "}
                            <BedIcon /> 3 <BathtubIcon /> 1{" "}
                            <DirectionsCarIcon />2 <SpokeIcon />0{" "}
                          </Typography>

                          <Typography sx={{ textAlign: "start" }}>
                            Apartment on Rent | For Long Period:1-2 Years
                          </Typography>
                        </Typography>
                      </CardActions>
                    </Card>
                  </Item>
                </Grid>
              </Grid>
            </Item>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Item>
              <Box>
                <Maps1 />
                <Box>
                  <Typography
                    sx={{ width: "50px", height: "45px", bgcolor: "" }}
                  ></Typography>
                </Box>
              </Box>
            </Item>
          </Grid>
        </Grid>
        {/* <Button
          href="/maptwo"
          sx={{
            backgroundColor: "#484848",
            ":hover": { backgroundColor: "white", color: "black" },
          }}
          variant="contained"
          disableElevation
        >
          Disable elevation
        </Button> */}
      </Container>
    </Box>
  );
}
