'use client'
import React from 'react'
import { Box, useColorMode  } from '@chakra-ui/react'
// Next
import { usePathname } from 'next/navigation'
// Components
import ThemeButton from './ThemeButton'
import ParticleBackground from './particles/ParticleBackground'
import NavMenu from '../components/NavMenu'

/*const breakpoints = {
  sm: '30em', // 480px
  md: '48em', // 768px
  lg: '62em', // 992px
  xl: '80em', // 1280px
  '2xl': '96em', // 1536px
}*/

export default function MainContainer({children}:{children: React.ReactNode }) {
  // Dark mode - Light mode 
  const { colorMode } = useColorMode()
  // No border for home page
  const pathname = usePathname()

  return (
    <Box className={pathname === '/' ? 'home-layout' : colorMode === 'dark' ? "root-layout" : "light-layout"}>
     <ParticleBackground colorMode={colorMode} />
     {pathname !== '/' && 
      <Box className="button-theme">
       <ThemeButton />
      </Box>
     }
     <NavMenu colorMode={colorMode} />
     {children}
    </Box>
  )
}