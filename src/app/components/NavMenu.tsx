'use client'
import React, {useState, useEffect} from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Flex, Box, Heading, Text } from '@chakra-ui/react'

function NavMenu({ colorMode }: { colorMode: 'light' | 'dark' }) {
  const pathname = usePathname()

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
   <Flex
    style={pathname === '/' ? {display: 'none'} : {display:'flex'}}
    flexDirection={windowWidth > 480 ? "column" : "column"}
    w={windowWidth > 480 ? "30%" : "80%"}
    h={windowWidth > 480 ? '90vh' : '25vh'}
    color={colorMode === 'dark' ? "white" : "black"}
    p={6}
    alignItems="flex-start"
    className='nav-mobile-layout'
   >
    <Heading as='h2' fontSize="40px" mb={4}>Mauro Sosa</Heading>
    <Text mb={4} ml={1}>Web Developer</Text>
    <Box display="flex" 
         flexDir={windowWidth > 480 ? "column" : "row"} 
         mt={windowWidth > 480 ? "15%" : "5%"} 
         gap={windowWidth > 480 ? 0 : 4}
         fontSize="18px" 
         className='anchor-container'
    >
      <Link href="/about" className='nav-anchor'>About</Link>
      <Link href="/projects" className='nav-anchor'>Projects</Link>
      <Link href="/contact" className='nav-anchor'>Contact</Link>
      <Link href="/credits" className='nav-anchor-credits'>Credits</Link>
    </Box>
   </Flex>
  )
}

export default NavMenu