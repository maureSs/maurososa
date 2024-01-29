'use client'
import { CacheProvider } from '@chakra-ui/next-js'
import { Box, ChakraProvider } from '@chakra-ui/react'

export function Providers({children}:{children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider>
       <Box>
        {children}
       </Box>
      </ChakraProvider>
    </CacheProvider>
  )
}