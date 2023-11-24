'use client'
import React from 'react'
// Next
import Link from 'next/link'
import { usePathname } from 'next/navigation'
// Chakra UI
import { Flex, Box, Heading, Text } from '@chakra-ui/react'

function NavMenu({ colorMode }: { colorMode: 'light' | 'dark' }) {
    const pathname = usePathname()
  return (
   <Flex
    style={pathname === '/' ? {display: 'none'} : {display:'flex'}}
    flexDirection="column"
    w='30%'
    h='90vh'
    color={colorMode === 'dark' ? "white" : "black"}
    p={6}
    alignItems="flex-start"
    className='nav-mobile-layout'
   >
    <Heading as='h2' fontSize="40px" mb={4}>Mauro Sosa</Heading>
    <Text mb={4} ml={1}>Web Developer</Text>
    <Box display="flex" flexDir="column" mt="15%" fontSize="18px" className='anchor-container'>
      <Link href="/about" className='nav-anchor'>About</Link>
      <Link href="/projects" className='nav-anchor'>Projects</Link>
      <Link href="/contact" className='nav-anchor'>Contact</Link>
      <Link href="/credits" className='nav-anchor-credits'>Credits</Link>
    </Box>
   </Flex>
  )
}

export default NavMenu