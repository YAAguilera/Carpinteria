import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/logocarp 2.svg';
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";

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
      xxl:h-[10em] xl:h-[7em] lg:h-[7em] md:h-[6em] sm:h-[6em] xs:h-[6em]'
    >
      {window.innerWidth <= 640 ? (
        <>
        <section className='flex flex-row items-center align-middle justify-around'>
          <div >
            <img src={logo} alt="logo" className='h-[6em] w-[6em] cursor-pointer' />
          </div> 
          <div className='text-yellow text-3xl'>
          {isMenuOpen ? (
                <FiX onClick={toggleMenu} />
              ) : (
                <FiMenu onClick={toggleMenu} />
              )}
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
          <button className={activeLink === 'service' ? 'underline my-2' : 'hover:underline my-2'}>Servicios</button>
        </Link>

        <Link 
        to='galeria'
        smooth={true}
        duration={700}
        >
          <button className={activeLink === 'galeria' ? 'underline my-2' : 'hover:underline my-2'}>Galería</button>
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

        <Link 
        to='contact'
        smooth={true}
        duration={700}
        >
          <button className={activeLink === 'contact' ? 'underline my-2' : 'hover:underline my-2'}>Contacto</button>
        </Link>

        <Link to='contact'
        smooth={true}
        duration={700}
        >
          <button className={activeLink === 'contact' ? 'underline my-2 w-16' : 'hover:underline my-2 w-16'}>Preguntas frecuentes</button>
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

          <Link 
          to='galeria'
          smooth={true}
          duration={700}
          onClick={closeMenu}>
            <button className='hover:underline my-2'>Galería</button>
          </Link>

          <Link 
          to='contact'
          smooth={true}
          duration={700}
          onClick={closeMenu}>
            <button className='hover:underline my-2'>Contacto</button>
          </Link>

          <Link 
          to='contact'
          smooth={true}
          duration={700}
          onClick={closeMenu}>
            <button className='hover:underline my-2'>Preguntas frecuentes</button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Nav;
