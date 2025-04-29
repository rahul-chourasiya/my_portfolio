import './App.css';
import Home from './components/home/Home.js';
import theme from './components/Theme.js';
import { ThemeProvider } from '@mui/material/styles';
import Navbar from './Navbar/Navbar.js';
import Contextfunction from './context/Context.js';
function App() {
  return (
    <Contextfunction >
    <ThemeProvider theme={theme}>
        <Navbar/>
       <Home/>
    </ThemeProvider>
    </Contextfunction>
  );
}

export default App;
