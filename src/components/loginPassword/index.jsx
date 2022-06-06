import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import TextField from "@mui/material/TextField";

import Buttons from "./buttons/index";

import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        sx={{
          fontSize: "14px",
          fontWeight: "500",
          lineHeight: "17.07px",
          color: "white",
          textDecoration: "none",
          border: "none",
          ":hover": { border: "none" },
          position: "relative",
        }}
        variant="outlined"
        onClick={handleClickOpen}
      >
        Continue
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{ justifyContent: "center" }}
      >
        <DialogTitle
          sx={{
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "18px",
            lineHeight: "22px",
          }}
        >
          {"Login or Signup"}
          <hr style={{ backgroundColor: "#E0E2E6" }} />
        </DialogTitle>

        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item md={3} sm={6} xs={12}>
              <Item sx={{ textAlign: "center" }}>
                <AccountCircleIcon
                  sx={{ color: "#E0E2E6", fontSize: "60px" }}
                />
              </Item>
            </Grid>
            <Grid item md={9} sm={6} xs={12}>
              <Item
                sx={{
                  fontWeight: "700",
                  fontSize: "16px",
                  lineHeight: "20px",
                  color: "#484848",
                }}
              >
                Hello, John Doe
              </Item>
              <Item
                sx={{
                  fontWeight: "600",
                  fontSize: "13px",
                  lineHeight: "16px",
                  color: "#9a9a9a",
                }}
              >
                Not You?
              </Item>
            </Grid>
          </Grid>
        </Box>

        <DialogTitle
          sx={{
            display: "flex",
          }}
        >
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <TextField
              fullWidth
              label="Password"
              id="fullWidth"
              placeholder="Enter you password here..."
            />
          </Box>
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            sx={{ fontSize: "14px" }}
            id="alert-dialog-slide-description"
          >
            Forgot Your Password?
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{}}>
          <Button
            href="/home"
            sx={{
              width: "60%",
              borderRadius: "30px",
              backgroundColor: "#9a9a9a",
              height: "54px",
              ":hover": { backgroundColor: "#383838" },
            }}
            variant="contained"
            disableElevation
          >
            Continue
          </Button>

          <Button
            sx={{
              width: "90%",
              textAlign: "left",
              color: "black",
              fontWeight: "600",
              fontSize: "14px",
              lineHeight: "22px",
            }}
            // variant="contained"
            disableElevation
          >
            <MailOutlineIcon
              sx={{
                color: "#484848",
                backgroundColor: "white",
                marginRight: "20px",
              }}
            />
            Continue with email
          </Button>
        </DialogActions>
        <hr style={{ color: "#484848" }} />
        <DialogTitle>
          <p
            style={{
              fontWeight: "500",
              fontSize: "12px",
              lineHeight: "15px",
              color: "#9a9a9a",
            }}
          >
            Or Continue With:{" "}
          </p>
        </DialogTitle>
        <DialogTitle>
          <Buttons />
        </DialogTitle>
      </Dialog>
    </div>
  );
}
