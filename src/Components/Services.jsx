import React from 'react'
import ex from '../assets/services.jpg'
import rest from '../assets/restauracion.webp'
import ab from '../assets/aberturas.webp'
const Services = () => {
  return (
    <main  id='service' className='bg-platin w-full h-full'>
    <section className='flex justify-center items-center flex-col' >
    <h1 className='text-black pt-[10%] pb-8  
    xl:text-5xl lg:text-5xl md:text-4xl sm:text-4xl xs:text-3xl font-alegreya underline decoration-solid decoration-yellow'>Nuestros servicios</h1>
    <article  className='pb-10 flex xxl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col xxl:gap-40 xl:gap-40 lg:gap-20 md:gap-10 sm:gap-7 xs:gap-7'>
      {/* muebles */}
    <figure className='w-[17em] transition-all duration-500 ease-out hover:scale-105 shadow-2xl shadow-black relative h-[25em] rounded-t-md bg-white overflow-hidden'>
      <img src={ex} className="rounded-t-md" alt="muebles" />
      <h1 className='text-center font-bold'>Muebles a medida</h1>
      <h2 className='text-sm mt-3 text-center'>
      Obtenga muebles únicos y personalizados que se adaptan perfectamente a usted.
      </h2>
      <div className="w-[17em] h-[0px] left-0 top-[24em] absolute border-8 border-amber-400"></div>
    </figure>
     {/* restauraciones */}
     <figure className='w-[17em] transition-all duration-500 ease-out hover:scale-105 shadow-2xl shadow-black  relative h-[25em] rounded-t-md bg-white'>
      <img src={rest} className="  rounded-t-md" alt="reparacion y restauriacion" />
      <p className='text-center font-bold '>Reparación y restauración</p>
      <h2 className='text-sm mt-2 text-center'>
      Devolvemos la vida y el encanto a sus muebles antiguos, renovando su belleza perdida.
  </h2>
     <div className="w-[17em] h-[0px] left-0 top-[24em] absolute border-8 border-amber-400"></div>
     </figure>
     {/* aperturas */}
     <figure className='w-[17em] transition-all duration-500 ease-out hover:scale-105 shadow-2xl shadow-black  relative h-[25em] rounded-t-md bg-white'>
      <img src={ab} className="  rounded-t-md" alt="aberturas" />
      <p className='text-center font-bold'>Aberturas</p>
      <h2 className='text-sm mt-2 text-center'>
      Aberturas personalizadas para espacios únicos.
      </h2>
     <div className="w-[17em] h-[0px] left-0 top-[24em] absolute border-8 border-amber-400"></div>
     </figure>
    </article>
    </section>
    </main>
  )
} 

export default Services