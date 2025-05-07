import React from 'react'
import { Button, TextField, Typography } from '@mui/material'
import { Box, Container, Grid, Stack, } from '@mui/system'
import bg1 from "../../../src/Assets/bg1.png"

const Contactus = () => {
    return (
        <Container maxWidth={false}
        >
            <Grid container
                sx={{
                    height: "550px"
                }}>
                <Grid
                    size={{ xs: 12, sm: 12, md: 7, lg: 7 }}
                >
                    <Box
                        component={"div"}
                    >
                        <Stack
                            justifyContent="center"
                            alignItems="center"
                            mt={5}
                            mb={5}>
                            <Typography variant="h4" component={"h4"} align="center" >
                                Contact Me
                            </Typography>
                            <Typography variant="p" component={"p"} align="center" >
                                I’d love to hear from you. Fill out the form below to get in touch!
                            </Typography>
                        </Stack>

                        <Stack
                            spacing={3}
                            alignItems={"center"}>
                            <TextField
                                sx={{ width: "70%" }}
                                label="Your Name"
                                variant="outlined"
                                required
                            />

                            <TextField
                                sx={{ width: "70%" }}
                                label="Your Email"
                                type="email"
                                variant="outlined"
                                required
                            />

                            <TextField
                                sx={{ width: "70%" }}
                                label="Your Message"
                                multiline
                                rows={4}
                                variant="outlined"
                                required
                            />

                            <Button
                                sx={{ width: "30%", fontSize: "12px ", height: "40px",backgroundColor:"#FFC107" }}
                                variant="contained"
                                color="primary"
                                type="submit"
                                className='button_contect'
                            >
                                Send Message
                            </Button>
                        </Stack>
                    </Box>
                </Grid>
                <Grid size={{ md: 5, lg: 5, }}
                    sx={{
                        height: "550px",
                        display: {
                            xs: "none",
                            sm: "none",
                            md: 'block'
                        }
                    }}>
                    <Box
                        component={"div"}
                        className="home_myimg"
                    >
                        <img
                            src={bg1}
                            alt="//"
                            style={{
                                height: "80%",
                                width: "75%",
                                marginTop: "5%",
                                marginLeft: "11%",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundClip: "revert",
                                backgroundSize: "cover",
                         }}/>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Contactus
