import { Typography } from "@mui/material";
import { Box, Container, Grid, Stack } from "@mui/system";
import React from "react";
import "./Project.css";
import Cardproject from "./Card";
import imgcard1 from "../../Assets/pro1.JPG"
import imgcard2 from "../../Assets/pro2.JPG"
import imgcard3 from "../../Assets/pro3.JPG"
import imgcard4 from "../../Assets/pro4.JPG"
import todoimg  from "../../Assets/todoimg.JPG"

const projectData = [
  {
    name: "cyber",
    title:
      "-Developed an e-commerce website using React.js and Material-UI, integrating free APIs to display product details across various categories such as electronics, laptops, mobiles, and household goods. The project demonstrates the ability to build dynamic and user-friendly web applications with seamless API integration.",
    urlweb: "https://my-react-project-jade.vercel.app/",
    urlgit: "https://github.com/rahul-chourasiya/my-react-project.git",
    img: [
          imgcard1,
          imgcard2,
          imgcard3,
          imgcard4,
    ],

  },
  {
    name: "Todo",
    title: "A simple and responsive To-Do List application built using React.js. This app allows users to add, delete, and mark tasks as complete. It helps in managing daily tasks efficiently with a clean and user-friendly interface.",
     urlweb: "https://my-react-project-jade.vercel.app/",
    urlgit: "https://github.com/rahul-chourasiya/my-react-project.git",
    img: [
      todoimg,
          
    ],

  },
];

function Project() {
  return (
    <Box component={"div"} pt={7}>
      <Container maxWidth={false}>
        <Grid size={{ xs: 12, md: 12, sm: 12, lg: 12 }}>
          <Stack direction={"row"} sx={{display:"flex",justifyContent:"center"}}>
            <Stack>
              <Typography
                component={"h4"}
                variant="h4"
                mt={5}
                ml={3}
                sx={{
                  fontWeight: "500",
                }}
              >
                Project
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction={{
              xs: "column",
              sm: "row-reverse",
              md: "row",
            }}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
              {projectData.map((project, index) => (
                <Cardproject key={index} {...project} />
              ))}
          </Stack>
        </Grid>
      </Container>
    </Box>
  );
}

export default Project;