import React from 'react';
import { AppBar, Button, ImageList, ImageListItem, TextField, Toolbar, Typography } from '@mui/material';
import { Container } from '@mui/system';
import images_URL from './images_URL.json'
import CameraAltIcon from '@mui/icons-material/CameraAlt';



const Photography = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <CameraAltIcon />
          <Typography variant='h5'>Photography</Typography>
        </Toolbar>
      </AppBar>

      <Container style={{"marginTop":"70px", "textAlign":"center"}} >
        <Typography variant='h2'>Our latest Photography</Typography>
        <Typography paragraph>please take a look of my latest Photography</Typography>
      </Container>

      <Container>
        <ImageList rowHeight={270}  cols={3}>
          {images_URL.map(imageobj =>
              <ImageListItem key={imageobj.id} cols={1}>
                  <img src={imageobj.img} alt={imageobj.name} />
              </ImageListItem>
          )}
          </ImageList>
      </Container>

      
        <Container>
          <Typography variant='h3'> Contact form</Typography>
          <form>
            <TextField style={{"width":"500px", "margin":"5px"}} type="text" label="Name" variant='outlined' /> <br></br>
            <TextField style={{"width":"500px", "margin":"5px"}} type="email" label="email" variant='outlined' /><br></br>
            <TextField style={{"width":"500px", "margin":"5px"}} type="text" label="proposal" variant='outlined' /><br></br>
            <TextField style={{"width":"500px", "margin":"5px"}} type="text" label="Address" variant='outlined' /><br></br>
            <Button variant='contained' color='primary' onClick={"thank you"}> Submit </Button>
          </form>
        </Container>
     
    



      
    </div>
  )
}

export default Photography;
