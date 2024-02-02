'use client'
import { usePathname } from 'next/navigation'
import ThemeButton from './ThemeButton'
import { useTheme } from '../theme'
import ParticleBackground from './particles/ParticleBackground'
import ParticleBackgroundLight from './particles/ParticleBackgroundLight'
import NavMenu from './NavMenu'

export default function MainContainer({children}:{children: React.ReactNode }) {
  // Dark mode - Light mode 
  const { colorMode } = useTheme();
  // No border for home page
  const pathname = usePathname()

  return (
    <div className={`${pathname === '/' ? 'home-layout' : colorMode === 'dark' ? "root-layout" : "light-layout"}`}>
     {colorMode === 'dark' ?
     <ParticleBackground />
     : <ParticleBackgroundLight />}
     {pathname !== '/' && 
      <div className="button-theme-position">
       <ThemeButton />
      </div>
     }
      <NavMenu colorMode={colorMode} />
       {children}
    </div>
  )
}