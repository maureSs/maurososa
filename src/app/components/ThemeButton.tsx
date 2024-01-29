import { AnimatePresence, motion } from 'framer-motion'
import { IconButton} from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { useTheme } from '../theme'
import { Providers } from '../providers'

const ThemeButton = () => {
  const { colorMode, toggleColorMode } = useTheme();

  return (
   <Providers>
    <AnimatePresence mode='wait' initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={colorMode}
        initial={{ y: -20, opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          style={colorMode === 'dark' ? {backgroundColor:'white'}  : {backgroundColor:'black'}}
          w={10} h={10}
          aria-label="Toggle theme"
          colorScheme={colorMode === 'dark' ? 'gray' : 'orange'}
          icon={colorMode === 'dark' ? <SunIcon color='orange' /> : <MoonIcon color='white' />}
          _hover={{ bgColor: colorMode === 'dark' ? 'orange' : 'white' }} 
          _active={{ bgColor: colorMode === 'dark' ? 'white' : 'orange' }}
          onClick={toggleColorMode}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  </Providers>
  )
}

export default ThemeButton