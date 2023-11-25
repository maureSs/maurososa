import React, { useState, useEffect } from 'react'
// Next 
import Image from 'next/image';
import Link from 'next/link';
// Chakra and styles
import { Box, Button, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import linkedin  from '../../images/linkedin.png'
import instagram from '../../images/instagram.png'
import twitter from '../../images/twitter.png'

const SocialMedia = () => {

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
   <Box>
    <Heading as='h5' fontSize={['18px', '25px', '25px', '25px', '25px']} textAlign={['center', 'center', 'center', 'center', 'center']}>My social media</Heading>
    <UnorderedList styleType='none' display='flex' flexDir='row' justifyContent='center' p={windowWidth > 767 ? 8 : 4}>
     <ListItem>
      <Link href="https://www.linkedin.com/in/sosamauro/">
       <Image src={linkedin} width={windowWidth > 767 ? 60 : 30} height={windowWidth > 767 ? 60 : 30} alt="ln-icon" />
      </Link>
     </ListItem>
     <ListItem ml={8}>
      <Link href="https://www.instagram.com/maurososaa/">
       <Image src={instagram} width={windowWidth > 767 ? 60 : 30} height={windowWidth > 767 ? 60 : 30} alt="ig-icon" />
      </Link>
     </ListItem>
     <ListItem ml={8}>
      <Link href="https://twitter.com/maurososaa_">
       <Image src={twitter} width={windowWidth > 767 ? 60 : 30} height={windowWidth > 767 ? 60 : 30} alt="tw-icon" />
      </Link>
     </ListItem>
    </UnorderedList>
   </Box>
  )
}

export default SocialMedia;
