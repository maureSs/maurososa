'use client'
import React from 'react'
import { Box, Text, Heading } from '@chakra-ui/react';


function Credits() {
  return (
    <Box w={[200, 300, 400, 500, 700]} ml={['-25%', '-20%', '10%' ,'15%' ,'22%']} mb='70px' mt={['90%', '90%','0%' ,'0%' ,'0%']}>
     <Heading as ='h6' fontSize='25px' w='100%'>Languages / Libraries / Technologies used in my portfolio:</Heading>
     <br />
     <Text>Next.js, React.js, TypeScript, Chakra UI, tsParticles</Text>
     <br />
     <Text>Made by maureS</Text>
    </Box>
  )
}

export default Credits;