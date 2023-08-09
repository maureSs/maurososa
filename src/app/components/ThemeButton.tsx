import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <AnimatePresence mode='wait' initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('dark', 'light')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          w={10} h={10}
          aria-label="Toggle theme"
          colorScheme={useColorModeValue('orange', 'gray')}
          icon={useColorModeValue(<SunIcon />, <MoonIcon color='black' />)}
          _hover={colorMode === 'dark' ? { bgColor: 'white' } : {bgColor: 'orange'}} 
          _active={colorMode === 'dark' ? { bgColor: 'white' } : {bgColor: 'orange'}} 
          bgColor={useColorModeValue('orange', 'white')} 
          onClick={toggleColorMode}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeButton