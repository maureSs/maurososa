import React from 'react'
// Next 
import Image from 'next/image';
import Link from 'next/link';
// Chakra and styles
import { Box, Button, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import linkedin  from '../../images/linkedin.png'
import instagram from '../../images/instagram.png'
import twitter from '../../images/twitter.png'

const SocialMedia = () => {
  return (
   <Box>
    <Heading as='h5' fontSize={['18px', '25px', '25px', '25px', '25px']} textAlign={['right', 'center', 'center', 'center', 'center']}>My social media</Heading>
    <UnorderedList styleType='none' display='flex' flexDir='row' justifyContent='center' p={8}>
     <ListItem>
      <Link href="https://www.linkedin.com/in/sosamauro/">
       <Image src={linkedin} width={60} height={60} alt="ln-icon" />
      </Link>
     </ListItem>
     <ListItem ml={8}>
      <Link href="https://www.instagram.com/maurososaa/">
       <Image src={instagram} width={60} height={60} alt="ig-icon" />
      </Link>
     </ListItem>
     <ListItem ml={8}>
      <Link href="https://twitter.com/maurososaa_">
       <Image src={twitter} width={60} height={60} alt="tw-icon" />
      </Link>
     </ListItem>
    </UnorderedList>
   </Box>
  )
}

export default SocialMedia;
