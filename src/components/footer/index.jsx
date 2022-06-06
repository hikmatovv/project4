import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import TextField from "@mui/material/TextField";

import SendIcon from "@mui/icons-material/Send";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#EFF0F2",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

const first = ["About Us", "Legal Information", "Contact Us", "Blogs"];
const second = [
  "Find a Property",
  "How to Host",
  "Why Us",
  "FAQs",
  "Rental Guides",
];
const third = [
  "Phone: 12345678910",
  "Email: company@email.com",
  "Location: 100m Smart Street, LA, USA",
];

export default function AutoGrid() {
  return (
    <div style={{ backgroundColor: "gray" }}>
      <Box
        sx={{
          flexGrow: 1,
          marginTop: "30px",
          backgroundColor: "#EFF0F2",
          padding: "30px 0px 230px 0px",
        }}
      >
        <Grid container spacing={0} sx={{ justifyContent: "center" }}>
          <Grid
            container
            md={12}
            sm={12}
            xs={12}
            sx={{ justifyContent: "center" }}
          >
            <Grid item md={2} sm={12} xs={12}>
              <Item
                sx={{
                  fontWeight: "700",
                  fontSize: "18px",
                  lineHeight: "20px",
                  /* or 111% */

                  color: "#484848",
                }}
              >
                NEWSLETTER
              </Item>
              <Item
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  lineHeight: "20px",
                  /* or 111% */

                  color: "#484848",
                }}
              >
                Stay Upto Date
              </Item>
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <Item sx={{ textAlign: "right" }}>
                <Box
                  sx={{
                    width: 1500,
                    maxWidth: "100%",
                  }}
                >
                  <TextField
                    sx={{}}
                    fullWidth
                    label="Your Email..."
                    id="fullWidth"
                    placeholder="enter your email here..."
                  />
                </Box>
                <SendIcon
                  sx={{
                    fontSize: "26px",
                    backgroundColor: "#027DF9",
                    borderRadius: "50px",
                    color: "white",
                    padding: "20px",
                    position: "relative",
                    bottom: "60px",
                    // left: "30px",
                  }}
                />
              </Item>
            </Grid>
          </Grid>
          <Grid item md={3} sm={12} xs={12}>
            <Item
              sx={{
                fontStyle: "normal",
                fontWeight: "800",
                fontSize: "50px",
                lineHeight: "61px",

                color: "#484848",
              }}
            >
              LOGO
            </Item>
            <Item
              sx={{
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "20px",
                /* or 133% */

                color: "#9A9A9A",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do eiusmod tempor incididunt <br /> ut labore et dolore magna
              aliqua.{" "}
            </Item>
            <Item>button button</Item>
          </Grid>
          <Grid item md={2} sm={4} xs={12}>
            <Item
              sx={{
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "18px",
                lineHeight: "20px",
                /* or 111% */

                color: "#484848",
              }}
            >
              COMPANY
            </Item>
            {first.map((val) => {
              return (
                <Item
                  sx={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "15px",
                    lineHeight: "20px",
                    /* or 111% */

                    color: "#484848",
                  }}
                >
                  {val}
                </Item>
              );
            })}
          </Grid>
          <Grid item md={2} sm={4} xs={12}>
            <Item
              sx={{
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "18px",
                lineHeight: "20px",
                /* or 111% */

                color: "#484848",
              }}
            >
              HELP CENTER
            </Item>
            {second.map((val) => {
              return (
                <Item
                  sx={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "15px",
                    lineHeight: "20px",
                    /* or 111% */

                    color: "#484848",
                  }}
                >
                  {val}
                </Item>
              );
            })}
          </Grid>
          <Grid item md={2} sm={4} xs={12}>
            <Item
              sx={{
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "18px",
                lineHeight: "20px",
                /* or 111% */

                color: "#484848",
              }}
            >
              CONTACT INFO
            </Item>
            {third.map((val) => {
              return (
                <Item
                  sx={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "15px",
                    lineHeight: "20px",
                    /* or 111% */

                    color: "#484848",
                  }}
                >
                  {val}
                </Item>
              );
            })}
          </Grid>
        </Grid>
      </Box>
      <Grid
        item
        md={9}
        sm={12}
        xs={12}
        sx={{
          display: { md: "flex", sm: "flex", xs: "block" },
          justifyContent: "space-between",
          backgroundColor: "#EFF0F2",
          padding: "36px 0px 36px 0px",
          marginTop: "2px",
        }}
      >
        <Item
          sx={{
            fontWeight: "600",
            fontSize: "16px",
            lineHeight: "20px",
            textAlign: "center",
            color: "#484848",
          }}
        >
          © 2022 thecreation.design | All rights raserved
        </Item>
        <Item
          sx={{
            fontWeight: "600",
            fontSize: "16px",
            lineHeight: "20px",
            textAlign: "center",
            color: "#484848",
          }}
        >
          Created with love by thecreation.design
        </Item>
      </Grid>
    </div>
  );
}
