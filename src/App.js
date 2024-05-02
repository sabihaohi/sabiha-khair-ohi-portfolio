import { Box } from '@chakra-ui/react';
import { useRef } from 'react';
import './App.css';
import About from './Componats/Aboutme/About';
import Contact from './Componats/Contact/Contact';
import Experince from './Componats/Experience/Experince';
import Footer from './Componats/Footer/Footer';
import Hero from './Componats/Hero/Hero';
import Nav from './Componats/Nav/Nav';
import Projects from './Componats/Projects/Projects';

function App() {
  const scollToRef = useRef();
  return (
    <div className="app">
      <Nav />
      <Box padding={{ base: '0px 20px', md: '0px 150px', lg: '0px 150px' }}>
        <Hero />
        <About ref={scollToRef} />
        <Experince />
        <Projects />
        <Contact />
        <Footer />
      </Box>
    </div>
  );
}

export default App;
