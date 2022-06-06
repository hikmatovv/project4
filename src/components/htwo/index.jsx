import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CircleIcon from "@mui/icons-material/Circle";
import ListIcon from "@mui/icons-material/List";
import Button from "@mui/material/Button";
import nuqta from "../../assets/nuqta.png";

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
  </Grid>
));

export default function AutoGrid({}) {
  return (
    <>
      <Grid>
        <Container>
          <Grid
            mt="5%"
            container
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Grid
              xs={12}
              sm={6}
              md={6}
              width="100%"
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <Typography>Apartments</Typography>
              <Typography
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <img src={nuqta} />
              </Typography>
              <Typography>Houses</Typography>
              <Typography
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <img src={nuqta} />
              </Typography>
              <Typography>Villas</Typography>
              <Typography
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <img src={nuqta} />
              </Typography>
              <Typography>Villas</Typography>
              <Typography
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <img src={nuqta} />
              </Typography>
              <Typography>More</Typography>
            </Grid>

            <Grid xs={12} sm={6} md={6} textAlign="right">
              <Button
                href="/properties1"
                variant="outlined"
                sx={{ borderRadius: "20px ", border: "1 gray", color: "black" }}
              >
                <ListIcon /> Filters
              </Button>
            </Grid>
          </Grid>

          <Box mt="3%" sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
              {Card}
            </Grid>
          </Box>
        </Container>
      </Grid>
    </>
  );
}
