import React from 'react'

const Gallery = () => {
  return (
    
    <>
  
      <section className='bg-[#101010] text-white relative z-20'>
        <div  className='w-full h-screen flex flex-col justify-center items-center'>
          <div className='text-center font-Noto_Sans fixed z-50'>
            <p className='font-black text-5xl lg:text-7xl xl:text-[80px] uppercase mb-4 text-tra mix-blend-difference'>Mahmood Farooqui</p>
            <p className='font-light lg:text-3xl'>Click Image To Enlarge</p>
          </div>
        </div>
        <img src='/gallery/Mahmood Farooqui 1.png' alt='' className='absolute top-0 left-0 w-[45vw] lg:w-[30vw] lg:top-8 lg:left-4 h-auto' />
        <img src='/gallery/Prithvi Festival.png' alt='' className='absolute top-32 right-4 w-[40vw] h-auto lg:w-[22vw] lg:top-20 lg:right-56 xl:right-[25rem]' />
        <img src='/gallery/Mahmood Smiling.png' alt='' className='absolute top-[28rem] -right-24 w-[65vw] h-auto lg:w-[36vw] lg:top-[25rem] lg:right-[2rem] xl:right-[6rem]' />
        <img src='/gallery/Mahmood From Dastan-e-mir.png' alt='' className='absolute top-[34rem] left-2 w-[49vw] h-auto lg:w-[32vw] lg:-bottom-[6rem] lg:left-[10rem]' />
      </section>

      <section className='bg-[#101010] text-white w-full h-[182rem] xl:h-[356rem] '>  
        <div className='relative w-full h-full'>
          <img src='/gallery/Mahmood With His Son And Wife.png' alt='' className='absolute top-[2rem] right-8 w-[28vw] h-auto lg:w-[16vw] lg:top-[24rem] lg:right-[6rem]' />
          <img src='/gallery/Mahmood Farooqui with Nitish Kumar.png' alt='' className='absolute top-[16rem] left-0 w-[78vw] h-auto lg:w-[38vw] lg:top-[44rem] lg:-left-1' />
          <img src='/gallery/Mahmood in garden.png' alt='' className='absolute top-[38rem] left-8 w-[28vw] h-auto lg:w-[26vw] lg:top-[24rem] xl:top-[98rem] lg:left-[6rem] xl:left-[10rem]' />
          <img src='/gallery/Mahmood with naseeruddin shah.png' alt='' className='absolute top-[48rem] right-4 w-[44vw] h-auto lg:w-[34vw] lg:top-[44rem] xl:top-[52rem] lg:right-[6rem] xl:right-[10rem]' />
          <img src='/gallery/Photo For Dastan-e-karan az Mahabharat.png' alt='' className='z-10 absolute top-[68rem] left-14 w-[60vw] h-auto lg:w-[38vw] lg:top-[6rem] xl:top-[142rem] lg:left-[18rem]' />
          <img src='/gallery/Interview with Rekhta.png' alt='' className='absolute top-[82rem] right-0 w-[54vw] h-auto lg:w-[26vw] lg:-top-[6rem] xl:top-[128rem] lg:right-[6rem]' />
          <img src='/gallery/Mahmood with shatrugaan Shinha.png' alt='' className='absolute bottom-[72rem] -left-12 w-[80vw] h-auto lg:w-[36vw] lg:bottom-[34rem] lg:left-[4rem] xl:bottom-[154rem]' />
          <img src='/gallery/Mahmood Farooqui Black And White.png' alt='' className='absolute bottom-[54rem] right-8 w-[32vw] h-auto lg:w-[28vw] lg:bottom-[34rem] lg:right-[10rem] xl:bottom-[130rem]' />
          <img src='/gallery/Dastan-e-mir Photo.png' alt='' className='absolute bottom-[46rem] left-2 w-[48vw] h-auto xl:bottom-[98rem] xl:left-[2rem]' />
          <img src='/gallery/Mahmood On Stage.png' alt='' className='absolute bottom-[36rem] right-14 w-[36vw] h-auto xl:bottom-[78rem]' />
          <img src='/gallery/Mahmood Hindu College Show.png' alt='' className='absolute bottom-[2rem] left-0 right-0 w-full h-auto' />
        </div> 
      </section>

    </>

  )
}

export default Gallery