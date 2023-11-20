'use client'
import React from 'react';
// Chakra Ui and icons 
import { Box, Text, Link, Heading, ListItem, UnorderedList, } from '@chakra-ui/react';
// Components
import MyTechnologies  from '../components/MyTechnologies';

function About() {
  return (
    <Box w={[150, 300, 350, 500, 750]} ml={['15%', '-10%', '15%' ,'10%' ,'10%']} mt={['80%', '110%', '0%' ,'0%' ,'0%']}> 
      <Text fontSize={['10px', '12px', '20px', '20px', '20px']} textAlign={['right', 'center', 'center', 'center', 'center']} mb='5%'>
      Frontend developer from Buenos Aires, Argentina. I mainly work with React, Next.js and TypeScript but I love learning new technologies and tools.
      <br /> 25 y/o in love with technology.
      </Text>
      <Text fontSize={['12px', '13px', '18px', '18px', '18px']} textAlign={['right', 'center', 'center', 'center', 'center']} mb="25px">Languages and technologies</Text>
      <MyTechnologies />
      <Box mt='40px' fontSize={['10px', '12px', '16px', '16px', '16px']}>
        <UnorderedList styleType='none'>
         <ListItem><b>2020-</b> Completed the freeCodeCamp Front-End Development Courses </ListItem>
         <ListItem><b>2021 to present-</b> Working as a freelancer</ListItem>
         <ListItem><b>2022 to present-</b> Working for Insite Latin America  <br /> 
                   <span style={{marginLeft:'18.5%'}}>Main Proyect: <Link 
                                   href='https://education.hpe.com/ww/en/training/index.html' 
                                   isExternal 
                                   textDecoration='underline'>
                                   HPE Education Services
                                  </Link>
                   </span>
         </ListItem>
        </UnorderedList>      
      </Box>
      <Box mt='20px' textAlign='right'>
       <Heading as='h5' fontSize={['12px', '15px', '15px', '25px', '25px']}>I ♥</Heading><br />
       <Text fontSize={['10px', '12px', '16px', '16px', '16px']}>Videogames, Music, Technology, Streaming, Coffee, Movies and tv shows, Sports, Girlfriend</Text>
      </Box>
    </Box>
  )
}

export default About;