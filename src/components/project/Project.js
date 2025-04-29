import { Typography } from '@mui/material'
import { Box, Container, Grid, Stack } from '@mui/system'
import React from 'react'
import './Project.css'
import Cardproject from './Card'

function Project() {
    return (
        <Box
            component={"div"}
        >
            <Container
                maxWidth={false}
            >
                <Grid size={{ xs: 12, md: 12, sm: 12, lg: 12 }}
                >
                    <Stack
                        direction={"row"}
                    >
                     <Stack>
                        <Typography
                         component={"h4"}
                         variant='h4'
                         mt={5}
                         ml={3}
                         sx={{
                            fontWeight:"500"
                         }}
                         >
                          Project
                        </Typography>
                     </Stack>
                    </Stack>
                    <Stack
                     direction={{ 
                        xs: 'column', 
                        sm: 'row-reverse',
                        md:"row" 
                    }}
                    sx={{
                        display:'flex',
                        flexWrap:'wrap',
                        alignItems:"center",
                        justifyContent:"center"
                    }}
                    >
                     <Stack>
                        <Cardproject/>
                     </Stack>
                     <Stack>
                        <Cardproject/>
                     </Stack>
                     <Stack>
                        <Cardproject/>
                     </Stack>
                    </Stack>
                </Grid>
            </Container>
        </Box>
    )
}

export default Project
