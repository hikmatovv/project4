import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "#484848",
  boxShadow: "none",
}));

export default () => {
  const [count, setCount] = useState(0);
  const Plus = () => {
    if (count >= 0) {
      setCount(count + 1);
    }
  };
  const Minus = () => {
    if (count != 0) {
      setCount(count - 1);
    }
  };
  const [count2, setCount2] = useState(0);
  const Plus2 = () => {
    if (count2 >= 0) {
      setCount2(count2 + 1);
    }
  };
  const Minus2 = () => {
    if (count2 != 0) {
      setCount2(count2 - 1);
    }
  };
  const [count3, setCount3] = useState(0);
  const Plus3 = () => {
    if (count3 >= 0) {
      setCount3(count3 + 1);
    }
  };
  const Minus3 = () => {
    if (count3 != 0) {
      setCount3(count3 - 1);
    }
  };
  return (
    <div>
      <Box sx={{ width: "90%", marginLeft: "5%", marginTop: "4%" }}>
        <Grid container>
          <Grid xs={12}>
            <Item
              sx={{ fontSize: "200%", fontWeight: "800", textAlign: "left" }}
            >
              Add a short description of your place.
            </Item>
          </Grid>
          <Grid md={3} sm={6} xs={12} sx={{ marginTop: "3%" }}>
            <Item>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                onClick={Minus}
                sx={{
                  fontSize: "40px",
                  padding: "0px 20px 0px 20px",
                  backgroundColor: "#E8EAEC",
                  color: "black",
                }}
              >
                -
              </IconButton>
              <span
                style={{
                  marginLeft: "15px",
                  marginRight: "15px",
                  fontWeight: "600",
                }}
              >
                {count}
              </span>
              <span
                style={{
                  marginLeft: "15px",
                  marginRight: "15px",
                  fontWeight: "600",
                }}
              >
                {" "}
                Bedrooms{" "}
              </span>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                onClick={Plus}
                sx={{
                  fontSize: "40px",
                  padding: "0px 20px 0px 20px",
                  backgroundColor: "#E8EAEC",
                  color: "black",
                }}
              >
                +
              </IconButton>
            </Item>
          </Grid>
          <Grid md={3} sm={6} xs={12} sx={{ marginTop: "3%" }}>
            <Item>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                onClick={Minus2}
                sx={{
                  fontSize: "40px",
                  padding: "0px 20px 0px 20px",
                  backgroundColor: "#E8EAEC",
                  color: "black",
                }}
              >
                -
              </IconButton>
              <span
                style={{
                  marginLeft: "15px",
                  marginRight: "15px",
                  fontWeight: "600",
                }}
              >
                {count2}
              </span>
              <span
                style={{
                  marginLeft: "15px",
                  marginRight: "15px",
                  fontWeight: "600",
                }}
              >
                {" "}
                Bathrooms{" "}
              </span>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                onClick={Plus2}
                sx={{
                  fontSize: "40px",
                  padding: "0px 20px 0px 20px",
                  backgroundColor: "#E8EAEC",
                  color: "black",
                }}
              >
                +
              </IconButton>
            </Item>
          </Grid>
          <Grid md={3} sm={6} xs={12} sx={{ marginTop: "3%" }}>
            <Item>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                onClick={Minus3}
                sx={{
                  fontSize: "40px",
                  padding: "0px 20px 0px 20px",
                  backgroundColor: "#E8EAEC",
                  color: "black",
                }}
              >
                -
              </IconButton>
              <span
                style={{
                  marginLeft: "15px",
                  marginRight: "15px",
                  fontWeight: "600",
                }}
              >
                {count3}
              </span>
              <span
                style={{
                  marginLeft: "15px",
                  marginRight: "15px",
                  fontWeight: "600",
                }}
              >
                {" "}
                Parking{" "}
              </span>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                onClick={Plus3}
                sx={{
                  fontSize: "40px",
                  padding: "0px 20px 0px 20px",
                  backgroundColor: "#E8EAEC",
                  color: "black",
                }}
              >
                +
              </IconButton>
            </Item>
          </Grid>
        </Grid>
        <Item>
          <Grid container>
            <Grid item xs={6} sx={{ textAlign: "left", marginTop: "3%" }}>
              <Button
                href="/propertiyuch"
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
    </div>
  );
};
