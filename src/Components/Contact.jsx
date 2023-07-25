import React from 'react'
import FAQ from './Faq/FaqComp'
import { BsWhatsapp, BsFillTelephoneFill } from "react-icons/bs";

const Pyr = () => {
  return (
    <main id='contact' className='bg-yellow h-auto w-screen'>
      <section className='flex justify-center items-center pb-11 
      xxl:flex-row xxl:gap-[15em]
      xl:flex-row  xl:gap-[10em]
      lg:flex-row lg:gap-[8em]
      md:flex-col md:gap-[1em]
      sm:flex-col sm:gap-[1em]
      xs:flex-col xs:gap-[1em]
      '>
      <article className='flex relative flex-col items-center h-auto gap-5'>
        <h1 className='text-center font-bold underline decoration-solid text-black pt-12
        xxl:text-4xl
        xl:text-4xl
        lg:text-4xl
        md:text-4xl
        sm:text-3xl
        xs:text-2xl'>¿Como contactarnos?</h1>
        <a href="https://wa.me/message/E5VZNPN6CZLCM1">
        <BsWhatsapp className='transition-all duration-300 ease-in-out hover:text-green-500
        xxl:text-8xl
        xl:text-8xl
        lg:text-8xl
        md:text-8xl
        sm:text-8xl 
        xs:text-6xl
        '/>
        </a>
        <figure className='flex flex-row justify-center items-center gap-3'>
          <div className='bg-black h-[2px] w-32'></div>
          <h1 className='text-3xl'>O</h1>
          <div className='bg-black h-[2px] w-32'></div>
        </figure>
        <figure className='flex flex-row justify-center items-center gap-3 '>
          <BsFillTelephoneFill className='xxl:text-6xl
        xl:text-5xl
        lg:text-4xl
        md:text-4xl
        sm:text-3xl 
        xs:text-3xl'/>
          <h1 className='xxl:text-5xl
        xl:text-3xl
        lg:text-3xl
        md:text-3xl
        sm:text-3xl 
        xs:text-3xl'>+54 3407 40-1131</h1>
        </figure>
      </article>
      <FAQ/>  
      </section>
    </main>
  )
}

export default Pyr
