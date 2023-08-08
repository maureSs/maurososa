'use client'
import { CacheProvider } from '@chakra-ui/next-js'
import { Box, ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

/*const home_theme = extendTheme({
  styles: {
    global:{
      body: {
        bg: "#3E3D3D",
        backgroundImage: "url('https://i.imgur.com/tiM7M0N.jpg')",
      }
    }
  },
})*/

export function Providers({children}:{children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider>
       <Box className="your-class">
        {children}
       </Box>
      </ChakraProvider>
    </CacheProvider>
  )
}