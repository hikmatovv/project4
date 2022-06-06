import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import ArtTrackIcon from "@mui/icons-material/ArtTrack";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Basiccard() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Container>
        <Paper elevation={3} sx={{ p: "2%", pl: "6%", mt: "10%", marginBottom: '14%' }}>
          <Box>
            <Typography variant="h5">Reservations</Typography>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Upcoming" {...a11yProps(0)} />
                <Tab label="Past" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Grid container spacing={2}>
                <Grid lg={1.5} md={2} sm={4} xs={12}>
                  <Box>
                    <Box
                      sx={{
                        height: "100px",
                        width: "100px",
                        background: "#9A9A9A",
                      }}
                    ></Box>
                  </Box>
                </Grid>
                <Grid lg={6} md={6} sm={8} xs={12}>
                  <Typography variant="h6">
                    Fully furmished appartment
                  </Typography>
                  <Typography variant="body2">
                  <span style={{paddingRight:"10px"}}>chake me <span style={{ color: "#999" }}>12 may 2021</span></span>
                    <span style={{paddingRight:"10px"}}>Long <span style={{ color: "#999" }}> (2, 5)</span>{" "}</span>
                    <span style={{paddingRight:"10px"}}>Guses <span style={{ color: "#999" }}> 4 adults</span></span>
                  </Typography>
                  <Typography variant="h6">$ 1000 USD</Typography>
                </Grid>
                <Grid lg={4.5} md={4} sm={12} xs={12}>
                  <Stack
                    direction="row"
                    spacing={1} 
                    sx={{ pb: "2%", pt: "1%" }}
                  >
                    <Chip
                      label="Cancel Reservation"
                      size="large"
                      style={{
                        background: "#9A9A9A",
                        height: "35px",
                        color: 'white'
                      }}
                    />
                    
                  </Stack>
                </Grid>
              </Grid>
              <Grid container spacing={2} sx={{ pt: "9%" }}>
                <Grid lg={1.5} md={2} sm={4} xs={12}>
                  <Box>
                    <Box
                      sx={{
                        height: "100px",
                        width: "100px",
                        background: "#9A9A9A",
                      }}
                    ></Box>
                  </Box>
                </Grid>
                <Grid lg={6} md={6} sm={8} xs={12}>
                  <Typography variant="h6">
                    Fully furmished appartment
                  </Typography>
                  <Typography variant="body2"sx={{display:"flex",flexWrap:"wrap"}}>
                    <span style={{paddingRight:"10px"}}>chake me <span style={{ color: "#999" }}>12 may 2021</span></span>
                    <span style={{paddingRight:"10px"}}>Long <span style={{ color: "#999" }}> (2, 5)</span>{" "}</span>
                    <span style={{paddingRight:"10px"}}>Guses <span style={{ color: "#999" }}> 4 adults</span></span>
                    
                  </Typography>
                  <Typography variant="h6">$ 1000 USD</Typography>
                </Grid>
                <Grid lg={4.5} md={4} sm={12} xs={12}>
                  <Stack direction="row" spacing={1} sx={{ pt: "1%" }}>
                    <Chip
                      label="Cancel Reservation"
                      size="large"
                      style={{
                        background: "#9A9A9A",
                        height: "35px",
                        color: 'white'
                      }}
                    />
                    
                  </Stack>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
          </Box>
        </Paper>
      </Container>
    </>
  );
}
