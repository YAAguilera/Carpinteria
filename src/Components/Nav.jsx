import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';
import logo from '../assets/logocarp 2.svg'
import { useState } from 'react';

const Nav = () => {
    const [activeLink, setActiveLink] = useState('');

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  return (
    <header className='bg-black w-screen fixed top-0 left-0 right-0 z-20 flex flex-row justify-center items-center align-middle
    xxl:h-[10em]
    xl:h-[6em]
    lg:h-[6em]
    md:h-[6em]
    sm:h-[6em]
    xs:h-[6em]
    '>
        <div className='flex flex-row w-full justify-center items-center align-middle text-yellow font-semibold italic 
        xxl:gap-[10%] xxl:text-3xl 
        xl:gap-[10%] xl:text-xl 
        lg:gap-[10%] lg:text-lg
        md:gap-[8%] md:text-lg
        sm:gap-[6%] sm:text-md
        xs:gap-[3%] xs:text-sm'>
        <Link
        to='service'
        smooth={true}
        duration={700}
        >
          <button className='hover:underline'>Servicios</button>
        </Link>

        <Link>
          <button className='hover:underline'>Galería</button>
        </Link>

        <Link
        to='landing'
        smooth={true}
        duration={700}
        >
        <img src={logo} alt="logo" className='h-[6em] w-[6em] cursor-pointer'/>
        </Link>

        <Link>
          <button className='hover:underline'>Contacto</button>
        </Link>

        <Link
        >
          <button className='w-[6em] hover:underline'>Preguntas frecuentes</button>
        </Link>

      </div>
    </header>
  )
}

export default Nav