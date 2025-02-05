"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



type CustomCSSProperties = React.CSSProperties & {
  [key: `--${string}`]: string | number;
};

const swiperCustomStyles: CustomCSSProperties = {
  "--swiper-pagination-color": "#ffffff",
  "--swiper-pagination-bullet-inactive-color": "#999999",
  "--swiper-pagination-bullet-inactive-opacity": "1",
  "--swiper-pagination-bullet-size": "16px",
  "--swiper-pagination-bullet-horizontal-gap": "6px",
  "--swiper-pagination-bottom": "0px",
};

  export default function Home() {
    
  return (

    <div className='relative'>

      <button onClick={() => (window.location.href = "/about")} className='flex justify-center items-center z-30 fixed bottom-12 right-7 md:bottom-20 md:right-20 py-2 px-4 md:py-3 md:px-6 text-white border border-gray-300 text-base md:text-lg font-Noto_Sans font-semibold rounded-3xl bg-[#AA1F18] hover:bg-[#77231e] transition-all duration-300'>know more about me&ensp;
        <motion.span
         animate={{ x: [0, 5, 0] }} 
         transition={{ repeat: Infinity, duration: 1 }} 
        >
          <img className='animate' src="./arrow.svg" alt="arrow icon" />
        </motion.span>
      </button>

      {/* SECTION 1 */}

      <section className="bg-primary-bg pt-16 lg:pt-0 pb-16 w-full relative">
          {/* <img className="top-image cursor-pointer w-[20rem] h-auto -mt-10 top-[11.5rem] sm:w-[20rem] sm:top-[16rem] md:w-[25rem] lg:top-[6rem] lg:w-[30rem] min-[1300px]:w-[35rem] bxl:w-[30vw] left-1/2 transform -translate-x-1/2 absolute z-30" src="/home/hero/hero-main-bg.jpg" alt="" />
          <img className="foreground-image cursor-pointer w-[20rem] h-auto -mt-10 top-[11.5rem] sm:w-[20rem] sm:top-[16rem] md:w-[25rem] lg:top-[6rem] lg:w-[30rem] min-[1300px]:w-[35rem] bxl:w-[30vw] left-1/2 transform -translate-x-1/2 absolute z-30" src="/home/hero/hero-main-fg.jpg" alt="" /> */}
          <div className="w-full h-[44rem] flex flex-col justify-between items-center lg:gap-16 lg:h-auto">
            <motion.h1 className="uppercase font-black font-Noto_Sans text-[19vw] text-white"
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }}  
            transition={{ duration: 2, ease: 'easeOut' }}  
            viewport={{ once: true, amount: 0.25 }} 
            >dastango</motion.h1>

            <div className="w-full lg:-mt-[16rem] inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_3rem,_black_calc(100%-7rem),transparent_100%)]">

                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-scroll">
                  <li>         
                     <img className="w-[18rem] lg:w-[24rem] h-auto" src="/home/hero/hero-img-1.png" alt="G20" /> 
                  </li>
                  <li>
                     <img className="w-[18rem] lg:w-[24rem] h-auto" src="/home/hero/hero-img-2.png" alt="gov" /> 
                  </li>
                  <li>
                      <img className="w-[18rem] lg:w-[24rem] h-auto z-20" src="/home/hero/hero-img-3.png" alt="hp government" />
                  </li>
                  <li>
                      <img className="w-[18rem] lg:w-[24rem] h-auto" src="/home/hero/hero-img-4.png" alt="gov india" />              
                  </li>
                </ul>

                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-scroll" aria-hidden="true">

                  <li>         
                     <img className="w-[18rem] lg:w-[24rem] h-auto" src="/home/hero/hero-img-1.png" alt="G20" /> 
                  </li>
                  <li>
                     <img className="w-[18rem] lg:w-[24rem] h-auto" src="/home/hero/hero-img-2.png" alt="gov" /> 
                  </li>
                  <li>
                      <img className="w-[18rem] lg:w-[24rem] h-auto z-20" src="/home/hero/hero-img-3.png" alt="hp government" />
                  </li>
                  <li>
                      <img className="w-[18rem] lg:w-[24rem] h-auto" src="/home/hero/hero-img-4.png" alt="gov india" />              
                  </li>

                </ul> 

            </div>

            <div className='w-full min-[1300px]:px-20 flex flex-col md:flex-row justify-between items-start px-6 gap-10 md:gap-0 lg:gap-16 min-[1300px]:gap-12 bxl:gap-0'>
              <div className='flex justify-center items-start lg:gap-10'>
                <motion.h2 className="uppercase font-Trajan_Pro font-bold text-5xl text-primary-red bxl:text-[3.5vw]"
                  initial={{ opacity: 0, y: 50 }} 
                  whileInView={{ opacity: 1, y: 0 }}  
                  transition={{ duration: 2, ease: 'easeOut' }}  
                  viewport={{ once: true, amount: 0.25 }} 
                  ><span className='text-3xl lg:text-4xl'>Mahmood</span><br/>Farooqui</motion.h2>
              
                <div className='hidden md:block md:px-7 self-center'>
                  <ul className='uppercase text-white font-Noto_Sans font-medium text-2xl flex flex-col justify-center gap-2 min-[1300px]:text-[32px] bxl:text-[2.5vw] bxl:leading-none'>
                    <motion.li
                    initial={{ opacity: 0, y: 50 }}  
                    whileInView={{ opacity: 1, y: 0 }}  
                    transition={{ duration: 1.25, ease: 'easeOut' }}  
                    viewport={{ once: true, amount: 0.25 }}
                    >writer</motion.li>
                    <motion.li
                    initial={{ opacity: 0, y: 50 }}  
                    whileInView={{ opacity: 1, y: 0 }}  
                    transition={{ duration: 1.25, ease: 'easeOut' }}  
                    viewport={{ once: true, amount: 0.25 }}
                    >dastango</motion.li>
                    <motion.li
                    initial={{ opacity: 0, y: 50 }}  
                    whileInView={{ opacity: 1, y: 0 }}  
                    transition={{ duration: 1.25, ease: 'easeOut' }}  
                    viewport={{ once: true, amount: 0.25 }}
                    >director</motion.li>
                  </ul>   
                </div>
              </div>
              <div className="w-full md:w-[32vw] text-white -mt-3 self-start z-20">
                <motion.p className="font-Noto_Sans font-light md:w-[32vw] lg:pl-0 lg:font-medium min-[1300px]:text-[22px] bxl:text-[1.5vw] "
                initial={{ opacity: 0, y: 50 }}  
                whileInView={{ opacity: 1, y: 0 }}  
                transition={{ duration: 1.25, ease: 'easeOut' }}  
                viewport={{ once: true, amount: 0.25 }}
                >Mahmood Farooqui is an acclaimed Indian writer, performer, and director, celebrated for reviving and popularizing Dastangoi, a lost form of Urdu storytelling.</motion.p>
              </div>
            </div>
          </div>           
      </section>     

      {/* SECTTION 2 */}

      <section className="bg-primary-red w-full h-auto">
            <div className="py-[4rem] px-6 lg:px-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 justify-items-center content-center">
                <div className="text-white flex flex-col">
                  <div>
                    <motion.h3 className="uppercase text-white font-Noto_Sans font-bold text-[2rem] lg:text-[5rem] mb-6"
                      initial={{ opacity: 0, y: 50 }}  
                      whileInView={{ opacity: 1, y: 0 }}  
                      transition={{ duration: 2, ease: 'easeOut' }}  
                      viewport={{ once: true, amount: 0.25 }}
                      >DASTANGOI
                    </motion.h3>
                    <div className='flex flex-col gap-10 lg:gap-20'>
                      <motion.p className="font-Noto_Sans"
                      initial={{ opacity: 0, y: 50 }}  
                      whileInView={{ opacity: 1, y: 0 }}  
                      transition={{ duration: 1.25, ease: 'easeOut' }}  
                      viewport={{ once: true, amount: 0.25 }}
                      >Mahmood Farooqui is a pivotal figure in Indian arts, celebrated for reviving the ancient art of Dastangoi. A master storyteller, he brings history and culture to life, using this traditional Urdu narrative form to connect the past with modern-day themes. His performances transcend mere storytelling, immersing audiences in deeply evocative and timeless narratives.
                      </motion.p>                  
                      <div>
                        <Image className="w-full" src="/home/posters.jpg" alt="My Image" width={500} height={300} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='place-self-center'>
                  <Swiper className='h-auto w-[88vw]  lg:w-[26vw]'
                     style={swiperCustomStyles}
                    loop={true}
                    modules={[Pagination, A11y, EffectCoverflow]}
                    spaceBetween={0}
                    slidesPerView={1}
                    effect={"coverflow"}
                    coverflowEffect={{
                      rotate: 15,
                      stretch: 0,
                      depth: 50,
                      scale: 0.93,
                      modifier: 1,
                      slideShadows: false,
                    }}
                    pagination={{ dynamicBullets: true }}
                    centeredSlides={true}
                    breakpoints={{
                      500: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                      },
                      640: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                      },
                      768: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                      },
                      1024: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                      },
                    }}
                  >
                    <SwiperSlide>
                      {({ isActive }) => (
                        <div
                          className={`mb-12 xxxl:mb-6 transition-opacity duration-300 ${
                            isActive ? "opacity-100" : "opacity-50"
                          }`}
                        >
                          <img
                            className="w-full xxxl:h-[36rem] border rounded-t-xl border-none"
                            src="./home/dastangoi/poster-1.jpg"
                            alt=""
                          />

                          <div className='rounded-b-xl p-4 flex flex-col gap-y-4 border border-white'>
                            <p className="font-Noto_Sans text-3xl text-white font-bold md:text-2xl xl:text-3xl">
                            Dastan-e-Karn az Mahabharat
                            </p>
                            {/* <p className="text-white text-md font-light font-Noto_Sans md:text-[15px] xl:text-lg leading-tight">
                            is a passionate retelling of the life of Karna, a prominent character from the Indian epic Mahabharata combining a great variety of sources.
                            </p> */}
                            <div className="w-full text-center flex justify-between items-center gap-y-4 gap-x-4 xl:gap-x-6">
                              <button className="w-full text-center bg-white  border rounded-md font-Noto_Sans font-bold py-2 text-md xl:text-lg md:text-[16px] md:min-w-[6rem] tracking-tighter hover:bg-gray-300 text-primary-red
                              hover:font-medium
                              transition-all duration-700">
                                Show
                              </button>
                              <button className="w-full text-center text-white border rounded-md font-Noto_Sans font-bold py-2 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-[#77231e]
                              hover:font-medium
                              transition-all duration-700">
                                Learn More
                              </button>
                            </div>
                          </div>
                          
                        </div>
                      )}
                    </SwiperSlide>
                    <SwiperSlide>
                      {({ isActive }) => (
                        <div
                          className={`mb-12 xxxl:mb-6 transition-opacity duration-300 ${
                            isActive ? "opacity-100" : "opacity-50"
                          }`}
                        >
                          <img
                            className="w-full xxxl:h-[36rem] border rounded-t-xl border-none"
                            src="./home/dastangoi/poster-2.jpg"
                            alt=""
                          />

                          <div className='rounded-b-xl p-4 flex flex-col gap-y-4 border border-white'>
                            <p className="font-Noto_Sans text-3xl text-white font-bold md:text-2xl xl:text-3xl">
                            Dastan-e-Karn az Mahabharat
                            </p>
                            {/* <p className="text-white text-md font-light font-Noto_Sans md:text-[15px] xl:text-lg leading-tight">
                            is a passionate retelling of the life of Karna, a prominent character from the Indian epic Mahabharata combining a great variety of sources.
                            </p> */}
                            <div className="w-full text-center flex justify-between items-center gap-y-4 gap-x-4 xl:gap-x-6">
                              <button className="w-full text-center bg-white  border rounded-md font-Noto_Sans font-bold py-2 text-md xl:text-lg md:text-[16px] md:min-w-[6rem] tracking-tighter hover:bg-gray-300 text-primary-red
                              hover:font-medium
                              transition-all duration-700">
                                Show
                              </button>
                              <button className="w-full text-center text-white border rounded-md font-Noto_Sans font-bold py-2 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-[#77231e]
                              hover:font-medium
                              transition-all duration-700">
                                Learn More
                              </button>
                            </div>
                          </div>
                          
                        </div>
                      )}
                    </SwiperSlide>
                    <SwiperSlide>
                      {({ isActive }) => (
                        <div
                          className={`mb-12 xxxl:mb-6 transition-opacity duration-300 ${
                            isActive ? "opacity-100" : "opacity-50"
                          }`}
                        >
                          <img
                            className="w-full xxxl:h-[36rem] border rounded-t-xl border-none"
                            src="./home/dastangoi/poster-3.jpg"
                            alt=""
                          />

                          <div className='rounded-b-xl p-4 flex flex-col gap-y-4 border border-white'>
                            <p className="font-Noto_Sans text-3xl text-white font-bold md:text-2xl xl:text-3xl">
                            Dastan-e-Karn az Mahabharat
                            </p>
                            {/* <p className="text-white text-md font-light font-Noto_Sans md:text-[15px] xl:text-lg leading-tight">
                            is a passionate retelling of the life of Karna, a prominent character from the Indian epic Mahabharata combining a great variety of sources.
                            </p> */}
                            <div className="w-full text-center flex justify-between items-center gap-y-4 gap-x-4 xl:gap-x-6">
                              <button className="w-full text-center bg-white  border rounded-md font-Noto_Sans font-bold py-2 text-md xl:text-lg md:text-[16px] md:min-w-[6rem] tracking-tighter hover:bg-gray-300 text-primary-red
                              hover:font-medium
                              transition-all duration-700">
                                Show
                              </button>
                              <button className="w-full text-center text-white border rounded-md font-Noto_Sans font-bold py-2 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-[#77231e]
                              hover:font-medium
                              transition-all duration-700">
                                Learn More
                              </button>
                            </div>
                          </div>
                          
                        </div>
                      )}
                    </SwiperSlide>
                    <SwiperSlide>
                      {({ isActive }) => (
                        <div
                          className={`mb-12 xxxl:mb-6 transition-opacity duration-300 ${
                            isActive ? "opacity-100" : "opacity-50"
                          }`}
                        >
                          <img
                            className="w-full xxxl:h-[36rem] border rounded-t-xl border-none"
                            src="./home/dastangoi/poster-4.jpg"
                            alt=""
                          />

                          <div className='rounded-b-xl p-4 flex flex-col gap-y-4 border border-white'>
                            <p className="font-Noto_Sans text-3xl text-white font-bold md:text-2xl xl:text-3xl">
                            Dastan-e-Karn az Mahabharat
                            </p>
                            {/* <p className="text-white text-md font-light font-Noto_Sans md:text-[15px] xl:text-lg leading-tight">
                            is a passionate retelling of the life of Karna, a prominent character from the Indian epic Mahabharata combining a great variety of sources.
                            </p> */}
                            <div className="w-full text-center flex justify-between items-center gap-y-4 gap-x-4 xl:gap-x-6">
                              <button className="w-full text-center bg-white  border rounded-md font-Noto_Sans font-bold py-2 text-md xl:text-lg md:text-[16px] md:min-w-[6rem] tracking-tighter hover:bg-gray-300 text-primary-red
                              hover:font-medium
                              transition-all duration-700">
                                Show
                              </button>
                              <button className="w-full text-center text-white border rounded-md font-Noto_Sans font-bold py-2 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-[#77231e]
                              hover:font-medium
                              transition-all duration-700">
                                Learn More
                              </button>
                            </div>
                          </div>
                          
                        </div>
                      )}
                    </SwiperSlide>
              
                    <p className='xxxl:mt-3 opacity-0'>.</p>
          
                  </Swiper>
                </div>
              </div>            
            </div>
      </section>

      

      {/* // SECTION 4 */}

      <section className="bg-primary-bg w-full h-auto">
        <div className="py-16 md:py-[6rem] px-6 lg:px-20">
          <div className="text-white ">
             <motion.h3 className="uppercase text-white font-Noto_Sans font-bold text-[2rem] lg:text-[5rem] mb-6"
             initial={{ opacity: 0, y: 50 }}  
             whileInView={{ opacity: 1, y: 0 }}  
             transition={{ duration: 2, ease: 'easeOut' }}  
             viewport={{ once: true, amount: 0.25 }}
             >latest</motion.h3>
             <motion.div className=" flex justify-between items-center"
             initial={{ opacity: 0, y: 50 }}  
             whileInView={{ opacity: 1, y: 0 }}  
             transition={{ duration: 1.25, ease: 'easeOut' }}  
             viewport={{ once: true, amount: 0.25 }}
             >
              <p className="font-Noto_Sans font-light leading-5 md:w-[24rem]">Experience Mahmood Farooqui’s latest shows, interactive workshops, and book launches. Dive into the art of Dastangoi and explore storytelling, history, and literature. Join the cultural celebration!</p>
              <ul className="font-Noto_Sans text-xl lg:text-3xl text-right hidden md:block">
                <li>Shows</li>
                <li>News</li>
                <li>Interviews</li>
              </ul>
             </motion.div>
          </div>
          <div className="mt-[5rem]">
            <iframe
              width="100%"
              height="230"
              className="rounded-xl shadow-2xl lg:w-[100%] lg:h-[700px]"
              src="https://www.youtube.com/embed/aZG5Op2yuA8"
              title="YouTube video player"
              style={{ border: "none" }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>


      <section className="bg-primary-red w-full h-auto">
        <div className="py-[4rem] px-6 lg:px-20">
          
          <motion.h3 className="uppercase text-white font-Noto_Sans font-bold text-[2rem] lg:text-[5rem] mb-6"
            initial={{ opacity: 0, y: 50 }}  
            whileInView={{ opacity: 1, y: 0 }}  
            transition={{ duration: 2, ease: 'easeOut' }}  
            viewport={{ once: true, amount: 0.25 }}
            >Gallery
          </motion.h3>
          <div className='relative overflow-hidden'>
            <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center items-end z-20 w-full h-[20rem] rounded-lg bg-gradient-to-b from-transparent via-[#151515b6] to-[#151515]'>
              <motion.button onClick={() => (window.location.href = "/gallery")} className='py-2 px-4 md:py-3 md:px-6 text-white text-base md:text-lg font-Noto_Sans font-semibold rounded-3xl border border-gray-300 bg-[#AA1F18] hover:bg-[#77231e] transition-all duration-300 mb-10'
              initial={{ opacity: 0, y: 50 }}  
              whileInView={{ opacity: 1, y: 0 }}  
              transition={{ duration: 0.1, ease: 'easeOut' }}  
              viewport={{ once: true, amount: 0.25 }}
              >Take me to the Gallery 
              </motion.button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center content-center gap-4 relative rounded-lg">
            <div className="w-full grid gap-4 place-self-end md:place-self-center">
              <div className="w-full">
                <img
                  className="w-full h-auto max-w-full rounded-lg"
                  src="./home/gallery/gallery-img-1.png"
                  alt=""
                />
              </div>
              <div className="w-full">
                <img
                  className="w-full h-auto max-w-full rounded-lg"
                  src="./home/gallery/gallery-img-3.png"
                  alt=""
                />
              </div>
            </div>

            <div className="w-full grid gap-4 place-self-start md:place-self-center">
              <div className="w-full">
                <img
                  className="w-full h-auto max-w-full rounded-lg"
                  src="./home/gallery/gallery-img-2.png"
                  alt=""
                />
              </div>
              <div className="w-full">
                <img
                  className="w-full h-auto max-w-full rounded-lg"
                  src="./home/gallery/gallery-img-4.png"
                  alt=""
                />
              </div>
            </div>

            <div className="w-full grid gap-4 place-self-end md:place-self-center max-md:hidden">
              <div className="w-full">
                <img
                  className="w-full h-auto max-w-full rounded-lg"
                  src="./home/gallery/gallery-img-5.png"
                  alt=""
                />
              </div>
              <div className="w-full">
                <img
                  className="w-full h-auto max-w-full rounded-lg"
                  src="./home/gallery/gallery-img-6.png"
                  alt=""
                />
              </div>
            </div>

            <div className="w-full grid gap-4 place-self-start md:place-self-center max-md:hidden">
              <div className="w-full">
                <img
                  className="w-full h-auto max-w-full rounded-lg"
                  src="./home/gallery/gallery-img-7.png"
                  alt=""
                />
              </div>
              <div className="w-full">
                <img
                  className="w-full h-auto max-w-full rounded-lg"
                  src="./home/gallery/gallery-img-8.png"
                  alt=""
                />
              </div>
            </div>
          
            </div>  
          </div>
        </div>
      </section>


      {/* // SECTION 5 */}

      <section className="bg-[#151515] w-full pt-16 px-6 lg:px-20">
          <div className='w-full '>
            <div className="uppercase text-white leading-[2.2rem] lg:leading-[4rem] font-Noto_Sans font-bold text-[2rem] xl:text-[64px] xl:font-extrabold">
              <motion.h4
              initial={{ opacity: 0, y: 50 }}  
              whileInView={{ opacity: 1, y: 0 }}  
              transition={{ duration: 1.25, ease: 'easeOut' }}  
              viewport={{ once: true, amount: 0.25 }}
              >ongoing /<br/> up-coming shows</motion.h4>
            </div>
          </div>
          <Swiper
             style={swiperCustomStyles}
            loop={true}
            modules={[Pagination, A11y, EffectCoverflow]}
            spaceBetween={0}
            slidesPerView={1}
            effect={"coverflow"}
            coverflowEffect={{
              rotate: 15,
              stretch: 0,
              depth: 50,
              scale: 0.93,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ dynamicBullets: true }}
            centeredSlides={true}
            breakpoints={{
              500: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
           
            <SwiperSlide>
              {({ isActive }) => (
                <div
                  className={`mt-12 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <img
                    className="w-full border rounded-lg border-none "
                    src="./home/Carousel-ongoing-upcoming/poster-1.jpg"
                    alt=""
                  />
                  <button className="w-full py-4 text-primary-red mt-10  border-primary-red border rounded-xl font-Noto_Sans font-medium text-sm bxl:text-[1.5rem] hover:bg-primary-red hover:text-black hover:font-medium transition-all duration-700 lg:text-base ">
                        Learn More
                  </button>
                  {/* <div className="mt-6">
                    <p className="font-Noto_Sans text-3xl lg:font-bold xl:text-[2.5rem] text-white">
                    Dastan-e-Chauboli
                    </p>
                    <p className="text-white opacity-60 text-sm xl:text-[1.5rem] font-light font-Noto_Sans my-6 lg:text-base">
                    Date: October 15, 2024 | <br/>Location: Habitat Centre, Delhi, <br/> India

                    </p>
                    <div className="w-full flex flex-wrap justify-between items-center gap-x-5 gap-y-2">
                      <button className="w-[10rem] bxl:w-[14rem] py-4 text-white bg-primary-red rounded-xl font-Noto_Sans font-medium text-sm bxl:text-[1.5rem] hover:bg-primary-red hover:text-black hover:font-medium transition-all duration-700 lg:text-base">
                        Ticket
                      </button>
                      <button className="w-[10rem] bxl:w-[14rem] py-4 text-primary-red border-primary-red border rounded-xl font-Noto_Sans font-medium text-sm bxl:text-[1.5rem] hover:bg-primary-red hover:text-black hover:font-medium transition-all duration-700 lg:text-base">
                        Learn More
                      </button>
                    </div>
                  </div> */}
                </div>
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }) => (
                <div
                  className={`mt-12 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <img
                    className="w-full border rounded-lg border-none "
                    src="./home/Carousel-ongoing-upcoming/poster-2.jpg"
                    alt=""
                  />
                  <button className="w-full py-4 text-primary-red mt-10  border-primary-red border rounded-xl font-Noto_Sans font-medium text-sm bxl:text-[1.5rem] hover:bg-primary-red hover:text-black hover:font-medium transition-all duration-700 lg:text-base">
                        Learn More
                  </button>
                  {/* <div className="mt-6">
                    <p className="font-Noto_Sans text-3xl lg:font-bold xl:text-[2.5rem] text-white">
                    Dastan-e-Chauboli
                    </p>
                    <p className="text-white opacity-60 text-sm xl:text-[1.5rem] font-light font-Noto_Sans my-6 lg:text-base">
                    Date: October 15, 2024 | <br/>Location: Habitat Centre, Delhi, <br/> India

                    </p>
                    <div className="w-full flex flex-wrap justify-between items-center gap-x-5 gap-y-2">
                      <button className="w-[10rem] bxl:w-[14rem] py-4 text-white bg-primary-red rounded-xl font-Noto_Sans font-medium text-sm bxl:text-[1.5rem] hover:bg-primary-red hover:text-black hover:font-medium transition-all duration-700 lg:text-base">
                        Ticket
                      </button>
                      <button className="w-[10rem] bxl:w-[14rem] py-4 text-primary-red border-primary-red border rounded-xl font-Noto_Sans font-medium text-sm bxl:text-[1.5rem] hover:bg-primary-red hover:text-black hover:font-medium transition-all duration-700 lg:text-base">
                        Learn More
                      </button>
                    </div>
                  </div> */}
                </div>
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }) => (
                <div
                  className={`mt-12 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <img
                    className="w-full border rounded-lg border-none "
                    src="./home/Carousel-ongoing-upcoming/poster-3.jpg"
                    alt=""
                  />
                  <button className="w-full py-4 text-primary-red mt-10  border-primary-red border rounded-xl font-Noto_Sans font-medium text-sm bxl:text-[1.5rem] hover:bg-primary-red hover:text-black hover:font-medium transition-all duration-700 lg:text-base">
                        Learn More
                  </button>
                  {/* <div className="mt-6">
                    <p className="font-Noto_Sans text-3xl lg:font-bold xl:text-[2.5rem] text-white">
                    Dastan-e-Karn az Mahabharat
                    </p>
                    <p className="text-white opacity-60 text-sm xl:text-[1.5rem] font-light font-Noto_Sans my-6 lg:text-base">
                    Date: October 20, 2024 | <br/> Location: Habitat Centre, Delhi, <br/> India
                    </p>
                    <div className="w-full flex flex-wrap justify-between items-center gap-x-5 gap-y-2">
                      <button className="w-[10rem] bxl:w-[14rem] py-4 text-white bg-primary-red rounded-xl font-Noto_Sans font-medium text-sm bxl:text-[1.5rem] hover:bg-primary-red hover:text-black hover:font-medium transition-all duration-700 lg:text-base">
                        Ticket
                      </button>
                      <button className="w-[10rem] bxl:w-[14rem] py-4 text-primary-red border-primary-red border rounded-xl font-Noto_Sans font-medium text-sm bxl:text-[1.5rem] hover:bg-primary-red hover:text-black hover:font-medium transition-all duration-700 lg:text-base">
                        Learn More
                      </button>
                    </div>
                  </div> */}
                </div>
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }) => (
                <div
                  className={`mt-12 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <img
                    className="w-full border rounded-lg border-none "
                    src="./home/Carousel-ongoing-upcoming/poster-4.jpg"
                    alt=""
                  />
                  <button className="w-full py-4 text-primary-red mt-10  border-primary-red border rounded-xl font-Noto_Sans font-medium text-sm bxl:text-[1.5rem] hover:bg-primary-red hover:text-black hover:font-medium transition-all duration-700 lg:text-base">
                        Learn More
                  </button>
                  {/* <div className="mt-6">
                    <p className="font-Noto_Sans text-3xl lg:font-bold xl:text-[2.5rem] text-white">
                    Dastan Amar Ayyar aur Mahtab Jadu ki
                    </p>
                    <p className="text-white opacity-60 text-sm xl:text-[1.5rem] font-light font-Noto_Sans my-6 lg:text-base">
                    Date: October 15, 2024 | <br/> Location: Habitat Centre, Delhi, <br/> India
                    </p>
                    <div className="w-full flex flex-wrap justify-between items-center gap-x-5 gap-y-2">
                      <button className="w-[10rem] bxl:w-[14rem] py-4 text-white bg-primary-red rounded-xl font-Noto_Sans font-medium text-sm bxl:text-[1.5rem] hover:bg-primary-red hover:text-black hover:font-medium transition-all duration-700 lg:text-base">
                        Ticket
                      </button>
                      <button className="w-[10rem] bxl:w-[14rem] py-4 text-primary-red border-primary-red border rounded-xl font-Noto_Sans font-medium text-sm bxl:text-[1.5rem] hover:bg-primary-red hover:text-black hover:font-medium transition-all duration-700 lg:text-base">
                        Learn More
                      </button>
                    </div>
                  </div> */}
                </div>
              )}
            </SwiperSlide>         
            <SwiperSlide>
              {({ isActive }) => (
                <div
                  className={`mt-12 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <img
                    className="w-full border rounded-lg border-none "
                    src="./home/Carousel-ongoing-upcoming/poster-5.jpg"
                    alt=""
                  />
                  <button className="w-full py-4 text-primary-red mt-10  border-primary-red border rounded-xl font-Noto_Sans font-medium text-sm bxl:text-[1.5rem] hover:bg-primary-red hover:text-black hover:font-medium transition-all duration-700 lg:text-base">
                        Learn More
                  </button>
                  {/* <div className="mt-6">
                    <p className="font-Noto_Sans text-3xl lg:font-bold xl:text-[2.5rem] text-white">
                    Dastan-E-Amir Hamza
                    </p>
                    <p className="text-white opacity-60 text-sm xl:text-[1.5rem] font-light font-Noto_Sans my-6 lg:text-base">
                    Date: October 15, 2024 | <br /> Location: Habitat Centre, Delhi, <br /> India
                    </p>
                    <div className="w-full flex flex-wrap justify-between items-center gap-x-5 gap-y-2">
                      <button className="w-[10rem] bxl:w-[14rem] py-4 text-white bg-primary-red rounded-xl font-Noto_Sans font-medium text-sm bxl:text-[1.5rem] hover:bg-primary-red hover:text-black hover:font-medium transition-all duration-700 lg:text-base">
                        Ticket
                      </button>
                      <button className="w-[10rem] bxl:w-[14rem] py-4 text-primary-red border-primary-red border rounded-xl font-Noto_Sans font-medium text-sm bxl:text-[1.5rem] hover:bg-primary-red hover:text-black hover:font-medium transition-all duration-700 lg:text-base">
                        Learn More
                      </button>
                    </div>
                  </div> */}
                </div>
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }) => (
                <div
                  className={`mt-12 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <img
                    className="w-full border rounded-lg border-none "
                    src="./home/Carousel-ongoing-upcoming/poster-6.jpg"
                    alt=""
                  />
                  <button className="w-full py-4 text-primary-red mt-10  border-primary-red border rounded-xl font-Noto_Sans font-medium text-sm bxl:text-[1.5rem] hover:bg-primary-red hover:text-black hover:font-medium transition-all duration-700 lg:text-base">
                        Learn More
                  </button>
                  {/* <div className="mt-6">
                    <p className="font-Noto_Sans text-3xl lg:font-bold xl:text-[2.5rem] text-white">
                    Dastan Amar Ayyar aur Mahtab Jadu ki
                    </p>
                    <p className="text-white opacity-60 text-sm xl:text-[1.5rem] font-light font-Noto_Sans my-6 lg:text-base">
                    Date: October 15, 2024 | <br/> Location: Habitat Centre, Delhi, <br/> India
                    </p>
                    <div className="w-full flex flex-wrap justify-between items-center gap-x-5 gap-y-2">
                      <button className="w-[10rem] bxl:w-[14rem] py-4 text-white bg-primary-red rounded-xl font-Noto_Sans font-medium text-sm bxl:text-[1.5rem] hover:bg-primary-red hover:text-black hover:font-medium transition-all duration-700 lg:text-base">
                        Ticket
                      </button>
                      <button className="w-[10rem] bxl:w-[14rem] py-4 text-primary-red border-primary-red border rounded-xl font-Noto_Sans font-medium text-sm bxl:text-[1.5rem] hover:bg-primary-red hover:text-black hover:font-medium transition-all duration-700 lg:text-base">
                        Learn More
                      </button>
                    </div>
                  </div> */}
                </div>
              )}
            </SwiperSlide>  
            <SwiperSlide>
              {({ isActive }) => (
                <div
                  className={`mt-12 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <img
                    className="w-full border rounded-lg border-none "
                    src="./home/Carousel-ongoing-upcoming/poster-7.jpg"
                    alt=""
                  />
                  <button className="w-full py-4 text-primary-red mt-10  border-primary-red border rounded-xl font-Noto_Sans font-medium text-sm bxl:text-[1.5rem] hover:bg-primary-red hover:text-black hover:font-medium transition-all duration-700 lg:text-base">
                        Learn More
                  </button>
                  {/* <div className="mt-6">
                    <p className="font-Noto_Sans text-3xl lg:font-bold xl:text-[2.5rem] text-white">
                    Dastan Amar Ayyar aur Mahtab Jadu ki
                    </p>
                    <p className="text-white opacity-60 text-sm xl:text-[1.5rem] font-light font-Noto_Sans my-6 lg:text-base">
                    Date: October 15, 2024 | <br/> Location: Habitat Centre, Delhi, <br/> India
                    </p>
                    <div className="w-full flex flex-wrap justify-between items-center gap-x-5 gap-y-2">
                      <button className="w-[10rem] bxl:w-[14rem] py-4 text-white bg-primary-red rounded-xl font-Noto_Sans font-medium text-sm bxl:text-[1.5rem] hover:bg-primary-red hover:text-black hover:font-medium transition-all duration-700 lg:text-base">
                        Ticket
                      </button>
                      <button className="w-[10rem] bxl:w-[14rem] py-4 text-primary-red border-primary-red border rounded-xl font-Noto_Sans font-medium text-sm bxl:text-[1.5rem] hover:bg-primary-red hover:text-black hover:font-medium transition-all duration-700 lg:text-base">
                        Learn More
                      </button>
                    </div>
                  </div> */}
                </div>
              )}
            </SwiperSlide>  
            <SwiperSlide>
              {({ isActive }) => (
                <div
                  className={`mt-12 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <img
                    className="w-full border rounded-lg border-none "
                    src="./home/Carousel-ongoing-upcoming/poster-8.jpg"
                    alt=""
                  />
                  <button className="w-full py-4 text-primary-red mt-10  border-primary-red border rounded-xl font-Noto_Sans font-medium text-sm bxl:text-[1.5rem] hover:bg-primary-red hover:text-black hover:font-medium transition-all duration-700 lg:text-base">
                        Learn More
                  </button>
                  {/* <div className="mt-6">
                    <p className="font-Noto_Sans text-3xl lg:font-bold xl:text-[2.5rem] text-white">
                    Dastan Amar Ayyar aur Mahtab Jadu ki
                    </p>
                    <p className="text-white opacity-60 text-sm xl:text-[1.5rem] font-light font-Noto_Sans my-6 lg:text-base">
                    Date: October 15, 2024 | <br/> Location: Habitat Centre, Delhi, <br/> India
                    </p>
                    <div className="w-full flex flex-wrap justify-between items-center gap-x-5 gap-y-2">
                      <button className="w-[10rem] bxl:w-[14rem] py-4 text-white bg-primary-red rounded-xl font-Noto_Sans font-medium text-sm bxl:text-[1.5rem] hover:bg-primary-red hover:text-black hover:font-medium transition-all duration-700 lg:text-base">
                        Ticket
                      </button>
                      <button className="w-[10rem] bxl:w-[14rem] py-4 text-primary-red border-primary-red border rounded-xl font-Noto_Sans font-medium text-sm bxl:text-[1.5rem] hover:bg-primary-red hover:text-black hover:font-medium transition-all duration-700 lg:text-base">
                        Learn More
                      </button>
                    </div>
                  </div> */}
                </div>
              )}
            </SwiperSlide>  
            <p className='opacity-0'>.</p>
          </Swiper>
      </section>

      {/* // SECTION 6 */}

      <section className="bg-[#151515] w-full pt-16 px-6 lg:px-20">
          <motion.h4 className="uppercase text-white font-Noto_Sans font-bold text-[2rem] lg:text-[5rem] mb-6"
           initial={{ opacity: 0, y: 50 }}  
           whileInView={{ opacity: 1, y: 0 }}  
           transition={{ duration: 2, ease: 'easeOut' }}  
           viewport={{ once: true, amount: 0.25 }}
           >Books</motion.h4>
          <motion.div className="w-full text-white flex justify-between items-center"
           initial={{ opacity: 0, y: 50 }}  
           whileInView={{ opacity: 1, y: 0 }}  
           transition={{ duration: 1.25, ease: 'easeOut' }}  
           viewport={{ once: true, amount: 0.25 }}
           >
                  <p className="font-Noto_Sans font-light leading-5 md:w-[26rem]">Experience Mahmood Farooqui’s latest shows, interactive workshops, and book launches. Dive into the art of Dastangoi and explore storytelling, history, and literature. Join the cultural celebration!</p>
                  <ul className="font-Noto_Sans text-xl lg:text-3xl text-right hidden md:block">
                    <li>Author</li>
                    <li>Researcher</li>
                    <li>Compiler & Translator</li>
                  </ul>
                </motion.div>
          <Swiper
             style={swiperCustomStyles}
            loop={true}
            modules={[Pagination, A11y, EffectCoverflow]}
            spaceBetween={0}
            slidesPerView={1}
            effect={"coverflow"}
            coverflowEffect={{
              rotate: 15,
              stretch: 0,
              depth: 50,
              scale: 0.93,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ dynamicBullets: true }}
            centeredSlides={true}
            breakpoints={{
              500: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            <SwiperSlide>
              {({ isActive }) => (
                <div
                  className={`my-12 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <img
                    className="w-full border rounded-t-xl border-none"
                    src="./home/carousel-primary/poster-1.jpg"
                    alt=""
                  />

                  <div className="bg-red-700 rounded-b-xl p-4 flex flex-col gap-y-4">
                    <p className="font-Noto_Sans text-3xl text-white font-bold md:text-xl xl:text-2xl ">
                    Besieged: <br /> Voices From Delhi-1857
                    </p>
                    <p className="text-white text-base font-light font-Noto_Sans">
                    Book (Compiler and Translator)
                    </p>
                    <div className="w-full text-center flex justify-between items-center gap-y-4 gap-x-4 xl:gap-x-6">
                      <a href='https://www.amazon.in/Besieged-Voices-Delhi-Mahmood-Farooqui/dp/01434
                        1822X' className="w-full bg-white hover:text-white border rounded-md font-Noto_Sans font-bold py-2 text-md xl:text-lg md:text-[16px] md:min-w-[6rem] tracking-tighter hover:bg-primary-red text-primary-red hover:font-medium transition-all duration-700">
                        Read
                      </a>
                      <a href='https://www.amazon.in/Besieged-Voices-Delhi-Mahmood-Farooqui/dp/01434
                        1822X' className="w-full text-white border rounded-md font-Noto_Sans font-bold py-2 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-white hover:text-primary-red hover:font-medium transition-all duration-700">
                        Learn More
                      </a>
                    </div>
                  </div>

                </div>
              )}
            </SwiperSlide>      
            <SwiperSlide>
              {({ isActive }) => (
                <div
                  className={`my-12 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <img
                    className="w-full border rounded-t-xl border-none"
                    src="./home/carousel-primary/poster-2.jpg"
                    alt=""
                  />

                  <div className="bg-red-700 rounded-b-xl p-4 flex flex-col gap-y-4">
                    <p className="font-Noto_Sans text-3xl text-white font-bold md:text-xl xl:text-2xl ">
                    A Requiem for <br /> Pakistan
                    </p>
                    <p className="text-white text-base font-light font-Noto_Sans">
                    Author
                    </p>
                    <div className="w-full text-center flex justify-between items-center gap-y-4 gap-x-4 xl:gap-x-6">
                      <a href=' https://www.amazon.in/Requiem-Pakistan-World-Intizar-Husain/dp/9382579427' className="w-full bg-white hover:text-white border rounded-md font-Noto_Sans font-bold py-2 text-md xl:text-lg md:text-[16px] md:min-w-[6rem] tracking-tighter hover:bg-primary-red text-primary-red hover:font-medium transition-all duration-700">
                        Read
                      </a>
                      <a href=' https://www.amazon.in/Requiem-Pakistan-World-Intizar-Husain/dp/9382579427' className="w-full text-white border rounded-md font-Noto_Sans font-bold py-2 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-white hover:text-primary-red hover:font-medium transition-all duration-700">
                        Learn More
                      </a>
                    </div>
                  </div>

                </div>
              )}
            </SwiperSlide>       
            <SwiperSlide>
              {({ isActive }) => (
                <div
                  className={`my-12 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <img
                    className="w-full border rounded-t-xl border-none"
                    src="./home/carousel-primary/poster-3.jpg"
                    alt=""
                  />

                  <div className="bg-red-700 rounded-b-xl p-4 flex flex-col gap-y-4">
                    <p className="font-Noto_Sans text-3xl text-white font-bold md:text-xl xl:text-2xl ">
                    दास्तानगोई : <br /> Dastangoi
                    </p>
                    <p className="text-white text-base font-light font-Noto_Sans">
                    Book (Writer & Compiler)
                    </p>
                    <div className="w-full text-center flex justify-between items-center gap-y-4 gap-x-4 xl:gap-x-6">
                      <a href='https://www.amazon.in/Besieged-Voices-Delhi-Mahmood-Farooqui/dp/01434
                        1822X' className="w-full bg-white hover:text-white border rounded-md font-Noto_Sans font-bold py-2 text-md xl:text-lg md:text-[16px] md:min-w-[6rem] tracking-tighter hover:bg-primary-red text-primary-red hover:font-medium transition-all duration-700">
                        Read
                      </a>
                      <a href='https://www.amazon.in/Besieged-Voices-Delhi-Mahmood-Farooqui/dp/01434
                        1822X' className="w-full text-white border rounded-md font-Noto_Sans font-bold py-2 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-white hover:text-primary-red hover:font-medium transition-all duration-700">
                        Learn More
                      </a>
                    </div>
                  </div>

                </div>
              )}
            </SwiperSlide>            
            <SwiperSlide>
              {({ isActive }) => (
                <div
                  className={`my-12 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <img
                    className="w-full border rounded-t-xl border-none"
                    src="./home/carousel-primary/poster-4.jpg"
                    alt=""
                  />

                  <div className="bg-red-700 rounded-b-xl p-4 flex flex-col gap-y-4">
                    <p className="font-Noto_Sans text-3xl text-white font-bold md:text-xl xl:text-2xl ">
                    दास्तानगोई- 2: <br /> Dastangoi- 2
                    </p>
                    <p className="text-white text-base font-light font-Noto_Sans">
                    Book (Writer & Compiler)
                    </p>
                    <div className="w-full text-center flex justify-between items-center gap-y-4 gap-x-4 xl:gap-x-6">
                      <a href='https://www.amazon.in/Besieged-Voices-Delhi-Mahmood-Farooqui/dp/01434
                        1822X' className="w-full bg-white hover:text-white border rounded-md font-Noto_Sans font-bold py-2 text-md xl:text-lg md:text-[16px] md:min-w-[6rem] tracking-tighter hover:bg-primary-red text-primary-red hover:font-medium transition-all duration-700">
                        Read
                      </a>
                      <a href='https://www.amazon.in/Besieged-Voices-Delhi-Mahmood-Farooqui/dp/01434
                        1822X' className="w-full text-white border rounded-md font-Noto_Sans font-bold py-2 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-white hover:text-primary-red hover:font-medium transition-all duration-700">
                        Learn More
                      </a>
                    </div>
                  </div>

                </div>
              )}
            </SwiperSlide>           
            <SwiperSlide>
              {({ isActive }) => (
                <div
                  className={`my-12 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <img
                    className="w-full border rounded-t-xl border-none"
                    src="./home/carousel-primary/poster-5.jpg"
                    alt=""
                  />

                  <div className="bg-red-700 rounded-b-xl p-4 flex flex-col gap-y-4">
                    <p className="font-Noto_Sans text-3xl text-white font-bold md:text-xl xl:text-2xl ">
                    Memoirs: <br /> Habib Tanvir
                    </p>
                    <p className="text-white text-base font-light font-Noto_Sans">
                    Translator
                    </p>
                    <div className="w-full text-center flex justify-between items-center gap-y-4 gap-x-4 xl:gap-x-6">
                      <a href='https://www.amazon.in/Besieged-Voices-Delhi-Mahmood-Farooqui/dp/01434
                        1822X' className="w-full bg-white hover:text-white border rounded-md font-Noto_Sans font-bold py-2 text-md xl:text-lg md:text-[16px] md:min-w-[6rem] tracking-tighter hover:bg-primary-red text-primary-red hover:font-medium transition-all duration-700">
                        Read
                      </a>
                      <a href='https://www.amazon.in/Besieged-Voices-Delhi-Mahmood-Farooqui/dp/01434
                        1822X' className="w-full text-white border rounded-md font-Noto_Sans font-bold py-2 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-white hover:text-primary-red hover:font-medium transition-all duration-700">
                        Learn More
                      </a>
                    </div>
                  </div>

                </div>
              )}
            </SwiperSlide>         
            <SwiperSlide>
              {({ isActive }) => (
                <div
                  className={`my-12 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <img
                    className="w-full border rounded-t-xl border-none"
                    src="./home/carousel-primary/poster-6.jpg"
                    alt=""
                  />

                  <div className="bg-red-700 rounded-b-xl p-4 flex flex-col gap-y-4">
                    <p className="font-Noto_Sans text-3xl text-white font-bold md:text-xl xl:text-2xl ">
                    The Last <br /> Mughal
                    </p>
                    <p className="text-white text-base font-light font-Noto_Sans">
                    Researcher
                    </p>
                    <div className="w-full text-center flex justify-between items-center gap-y-4 gap-x-4 xl:gap-x-6">
                      <a href='https://www.amazon.in/Besieged-Voices-Delhi-Mahmood-Farooqui/dp/01434
                        1822X' className="w-full bg-white hover:text-white border rounded-md font-Noto_Sans font-bold py-2 text-md xl:text-lg md:text-[16px] md:min-w-[6rem] tracking-tighter hover:bg-primary-red text-primary-red hover:font-medium transition-all duration-700">
                        Read
                      </a>
                      <a href='https://www.amazon.in/Besieged-Voices-Delhi-Mahmood-Farooqui/dp/01434
                        1822X' className="w-full text-white border rounded-md font-Noto_Sans font-bold py-2 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-white hover:text-primary-red hover:font-medium transition-all duration-700">
                        Learn More
                      </a>
                    </div>
                  </div>

                </div>
              )}
            </SwiperSlide>                         
            <p className='opacity-0'>.</p>
          </Swiper>
      </section>

      {/* // SECTION 7 */}

      <section className="bg-[#151515] w-full py-16 px-6 lg:px-20">
          <motion.h4 className="uppercase text-white font-Noto_Sans font-bold text-[2rem] lg:text-[5rem] mb-6"
           initial={{ opacity: 0, y: 50 }}  
           whileInView={{ opacity: 1, y: 0 }}  
           transition={{ duration: 2, ease: 'easeOut' }}  
           viewport={{ once: true, amount: 0.25 }}
           >Movies</motion.h4>
          <motion.div className="w-full text-white flex justify-between items-center"
           initial={{ opacity: 0, y: 50 }}  
           whileInView={{ opacity: 1, y: 0 }}  
           transition={{ duration: 1.25, ease: 'easeOut' }}  
           viewport={{ once: true, amount: 0.25 }}
           >
                  <p className="font-Noto_Sans font-light leading-5 md:w-[24rem]">Experience Mahmood Farooqui’s latest shows, interactive workshops, and book launches. Dive into the art of Dastangoi and explore storytelling, history, and literature. Join the cultural celebration!</p>
                  <ul className="font-Noto_Sans text-xl lg:text-3xl text-right hidden md:block">
                    <li>Director</li>
                    <li>Actor</li>
                    <li>Writer</li>
                  </ul>
                </motion.div>
          <Swiper
            style={swiperCustomStyles}
            loop={true}
            modules={[Pagination, A11y, EffectCoverflow]}
            spaceBetween={0}
            slidesPerView={1}
            effect={"coverflow"}
            coverflowEffect={{
              rotate: 15,
              stretch: 0,
              depth: 50,
              scale: 0.93,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ dynamicBullets: true }}
            centeredSlides={true}
            breakpoints={{
              500: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            <SwiperSlide>
              {({ isActive }) => (
                <div
                  className={`my-12 mb-10 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <img
                    className="w-full border rounded-t-xl border-none"
                    src="./home/carousel-secondary/poster-1.jpg"
                    alt=""
                  />
                  <div className="bg-red-700 rounded-b-xl p-4 flex flex-col gap-y-4">
                    <p className="font-Noto_Sans text-3xl text-white font-bold md:text-xl xl:text-2xl">
                    Peepli Live
                    </p>
                    <p className="text-white text-base font-light font-Noto_Sans">
                    Movie (Co-Director)
                    </p>
                    <div className="w-full text-center flex justify-between items-center gap-y-4 gap-x-4 xl:gap-x-6">
                      <a href='#' className="w-full text-center bg-white  border rounded-md font-Noto_Sans font-bold py-2 text-md xl:text-lg md:text-[16px] md:min-w-[6rem] tracking-tighter hover:bg-gray-300 text-primary-red
                      
                      transition-all duration-700">
                        Watch
                    </a>
                      <a href='#' className="w-full text-center text-white border rounded-md font-Noto_Sans font-bold py-2 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-[#77231e]
                      
                      transition-all duration-700">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }) => (
                <div
                  className={`my-12 mb-10 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <img
                    className="w-full border rounded-t-xl border-none"
                    src="./home/carousel-secondary/poster-2.jpg"
                    alt=""
                  />
                  <div className="bg-red-700 rounded-b-xl p-4 flex flex-col gap-y-4">
                    <p className="font-Noto_Sans text-3xl text-white font-bold md:text-xl xl:text-2xl">
                    Harud
                    </p>
                    <p className="text-white text-base font-light font-Noto_Sans">
                    Movie (Screenplay Writer)
                    </p>
                    <div className="w-full text-center flex justify-between items-center gap-y-4 gap-x-4 xl:gap-x-6">
                      <a href='#' className="w-full text-center bg-white  border rounded-md font-Noto_Sans font-bold py-2 text-md xl:text-lg md:text-[16px] md:min-w-[6rem] tracking-tighter hover:bg-gray-300 text-primary-red
                      
                      transition-all duration-700">
                        Watch
                    </a>
                      <a href='#' className="w-full text-center text-white border rounded-md font-Noto_Sans font-bold py-2 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-[#77231e]
                      
                      transition-all duration-700">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }) => (
                <div
                  className={`my-12 mb-10 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <img
                    className="w-full border rounded-t-xl border-none"
                    src="./home/carousel-secondary/poster-3.jpg"
                    alt=""
                  />
                  <div className="bg-red-700 rounded-b-xl p-4 flex flex-col gap-y-4">
                    <p className="font-Noto_Sans text-3xl text-white font-bold md:text-xl xl:text-2xl">
                    Mango Souffle
                    </p>
                    <p className="text-white text-base font-light font-Noto_Sans">
                    Movie (Co-Director)
                    </p>
                    <div className="w-full text-center flex justify-between items-center gap-y-4 gap-x-4 xl:gap-x-6">
                      <a href='#' className="w-full text-center bg-white  border rounded-md font-Noto_Sans font-bold py-2 text-md xl:text-lg md:text-[16px] md:min-w-[6rem] tracking-tighter hover:bg-gray-300 text-primary-red
                      
                      transition-all duration-700">
                        Watch
                    </a>
                      <a href='#' className="w-full text-center text-white border rounded-md font-Noto_Sans font-bold py-2 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-[#77231e]
                      
                      transition-all duration-700">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>  
            <SwiperSlide>
              {({ isActive }) => (
                <div
                  className={`my-12 mb-10 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <img
                    className="w-full border rounded-t-xl border-none"
                    src="./home/carousel-secondary/poster-3.jpg"
                    alt=""
                  />
                  <div className="bg-red-700 rounded-b-xl p-4 flex flex-col gap-y-4">
                    <p className="font-Noto_Sans text-3xl text-white font-bold md:text-xl xl:text-2xl">
                    Mango Souffle
                    </p>
                    <p className="text-white text-base font-light font-Noto_Sans">
                    Movie (Co-Director)
                    </p>
                    <div className="w-full text-center flex justify-between items-center gap-y-4 gap-x-4 xl:gap-x-6">
                      <a href='#' className="w-full text-center bg-white  border rounded-md font-Noto_Sans font-bold py-2 text-md xl:text-lg md:text-[16px] md:min-w-[6rem] tracking-tighter hover:bg-gray-300 text-primary-red
                      
                      transition-all duration-700">
                        Watch
                    </a>
                      <a href='#' className="w-full text-center text-white border rounded-md font-Noto_Sans font-bold py-2 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-[#77231e]
                      
                      transition-all duration-700">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>                           
            <p className='opacity-0'>.</p>
          </Swiper>
      </section>

      

    </div>

  );
}
