import React, { useState, useEffect } from 'react'

import Image from 'next/image';
import Link from 'next/link';

import { Box, Heading, ListItem, UnorderedList } from '@chakra-ui/react';
import linkedin  from '../../../public/assets/images/linkedin.png'
import instagram from '../../../public/assets/images/instagram.png'
import twitter from '../../../public/assets/images/twitter.png'

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
       <Image src={linkedin} width={windowWidth > 480 ? 60 : 40} height={windowWidth > 480 ? 60 : 40} alt="ln-icon" />
      </Link>
     </ListItem>
     <ListItem ml={8}>
      <Link href="https://www.instagram.com/maurososaa/">
       <Image src={instagram} width={windowWidth > 480 ? 60 : 40} height={windowWidth > 480 ? 60 : 40} alt="ig-icon" />
      </Link>
     </ListItem>
     <ListItem ml={8}>
      <Link href="https://twitter.com/maurososaa_">
       <Image src={twitter} width={windowWidth > 480 ? 60 : 40} height={windowWidth > 480 ? 60 : 40} alt="tw-icon" />
      </Link>
     </ListItem>
    </UnorderedList>
   </Box>
  )
}

export default SocialMedia;
