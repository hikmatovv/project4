import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import divider from "../../../assets/divider.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default () => {
  return (
    <>
      <Container>
        <Grid container>
          <Grid
            mt="3%"
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
                fontSize: "34px",
                fontFamily: "Montserrat",
                fontWeight: 700,
                color: "#484848",
                width: "80%",
              }}
            >
              Discover More About Property Rental
            </Typography>
            <img
              src={divider}
              style={{ borderRadius: "30px", width: "200px" }}
            />
            <Typography
              mt="3%"
              color="#9A9A9A"
              sx={{ fontSize: "16px", fontWeight: 400 }}
            >
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga.x` `
            </Typography>
            <Grid width="100%" sx={{ display: "flex", flexDirection: "row" }}>
              <Typography sx={{ fontWeight: 700, fontSize: "15px" }}>
                Ask A Question
              </Typography>
              <Typography ml="5%" sx={{ fontWeight: 700, fontSize: "15px" }}>
                Ask A Question
              </Typography>
            </Grid>
            <Button
              sx={{
                color: "white",
                backgroundColor: "black",
                borderRadius: "33px",
                fontSize: "65%",
                height: "13%",
                width: "35%",
                fontWeight: 700,
                fontFamily: "Montserrat",
                border: 1,
              }}
            >
              Discover More{" "}
            </Button>
          </Grid>

          <Grid xs={12} sm={6} md={6} p="5% 5% 5% 5%">
            <Item sx={{ backgroundColor: "#EFF0F2" }}>
              <Box
                sx={{
                  paddingTop: "80%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              ></Box>
            </Item>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
