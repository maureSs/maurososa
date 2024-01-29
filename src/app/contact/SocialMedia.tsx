import React, { useState, useEffect } from 'react'

import Image from 'next/image';
import Link from 'next/link';

import linkedin  from '../../../public/assets/images/linkedin.png'
import instagram from '../../../public/assets/images/instagram.png'
import twitter from '../../../public/assets/images/twitter.png'

const SocialMedia = () => {

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
      <div className='mb-4'>
        <h5 className='text-xl md:text-2xl lg:text-2xl xl:text-2xl text-center'>My social media</h5>
        <ul className='flex flex-row justify-center p-4 md:p-8 list-none'>
          <li>
            <Link href='https://www.linkedin.com/in/sosamauro/'>
              <Image
                src='/assets/images/linkedin.png'
                width={60}
                height={60}
                alt='ln-icon'
              />
            </Link>
          </li>
          <li className='ml-8'>
            <Link href='https://www.instagram.com/maurososaa/'>
              <Image
                src='/assets/images/instagram.png'
                width={60}
                height={60}
                alt='ig-icon'
              />
            </Link>
          </li>
          <li className='ml-8'>
            <Link href='https://twitter.com/maurososaa_'>
              <Image
                src='/assets/images/twitter.png'
                width={60}
                height={60}
                alt='tw-icon'
              />
            </Link>
          </li>
        </ul>
      </div>
  )
}

export default SocialMedia;
