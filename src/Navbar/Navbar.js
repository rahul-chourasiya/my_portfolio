import {
    AppBar,
    Drawer,
    IconButton,
    List,
    ListItemButton,
    ListItemText,
    Toolbar,
} from '@mui/material'
import { Box, Container, useMediaQuery } from '@mui/system'
import ReorderIcon from '@mui/icons-material/Reorder';
import './Navbar.css'
import { useContext, useState } from 'react';
import DehazeIcon from '@mui/icons-material/Dehaze';
import logo from "../Assets/homegif_files/logo.jpg"
import { useTheme } from '@emotion/react';


const pages = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Services", path: "/services" },
    { text: "Contact", path: "/contact" },
]

function Navbar() {
    const [opantog, setOpantog] = useState(false)
    const theme = useTheme()
    const iqmadia = useMediaQuery(theme.breakpoints.down("sm"))

    const buttontoggla = () => {
        setOpantog(!opantog)
    }
    return (
        <AppBar position="static" sx={{ backgroundColor: "white" }}>
            <Container maxWidth={false}>
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: '', lg: "flex" } }}>
                        <img src={logo} 
                         alt='//'
                         style={{
                            height: "64px",
                            width:" 97px",
                             marginLeft: "2%"
                         }} />
                    </Box>
                    <Box sx={{ flexGrow: "-moz-initial", display: { xs: "flex", md: 'flex', lg: "flex" } }}>
                        {!iqmadia ?
                            <List
                                sx={{
                                    display: "flex",
                                    color: "black"
                                }}>
                                {pages.map((item) => {
                                    return (
                                        <ListItemButton key={item.text}>
                                            <ListItemText>{item.text}</ListItemText>
                                        </ListItemButton>
                                    )
                                })}
                            </List>
                            :
                            <Box
                                component={"div"}
                            >
                                <Drawer
                                    anchor='top'
                                    open={opantog}
                                    onClose={buttontoggla}
                                >
                                    {pages.map((item) => {
                                        return (
                                            <ListItemButton key={item.text}>
                                                <ListItemText>{item.text}</ListItemText>
                                            </ListItemButton>
                                        )
                                    })}
                                </Drawer>
                                <IconButton
                                    onClick={buttontoggla}
                                    sx={{
                                        color: "black"
                                    }}
                                >
                                    <DehazeIcon />
                                </IconButton>
                            </Box>
                        }
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar
