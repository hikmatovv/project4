import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "@mui/material";

import Login from "../../components/login/index";

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElUser2, setAnchorElUser2] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  ////////////////////////////////////////////////////

  const handleOpenUserMenu2 = (event) => {
    setAnchorElUser2(event.currentTarget);
  };

  const handleCloseUserMenu2 = () => {
    setAnchorElUser2(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#EFF0F2",
        justifyContent: "space-between",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: "space-between" }} disableGutters>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}

          {/* <Button
            sx={{
              fontSize: "14px",
              fontWeight: "500",
              lineHeight: "17.07px",
              color: "black",
            }}
          >
            dssbcyuk
          </Button> */}
          <Button
            href="/home"
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 800,
              letterSpacing: ".3rem",
              color: "#484848",
              textDecoration: "none",
              fontSize: "35px",
              lineHeight: "42.67px",
            }}
          >
            LOGO
          </Button>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{
                color: "#484848",
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  menu ochilgandagi button
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 800,
              letterSpacing: ".3rem",
              color: "#484848",
              textDecoration: "none",
              fontSize: "35px",
              lineHeight: "42.67px",
            }}
          >
            LOGO
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", sm: "none" },
              // marginLeft: "200px",
              justifyContent: "center",
            }}
          >
            {/* <Link to="/propertione"> */}
            <Button
              href="/properties"
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "#484848",
                display: "block",
                fontSize: "15px ",
                ":hover": {
                  background: "none",
                  backgroundColor: "#909090",
                  color: "white",
                },
                marginLeft: "20px",
              }}
            >
              Find a Property
            </Button>
            {/* </Link> */}

            <Button
              href="/story"
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "#484848",
                display: "block",
                fontSize: "15px ",
                ":hover": {
                  background: "none",
                  backgroundColor: "#909090",
                  color: "white",
                },
                marginLeft: "20px",
              }}
            >
              Share Stories
            </Button>

            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "#484848",
                display: "block",
                fontSize: "15px ",
                ":hover": {
                  background: "none",
                  backgroundColor: "#909090",
                  color: "white",
                },
                marginLeft: "20px",
              }}
            >
              Rental Guides
            </Button>

            <Button
              href="/details"
              sx={{
                my: 2,
                color: "#484848",
                display: "block",
                fontSize: "15px ",
                ":hover": {
                  background: "none",
                  backgroundColor: "#909090",
                  color: "white",
                },
                marginLeft: "20px",
              }}
            >
              Download Mobile App
            </Button>

            <Button
              sx={{
                backgroundColor: "#484848",
                borderRadius: "23px",
                fontSize: "14px",
                color: "white",
                fontWeight: "600",
                lineHeight: "17.07px",
                ":hover": { backgroundColor: "#303030" },
                marginTop: "1.3%",
                marginBottom: "1.3%",
                // height: "40px",
              }}
              variant="contained"
              disableElevation
            >
              Become a Host
            </Button>
          </Box>
          {/* /////////////////////////////////////////////////////////////////////////menu */}
          <Box
            sx={{
              flexGrow: 0,
              backgroundColor: "white",
              borderRadius: "23px",
              width: "98px",
              textAlign: "center",
              height: "46px",
            }}
          >
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu2} sx={{ p: 0 }}>
                <MenuIcon sx={{ fontSize: "30px" }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser2}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser2)}
              onClose={handleCloseUserMenu2}
            >
              <MenuItem>
                <Button
                  href="/messages"
                  onClick={handleCloseNavMenu}
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    lineHeight: "17.07px",
                    color: "black",
                  }}
                >
                  Messages
                </Button>
              </MenuItem>
              <MenuItem>
                <Button
                  href="/notification"
                  onClick={handleCloseNavMenu}
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    lineHeight: "17.07px",
                    color: "black",
                  }}
                >
                  Notification
                </Button>
              </MenuItem>
              <MenuItem>
                <Button
                  href="/reserver"
                  onClick={handleCloseNavMenu}
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    lineHeight: "17.07px",
                    color: "black",
                  }}
                >
                  Reservations
                </Button>
              </MenuItem>

              <MenuItem>
                <Button
                  href="/wishlist"
                  onClick={handleCloseNavMenu}
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    lineHeight: "17.07px",
                    color: "black",
                  }}
                >
                  Wishlists
                </Button>
              </MenuItem>

              <hr style={{ width: "80%" }} />

              {/* /////////////////////////////////////////////////////////  bottom hr start */}

              <MenuItem>
                <Button
                  href="/editProfile"
                  onClick={handleCloseNavMenu}
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    lineHeight: "17.07px",
                    color: "black",
                  }}
                >
                  Account
                </Button>
              </MenuItem>

              <MenuItem>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    lineHeight: "17.07px",
                  }}
                  textAlign="center"
                >
                  Help Center
                </Typography>
              </MenuItem>

              <MenuItem>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    lineHeight: "17.07px",
                  }}
                  textAlign="center"
                >
                  Logout
                </Typography>
              </MenuItem>
              {/* /////////////////////////////////////////////////////////  bottom hr end */}
            </Menu>
            {/* /////////////////////////////////////////////////////////////////////////////////////////////////////login start */}
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar sx={{}} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* <MenuItem> */}
              <Typography
                textAlign="left"
                sx={{
                  marginLeft: "13%",
                  fontSize: "14px",
                  fontWeight: "600",
                  lineHeight: "17.07px",
                }}
              >
                Sign Up
              </Typography>
              {/* </MenuItem> */}
              {/* <Link to="/login"> */}
              <MenuItem>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    lineHeight: "17.07px",
                  }}
                >
                  <Login />
                </Typography>
              </MenuItem>
              {/* </Link> */}
              <MenuItem>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    lineHeight: "17.07px",
                  }}
                  textAlign="center"
                >
                  Help Center
                </Typography>
              </MenuItem>
            </Menu>

            {/* /////////////////////////////////////////////////////////////////////////////////////////////////////login start */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
