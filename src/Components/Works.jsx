import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import slides from "./sliderObj.json"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const Works = () => {
  const [slidesToShow, setSlidesToShow] = useState(3); // Estado inicial para mostrar 3 imágenes
  const [space, setSpace] = useState(50)

  useEffect(() => {
    const handleResize = () => {
      // Actualizar el número de imágenes a mostrar según el tamaño de la pantalla
      if (window.innerWidth >= 1883) {
        setSlidesToShow(3); // xxl
        setSpace(50); // Restablecer espacio entre imágenes
      } else if (window.innerWidth >= 1280) {
        setSlidesToShow(3); // xl
        setSpace(50); // Restablecer espacio entre imágenes
      } else if (window.innerWidth >= 1024) {
        setSlidesToShow(3); // lg
        setSpace(25); // Restablecer espacio entre imágenes
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(2); // md
        setSpace(50); // Reducir espacio entre imágenes
      } else if (window.innerWidth >=640){
        setSlidesToShow(2); // md
        setSpace(10)
      }
      else
      {
        setSlidesToShow(1); // sm, xs
        setSpace(0); // Reducir espacio entre imágenes aún más
      }
    };

    // Escuchar el evento de cambio de tamaño de la ventana
    window.addEventListener('resize', handleResize);

    // Limpieza del efecto al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <main id='galeria' className='bg-platin w-full h-screen'>
        <section className='flex justify-center items-center flex-col gap-3'>
        <h1 className='text-black pt-[3%]
    xl:text-5xl lg:text-5xl md:text-4xl sm:text-4xl xs:text-3xl font-alegreya underline decoration-solid decoration-yellow'>Galeria</h1>
            <article className='w-full p-10 h-full '>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
              }} 
              pagination={{clickable: true}}
              scrollbar={{draggable: true}}
              spaceBetween={space}
              slidesPerView={slidesToShow}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {slides.map((slide)=>{
                return(
                  <SwiperSlide key={slide.image}>
                <img className='xxl:w-[25em] xxl:h-[25em] xl:w-[25em] xl:h-[25em] lg:w-[20em] lg:h-[20em] md:w-[20em] md:h-[20em] sm:w-[15em] sm:h-[15em] xs:w-[20em] xs:h-[20em] rounded-md hover:shadow-black  ' src={slide.image} alt={slide.Descripicion} />
                
                </SwiperSlide>
                )
              })}
               </Swiper>
            </article>
        </section>
    </main>
  )
}

export default Works