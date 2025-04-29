import { createTheme } from "@mui/material/styles";


const theme = createTheme({
    typography: {
        h4:{
            "@media (max-width:1024px)":{fontSize:"25px"},
            "@media (max-width:600px)":{fontSize:"23px"},
            "@media (max-width:415px)":{fontSize:"18px"},
            transition:"0.5s"
        },
        h5:{
            "@media (max-width:1024px)":{fontSize:"23px"},
            "@media (max-width:600px)":{fontSize:"20px"},
            "@media (max-width:415px)":{fontSize:"15px"},
            transition:"0.5s"
        },
        p:{
            "@media (max-width:1024px)":{fontSize:"16px !important"},
            "@media (max-width:600px)":{fontSize:"14px !important"},
            "@media (max-width:415px)":{fontSize:"10px !important"},
            transition:"0.5s"
        }
    },
   
})
export default theme;