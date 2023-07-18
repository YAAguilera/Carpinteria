import React from 'react'
import bg from '../assets/Homebg.jpg'
import { Link } from 'react-scroll'

const Landing = () => {
  return (
    <main id='landing' className="relative bg-cover bg-no-repeat h-screen w-screen overflow-hidden" style={{backgroundImage: `url(${bg})`}}>
        <section className='flex flex-col justify-center items-center text-center 
        xxl:gap-4 xxl:mt-[12em]
        xl:gap-4 xl:mt-[10em]
        lg:gap-2 lg:mt-[10em]
        md:gap-2 md:mt-[10em]
        sm:gap-2 sm:mt-[8em]
        xs:gap-2 xs:mt-[7em]
        '>
        <h1 className=' text-yellow font-alegreya font-bold 
        xxl:text-8xl xxl:m-12
        xl:text-7xl xl:m-8
        lg:text-6xl lg:m-3
        md:text-5xl md:m-3
        sm:text-4xl sm:m-3
        xs:text-2xl xs:m-3
        ' >Bienvenidos a Carpintería Aguilera</h1>
        <p className='text-white font-thin
         xxl:text-5xl 
         xl:text-4xl 
         lg:text-3xl
         md:text-2xl
         sm:text-xl
         xs:text-lg
        '>Donde ningún trabajo es demasiado grande o pequeño.</p>
        <p className='text-3xl text-white font-thin
        xxl:text-5xl 
        xl:text-4xl 
        lg:text-3xl
        md:text-2xl
        sm:text-xl
        xs:text-lg
        '>Ofrecemos artesanía excepcional y atención personalizada.</p>
        </section>
        <section className='flex flex-col justify-center items-center text-center 
        xxl:mt-20 xxl:gap-5 
        xl:mt-20 xl:gap-5 
        lg:mt-16 lg:gap-5 
        md:mt-14 md:gap-5 
        sm:mt-14 sm:gap-5 
        xs:mt-14 xs:gap-5 
        '>
        <h3 className='text-4xl font-semibold text-white font-alegreya
        xxl:text-6xl 
        xl:text-5xl 
        lg:text-4xl
        md:text-3xl
        sm:text-3xl
        xs:text-xl
        '>¡Déjanos dar vida a tus proyectos de carpintería!</h3>
        <Link> 
        <button className='font-alegreya font-semibold text-yellow text-center bg-black transition-all duration-500 ease-in-out hover:transform hover:scale-110 rounded-full
        xxl:p-[9%] xxl:text-5xl 
        xl:p-[8%] xl:text-4xl
        lg:p-[8%] lg:text-3xl
        md:p-[8%] md:text-3xl
        sm:p-[8%] sm:text-3xl
        xs:p-[8%] xs:text-2xl
        '>¡Contáctanos!</button>
        </Link>
        </section>
    </main>
  )
}

export default Landing