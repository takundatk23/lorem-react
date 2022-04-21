import React from "react";
import './/index.css';
import Header from './components/01header/Header';
import Lorem from './components/02loremdiv/Lorem'
import Aboutlorem from './components/03whatislorem/Aboutlorem';
import Threedivs from './components/04threedivs/Threedivs';
import Grid from './components/05bottomgrid/Grid';
import Footer from './components/06footer/Footer';

const App = () => {
    return(
        <>
        <Header />
        <Lorem />
        <Aboutlorem />
        <Threedivs />
        <Grid />
        <Footer />
        </>
    )
}

export default App