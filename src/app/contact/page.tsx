'use client'
import React from 'react'
// Next 
import Link from 'next/link';
// Chakra and styles
import { Box, Button, useColorMode } from '@chakra-ui/react';
// Components
import SocialMedia from './SocialMedia'
import ContactForm from './ContactForm';

function Contact() {
  const { colorMode } = useColorMode()

  return (
    <Box w={[250, 300, 300, 500, 800]} ml={['-10%', '-20%', '25%' ,'25%' ,'25%']} mb='5%' mt={['-30%', '90%', '0%' ,'0%' ,'0%']}>
     <SocialMedia />
     <Box display='flex' flexDir='column' justifyContent='center' className='email-buttons'>
      <ContactForm />
      <Button 
       bgColor={colorMode === 'dark' ? 'brand' : '#76A8CA'}
       _hover={colorMode === 'dark' ? { bg: "#3A3B3C" } : { bg: "#92C1E1" }}
      >
        <Link href="mailto:maurososa118@gmail.com">Send me an email</Link>
      </Button>
     </Box>
    </Box>
  )
}

export default Contact;