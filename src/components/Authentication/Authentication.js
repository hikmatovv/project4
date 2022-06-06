
import { Grid } from '@mui/material';
import React from 'react';
import CommonButton from "../../containers/CommonButton/CommonButton";

const Authentication = () => {
    const buttonStyles ={
        fontSize:"0.875rem",
        textTransform:"capetalize",
        fontWeight:600,
        borderRadius:2.5,
        `&.MuiButton-contained`:{

            backgroundColor:"red",
            '&:hover':{
                backgroundColor:"transparent",
            },
        },

        `&.MuiButton-outlined`:{
            color:`#fff`,
            borderColor:"#fff",
            `&:hover`:{
                backgroundColor:"transparent",
            },
        },
    };



  return (
    <Grid item xs={8} styles={backgroundColor:''}>
        This is Page
        <CommonButton
        size="large"
        variant="contained"
        sx={buttonStyles}
        >
             Text
             </CommonButton>
        <CommonButton
        size="large"
        variant="outlined"
        sx={buttonStyles}
        >
             Text
             </CommonButton>
      
    </Grid>
  );
}

export default Authentication;
