import { Box, Grid, Stack } from '@mui/system'
import React from 'react'
import "./Footer.css"
import { Divider, Typography } from '@mui/material'

function Footer() {
  return (
   <Box
    component={"footer"}
    >
        <Stack
        direction={"row"}
         sx={{
            justifyContent:"center",
            alignItems:'center',
            height:"70px",
         }}>
            <Typography
              variant='span'
              component={"span"}
              sx={{
                fontSize:'18px',
                fontWeight:"500S"
              }}
              >
                Page End
            </Typography>
        </Stack>
        <Divider/>
        <Grid 
        container
         className='footer_grid'>
           
        </Grid>
    </Box>
  )
}

export default Footer
