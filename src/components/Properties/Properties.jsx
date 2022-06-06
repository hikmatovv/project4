/* eslint-disable import/no-anonymous-default-export */
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import React from "react";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "#484848",
  boxShadow: "none",
}));

export default () => {
  return (
    <div>
      <Box sx={{ width: "90%", marginLeft: "5%", marginTop: "4%" }}>
        <Grid container>
          <Grid xs={12}>
            <Item
              sx={{ fontSize: "200%", fontWeight: "800", textAlign: "left" }}
            >
              Listed Properties
            </Item>
          </Grid>
          <Grid md={4} sm={6} xs={12}>
            <Item>
              <Paper
                elevation={3}
                sx={{
                  width: "100%",
                  height: "300px",
                  backgroundColor: " #9A9A9A",
                }}
              >
                <div style={{ textAlign: "right" }}>
                  <Button sx={{ color: "white" }}>x</Button>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    height: "80%",
                  }}
                >
                  <div>
                    <div
                      style={{
                        width: "100%",
                        textAlign: "left",
                        paddingLeft: "20px",
                        color: "white",
                        fontSize: "16px",
                        fontWeight: "700",
                      }}
                    >
                      {" "}
                      Family Apartment{" "}
                    </div>
                    <div
                      style={{
                        width: "100%",
                        textAlign: "left",
                        paddingLeft: "20px",
                        color: "white",
                        fontSize: "12px",
                        fontWeight: "500",
                      }}
                    >
                      {" "}
                      100 Smart Street, LA, USA{" "}
                    </div>
                  </div>
                </div>
              </Paper>
            </Item>
            <Item>
              <Grid container>
                <Grid item xs={6}>
                  <Button
                    href="/Propertibir"
                    variant="contained"
                    sx={{
                      color: "white",
                      borderRadius: "20px",
                      backgroundColor: " #9A9A9A",
                    }}
                  >
                    Modify
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    sx={{
                      color: "black",
                      borderRadius: "20px",
                      backgroundColor: " #E8EAEC",
                    }}
                  >
                    Remove
                  </Button>
                </Grid>
              </Grid>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
