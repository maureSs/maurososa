import { useState, useEffect }  from 'react'

import Image from 'next/image';
import Link from 'next/link';

import { myTechnologies } from '../api';


export type Root = Technologies[]

export interface Technologies {
  name: string;
  url: string;
  image: string;
}

export default function MyTechnologies() {
  const [myData, setMyData] = useState<Technologies[]>(myTechnologies)
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
    <div>
      {windowWidth > 767 ? (
        <div className="grid grid-cols-5 gap-4 items-center">
          {myData.map((item, key) => (
            <div key={key} className="col-span-1">
              <Link href={item.url}>
                <div className="text-center flex flex-col items-center">
                  <Image src={item.image} width={40} height={40} alt={`${item.name} + ${key}`} />
                  <p className="mt-5 font-semibold">{item.name}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4 items-center ml-5">
          {myData.map((item, key) => (
            <div key={key} className="col-span-1">
              <Link href={item.url}>
                <Image src={item.image} width={50} height={50} alt={`${item.name} + ${key}`} />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>    
  )
}
