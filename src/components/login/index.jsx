import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import TextField from "@mui/material/TextField";

import CountryInput from "./countries/index";
import Buttons from "./buttons/index";

import Password from "../loginPassword/index";

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
          color: "black",
          textDecoration: "none",
          border: "none",
          ":hover": { border: "none" },
          position: "relative",
          right: "15px",
        }}
        variant="outlined"
        onClick={handleClickOpen}
      >
        Login
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
        <DialogTitle
          sx={{
            display: "flex",
          }}
        >
          <CountryInput />

          <TextField
            sx={{ width: "100%" }}
            id="outlined-textarea"
            label="Phone Number"
            // placeholder="Enter Your Phone Number Here..."
            multiline
          />
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            sx={{ fontSize: "13px" }}
            id="alert-dialog-slide-description"
          >
            We`ll call or text you to confirm your number. Standard message and
            data rates apply.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{}}>
          <Button
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
            <Password />
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
