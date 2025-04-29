import React from 'react'
import { Typography } from '@mui/material'
import { Box, Grid, Stack } from '@mui/system'
import './About.css'
import bg1 from "../../../src/Assets/bg1.png"

const About = () => {

    return (
        <Box
            component={"div"}
        >
            <Grid container
                className="about_container"
            >
                <Grid
                    size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
                    sx={{
                        display: {
                            xs: "none",
                            sm: "none",
                            md: "block"
                        }
                    }}>
                    <Box
                        component={"div"}
                    >
                     <img
                      src={bg1}
                      alt="//"
                      className="about_myimg" />
                    </Box>
                </Grid>
                <Grid
                    size={{ xs: 12, sm: 12, md: 6, lg: 6 }}

                >
                    <Stack
                        sx={{
                            alignItems: "center",
                            marginTop: "15%",
                        }}>
                        <Typography
                            component={"h4"}
                            variant='h4'
                            sx={{
                                fontWeight: "500"
                            }}
                        >
                            About Us
                        </Typography>
                    </Stack>
                    <Stack
                        m={5}>
                        <Typography
                            component={"p"}
                            variant='p'
                            sx={{
                                fontSize: "20px",
                                fontWeight: "500"
                            }}
                        >
                            "I’m Rahul, a fresher in web development with skills in React.js, JavaScript, HTML, and CSS. I am excited to begin my professional journey, bringing creativity and functionality to every project I work on. Recently, I developed a project called Shop.org, an e-commerce application featuring a user-friendly interface for customers and an admin panel for managing products and orders. The project includes functionalities like product management, user authentication, and API integration
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}

export default About;