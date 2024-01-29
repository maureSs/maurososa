'use client'
import React, {useState, useEffect} from 'react';
// Chakra Ui and icons 
import { Box, Text, Heading } from '@chakra-ui/react';
// Components
import MyTechnologies  from '../components/MyTechnologies';

function About() {
  const [windowHeight, setWindowHeight] = useState(0);

  const handleResize = () => {
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='inner-content'>
    <p className="sm:text-lg md:text-xl mb-5">
      25 y/o web developer from Buenos Aires, Argentina. I mainly work with TypeScript, React and Next.js, and but I love learning new technologies and tools.
    </p>
    <p className="text-lg text-center mb-5">Languages and technologies</p>
    <MyTechnologies />
    <div className="mt-20 text-right">
      <h5 className="text-2xl">I ♥</h5>
      <p className="text-base">
        Videogames, Music, Technology, Streaming, Coffee, Movies and tv shows, Sports, Girlfriend
      </p>
    </div>
  </div>
  )
}

export default About;