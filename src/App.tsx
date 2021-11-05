import React from 'react';
import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Container from '@mui/material/Container';

import useMediaQuery from '@mui/material/useMediaQuery';

import Header from './components/Header';
import Profile from './components/Profile';
import Projects from './components/Projects';
import ProjectsMobile from './components/ProjectsMobile';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from "./components/Footer"

function App() {

  const desktop = useMediaQuery('(min-width:1024px)');

  return (
    <>
      <Header></Header>
      <Container>
        <Profile></Profile>
        {desktop === true ? <Projects></Projects> : <ProjectsMobile></ProjectsMobile>}
        <Skills></Skills>
        <Contact></Contact>
        <Footer></Footer>
      </Container>
    </>

  );
}

export default App;
