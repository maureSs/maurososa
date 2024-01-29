'use client'
import React from 'react'
import { Box, useColorMode } from '@chakra-ui/react'
// Next
import { usePathname } from 'next/navigation'
// Components
import ThemeButton from './ThemeButton'
import ParticleBackground from './particles/ParticleBackground'
import ParticleBackgroundLight from './particles/ParticleBackgroundLight'
import NavMenu from '../components/NavMenu'

export default function MainContainer({children}:{children: React.ReactNode }) {
  // Dark mode - Light mode 
  const { colorMode } = useColorMode()
  // No border for home page
  const pathname = usePathname()

  return (
    <Box className={pathname === '/' ? 'home-layout' : colorMode === 'dark' ? "root-layout" : "light-layout"}>
     {colorMode === 'dark' ?
     <ParticleBackground />
     : <ParticleBackgroundLight />}
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