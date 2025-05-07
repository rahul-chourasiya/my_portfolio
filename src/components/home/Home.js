import { Divider, IconButton, Typography } from "@mui/material";
import { Box, Grid, Stack } from "@mui/system";
import { ReactTyped } from "react-typed"
import gitpng from "../../Assets/git.png"
import linki from "../../Assets/link.png"
import insta from "../../Assets/insta.png"
import mail from "../../Assets/mail.png"
import mui from "../../Assets/mui.png"
import bootstrap from "../../Assets/bootstrap.png"
import bg1 from "../../../src/Assets/bg1.png"
import "./Home.css"
import About from "../about/About";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact } from "@fortawesome/free-brands-svg-icons";
import Project from "../project/Project";
import Contectus from '../contact/Contact'
import Footer from "../../Footer/Footer";
import { MovingComponent } from "react-moving-text"
import {motion} from 'framer-motion'
import ResumeSection from "../ResumeSection/ResumeSection";


const Home = () => {

  return (
    <Box
      component={"div"}
    >
      <Grid container
        className="home_container"
      >
        <Grid
          size={{ xs: 12, sm: 12, md: 8, lg: 8 }}
          className="grid_hedding" >
          <Stack
            direction={"column"}
            sx={{
              marginTop: "18% ",
              marginLeft: "9%"
            }}
          >
            <motion.div
                initial={{ x: -700 }}
                animate={{ x: 0 }}
                transition={{ delay: -0.5, duration: 1.5 }}>
              <Stack>
                <span
                  className="span_hello"
                >
                  !Hello
                </span>
              </Stack>
              <Stack>
                <Typography
                  component={"h4"}
                  variant="h4"
                  className="home_hedding"
                >
                  I'm
                  <span
                    style={{
                      fontWeight: "600",
                      marginLeft: "6px"
                    }}>
                    RAHUL CHOURASIYA
                  </span>
                </Typography>
              </Stack>
              <Stack>
                <Typography
                  component={"h5"}
                  variant="h5"
                >
                  a {""}
                  <ReactTyped
                    strings={["My React App"]}
                    typeSpeed={100}
                    loop
                    backSpeed={70}
                    cursorChar=">"
                    showCursor={true}
                  />
                </Typography>
              </Stack>
              <Stack>
                <Typography
                  component={"p"}
                  variant="p"
                  className="home_hedding"
                >
                  A fresher with a love for web development and React. <br />I m dedicated to creating clean,
                  responsive, and engaging websites that leave a lasting impact
                </Typography>
              </Stack>
            </motion.div>
          </Stack>
          <MovingComponent
              type="pop "
              duration="2000ms"
              delay="0s"
              direction="row"
              timing="ease"
              iteration="1"
              fillMode="none"
               >
          <Stack
            direction={"row"}
            sx={{
              marginTop: "1% ",
              marginLeft: "8%",
            }}
          >
              <Stack>
                <IconButton>
                  <img src={gitpng} className="imgicon" alt="//" />
                </IconButton>
              </Stack>
              <Stack>
                <IconButton>
                  <img src={linki} className="imgicon" alt="//" />
                </IconButton>
              </Stack>
              <Stack>
                <IconButton>
                  <img src={mail} className="imgicon" alt="//" />
                </IconButton>
              </Stack>
              <Stack>
                <IconButton>
                  <img src={insta} className="imgicon" alt="//" />
                </IconButton>
              </Stack>
          </Stack> 
          </MovingComponent>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4 }}
          className="grid_img"
          sx={{
            // height: "400px",
            marginTop: "5%"
          }}
        >
          <Box
            component={"div"}
            mb={5}
          >
            <img 
            src={bg1}
            alt="//"
            className="home_myimg"/>
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid size={{
          xs: 12,
          sm: 12,
          md: 12,
          lg: 12
        }}
        >
          <Stack>
            <Typography
              component={"h4"}
              variant="h4"
              className="skills_stack"
            >
              Skills
            </Typography>
          </Stack>
          <Stack
            direction={{ sm: "row", md: "row" }}
            sx={{
              justifyContent: "center",
              alignContent: "center",
              display: "flex",
              flexWrap: "wrap"
            }}
          >
            <Stack
              direction={{ xs: "row" }}
              justifyContent={"center"}
            >
              <Stack
                className="stak_icon"
              >
                <FontAwesomeIcon icon={faHtml5} bounce style={{ color: "#f25a07", height: "100px", }} />
              </Stack>
              <Stack
                className="stak_icon"
              >
                <FontAwesomeIcon icon={faCss3Alt} bounce style={{ color: "#74C0FC", height: "100px", }} />
              </Stack>
            </Stack>
            <Stack
              direction={{ xs: "row" }}
              justifyContent={"center"}
            >
              <Stack
                className="stak_icon"
              >
                <FontAwesomeIcon icon={faJs} bounce style={{ color: "#FFD43B", height: "100px", }} />
              </Stack>
              <Stack
                className="stak_icon"
              >
                <FontAwesomeIcon icon={faReact} bounce style={{ color: "#74C0FC", height: "100px", }} />
              </Stack>
            </Stack>
            <Stack
              direction={{ xs: "row" }}
              justifyContent={"center"}
            >
              <Stack
                className="stak_icon"
              >
                <img
                  src={mui}
                  alt="Material UI Logo"
                  className="bounce-animation"
                  style={{ height: "100px", width: "auto" }}
                />
              </Stack>
              <Stack
                className="stak_icon"
              >
                <img
                  src={bootstrap}
                  alt="bootsrap Logo"
                  className="bounce-animation"
                  style={{ height: "100px", width: "auto" }}
                />
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      <About />
      <Project />
      <Contectus />
      <ResumeSection/>
      <Divider />
      <Footer />
    </Box>
  )
}

export default Home;
