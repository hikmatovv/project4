/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import Button from "@mui/material/Button";

export default () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Box
          sx={{ marginTop: "10%", display: "flex", flexDirection: "column" }}
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
            Information can be added in smiler way.
          </Typography>
          <Typography
            sx={{
              width: "100%",
              fontFamily: "sans-serif",
              fontWeight: "500",
              fontSize: "20px",
              color: "#737373",
              paddingTop: "5%",
            }}
          >
            The other required information can be added in smiler presentation
            for listing the property fluently...
          </Typography>
          <Button
            href="/home"
            sx={{
              width: "20%",
              padding: "1%",
              borderRadius: "30px",
              backgroundColor: "#9A9A9A",
              border: "none",
              color: "#FCFCFC",
              marginTop: "5%",
              marginBottom: "10%",
              ":hover": { backgroundColor: "#EFF0F2", color: "#9A9A9A" },
            }}
          >
            Post My Property
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
