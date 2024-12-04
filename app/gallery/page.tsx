"use client"  

import React from 'react'
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

//import animations
import { motion } from 'framer-motion';

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const Gallery = () => {
  return (
    
    <>
  
      <section className='bg-[#101010] text-white relative z-20'>
        <div  className='w-full h-screen flex flex-col justify-center items-center'>
          <div className='text-center font-Noto_Sans fixed z-50 bg-blend-hue'>
            <p className='font-black text-5xl lg:text-7xl xl:text-[80px] uppercase mb-4 mix-blend-difference transition-all duration-300'>Mahmood Farooqui</p>
            <p className='font-light lg:text-3xl'>Click Image To Enlarge</p>
          </div>
        </div>

        <LightGallery
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          download={false}
          >
            <a href="/gallery/Mahmood Farooqui 1.png" data-src="/gallery/Mahmood Farooqui 1.png" className='w-full h-full'>
              <img src='/gallery/Mahmood Farooqui 1.png' alt='' className='absolute top-0 left-0 w-[45vw] lg:w-[30vw] lg:top-8 lg:left-4 h-auto transition-transform duration-300 hover:scale-110 hover:shadow-lg cursor-pointer' />
            </a> 
            <a href="/gallery/Prithvi Festival.png" data-src="/gallery/Prithvi Festival.png" className='w-full h-full'>
              <img src='/gallery/Prithvi Festival.png' alt='' className='absolute top-32 right-4 w-[40vw] h-auto lg:w-[22vw] lg:top-20 lg:right-56 xl:right-[25rem]transition-transform duration-300 hover:scale-110 hover:shadow-lg cursor-pointer' />
            </a>
            <a href="/gallery/Mahmood Smiling.png" data-src="/gallery/Mahmood Smiling.png" className='w-full h-full'>
              <img src='/gallery/Mahmood Smiling.png' alt='' className='absolute top-[28rem] -right-24 w-[65vw] h-auto lg:w-[36vw] lg:top-[25rem] lg:right-[2rem] xl:right-[6rem] transition-transform duration-300 hover:scale-110 hover:shadow-lg cursor-pointer' />
            </a>
            <a href="/gallery/Mahmood From Dastan-e-mir.png" data-src="/gallery/Mahmood From Dastan-e-mir.png" className='w-full h-full'>
              <img src='/gallery/Mahmood From Dastan-e-mir.png' alt='' className='absolute top-[34rem] left-2 w-[49vw] h-auto lg:w-[32vw] lg:-bottom-[6rem] lg:left-[10rem] transition-transform duration-300 hover:scale-110 hover:shadow-lg cursor-pointer' />
            </a>
        </LightGallery>

      </section>

      <section className='bg-[#101010] text-white w-full h-[182rem] xl:h-[356rem] '>  
        <div className='relative w-full h-full'>
          <LightGallery
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          download={false}
          >
            <a href="/gallery/Mahmood With His Son And Wife.png" data-src="/gallery/Mahmood With His Son And Wife.png" className='w-full h-full'> 
              <img src='/gallery/Mahmood With His Son And Wife.png' alt='' className='absolute top-[2rem] right-8 w-[28vw] h-auto lg:w-[16vw] lg:top-[24rem] lg:right-[6rem] transition-transform duration-300 hover:scale-110 hover:shadow-lg cursor-pointer' />
            </a>
            <a href="/gallery/Mahmood Farooqui with Nitish Kumar.png" data-src="/gallery/Mahmood Farooqui with Nitish Kumar.png" className='w-full h-full'>
              <img src='/gallery/Mahmood Farooqui with Nitish Kumar.png' alt='' className='absolute top-[16rem] left-0 w-[78vw] h-auto lg:w-[38vw] lg:top-[44rem] lg:-left-1 transition-transform duration-300 hover:scale-110 hover:shadow-lg cursor-pointer' />
            </a>
            <a href="/gallery/Mahmood in garden.png" data-src="/gallery/Mahmood in garden.png" className='w-full h-full'>
              <img src='/gallery/Mahmood in garden.png' alt='' className='absolute top-[38rem] left-8 w-[28vw] h-auto lg:w-[26vw] lg:top-[24rem] xl:top-[98rem] lg:left-[6rem] xl:left-[10rem] transition-transform duration-300 hover:scale-110 hover:shadow-lg cursor-pointer' />
            </a>
            <a href="/gallery/Mahmood with naseeruddin shah.png" data-src="/gallery/Mahmood with naseeruddin shah.png" className='w-full h-full'> 
              <img src='/gallery/Mahmood with naseeruddin shah.png' alt='' className='absolute top-[48rem] right-4 w-[44vw] h-auto lg:w-[34vw] lg:top-[44rem] xl:top-[52rem] lg:right-[6rem] xl:right-[10rem] transition-transform duration-300 hover:scale-110 hover:shadow-lg cursor-pointer' />
            </a>
            <a href="/gallery/Photo For Dastan-e-karan az Mahabharat.png" data-src="/gallery/Photo For Dastan-e-karan az Mahabharat.png" className='w-full h-full'> 
              <img src='/gallery/Photo For Dastan-e-karan az Mahabharat.png' alt='' className='z-10 absolute top-[68rem] left-14 w-[60vw] h-auto lg:w-[38vw] lg:top-[6rem] xl:top-[142rem] lg:left-[18rem] transition-transform duration-300 hover:scale-110 hover:shadow-lg cursor-pointer' />
            </a>
            <a href="/gallery/Interview with Rekhta.png" data-src="/gallery/Interview with Rekhta.png" className='w-full h-full'>  
              <img src='/gallery/Interview with Rekhta.png' alt='' className='absolute top-[82rem] right-0 w-[54vw] h-auto lg:w-[26vw] lg:-top-[6rem] xl:top-[128rem] lg:right-[6rem] transition-transform duration-300 hover:scale-110 hover:shadow-lg cursor-pointer' />
            </a>
            <a href="/gallery/Mahmood with shatrugaan Shinha.png" data-src="/gallery/Mahmood with shatrugaan Shinha.png" className='w-full h-full'>  
              <img src='/gallery/Mahmood with shatrugaan Shinha.png' alt='' className='absolute bottom-[72rem] -left-12 w-[80vw] h-auto lg:w-[36vw] lg:bottom-[34rem] lg:left-[4rem] xl:bottom-[154rem] transition-transform duration-300 hover:scale-110 hover:shadow-lg cursor-pointer' />
            </a>
            <a href="/gallery/Mahmood Farooqui Black And White.png" data-src="/gallery/Mahmood Farooqui Black And White.png" className='w-full h-full'>  
              <img src='/gallery/Mahmood Farooqui Black And White.png' alt='' className='absolute bottom-[54rem] right-8 w-[32vw] h-auto lg:w-[28vw] lg:bottom-[34rem] lg:right-[10rem] xl:bottom-[130rem] transition-transform duration-300 hover:scale-110 hover:shadow-lg cursor-pointer'  />
            </a>
            <a href="/gallery/Dastan-e-mir Photo.png" data-src="/gallery/Dastan-e-mir Photo.png" className='w-full h-full'>
              <img src='/gallery/Dastan-e-mir Photo.png' alt='' className='absolute bottom-[40rem] left-2 w-[54vw] md:w-[48vw] h-auto xl:bottom-[98rem] xl:left-[2rem] transition-transform duration-300 hover:scale-110 hover:shadow-lg cursor-pointer' />
            </a>
            <a href="/gallery/Mahmood On Stage.png" data-src="/gallery/Mahmood On Stage.png" className='w-full h-full'>
              <img src='/gallery/Mahmood On Stage.png' alt='' className='absolute bottom-[24rem] right-14 w-[50vw] md:w-[36vw] h-auto xl:bottom-[78rem] transition-transform duration-300 hover:scale-110 hover:shadow-lg cursor-pointer' />
            </a>
            <a href="/gallery/Mahmood Hindu College Show.png" data-src="/gallery/Mahmood Hindu College Show.png" className='w-full h-full'>
              <img src='/gallery/Mahmood Hindu College Show.png' alt='' className='absolute bottom-[2rem] left-0 right-0 w-full h-auto transition-transform duration-300 hover:scale-110 hover:shadow-lg cursor-pointer' />
            </a>
          </LightGallery>

        </div> 
      </section>

    </>

  )
}

export default Gallery