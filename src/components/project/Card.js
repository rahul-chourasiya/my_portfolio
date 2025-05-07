import React, { useState, useEffect } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const Cardproject = ({ name, title, urlweb, img, urlgit }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % img.length);
    }, 3000);

    return () => clearInterval(interval); 
  }, [img.length]);

  const handleNext = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === img.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? img.length - 1 : prevIndex - 1
    );
  };

  return (
    <Card
      sx={{
        maxWidth: { xs: "100%", sm: 360 },
        margin: "3%",
        padding: "3%",
        boxShadow: 3,
        // width: 360, 
        // height: 450,
      }}
    >
      <Box sx={{ position: "relative", display: "flex", alignItems: "center" }}>
        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            left: 0,
            zIndex: 1,
            backgroundColor: "#FFC107",
            ":hover": { backgroundColor: "#FFC107" },
          }}
        >
          <ArrowBackIos fontSize="small" sx={{color:"white"}} />
        </IconButton>
        <CardMedia
          component="img"
          image={img[currentImage]}
          alt={`${name} screenshot ${currentImage + 1}`}
          sx={{
            height: 200,
            objectFit: "cover",
            width: "100%",
            borderRadius: 1,
          }}
        />
        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            right: 0,
            zIndex: 1,
            backgroundColor: "#FFC107",
            ":hover": { backgroundColor: "#FFC107" },
          }}
        >
          <ArrowForwardIos fontSize="small" sx={{color:"white"}} />
        </IconButton>
      </Box>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {title}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" , pt:"5%", pb:"5%"}}>
        <Button
          variant="contained"
          href={urlweb}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ textTransform: "none",  backgroundColor:"#FFC107" }}
        >
          Live Preview
        </Button>
        <Button
          variant="outlined"
          href={urlgit}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ textTransform: "none",  border:'1px solid #FFC107' , color:'#FFC107'}}
        >
          GitHub
        </Button>
      </CardActions>
    </Card>
  );
};

export default Cardproject;
