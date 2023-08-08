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

/*
 const [showFirstIcon, setFirstShowIcon] = useState<boolean>(false)
const [showSecondIcon, setSecondShowIcon] = useState<boolean>(false)

 <Flex display='flex' flexDirection="column" alignItems="center" height="auto" color="white" mr='40%'>
       <Heading as='h1' fontSize="45px" mb='50px'>Amo a mi novia</Heading>
       <Box mb='20px'>
        <Link href="/main-menu" onMouseOver={() => setFirstShowIcon(!showFirstIcon)} onMouseOut={() => setFirstShowIcon(!showFirstIcon)}>
          <Text fontSize="35px">
          {showFirstIcon && <Icon as={GiBroadsword} fontSize="35px" mr={2} />}
           Start
          </Text>
        </Link> 
        </Box>
        <Box>
        <Link href="/credits" onMouseOver={() => setSecondShowIcon(!showSecondIcon)} onMouseOut={() => setSecondShowIcon(!showSecondIcon)}>         
          <Text fontSize="35px">
           {showSecondIcon && <Icon as={GiBroadsword} fontSize="35px" mr={2} />} 
           Credits
          </Text>
        </Link>
       </Box>
    </Flex>
*/
