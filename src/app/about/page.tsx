'use client'
import {useState, useEffect} from 'react';

import MyTechnologies  from '@/components/MyTechnologies';

import {aboutMe} from '../api'

function About() {
  const [windowHeight, setWindowHeight] = useState(0);

  const handleResize = () => {
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='inner-content'>
    <p className="sm:text-lg md:text-xl mb-5">
      {aboutMe}
    </p>
    <p className="text-lg text-center mb-5">Languages and technologies</p>
    <MyTechnologies />
    <div className="mt-20 text-right">
      <h5 className="text-2xl">I ♥</h5>
      <p className="text-base">
        Videogames, Music, Technology, Streaming, Coffee, Movies and tv shows, Sports, Girlfriend
      </p>
    </div>
  </div>
  )
}

export default About;