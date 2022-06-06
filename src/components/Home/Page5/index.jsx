import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import divider from "../../../assets/divider.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarRateIcon from "@mui/icons-material/StarRate";
import CircleIcon from "@mui/icons-material/Circle";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import BathtubIcon from "@mui/icons-material/Bathtub";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const data = [
  {
    text: "$ 1000 - 5000 USD ",
    span: "Well Furnished Apartment",
  },
  {
    text: "$ 1000 - 5000 USD ",
    span: "Blue Door Villa Modern",
  },
  {
    text: "$ 1000 - 5000 USD ",
    span: "Blue Door Villa Modern",
  },
  {
    text: "$ 1000 - 5000 USD ",
    span: "Blue Door Villa Modern",
  },
  {
    text: "$ 1000 - 5000 USD ",
    span: "Blue Door Villa Modern",
  },

  {
    text: "$ 1000 - 5000 USD",
    span: "Beach House Apartment",
  },
];
const Card = data.map((item) => (
  <Grid
    item
    xs={12}
    sm={6}
    md={4}
    sx={{ display: "flex", flexDirection: "column" }}
  >
    <Item sx={{ backgroundColor: "#EFF0F2" }}>
      <Box sx={{ textAlign: "right" }}>
        <FavoriteBorderIcon />
      </Box>

      <Box
        sx={{
          paddingTop: "60%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{ fontSize: "13px", fontWeight: 700, color: "#9A9A9A" }}
        >
          {item.text}
        </Typography>
        <Typography sx={{ color: "#FFFFFF" }}>
          <CircleIcon sx={{ fontSize: "17px" }} />
          <CircleIcon sx={{ fontSize: "17px" }} />
          <CircleIcon sx={{ fontSize: "17px" }} />
          <CircleIcon sx={{ fontSize: "17px" }} />
        </Typography>
      </Box>
    </Item>
    <Typography
      mt="2%"
      color="#484848"
      sx={{ fontSize: "18px", fontWeight: 700 }}
    >
      {item.span}
    </Typography>
    <Typography sx={{ fontSize: "14px", fontWeight: 500, color: "#9A9A9A" }}>
      100 Smart Street, LA, USA{" "}
    </Typography>

    <Grid sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <Typography>
        <DirectionsCarIcon sx={{ color: "#484848" }} />
      </Typography>
      <Typography ml="2%" sx={{ color: "#484848" }}>
        3
      </Typography>
      <Typography ml="2%">
        <BathtubIcon sx={{ color: "#484848" }} />
      </Typography>
      <Typography ml="2%" sx={{ color: "#484848" }}>
        1
      </Typography>

      <Typography ml="2%">
        <DirectionsCarIcon sx={{ color: "#484848" }} />
      </Typography>
      <Typography ml="2%" sx={{ color: "#484848" }}>
        2
      </Typography>
      <Typography ml="2%">
        <ShoppingBasketIcon sx={{ color: "#484848" }} />
      </Typography>
      <Typography ml="2%" sx={{ color: "#484848" }}>
        0
      </Typography>
    </Grid>
  </Grid>
));

export default function AutoGrid({ title }) {
  return (
    <>
      <Grid>
        <Container>
          <Grid mt="5%" sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              sx={{
                fontSize: "34px",
                fontFamily: "Montserrat",
                fontWeight: 700,
                color: "#484848",
                width: "30%",
              }}
            >
              {title}
            </Typography>
            <img
              src={divider}
              style={{ borderRadius: "30px", width: "200px" }}
            />
          </Grid>

          <Box mt="5%" sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
              {Card}
            </Grid>
            {/* <icon /> */}
          </Box>
        </Container>
      </Grid>
    </>
  );
}
