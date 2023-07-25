import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/logocarp 2.svg';
import UseAnimations from 'react-useanimations';
import menu2 from 'react-useanimations/lib/menu2';

const Nav = () => {
  const [activeLink, setActiveLink] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMenuOpen(window.innerWidth <= 640);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className='bg-black w-screen fixed top-0 left-0 right-0 z-20
      xxl:h-[10em] xl:h-[7em] lg:h-[6em] md:h-[6em] sm:h-[6em] xs:h-[6em]'
    >
      {window.innerWidth <= 640 ? (
        <>
        <section className='flex flex-row items-center align-middle gap-4 justify-around'>
          <div >
            <img src={logo} alt="logo" className='h-[6em] w-[6em] cursor-pointer' />
          </div> 
          <div className='bg-yellow '>
            <UseAnimations animation={menu2} onClick={toggleMenu} />
          </div>
          </section>
        </>
      ) : (
        <div className='flex flex-row w-full justify-center items-center align-middle text-yellow font-semibold italic text-center
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

        <Link to='galeria'>
          <button className='hover:underline'>Galería</button>
        </Link>

        <div className='flex justify-center'> {/* Contenedor del logotipo con flexbox para centrarlo */}
          <Link
            to='landing'
            smooth={true}
            duration={700}
          >
            <img src={logo} alt="logo" className='h-[6em] w-[6em] cursor-pointer'/>
          </Link>
        </div>

        <Link to='contact'>
          <button className='hover:underline'>Contacto</button>
        </Link>

        <Link to='contact'>
          <button className=' hover:underline w-[4em] '>Preguntas frecuentes</button>
        </Link>

      </div>
      )}

      {isMenuOpen && (
        <div className='flex flex-col w-full justify-center items-center text-yellow font-semibold italic bg-black'>
          <Link
            to='service'
            smooth={true}
            duration={700}
            onClick={closeMenu}
          >
            <button className='hover:underline my-2'>Servicios</button>
          </Link>

          <Link onClick={closeMenu}>
            <button className='hover:underline my-2'>Galería</button>
          </Link>

          <Link onClick={closeMenu}>
            <button className='hover:underline my-2'>Contacto</button>
          </Link>

          <Link onClick={closeMenu}>
            <button className='w-[6em] hover:underline my-2'>Preguntas frecuentes</button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Nav;
