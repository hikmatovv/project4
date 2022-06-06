// import React from 'react'
// import Grid from '@mui/material/Grid'
// import Typography from '@mui/material/Typography'
// import Divider from '@mui/material/Divider'
// import Container from '@mui/material/Container'
// import divider from '../../../../assets/divider.png'
// import Box from '@mui/material/Box';
// import LocationCityIcon from '@mui/icons-material/LocationCity';
// import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
// import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';

// const data = [
//     {
//         icon: <LocationCityIcon sx={{ fontSize: '50px', color: '#FDBE33', ml: '30px' }} />,
//         text: "Location",
//         span: '123 Street, New York, USA'
//     },
//     {
//         icon: <ContactPhoneIcon sx={{ fontSize: '50px', color: '#FDBE33', ml: '30px' }} />,
//         text: "Phone",
//         span: '+012 345 67890'
//     },
//     {
//         icon: <MarkEmailUnreadIcon sx={{ fontSize: '50px', color: '#FDBE33', ml: '30px' }} />,
//         text: "Email",
//         span: 'info@example.com'
//     },
//     {
//         icon: <MarkEmailUnreadIcon sx={{ fontSize: '50px', color: '#FDBE33', ml: '30px' }} />,
//         text: "Email",
//         span: 'info@example.com'
//     }
// ]
// const Card = data.map((item) => (
//     <Grid item xs={12} sm={6} md={3} sx={{ width: '90%', border: '1px solid #E7E7E7', display: 'flex', flexDirection: 'column'}} >
//         {item.icon}

//         <Box >
//             <Typography variant='h5' sx={{ color: '#FDBE33', }}>{item.text}</Typography>
//             <Typography variant='h5' sx={{ color: 'black' }}>{item.span}</Typography>
//         </Box>
//     </Grid>
// ))

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));

// export default () => {
//     return (
//         <>
//             <Grid mt='10%' mb='10%'>
//

//             </Grid>
//         </>
//     )
// }

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
// import Divider from '@mui/material/Divider'
import Container from "@mui/material/Container";
import divider from "../../../assets/divider.png";
// import LocationCityIcon from "@mui/icons-material/LocationCity";
// import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
// import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
// import circle from "../../../assets/circle.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const data = [
  {
    img: "",
    text: "Comfortable Family Flat ",
    span: "100 Smart Street, LA, USA",
  },
  {
    img: "",
    text: "Comfortable Family Flat ",
    span: "100 Smart Street, LA, USA",
  },
  {
    img: "",
    text: "Beach House  Summer ",
    span: "100 Smart Street, LA, USA",
  },
  {
    img: "",
    text: "Double Size room",
    span: "100 Smart Street, LA, USA",
  },
];
const Card = data.map((item) => (
  <Grid
    item
    xs={12}
    sm={6}
    md={3}
    sx={{ display: "flex", flexDirection: "column" }}
  >
    <Item sx={{ backgroundColor: "#EFF0F2" }}>
      <Box sx={{ textAlign: "right" }}>
        <FavoriteBorderIcon />
      </Box>

      <Box
        sx={{
          paddingTop: "60%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#C2C6CC",
            borderRadius: "100%",
            width: "60px",
            height: "60px",
          }}
        >
          {item.img}
        </Box>
        <Typography
          sx={{ fontSize: "17px", fontWeight: 700, color: "#484848" }}
        >
          {item.text}
        </Typography>
        <Typography
          sx={{ fontSize: "13px", fontWeight: 500, color: "#9A9A9A" }}
        >
          {item.span}
        </Typography>
      </Box>
    </Item>
  </Grid>
));

export default function AutoGrid({ title }) {
  return (
    <>
      <Grid>
        <Container>
          <Grid mt="5%" sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              sx={{
                fontSize: "34px",
                fontFamily: "Montserrat",
                fontWeight: 700,
                color: "#484848",
                width: "40%",
              }}
            >
              {title}
            </Typography>
            <img
              src={divider}
              style={{ borderRadius: "30px", width: "200px" }}
            />
          </Grid>

          <Box mt="5%" sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
              {Card}
            </Grid>
          </Box>
        </Container>
      </Grid>
    </>
  );
}
