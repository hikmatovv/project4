/* eslint-disable import/no-anonymous-default-export */
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
// import Img from "../../assets/Vector.png";
import CloseIcon from "@mui/icons-material/Close";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "left",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

export default () => {
  return (
    <div>
      <Box
        sx={{ flexGrow: 1, width: "90%", marginLeft: "10%", marginTop: "60px" }}
      >
        <Grid container spacing={0}>
          <Grid item xs={10}>
            <Item2
              sx={{
                backgroundColor: "#E8EAEC",
                borderBottomLeftRadius: "0px",
                borderBottomRightRadius: "0px",
              }}
            >
              <Item2 sx={{ background: "none" }}>
                <b>All Notifications</b>{" "}
              </Item2>
            </Item2>
          </Grid>
          <Grid item xs={10}>
            <Item2
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Item2>
                <b>Invite Your Friends!</b> <p>12 Mar 2021</p>{" "}
              </Item2>
              <Item2>
                {/* <img src={Img} alt="" /> */}
                <CloseIcon />
              </Item2>
            </Item2>
          </Grid>
          <Grid item xs={10}>
            <Item2
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Item2>
                <b>Connect to your facebook account.</b> <p>12 Mar 2021</p>{" "}
              </Item2>
              <Item2>
                {/* <img src={Img} alt="" /> */}
                <CloseIcon />
              </Item2>
            </Item2>
          </Grid>
          <Grid item xs={10}>
            <Item2
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Item2>
                <b>New privacy alert!</b> <p>12 Mar 2021</p>{" "}
              </Item2>
              <Item2>
                {/* <img src={Img} alt="" /> */}
                <CloseIcon />
              </Item2>
            </Item2>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
