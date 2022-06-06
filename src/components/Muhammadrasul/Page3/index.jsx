/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import Button from "@mui/material/Button";

const arr = [
  "Sanitizers",
  "Fire Throwers",
  "Dailly Cleaner",
  "Option",
  "Option",
  "Option",
  "Option",
  "Option",
];
export default () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Box
          sx={{
            marginTop: "10%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              width: "100%",
              fontFamily: "sans-serif",
              fontWeight: "700",
              fontSize: "36px",
              color: "#484848",
            }}
          >
            Add saftey available at your place.
          </Typography>
          <Grid
            container
            spacing={3}
            sx={{ paddingTop: "5%", justifyContent: "center" }}
          >
            {arr.map((value) => {
              return (
                <Grid
                  xs={12}
                  sm={5}
                  md={3.5}
                  lg={2.5}
                  sx={{
                    marginTop: "5%",
                    marginLeft: "3%",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#C2C6CC",
                      borderRadius: "5px",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        backgroundColor: "#EFF0F2",
                        borderRadius: "5px",
                        paddingTop: "14%",
                        paddingBottom: "16%",
                        paddingLeft: "10%",
                        paddingRight: "14%",
                        textAlign: "right",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "sans-serif",
                          color: "#4F4F4F",
                          fontSize: "18px",
                        }}
                      >
                        {value}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
          <Button
            href="/pro-tortikki"
            sx={{
              width: "10%",
              padding: "1%",
              borderRadius: "30px",
              backgroundColor: "#9A9A9A",
              border: "none",
              color: "#FCFCFC",
              marginLeft: "1%",
              marginTop: "5%",
              marginBottom: "10%",
              ":hover": { backgroundColor: "#EFF0F2", color: "#9A9A9A" },
            }}
          >
            Next
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
