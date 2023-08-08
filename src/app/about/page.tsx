'use client'
import React from 'react';
// Chakra Ui and icons 
import { Box, Text, Link, Heading, ListItem, UnorderedList, } from '@chakra-ui/react';
// Components
import MyTechnologies  from '../components/MyTechnologies';

function About() {
  return (
    <Box w={[200, 300, 350, 500, 800]} ml={['-27%', '-10%', '15%' ,'15%' ,'15%']} mt={['120%', '110%', '0%' ,'0%' ,'0%']}> 
      <Text fontSize={['12px', '12px', '20px', '20px', '20px']} textAlign='center' mb='5%'>
      Frontend developer from Buenos Aires, Argentina. I mainly work with React, Next.js and TypeScript but I love learning new technologies and tools.
      <br /> 24 y/o in love with technology.
      </Text>
      <Text fontSize={['13px', '13px', '18px', '18px', '18px']} textAlign='center' mb="25px">Languages and technologies</Text>
      <MyTechnologies />
      <Box mt='40px' fontSize={['12px', '12px', '16px', '16px', '16px']}>
        <UnorderedList styleType='none'>
         <ListItem><b>2020-</b> Completed the freeCodeCamp Front-End Development Courses </ListItem>
         <ListItem><b>2021-</b> Worked as a freelancer</ListItem>
         <ListItem><b>2022 to present-</b> Working for Insite Latin America  <br /> 
                   <span style={{marginLeft:'17.5%'}}>Main Proyect: <Link 
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
       <Heading as='h5' fontSize={['15px', '15px', '15px', '25px', '25px']}>I ♥</Heading><br />
       <Text fontSize={['12px', '12px', '16px', '16px', '16px']}>Videogames, Music, Technology, Streaming, Coffee, Movies and tv shows, Sports, Girlfriend</Text>
      </Box>
    </Box>
  )
}

export default About;