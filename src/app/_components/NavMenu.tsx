'use client'
import {useState, useEffect} from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'


function NavMenu({ colorMode }: { colorMode: string }) {
  const pathname = usePathname()

  const [windowWidth, setWindowWidth] = useState(0);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
   <div style={pathname === '/' ? {display: 'none'} : {display:'flex'}} 
        className={`flex flex-col nav-mobile-layout ${colorMode === 'dark' ? 'text-white' : 'text-black'}
        self-start p-8 pt-12`}
    >
    <h2 className="text-4xl mb-4 font-bold">Mauro Sosa</h2>
    <p className="mb-4 ml-1">Web Developer</p>
    <div className={`flex flex-row md:flex-col md:mt-8 lg:mt-12 text-lg bg-slate-100 md:bg-transparent
      ${windowWidth < 480 && 'fixed top-5 left-10 border-2 rounded-full text-black' } 
      `}>
      <Link href="/about" className='nav-anchor'>About</Link>
      <Link href="/projects" className='nav-anchor'>Projects</Link>
      <Link href="/contact" className='nav-anchor'>Contact</Link>
      <Link href="/credits" className='nav-anchor-credits'>Credits</Link>
    </div>
   </div>
  )
}

export default NavMenu