import { AppBar,  Toolbar, Typography, Box, TextField } from '@mui/material'
import React from 'react'

const Vvk1 = () => {

  return (
    <div>
      <AppBar>
      <Toolbar>
        <Typography variant='h4'> weather forecast </Typography>
        </Toolbar>
      </AppBar>

      <container>
      <Box
      sx={{ width: 720, height: 720, backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
      <TextField style={{"width":"500px", "margin":"5px"}} type="text" label="Enter City" variant='' />
      </container>
    </div>
  )
}

export default Vvk1;
