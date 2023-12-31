'use client'
import React, { useState, useEffect } from 'react'
import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
// Next
import Image from 'next/image';
import Link from 'next/link';
// Api
import { myProjects } from '../api'

export type Root = ProjectInfo[]

export interface ProjectInfo {
  name: string;
  image: any;
  description: string;
  url: string;
}

function ProjectsComponent() {
  const [myData, setMyData] = useState<ProjectInfo[]>(myProjects)

  const [windowWidth, setWindowWidth] = useState(0);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {windowWidth > 480 ? (
      <>
      <Heading as='h2' size='xl' textAlign='center' mb='60px' ml='3%' fontSize='32px'>My projects</Heading>
      <Grid templateColumns='repeat(5, 1fr)' gap={12} ml='20%'>
      {myData.map((item, key) => (
        <GridItem key={key} colSpan={2} mb='20px' className='hover-project' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Link href={item.url}>
           <figure>
            <Image src={item.image} width={220} height={100} alt={`${item.name} + ${key}`} className='project-image-style'/>
           </figure>
          </Link>
         <Box className="project-info">
          <Heading as='h3' size='lg' textAlign='center' mb='10px' fontSize='24px'>{item.name}</Heading>
          <Text textAlign='center'>{item.description}</Text>
         </Box>
       </GridItem> 
      ))}
      </Grid>
      <Link href="https://github.com/maureSs" className="github-projects">Find all my projects on GitHub!</Link>
      </>
      ) : (
       <Box w={[250, 300, 300, 500, 800]} ml='15%' mt='35%'>
        <Heading as='h2' size='l' textAlign='center' mb='20px' fontSize='24px'>My projects</Heading>
        {myData.map((item, key) => (
        <GridItem key={key} colSpan={2} mb='20px' className='hover-project' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
         <Box className="project-info">
          <Link href={item.url}>
           <Heading as='h3' size='l' textAlign='center' mb='10px' fontSize='18px'>{item.name}</Heading>
          </Link>
          <Text textAlign='center' maxW='200px' fontSize='14px'>{item.description}</Text>
         </Box>
       </GridItem> 
      ))}
      <Link href="https://github.com/maureSs" className="github-projects">Find all my projects on GitHub!</Link>
      </Box>
      )}
    </>
  )
}

export default ProjectsComponent;