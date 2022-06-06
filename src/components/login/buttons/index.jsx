// import * as React from "react";
import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import Slide from "@mui/material/Slide";
// import MailOutlineIcon from "@mui/icons-material/MailOutline";

// import TextField from "@mui/material/TextField";

// const index = () => {
//   return (
//     <div>
//       <Button
//         sx={{
//           width: "30%",
//           borderRadius: "30px",
//           backgroundColor: "#9a9a9a",
//           height: "54px",
//           ":hover": { backgroundColor: "#383838" },
//         }}
//         variant="contained"
//         disableElevation
//       >
//         Continue
//       </Button>
//       <Button
//         sx={{
//           width: "30%",
//           borderRadius: "30px",
//           backgroundColor: "#9a9a9a",
//           height: "54px",
//           ":hover": { backgroundColor: "#383838" },
//         }}
//         variant="contained"
//         disableElevation
//       >
//         Continue
//       </Button>
//     </div>
//   );
// };

// export default index;
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

export default function AutoGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item md={4} sm={6} xs={12}>
          <Item>
            <Button
              sx={{
                width: "100%",
                borderRadius: "30px",
                backgroundColor: "#E8EAEC",
                height: "54px",
                ":hover": { backgroundColor: "#9a9a9a", color: "#E8EAEC" },
                color: "#484848",
              }}
              variant="contained"
              disableElevation
            >
              <FacebookIcon sx={{ marginRight: "10px" }} />
              Facebook
            </Button>
          </Item>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Item>
            <Button
              sx={{
                width: "100%",
                borderRadius: "30px",
                backgroundColor: "#E8EAEC",
                height: "54px",
                ":hover": { backgroundColor: "#9a9a9a", color: "#E8EAEC" },
                color: "#484848",
              }}
              variant="contained"
              disableElevation
            >
              <AppleIcon sx={{ marginRight: "10px" }} />
              Apple ID
            </Button>
          </Item>
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <Item>
            <Button
              sx={{
                width: "100%",
                borderRadius: "30px",
                backgroundColor: "#E8EAEC",
                height: "54px",
                ":hover": { backgroundColor: "#9a9a9a", color: "#E8EAEC" },
                color: "#484848",
              }}
              variant="contained"
              disableElevation
            >
              <GoogleIcon sx={{ marginRight: "10px" }} />
              Google
            </Button>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
