import React, { useState, useEffect }  from 'react'
// Next
import Image from 'next/image';
import Link from 'next/link';
// Api
import { myTechnologies } from '../api';
// Styles
import { Box, Grid, GridItem, Text } from '@chakra-ui/react';

export type Root = Technologies[]

export interface Technologies {
  name: string;
  url: string;
  image: string;
}

export default function MyTechnologies() {
  const [myData, setMyData] = useState<Technologies[]>(myTechnologies)
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
    {windowWidth > 767 ? (
     <Grid templateColumns='repeat(5, 1fr)' gap={4} alignItems='center'>
        {myData.map((item, key) => (
          <GridItem key={key} colSpan={1}>
           <Link href={item.url}>
            <Box textAlign="center" display="flex" flexDir="column" alignItems="center"> 
             <Image src={item.image} width={60} height={60} alt={`${item.name} + ${key}`} />
               <Text mt='5%' fontWeight="semibold">
                 {item.name}
               </Text>
            </Box> 
           </Link>
          </GridItem> 
        ))}   
      </Grid>
      )
      : (
        <Grid templateColumns='repeat(3, 1fr)' gap={2} alignItems='center' ml='10%'>
        {myData.map((item, key) => (
          <GridItem key={key} colSpan={1} > 
           <Link href={item.url}>
             <Image src={item.image} width={30} height={30} alt={`${item.name} + ${key}`} />
           </Link>
          </GridItem> 
        ))}   
      </Grid>
      )}
   </>
  )
}
