import TelegramIcon from "@mui/icons-material/Telegram";
import {
  Paper,
  Container,
  Grid,
  Box,
  Typography,
  Divider,
  InputBase,
  IconButton,
} from "@mui/material";
import React from "react";

const AllMassages = () => {
  return (
    <>
      <Paper elevation={4} sx={{ pt: "5%", mt: "5%",mb:"5%",pb:"8%" }}>
        <Container>
          <Grid container spacing={2}>
            <Grid lg={1} md={1} sm={2} xs={2}>
              <Box>
                <Box
                  sx={{
                    height: "100px",
                    width: "100px",
                    background: "#f3e5f5",
                    borderRadius: "100%",
                  }}
                ></Box>
                <Box
                  sx={{
                    height: "100px",
                    width: "100px",
                    background: "#f3e5f5",
                    borderRadius: "100%",
                    mt: "4%",
                  }}
                ></Box>
                <Box
                  sx={{
                    height: "100px",
                    width: "100px",
                    background: "#f3e5f5",
                    borderRadius: "100%",
                    mt: "4%",
                  }}
                ></Box>
              </Box>
            </Grid>
            <Grid
              lg={3}
              md={2}
              sm={4}
              xs={10}
              pl={{ lg: "2%", md: "4%", sm: "4%", xs: "7%" }}
              pt={{ lg: "2%", md: "2%", sm: "2%", xs: "3%" }}
            >
              <Typography variant="h6">John Doe</Typography>
              <Typography variant="body2">On 12 mar 2021</Typography>
              <Box mt={{ lg: "17%", md: "36%", sm: "25%", xs: "12%" }}>
                <Typography variant="h6">John Doe</Typography>
                <Typography variant="body2">On 12 mar 2021</Typography>
              </Box>
              <Box mt={{ lg: "20%", md: "40%", sm: "28%", xs: "15%" }}>
                <Typography variant="h6">John Doe</Typography>
                <Typography variant="body2">On 12 mar 2021</Typography>
              </Box>
            </Grid>
            <Grid lg={8} md={9} sm={6} xs={12}>
              <Box
                sx={{
                  height: "400px",
                  width: "100%",
                  background: " rgb(206, 196, 196)",
                  mb: "2%",
                }}
              >
                <Box
                  style={{
                    textAlign: "center",
                    paddingTop: "20%",
                    color: "#555",
                  }}
                >
                  <Typography variant="h2">Message body</Typography>
                </Box>
                <Box>
                  <Paper
                    component="form"
                    sx={{
                      p: "2px 4px",
                      display: "flex",
                      alignItems: "center",
                      width: "90%",
                      borderRadius: "50px",
                      pl:"5%",
                      ml:"2%",
                      mt:"10%"
                    }}
                  >
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="Type your message..."
                      inputProps={{ "aria-label": "search google maps" }}
                    />
                    <Divider
                      sx={{ height: 28, m: 0.5 }}
                    />
                    <IconButton
                      color="primary"
                      sx={{ p: "10px",backgroundColor:"gray",color:"white" }}
                    >
                      <TelegramIcon />
                    </IconButton>
                  </Paper>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </>
  );
};

export default AllMassages;
