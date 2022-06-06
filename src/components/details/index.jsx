import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PetsIcon from "@mui/icons-material/Pets";
import Container from "@mui/material/Container";
import DomainIcon from "@mui/icons-material/Domain";
import PhoneIcon from "@mui/icons-material/Phone";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import TvIcon from "@mui/icons-material/Tv";
import WifiIcon from "@mui/icons-material/Wifi";
import BalconyIcon from "@mui/icons-material/Balcony";
import BatterySaverIcon from "@mui/icons-material/BatterySaver";
import Rating from "@mui/material/Rating";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import StarIcon from "@mui/icons-material/Star";
import MAP from "./map/index";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

export default function RowAndColumnSpacing() {
  const [value, setValue] = React.useState(5);

  return (
    <div>
      <Box sx={{ width: "100%", pt: 5, pb: 4 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Item>
              <Box
                sx={{ width: "100%", bgcolor: "#C2C6CC", borderRadius: "10px" }}
              >
                <Box sx={{ pt: 45, ml: 5, pb: 5 }}>
                  <Typography sx={{ display: "flex", gap: "5%" }}>
                    <Typography
                      sx={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                        bgcolor: "white",
                      }}
                    ></Typography>
                    <Typography sx={{ textAlign: "start", pt: 1 }}>
                      <Typography sx={{ fontSize: "12px" }}>
                        Listed By:
                      </Typography>
                      <Typography
                        color="black"
                        sx={{ fontWeight: "bold", fontSize: "18px" }}
                      >
                        John Doberman
                      </Typography>
                      <Typography sx={{ fontSize: "16px" }}>
                        For: $1000 - $5000
                      </Typography>
                    </Typography>
                  </Typography>
                </Box>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Item>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4} md={6} ld={6}>
                  <Item>
                    <Box
                      sx={{
                        width: "100%",
                        height: "220px",
                        bgcolor: "#C2C6CC",
                        borderRadius: "10px",
                      }}
                    ></Box>
                  </Item>
                </Grid>
                <Grid item xs={12} sm={4} md={6} ld={6}>
                  <Item>
                    <Box
                      sx={{
                        width: "100%",
                        height: "220px",
                        bgcolor: "#C2C6CC",
                        borderRadius: "10px",
                      }}
                    ></Box>
                  </Item>
                </Grid>
                <Grid item xs={12} sm={4} md={6} ld={6}>
                  <Item>
                    <Box
                      sx={{
                        width: "100%",
                        height: "220px",
                        bgcolor: "#C2C6CC",
                        borderRadius: "10px",
                      }}
                    ></Box>
                  </Item>
                </Grid>
                <Grid item xs={12} sm={4} md={6} ld={6}>
                  <Item>
                    <Box
                      sx={{
                        width: "100%",
                        height: "220px",
                        bgcolor: "#C2C6CC",
                        borderRadius: "10px",
                      }}
                    >
                      <Typography
                        sx={{
                          display: "flex",
                          gap: "5%",
                          pt: 8,
                          justifyContent: "center",
                        }}
                      >
                        <Typography
                          variant="h2"
                          sx={{ color: "#484848", fontWeight: "bold" }}
                        >
                          +2
                        </Typography>
                        <Typography sx={{}}>
                          <Typography
                            color="#484848"
                            sx={{ fontSize: "14px", pt: 2, textAlign: "start" }}
                          >
                            More
                          </Typography>
                          <Typography
                            color="#484848"
                            sx={{ fontSize: "18px", fontWeight: "bold" }}
                          >
                            Photos
                          </Typography>
                        </Typography>
                      </Typography>
                    </Box>
                  </Item>
                </Grid>
              </Grid>
            </Item>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Container maxWidth="xl">
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12} sm={12} md={7} lg={7} sx={{ pb: 3 }}>
              <Item>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={12} sm={12} lg={12}>
                    <Item>
                      <Box sx={{ display: "", pb: 8 }}>
                        <Typography sx={{ display: "flex", gap: "" }}>
                          <Typography>
                            <Typography
                              variant="h6"
                              sx={{
                                textAlign: "start",
                                fontWeight: "bold",
                                color: "#484848",
                              }}
                            >
                              Well Furnished Apartment
                            </Typography>
                            <Typography sx={{ textAlign: "start" }}>
                              100 Smart Street LA, USA
                            </Typography>
                          </Typography>
                        </Typography>
                        <Typography sx={{ textAlign: "end", mt: "-8%" }}>
                          <FavoriteBorderIcon sx={{ pl: 2 }} />
                          <ShareIcon />
                        </Typography>
                      </Box>
                    </Item>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Item sx={{ backgroundColor: "#EFF0F2" }}>
                      <Typography>
                        <BedIcon sx={{ width: "50%", height: "50%" }} />
                        <Typography
                          sx={{ fontWeight: "bold", color: "#484848" }}
                        >
                          3 Bedrooms
                        </Typography>
                      </Typography>
                    </Item>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Item sx={{ backgroundColor: "#EFF0F2" }}>
                      <Typography>
                        <BathtubIcon sx={{ width: "50%", height: "50%" }} />
                        <Typography
                          sx={{ fontWeight: "bold", color: "#484848" }}
                        >
                          {" "}
                          2 Bathrooms
                        </Typography>
                      </Typography>
                    </Item>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Item sx={{ backgroundColor: "#EFF0F2" }}>
                      <Typography>
                        <DirectionsCarIcon
                          sx={{ width: "50%", height: "50%" }}
                        />
                        <Typography
                          sx={{ fontWeight: "bold", color: "#484848" }}
                        >
                          {" "}
                          3 Cars / 2 Bikes
                        </Typography>
                      </Typography>
                    </Item>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Item sx={{ backgroundColor: "#EFF0F2" }}>
                      <Typography>
                        <PetsIcon sx={{ width: "50%", height: "50%" }} />
                        <Typography
                          sx={{ fontWeight: "bold", color: "#484848" }}
                        >
                          {" "}
                          0 Pets Allowed
                        </Typography>
                      </Typography>
                    </Item>
                  </Grid>

                  <Grid item xs={12} sm={12} lg={12} md={12}>
                    <Item>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: "bold",
                          textAlign: "start",
                          color: "#484848",
                        }}
                      >
                        Apartament Description
                      </Typography>{" "}
                      <br />
                      <Typography sx={{ textAlign: "start" }}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Optio a odit excepturi. Accusamus temporibus,
                        cupiditate, eveniet atque ullam vel, ducimus porro eaque
                        nulla doloremque dicta quasi numquam. Itaque dolorum
                        quo?
                      </Typography>{" "}
                      <br />
                      <Typography sx={{ textAlign: "start" }}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Autem, aliquid omnis odit consequuntur error
                        aperiam ipsam officiis deserunt praesentium harum modi
                        quis reprehenderit non dolore reiciendis, rerum quidem
                        fugit qui.
                      </Typography>
                    </Item>
                  </Grid>
                </Grid>
              </Item>
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5}>
              <Item sx={{ pt: 10 }}>
                <Box>
                  <Container maxWidth="xl">
                    <Typography
                      color="#484848"
                      sx={{
                        textAlign: "start",
                        fontWeight: "bold",
                        fontSize: "22px",
                      }}
                    >
                      $ 1000 - $ 2000
                    </Typography>
                    <br />
                    <Typography
                      sx={{ borderBottom: "1px solid #E0E2E6" }}
                    ></Typography>
                    <br />
                    <Typography sx={{ textAlign: "start" }}>
                      Short Period: $1000
                    </Typography>
                    <Typography sx={{ textAlign: "start" }}>
                      Medium Period: $2000
                    </Typography>
                    <Typography sx={{ textAlign: "start" }}>
                      Long Period: $2000
                    </Typography>{" "}
                    <br />
                    <br />
                    <br />
                    <Typography
                      variant="button"
                      sx={{
                        border: "1px solid #484848",
                        bgcolor: "#484848",
                        color: "white",
                        padding: "3%",
                        pl: "10%",
                        pr: "10%",
                        borderRadius: "30px",
                      }}
                    >
                      {" "}
                      Reserve Now
                    </Typography>
                    <br />
                    <br />
                    <br />
                    <Typography sx={{ display: "flex", gap: "3%" }}>
                      <DomainIcon />
                      <Typography color="#484848" sx={{ fontWeight: "bold" }}>
                        Property Injury
                      </Typography>
                      <PhoneIcon />
                      <Typography color="#484848" sx={{ fontWeight: "bold" }}>
                        Contact Host
                      </Typography>
                    </Typography>{" "}
                    <br />
                    <br />
                    <br />
                  </Container>
                </Box>
              </Item>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ pt: 5 }}>
        <Container maxWidth="xl">
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Item>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} lg={6} md={6}>
                    <Item>
                      <Typography sx={{ display: "flex", gap: "5%" }}>
                        <RestaurantMenuIcon />
                        <Typography>Kitchen</Typography>
                      </Typography>{" "}
                      <br />
                      <Typography sx={{ display: "flex", gap: "5%" }}>
                        <AcUnitIcon />
                        <Typography>Air Conditioner</Typography>
                      </Typography>{" "}
                      <br />
                      <Typography sx={{ display: "flex", gap: "5%" }}>
                        <LocalLaundryServiceIcon />
                        <Typography>Washer</Typography>
                      </Typography>
                    </Item>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={6} md={6} sx={{ pb: 3 }}>
                    <Item>
                      <Typography sx={{ display: "flex", gap: "5%" }}>
                        <TvIcon />
                        <Typography>Television with Netflex</Typography>
                      </Typography>{" "}
                      <br />
                      <Typography sx={{ display: "flex", gap: "5%" }}>
                        <WifiIcon />
                        <Typography>Free Wireless Internet</Typography>
                      </Typography>{" "}
                      <br />
                      <Typography sx={{ display: "flex", gap: "5%" }}>
                        <BalconyIcon />
                        <Typography>Balcony or Patio</Typography>
                      </Typography>
                    </Item>
                  </Grid>
                </Grid>
              </Item>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ pt: 4, pb: 5 }}>
        <Container maxWidth="xl">
          <Typography sx={{ textAlign: "start" }}>
            <Typography
              variant="button"
              sx={{
                border: "1px solid #484848",
                padding: "1%",
                borderRadius: "5px",
              }}
            >
              show all 10 aminetes
            </Typography>
          </Typography>{" "}
          <br />
          <br />
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Item>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} lg={6} md={6}>
                    <Item>
                      <Typography sx={{ display: "flex", gap: "5%" }}>
                        <BatterySaverIcon />
                        <Typography>Daily Cleaning</Typography>
                      </Typography>{" "}
                      <br />
                      <Typography sx={{ display: "flex", gap: "5%" }}>
                        <BatterySaverIcon />
                        <Typography>Dezenfictions </Typography>
                      </Typography>
                    </Item>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={6} md={6}>
                    <Item>
                      <Typography sx={{ display: "flex", gap: "5%" }}>
                        <BatterySaverIcon />
                        <Typography>Fire Extinguishers</Typography>
                      </Typography>{" "}
                      <br />
                      <Typography sx={{ display: "flex", gap: "5%" }}>
                        <BatterySaverIcon />
                        <Typography>Smoke Detectors</Typography>
                      </Typography>
                    </Item>
                  </Grid>
                </Grid>
              </Item>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="xl">
        <Box sx={{ pt: 5, pb: 5 }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12} sm={12} md={8} lg={8}>
              <Item>
                <MAP />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Box sx={{ pb: 5 }}>
        <Container maxWidth="xl">
          <Typography
            sx={{
              fontWeight: "bold",
              textAlign: "start",
              fontSize: "22px",
              color: "#484848",
            }}
          >
            Nearby Services
          </Typography>
          <br />
          <br />

          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12} sm={12} md={8} lg={8}>
              <Item>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} lg={4} md={4}>
                    <Item sx={{ boxShadow: "0px 0px 0px 1px" }}>
                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          color: "#484848",
                        }}
                      >
                        Grill Risto & Bar
                      </Typography>
                      <Typography>100 Metrs away </Typography>
                      <Rating
                        name="read-only"
                        value={value}
                        readOnly
                        sx={{ color: "#484848" }}
                      />
                    </Item>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={4} md={4}>
                    <Item sx={{ boxShadow: "0px 0px 0px 1px" }}>
                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          color: "#484848",
                        }}
                      >
                        Grill Risto & Bar
                      </Typography>
                      <Typography>100 Metrs away </Typography>
                      <Rating
                        name="read-only"
                        value={value}
                        readOnly
                        sx={{ color: "#484848" }}
                      />
                    </Item>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={4} md={4}>
                    <Item sx={{ boxShadow: "0px 0px 0px 1px" }}>
                      <Typography sx={{ display: "flex", gap: "23%" }}>
                        <Typography>
                          <Typography
                            sx={{
                              fontSize: "16px",
                              fontWeight: "bold",
                              color: "#484848",
                            }}
                          >
                            Grill Risto & Bar
                          </Typography>
                          <Typography>100 Metrs away </Typography>
                          <Rating
                            name="read-only"
                            value={value}
                            readOnly
                            sx={{ color: "#484848" }}
                          />
                        </Typography>
                        <Typography
                          sx={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                            bgcolor: "#9A9A9A",
                            textAlign: "center",
                            justifyContent: "center",
                          }}
                        >
                          {" "}
                          <ArrowRightAltIcon
                            sx={{ color: "white", mt: "25%" }}
                          />
                        </Typography>
                      </Typography>
                    </Item>
                  </Grid>
                </Grid>
              </Item>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ pb: 8 }}>
        <Container maxWidth="xl">
          <Typography sx={{ textAlign: "start" }}>
            <Typography
              variant="button"
              sx={{
                fontWeight: "bold",
                color: "white",
                border: "1px solid #9A9A9A",
                bgcolor: "#9A9A9A",
                borderRadius: "20px",
                padding: "1.5%",
              }}
            >
              show on map
            </Typography>
            <br />
            <br />
          </Typography>{" "}
          <br />
          <br />
          <br />
          <br />
          <Typography
            sx={{ color: "#484848", fontWeight: "bold", textAlign: "start" }}
          >
            Reviews <StarIcon /> 5.0
          </Typography>
          <br />
          <br />
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12} sm={12} md={8} lg={8}>
              <Item>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} lg={6} md={6}>
                    <Item>
                      <Typography sx={{ display: "flex", gap: "5%" }}>
                        <Typography>Aminetes</Typography>
                        <Typography
                          sx={{
                            border: "1px solid black",
                            bgcolor: "#484848",
                            width: "100px",
                            height: "0.1px",
                            mt: "3%",
                          }}
                        ></Typography>
                        <Typography>5.0</Typography>
                      </Typography>{" "}
                      <br />
                      <Typography sx={{ display: "flex", gap: "5%" }}>
                        <Typography>Comunication </Typography>
                        <Typography
                          sx={{
                            border: "1px solid black",
                            bgcolor: "#484848",
                            width: "100px",
                            height: "0.1px",
                            mt: "3%",
                          }}
                        ></Typography>
                        <Typography>5.0</Typography>
                      </Typography>{" "}
                      <br />
                      <Typography sx={{ display: "flex", gap: "5%" }}>
                        <Typography>Value for Money</Typography>
                        <Typography
                          sx={{
                            border: "1px solid black",
                            bgcolor: "#484848",
                            width: "100px",
                            height: "0.1px",
                            mt: "3%",
                          }}
                        ></Typography>
                        <Typography>5.0</Typography>
                      </Typography>{" "}
                      <br />
                    </Item>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={6} md={6}>
                    <Item>
                      <Typography sx={{ display: "flex", gap: "5%" }}>
                        <Typography>Hygiene</Typography>
                        <Typography
                          sx={{
                            border: "1px solid black",
                            bgcolor: "#484848",
                            width: "100px",
                            height: "0.1px",
                            mt: "3%",
                          }}
                        ></Typography>
                        <Typography>5.0</Typography>
                      </Typography>{" "}
                      <br />
                      <Typography sx={{ display: "flex", gap: "5%" }}>
                        <Typography sx={{ textAlign: "end" }}>
                          Location of Property
                        </Typography>
                        <Typography
                          sx={{
                            border: "1px solid black",
                            bgcolor: "#484848",
                            width: "100px",
                            height: "0.1px",
                            mt: "3%",
                          }}
                        ></Typography>
                        <Typography>5.0</Typography>
                      </Typography>{" "}
                      <br />
                    </Item>
                  </Grid>
                </Grid>

                <br />
                <br />
                <br />
                <br />

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} lg={6} md={6}>
                    <Item>
                      <Typography sx={{ display: "flex", gap: "5%", pb: 2 }}>
                        <Typography
                          sx={{
                            height: "80px",
                            width: "80px",
                            borderRadius: "50%",
                            bgcolor: "#9A9A9A",
                          }}
                        >
                          {" "}
                        </Typography>
                        <Typography>
                          <Typography
                            sx={{
                              fontSize: "16px",
                              fontWeight: "bold",
                              color: "#484848",
                              pt: 2,
                            }}
                          >
                            John Doberman
                          </Typography>
                          <Typography sx={{ textAlign: "start" }}>
                            Mar 12 2020
                          </Typography>
                        </Typography>{" "}
                        <br />
                      </Typography>
                      <Typography sx={{ textAlign: "start" }}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit
                        assumenda cum consectetur dolore assumenda cum!
                      </Typography>
                    </Item>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={6} md={6}>
                    <Item>
                      <Typography sx={{ display: "flex", gap: "5%", pb: 2 }}>
                        <Typography
                          sx={{
                            height: "80px",
                            width: "80px",
                            borderRadius: "50%",
                            bgcolor: "#9A9A9A",
                          }}
                        >
                          {" "}
                        </Typography>
                        <Typography>
                          <Typography
                            sx={{
                              fontSize: "16px",
                              fontWeight: "bold",
                              color: "#484848",
                              pt: 2,
                            }}
                          >
                            John Doberman
                          </Typography>
                          <Typography sx={{ textAlign: "start" }}>
                            Mar 12 2020
                          </Typography>
                        </Typography>{" "}
                        <br />
                      </Typography>
                      <Typography sx={{ textAlign: "start" }}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit
                        assumenda cum consectetur dolore assumenda cum!
                      </Typography>
                    </Item>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={6} md={6}>
                    <Item>
                      <Typography sx={{ display: "flex", gap: "5%", pb: 2 }}>
                        <Typography
                          sx={{
                            height: "80px",
                            width: "80px",
                            borderRadius: "50%",
                            bgcolor: "#9A9A9A",
                          }}
                        >
                          {" "}
                        </Typography>
                        <Typography>
                          <Typography
                            sx={{
                              fontSize: "16px",
                              fontWeight: "bold",
                              color: "#484848",
                              pt: 2,
                            }}
                          >
                            John Doberman
                          </Typography>
                          <Typography sx={{ textAlign: "start" }}>
                            Mar 12 2020
                          </Typography>
                        </Typography>{" "}
                        <br />
                      </Typography>
                      <Typography sx={{ textAlign: "start" }}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit
                        assumenda cum consectetur dolore assumenda cum!
                      </Typography>
                    </Item>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={6} md={6}>
                    <Item>
                      <Typography sx={{ display: "flex", gap: "5%", pb: 2 }}>
                        <Typography
                          sx={{
                            height: "80px",
                            width: "80px",
                            borderRadius: "50%",
                            bgcolor: "#9A9A9A",
                          }}
                        >
                          {" "}
                        </Typography>
                        <Typography>
                          <Typography
                            sx={{
                              fontSize: "16px",
                              fontWeight: "bold",
                              color: "#484848",
                              pt: 2,
                            }}
                          >
                            John Doberman
                          </Typography>
                          <Typography sx={{ textAlign: "start" }}>
                            Mar 12 2020
                          </Typography>
                        </Typography>{" "}
                        <br />
                      </Typography>
                      <Typography sx={{ textAlign: "start" }}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit
                        assumenda cum consectetur dolore assumenda cum!
                      </Typography>
                    </Item>
                  </Grid>
                </Grid>
              </Item>
            </Grid>
          </Grid>
          <br />
          <br />
          <br />
          <Typography sx={{ textAlign: "start" }}>
            <Typography
              variant="button"
              sx={{
                border: "1px solid black",
                padding: "2%",
                borderRadius: "10px",
              }}
            >
              Show all 100 review
            </Typography>
          </Typography>
        </Container>
      </Box>
    </div>
  );
}
