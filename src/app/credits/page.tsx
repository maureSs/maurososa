'use client'
import React from 'react'
import { Box, Text, Heading } from '@chakra-ui/react';


function Credits() {
  return (
    <Box w={[260, 300, 500, 500, 700]} ml={['-30%', '', '', '15%', '15%']} mb='70px' mt={['95%', '90%','30%' ,'0%' ,'0%']}>
     <Heading as ='h6' fontSize='25px' w='100%' textAlign="center">Built in:</Heading>
     <br />
     <Text textAlign="center">Next.js, React.js, TypeScript, Chakra UI, tsParticles</Text>
     <br />
     <Text textAlign="center">Made by maureS</Text>
    </Box>
  )
}

export default Credits;