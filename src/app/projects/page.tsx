'use client'
import React, { useState, useEffect } from 'react'

import Image from 'next/image';
import Link from 'next/link';

import { myProjects } from '../api'

export type Root = ProjectInfo[]

export interface ProjectInfo {
  name: string;
  image: any;
  description: string;
  technologies: string[];
  url: string;
}

function ProjectsComponent() {
  const [myData, setMyData] = useState<ProjectInfo[]>(myProjects)

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
    <>
      {windowWidth > 480 ? (
        <>
          <h2 className='text-3xl font-bold text-center mb-8'>My projects</h2>
          <div className='grid grid-cols-2 gap-6 ml-20'>
            {myData.map((item, key) => (
            <div>
              <div
                key={key}
                className='mb-4 hover-project flex flex-col items-center'
              >
                <Link href={item.url}>
                  <figure>
                    <Image src={item.image} width={220} height={100} alt={`${item.name} + ${key}`} className='project-image-style' />
                  </figure>
                </Link>
                <div className='project-info'>
                  <h3 className='text-lg font-semibold text-center mb-4'>{item.name}</h3>
                  <p className='text-center max-w-96'>{item.description}</p>
                </div>
              </div>
               <div className='flex flex-row justify-center'>
                 {item.technologies.map((item, key) => (
                    <span key={key} className={`gap-x-4 ml-4 border-2 rounded-full text-xs py-1 px-4 text-white`}>
                     {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Link href='https://github.com/maureSs' className='github-projects block text-center mt-4'>
            Find all my projects on GitHub!
          </Link>
        </>
      ) : (
        <div>
          <h2 className='text-xl font-bold text-center mb-4'>My projects</h2>
          {myData.map((item, key) => (
          <div>
            <div key={key} className='mb-8'>
              <div className='project-info'>
                <Link href={item.url}>
                  <h3 className='text-lg font-semibold text-left mb-4'>{item.name}</h3>
                </Link>
                <p className='text-left text-sm mb-4'>{item.description}</p>
              </div>
              
                <div>
                <Link href={item.url}>
                    <Image src={item.image} width={0} height={0} sizes="100vw" alt={`${item.name} + ${key}`} className='project-image-style' />
                </Link>
                </div>
            </div>
            <div className='flex flex-row justify-start mb-7'>
              {item.technologies.map((item, key) => (
               <span key={key} className={`gap-x-2 ml-2 border-2 rounded-full text-xs py-1 px-2`}>
                {item}
               </span>
              ))}
            </div>
            </div>
          ))}
          <Link href='https://github.com/maureSs' className='github-projects block text-center mt-4'>
            Find all my projects on GitHub!
          </Link>
        </div>
      )}
    </>
  )
}

export default ProjectsComponent;