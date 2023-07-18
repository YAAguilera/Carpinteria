import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';
import logo from '../assets/logocarp 2.svg'

const Nav = () => {
//     const [activeLink, setActiveLink] = useState('');

//   const handleSetActive = (to) => {
//     setActiveLink(to);
//   };

  return (
    <header className='bg-black w-full h-[7em] fixed top-0 left-0 right-0 z-20 flex flex-row justify-center items-center align-middle'>
        <div className='flex flex-row w-full justify-center items-center align-middle text-yellow font-semibold italic 
        xxl:gap-[10%] xxl:text-4xl 
        xl:gap-[10%] xl:text-lg 
        lg:gap-[10%] lg:text-lg 
        md:gap-[10%] md:text-lg
        sm:gap-[4%] sm:text-md
        xs:gap-[2%] xs:text-md'>
        <Link>
          <button className='hover:underline'>Servicios</button>
        </Link>

        <Link>
          <button className='hover:underline'>Galería</button>
        </Link>

        <Link>
        <img src={logo} alt="logo" className='h-[6em] w-[6em] hover:transform hover:scale-110'/>
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