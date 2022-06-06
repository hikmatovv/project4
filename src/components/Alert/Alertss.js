import * as React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Paper,Container, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

export default function Alertss() {
  const [open, setOpen] = React.useState(true);
  const style = {
    width: '100%',
    bgcolor: 'background.paper',
  };
  const stil ={
    border:"1px solid #f3e5f5"

  }

  return (
    <Paper style={{paddingBottom:"10%",paddingTop:"5%",marginBottom:"5%"}}>
      <Container>
        <Paper sx={stil}>
      <ListItem  style={{width:"100%",background:"#f3e5f5",height:"50%",}}>
        <Typography variant="h5">All Notifications</Typography>
      </ListItem>
    <List sx={style} component="nav" aria-label="mailbox folders">
      <Container style={{border:"1 px solid grey"}}>
      <ListItem button>
        <ListItemText primary="New Reservation Alert"secondary="19 may 2021" />

        <CloseIcon />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Connect to your facebook account"secondary="19 may 2020" />
        <CloseIcon />
      </ListItem>
      <ListItem button>
        <ListItemText primary="You have rejected the reservation"secondary="18 may 2020" />
        <CloseIcon />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="Jon Doe canselled the reservation"secondary="18 mart 2020" />
        <CloseIcon />
      </ListItem>
      </Container>
    </List>
    </Paper>
    </Container>
    </Paper>
  );
}
