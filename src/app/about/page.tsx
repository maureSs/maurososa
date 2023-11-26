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
    <Box w={[220, 300, 350, 500, 750]} ml={['15%', '-10%', '15%' ,'10%' ,'15%']} mt={windowHeight < 750 ? '50%' : '0%'}> 
      <Text fontSize={['14px', '12px', '20px', '20px', '20px']} textAlign={['center', 'center', 'center', 'center', 'center']} mb='5%'>
      25 y/o web developer from Buenos Aires, Argentina. I mainly work with React, Next.js and TypeScript but I love learning new technologies and tools.
      </Text>
      <Text fontSize={['12px', '13px', '18px', '18px', '20px']} textAlign={['center', 'center', 'center', 'center', 'center']} mb="25px">Languages and technologies</Text>
      <MyTechnologies />
      <Box mt='20px' textAlign='right'>
       <Heading as='h5' fontSize={['12px', '15px', '15px', '25px', '25px']}>I ♥</Heading><br />
       <Text fontSize={['12px', '12px', '16px', '16px', '16px']}>Videogames, Music, Technology, Streaming, Coffee, Movies and tv shows, Sports, Girlfriend</Text>
      </Box>
    </Box>
  )
}

export default About;