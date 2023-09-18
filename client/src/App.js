import React from "react";
import { Container } from '@mui/material';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider } from '@mui/material/styles';
import theme from './globalStyles';

import NavBar from "./components/NavBar/navBar";
import Home from "./components/Home/home";
import Auth from "./components/Auth/auth";


/*const theme = createTheme({
  // Additional theme config
});*/

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <NavBar />
          <Routes>
            <Route exact path="/" element={ <Home /> } />
            <Route exact path="/auth" element={ <Auth /> } />
          </Routes>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;