import React from 'react'
import FAQ from './Faq/FaqComp'
import { BsWhatsapp, BsFillTelephoneFill } from "react-icons/bs";

const Pyr = () => {
  return (
    <main className='bg-yellow h-auto w-screen'>
      <section className='flex flex-row gap-10 justify-center items-center pb-11'>
      <article className='flex relative flex-col items-center h-auto gap-5'>
        <h1 className='text-4xl  text-center font-extrabold underline decoration-solid text-black'>¿Como contactarnos?</h1>
        <a href="https://wa.me/message/E5VZNPN6CZLCM1">
        <BsWhatsapp className='text-8xl  transition-all duration-300 ease-in-out hover:text-green-500'/>
        </a>
        <figure className='flex flex-row justify-center items-center gap-3'>
          <div className='bg-black h-[2px] w-32'></div>
          <h1 className='text-3xl'>O</h1>
          <div className='bg-black h-[2px] w-32'></div>
        </figure>
        <figure className='flex flex-row justify-center items-center gap-3 '>
          <BsFillTelephoneFill className='text-6xl'/>
          <h1 className='text-3xl'>+54 3407 40-1131</h1>
        </figure>
      </article>
      <FAQ/>  
      </section>
    </main>
  )
}

export default Pyr
