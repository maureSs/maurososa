'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { Box, Heading, useColorMode } from '@chakra-ui/react';

export default function Home() {
  const router = useRouter();

  const { colorMode } = useColorMode()

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push('/main-menu'); // Cambia 'nueva-ruta' por la ruta a la que deseas redirigir
    }, 2500); 

    return () => clearTimeout(redirectTimer); // Limpiar el temporizador al desmontar el componente
  }, [router]);

  return (
    <Box w={[200, 300, 400, 600, 900]} ml='15%'>
      <Heading as='h2' id='main-title' color={colorMode === 'dark' ? 'white' : 'black'}>Mauro Sosa Portfolio</Heading>
    </Box>
  )
}
