'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useTheme } from './theme';

export default function Home() {
  const router = useRouter();

  const { colorMode, toggleColorMode } = useTheme();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push('/main-menu');
    }, 2500); 

    return () => clearTimeout(redirectTimer);
  }, [router]);

  return (
    <div className='inner-content pt-60'>
      <h2 className={`pl-70 text-3xl font-bold ${colorMode === 'dark' ? 'text-white' : 'text-black'}`}>Mauro Sosa Portfolio</h2>
    </div>
  )
}
