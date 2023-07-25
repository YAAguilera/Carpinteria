import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import slides from "./sliderObj.json"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const Works = () => {
  const [slidesToShow, setSlidesToShow] = useState(3); // Estado inicial para mostrar 3 imágenes

  useEffect(() => {
    const handleResize = () => {
      // Actualizar el número de imágenes a mostrar según el tamaño de la pantalla
      if (window.innerWidth >= 1883) {
        setSlidesToShow(3); // xxl

      } else if (window.innerWidth >= 1280) {
        setSlidesToShow(3); // xl

      } else if (window.innerWidth >= 1024) {
        setSlidesToShow(3); // lg

      } else if (window.innerWidth >= 768) {
        setSlidesToShow(2); // md

      } else if (window.innerWidth >= 640) {
        setSlidesToShow(2); // md

      } else {
        setSlidesToShow(1); // sm, xs
      }
      console.log(window.innerWidth);
    };

    // Ejecutar la función al montar el componente y cada vez que cambie el tamaño de la ventana
    handleResize();

    // Escuchar el evento de cambio de tamaño de la ventana
    window.addEventListener('resize', handleResize);

    // Limpieza del efecto al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
<main id='galeria' className='bg-platin w-full h-full'>
      <section className='flex justify-center items-center flex-col gap-[4em] pb-[10em]'>
        <h1 className='text-black xxl:pt-[10%] xl:pt-[10%] lg:pt-[10%] md:pt-[10%] sm:pt-[20%] xs:pt-[25%] xl:text-5xl lg:text-5xl md:text-4xl sm:text-4xl xs:text-3xl font-alegreya underline decoration-solid decoration-yellow'>
          Galeria
        </h1>
        <article className='flex relative px-20 justify-center items-center w-full h-full'>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            spaceBetween={50}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            slidesPerView={slidesToShow}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.image}>
                <div className='flex justify-center items-center h-full'>
                  <img
                    className='xxl:w-[25em] xxl:h-[25em] xl:w-[25em] xl:h-[25em] lg:w-[20em] lg:h-[20em] md:w-[20em] md:h-[20em] sm:w-[15em] sm:h-[15em] xs:w-[20em] xs:h-[20em] rounded-md hover:shadow-black'
                    src={slide.image}
                    alt={slide.Descripicion}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </article>
      </section>
    </main>
  )
}

export default Works