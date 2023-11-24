import React, { useState }  from 'react'
// Next
import Image from 'next/image';
import Link from 'next/link';
// Api
import { myTechnologies } from '../api';
// Styles
import { Grid, GridItem } from '@chakra-ui/react';

export type Root = Technologies[]

export interface Technologies {
  name: string;
  url: string;
  image: string;
}

export default function MyTechnologies() {
  const [myData, setMyData] = useState<Technologies[]>(myTechnologies)

  return (
    <>
     <Grid templateColumns='repeat(5, 1fr)' gap={4} alignItems='center'>
        {myData.map((item, key) => (
          <GridItem key={key} colSpan={1}>
           <Link href={item.url}>
            <Image src={item.image} width={60} height={60} alt={`${item.name} + ${key}`} />
           </Link>
          </GridItem> 
        ))}   
      </Grid>
   </>
  )
}
