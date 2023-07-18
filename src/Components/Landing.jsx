import React from 'react'
import bg from '../assets/Homebg.jpg'
import { Link } from 'react-scroll'

const Landing = () => {
  return (
    <main id='landing' className="relative bg-cover bg-no-repeat h-screen w-screen overflow-hidden" style={{backgroundImage: `url(${bg})`}}>
        <section className='flex mt-[10em] flex-col justify-center items-center gap-3'>
        <h1 className='text-5xl font-bold text-yellow border-2 border-black inline-block px-2'>Bienvenidos a Carpintería Aguilera</h1>
        <p className='text-2xl text-white'>Donde ningún trabajo es demasiado grande o pequeño.</p>
        <p>Ofrecemos artesanía excepcional y atención personalizada.</p>
        </section>
        <section>
        <h3>¡Déjanos dar vida a tus proyectos de carpintería!</h3>
        <Link>
        <button>¡Contáctanos!</button>
        </Link>
        </section>
    </main>
  )
}

export default Landing