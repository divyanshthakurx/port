// import Image from "next/image";
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

    <div>

      {/* SECTION 1 */}

      <section className="bg-primary-bg py-16 w-full relative">
          <img className="top-image cursor-pointer w-[20rem] h-auto -mt-10 top-[11.5rem] sm:w-[20rem] sm:top-[16rem] md:w-[25rem] lg:top-[6rem] lg:w-[30rem] min-[1300px]:w-[35rem] bxl:w-[30vw] left-1/2 transform -translate-x-1/2 absolute z-30" src="/home/hero/hero-main-bg.jpg" alt="" />
          <img className="foreground-image cursor-pointer w-[20rem] h-auto -mt-10 top-[11.5rem] sm:w-[20rem] sm:top-[16rem] md:w-[25rem] lg:top-[6rem] lg:w-[30rem] min-[1300px]:w-[35rem] bxl:w-[30vw] left-1/2 transform -translate-x-1/2 absolute z-30" src="/home/hero/hero-main-fg.jpg" alt="" />
          <div className="w-full h-[44rem] flex flex-col justify-between items-center lg:gap-24 lg:h-auto min-[1300px]:gap-36 bxl:gap-0">
            <motion.h1 className="uppercase font-black font-Noto_Sans text-[19vw] text-white"
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }}  
            transition={{ duration: 2, ease: 'easeOut' }}  
            viewport={{ once: true, amount: 0.25 }} 
            >dastango</motion.h1>
            <div className='w-full min-[1300px]:px-20 flex flex-col justify-center items-center lg:gap-16 min-[1300px]:gap-12 bxl:gap-0'>
              <div className='hidden md:block self-start md:px-7 mb-10'>
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
              <div className="w-full text-white px-7 -mt-3 md:flex md:justify-between md:items-center self-end z-30">
                <motion.h2 className="uppercase font-Trajan_Pro font-bold text-5xl text-primary-red bxl:text-[3.5vw]"
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }}  
                transition={{ duration: 2, ease: 'easeOut' }}  
                viewport={{ once: true, amount: 0.25 }} 
                ><span className='text-3xl lg:text-5xl bxl:text-[3.5vw]'>Mahmood</span><br/>Farooqui</motion.h2>
                <motion.p className="font-Noto_Sans font-light md:w-[32vw] md:pl-12 lg:pl-0 lg:font-medium min-[1300px]:text-[22px] bxl:text-[1.5vw] "
                initial={{ opacity: 0, y: 50 }}  
                whileInView={{ opacity: 1, y: 0 }}  
                transition={{ duration: 1.25, ease: 'easeOut' }}  
                viewport={{ once: true, amount: 0.25 }}
                >Mahmood Farooqui is an acclaimed Indian writer, performer, and director, celebrated for his expertise in Dastangoi, a traditional form of Urdu storytelling.</motion.p>
              </div>
            </div>
          </div>           
      </section>     

      {/* SECTTION 2 */}

      <section className="bg-primary-red w-full h-auto">
            <div className="py-[5rem] px-8 lg:px-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                <div className="text-white flex flex-col">
                  <div>
                    <motion.h3 className="font-Noto_Sans w-full font-bold text-[52px] lg:text-[104px]"
                    initial={{ opacity: 0, y: 50 }}  
                    whileInView={{ opacity: 1, y: 0 }}  
                    transition={{ duration: 2, ease: 'easeOut' }}  
                    viewport={{ once: true, amount: 0.25 }}
                    >DASTANGOI</motion.h3>
                    <motion.p className="font-Noto_Sans mt-6"
                    initial={{ opacity: 0, y: 50 }}  
                    whileInView={{ opacity: 1, y: 0 }}  
                    transition={{ duration: 1.25, ease: 'easeOut' }}  
                    viewport={{ once: true, amount: 0.25 }}
                    >Mahmood Farooqui is a pivotal figure in Indian arts, celebrated for reviving the ancient art of Dastangoi. A master storyteller, he brings history and culture to life, using this traditional Urdu narrative form to connect the past with modern-day themes. His performances transcend mere storytelling, immersing audiences in deeply evocative and timeless narratives.</motion.p>
                  </div>
                  <div>
                    <Image className="mt-16 w-full" src="/home/posters.jpg" alt="My Image" width={500} height={300} />
                  </div>
                </div>
                <div>
                  <Swiper className='h-auto  xl:w-[28vw]'
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
                          className={`p-5 flex flex-col justify-between h-[46rem] md:h-[30rem] xl:h-[54rem] mb-5 gap-y-4 transition-opacity duration-300 ${
                            isActive ? "opacity-100" : "opacity-50"
                          }`}
                        >
                          <img
                            className="w-full xl:w-[26rem] xl:h-[34.5rem] border rounded-lg border-none"
                            src="./home/dastangoi/poster-1.png"
                            alt=""
                          />
                            <p className="font-Noto_Sans text-3xl text-white font-bold md:text-2xl xl:text-3xl">
                            Dastan-e-Karn az Mahabharat
                            </p>
                            <p className="text-white text-md font-light font-Noto_Sans md:text-[15px] xl:text-lg leading-tight">
                            is a passionate retelling of the life of Karna, a prominent character from the Indian epic Mahabharata combining a great variety of sources.
                            </p>
                            <div className="w-full flex flex-wrap justify-between items-center gap-y-2">
                              <button className="w-[8rem] bxl:w-[12rem] text-center bg-white  border rounded-md font-Noto_Sans font-bold py-2 text-md xl:text-lg md:text-[16px] md:min-w-[6rem] tracking-tighter hover:bg-gray-300 text-primary-red
                              hover:font-medium
                              transition-all duration-75">
                                Show
                              </button>
                              <button className="w-[8rem] bxl:w-[12rem] text-center text-white border rounded-md font-Noto_Sans font-bold py-2 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-[#77231e]
                              hover:font-medium
                              transition-all duration-75">
                                Learn More
                              </button>
                            </div>
                        </div>
                      )}
                    </SwiperSlide>
                    {/* <SwiperSlide>
                      {({ isActive }) => (
                        <div
                          className={`p-5 flex flex-col justify-between h-[40rem] md:h-[30rem] xl:h-[49rem] mb-5 gap-y-4 transition-opacity duration-300 ${
                            isActive ? "opacity-100" : "opacity-50"
                          }`}
                        >
                          <img
                            className="w-full xl:h-[50rem] border rounded-lg border-none"
                            src="./home/Carousel-ongoing-upcoming/poster-2.jpg"
                            alt=""
                          />
                            <p className="font-Noto_Sans text-3xl text-white font-bold md:text-2xl xl:text-3xl">
                            Dastan-e-Karn az Mahabharat
                            </p>
                            <p className="text-white text-md font-light font-Noto_Sans md:text-[15px] xl:text-lg leading-tight">
                            is a passionate retelling of the life of Karna, a prominent character from the Indian epic Mahabharata combining a great variety of sources.
                            </p>
                            <div className="w-full flex flex-wrap justify-between items-center gap-x-5 gap-y-2">
                              <button className="min-w-[6.5rem] bg-white font-medium text-primary-red border rounded-md font-Noto_Sans  py-2 xl:px-20 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-white hover:text-primary-red
                              hover:font-medium
                              transition-all duration-75">
                                Show
                              </button>
                              <button className="min-w-[6.5rem] text-white border rounded-md font-Noto_Sans font-medium py-2 xl:px-14 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-white hover:text-primary-red
                              hover:font-medium
                              transition-all duration-75">
                                Learn More
                              </button>
                            </div>
                        </div>
                      )}
                    </SwiperSlide>
                    <SwiperSlide>
                      {({ isActive }) => (
                        <div
                          className={`p-5 flex flex-col justify-between h-[40rem] md:h-[30rem] xl:h-[49rem] mb-5 gap-y-4 transition-opacity duration-300 ${
                            isActive ? "opacity-100" : "opacity-50"
                          }`}
                        >
                          <img
                            className="w-full xl:h-[50rem] border rounded-lg border-none"
                            src="./home/Carousel-ongoing-upcoming/poster-2.jpg"
                            alt=""
                          />
                            <p className="font-Noto_Sans text-3xl text-white font-bold md:text-2xl xl:text-3xl">
                            Dastan-e-Karn az Mahabharat
                            </p>
                            <p className="text-white text-md font-light font-Noto_Sans md:text-[15px] xl:text-lg leading-tight">
                            is a passionate retelling of the life of Karna, a prominent character from the Indian epic Mahabharata combining a great variety of sources.
                            </p>
                            <div className="w-full flex flex-wrap justify-between items-center gap-x-5 gap-y-2">
                              <button className="min-w-[6.5rem] bg-white font-medium text-primary-red border rounded-md font-Noto_Sans  py-2 xl:px-20 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-white hover:text-primary-red
                              hover:font-medium
                              transition-all duration-75">
                                Show
                              </button>
                              <button className="min-w-[6.5rem] text-white border rounded-md font-Noto_Sans font-medium py-2 xl:px-14 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-white hover:text-primary-red
                              hover:font-medium
                              transition-all duration-75">
                                Learn More
                              </button>
                            </div>
                        </div>
                      )}
                    </SwiperSlide>
                    <SwiperSlide>
                      {({ isActive }) => (
                        <div
                          className={`p-5 flex flex-col justify-between h-[40rem] md:h-[30rem] xl:h-[49rem] mb-5 gap-y-4 transition-opacity duration-300 ${
                            isActive ? "opacity-100" : "opacity-50"
                          }`}
                        >
                          <img
                            className="w-full xl:h-[50rem] border rounded-lg border-none"
                            src="./home/Carousel-ongoing-upcoming/poster-2.jpg"
                            alt=""
                          />
                            <p className="font-Noto_Sans text-3xl text-white font-bold md:text-2xl xl:text-3xl">
                            Dastan-e-Karn az Mahabharat
                            </p>
                            <p className="text-white text-md font-light font-Noto_Sans md:text-[15px] xl:text-lg leading-tight">
                            is a passionate retelling of the life of Karna, a prominent character from the Indian epic Mahabharata combining a great variety of sources.
                            </p>
                            <div className="w-full flex flex-wrap justify-between items-center gap-x-5 gap-y-2">
                              <button className="min-w-[6.5rem] bg-white font-medium text-primary-red border rounded-md font-Noto_Sans  py-2 xl:px-20 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-white hover:text-primary-red
                              hover:font-medium
                              transition-all duration-75">
                                Show
                              </button>
                              <button className="min-w-[6.5rem] text-white border rounded-md font-Noto_Sans font-medium py-2 xl:px-14 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-white hover:text-primary-red
                              hover:font-medium
                              transition-all duration-75">
                                Learn More
                              </button>
                            </div>
                        </div>
                      )}
                    </SwiperSlide>
                    <SwiperSlide>
                      {({ isActive }) => (
                        <div
                          className={`p-5 flex flex-col justify-between h-[40rem] md:h-[30rem] xl:h-[49rem] mb-5 gap-y-4 transition-opacity duration-300 ${
                            isActive ? "opacity-100" : "opacity-50"
                          }`}
                        >
                          <img
                            className="w-full xl:h-[50rem] border rounded-lg border-none"
                            src="./home/Carousel-ongoing-upcoming/poster-2.jpg"
                            alt=""
                          />
                            <p className="font-Noto_Sans text-3xl text-white font-bold md:text-2xl xl:text-3xl">
                            Dastan-e-Karn az Mahabharat
                            </p>
                            <p className="text-white text-md font-light font-Noto_Sans md:text-[15px] xl:text-lg leading-tight">
                            is a passionate retelling of the life of Karna, a prominent character from the Indian epic Mahabharata combining a great variety of sources.
                            </p>
                            <div className="w-full flex flex-wrap justify-between items-center gap-x-5 gap-y-2">
                              <button className="min-w-[6.5rem] bg-white font-medium text-primary-red border rounded-md font-Noto_Sans  py-2 xl:px-20 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-white hover:text-primary-red
                              hover:font-medium
                              transition-all duration-75">
                                Show
                              </button>
                              <button className="min-w-[6.5rem] text-white border rounded-md font-Noto_Sans font-medium py-2 xl:px-14 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-white hover:text-primary-red
                              hover:font-medium
                              transition-all duration-75">
                                Learn More
                              </button>
                            </div>
                        </div>
                      )}
                    </SwiperSlide>
                    <SwiperSlide>
                      {({ isActive }) => (
                        <div
                          className={`p-5 flex flex-col justify-between h-[40rem] md:h-[30rem] xl:h-[49rem] mb-5 gap-y-4 transition-opacity duration-300 ${
                            isActive ? "opacity-100" : "opacity-50"
                          }`}
                        >
                          <img
                            className="w-full xl:h-[50rem] border rounded-lg border-none"
                            src="./home/Carousel-ongoing-upcoming/poster-2.jpg"
                            alt=""
                          />
                            <p className="font-Noto_Sans text-3xl text-white font-bold md:text-2xl xl:text-3xl">
                            Dastan-e-Karn az Mahabharat
                            </p>
                            <p className="text-white text-md font-light font-Noto_Sans md:text-[15px] xl:text-lg leading-tight">
                            is a passionate retelling of the life of Karna, a prominent character from the Indian epic Mahabharata combining a great variety of sources.
                            </p>
                            <div className="w-full flex flex-wrap justify-between items-center gap-x-5 gap-y-2">
                              <button className="min-w-[6.5rem] bg-white font-medium text-primary-red border rounded-md font-Noto_Sans  py-2 xl:px-20 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-white hover:text-primary-red
                              hover:font-medium
                              transition-all duration-75">
                                Show
                              </button>
                              <button className="min-w-[6.5rem] text-white border rounded-md font-Noto_Sans font-medium py-2 xl:px-14 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-white hover:text-primary-red
                              hover:font-medium
                              transition-all duration-75">
                                Learn More
                              </button>
                            </div>
                        </div>
                      )}
                    </SwiperSlide>
                    <SwiperSlide>
                      {({ isActive }) => (
                        <div
                          className={`p-5 flex flex-col justify-between h-[40rem] md:h-[30rem] xl:h-[49rem] mb-5 gap-y-4 transition-opacity duration-300 ${
                            isActive ? "opacity-100" : "opacity-50"
                          }`}
                        >
                          <img
                            className="w-full xl:h-[50rem] border rounded-lg border-none"
                            src="./home/Carousel-ongoing-upcoming/poster-2.jpg"
                            alt=""
                          />
                            <p className="font-Noto_Sans text-3xl text-white font-bold md:text-2xl xl:text-3xl">
                            Dastan-e-Karn az Mahabharat
                            </p>
                            <p className="text-white text-md font-light font-Noto_Sans md:text-[15px] xl:text-lg leading-tight">
                            is a passionate retelling of the life of Karna, a prominent character from the Indian epic Mahabharata combining a great variety of sources.
                            </p>
                            <div className="w-full flex flex-wrap justify-between items-center gap-x-5 gap-y-2">
                              <button className="min-w-[6.5rem] bg-white font-medium text-primary-red border rounded-md font-Noto_Sans  py-2 xl:px-20 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-white hover:text-primary-red
                              hover:font-medium
                              transition-all duration-75">
                                Show
                              </button>
                              <button className="min-w-[6.5rem] text-white border rounded-md font-Noto_Sans font-medium py-2 xl:px-14 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-white hover:text-primary-red
                              hover:font-medium
                              transition-all duration-75">
                                Learn More
                              </button>
                            </div>
                        </div>
                      )}
                    </SwiperSlide> */}
                    <p className='opacity-0'>.</p>
                  </Swiper>
                </div>
              </div>            
            </div>
      </section>

      

      {/* // SECTION 4 */}

      <section className="bg-primary-bg w-full h-auto">
        <div className="py-[6rem] px-8 lg:px-20">
          <div className="text-white ">
             <motion.h3 className="uppercase font-Noto_Sans font-bold text-[5rem]"
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

      {/* // SECTION 5 */}

      <section className="bg-[#151515] w-full pt-12 px-8 lg:px-20">
          <div className='w-full '>
            <div className="uppercase text-[#AA1F18] font-Noto_Sans font-bold text-5xl mb-[4rem] xl:text-[64px] xl:font-extrabold">
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
                  className={`mt-0 lg:mt-12 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <img
                    className="w-full border rounded-lg border-none"
                    src="./home/Carousel-ongoing-upcoming/poster-1.png"
                    alt=""
                  />
                  {/* <div className="mt-6">
                    <p className="font-Noto_Sans text-3xl lg:font-bold xl:text-[2.5rem] text-white">
                    Dastan-e-Gandhi and Dastan-e-Partition
                    </p>
                    <p className="text-white opacity-60 text-sm xl:text-[1.5rem] font-light font-Noto_Sans my-6 lg:text-base">
                    Date: October 5, 2024 |<br/> Location: Adchini Sarvodaya Enclave, Delhi<br/> India
                    </p>
                    <div className="w-full flex flex-wrap justify-between items-center gap-x-5 gap-y-2">
                      <button className="w-[10rem] bxl:w-[14rem] py-4 text-white bg-primary-red rounded-xl font-Noto_Sans font-medium text-sm bxl:text-[1.5rem] hover:bg-primary-red hover:text-black hover:font-medium transition-all duration-75 lg:text-base">
                        Ticket
                      </button>
                      <button className="w-[10rem] bxl:w-[14rem] py-4 text-primary-red border-primary-red border rounded-xl font-Noto_Sans font-medium text-sm bxl:text-[1.5rem] hover:bg-primary-red hover:text-black hover:font-medium transition-all duration-75 lg:text-base">
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
                    className="w-full border rounded-lg border-none"
                    src="./home/Carousel-ongoing-upcoming/poster-2.png"
                    alt=""
                  />
                  {/* <div className="mt-6">
                    <p className="font-Noto_Sans text-3xl lg:font-bold xl:text-[2.5rem] text-white">
                    Dastan-e-Chauboli
                    </p>
                    <p className="text-white opacity-60 text-sm xl:text-[1.5rem] font-light font-Noto_Sans my-6 lg:text-base">
                    Date: October 15, 2024 | <br/>Location: Habitat Centre, Delhi, <br/> India

                    </p>
                    <div className="w-full flex flex-wrap justify-between items-center gap-x-5 gap-y-2">
                      <button className="w-[10rem] bxl:w-[14rem] py-4 text-white bg-primary-red rounded-xl font-Noto_Sans font-medium text-sm bxl:text-[1.5rem] hover:bg-primary-red hover:text-black hover:font-medium transition-all duration-75 lg:text-base">
                        Ticket
                      </button>
                      <button className="w-[10rem] bxl:w-[14rem] py-4 text-primary-red border-primary-red border rounded-xl font-Noto_Sans font-medium text-sm bxl:text-[1.5rem] hover:bg-primary-red hover:text-black hover:font-medium transition-all duration-75 lg:text-base">
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
                    className="w-full border rounded-lg border-none"
                    src="./home/Carousel-ongoing-upcoming/poster-3.png"
                    alt=""
                  />
                  {/* <div className="mt-6">
                    <p className="font-Noto_Sans text-3xl lg:font-bold xl:text-[2.5rem] text-white">
                    Dastan-e-Karn az Mahabharat
                    </p>
                    <p className="text-white opacity-60 text-sm xl:text-[1.5rem] font-light font-Noto_Sans my-6 lg:text-base">
                    Date: October 20, 2024 | <br/> Location: Habitat Centre, Delhi, <br/> India
                    </p>
                    <div className="w-full flex flex-wrap justify-between items-center gap-x-5 gap-y-2">
                      <button className="w-[10rem] bxl:w-[14rem] py-4 text-white bg-primary-red rounded-xl font-Noto_Sans font-medium text-sm bxl:text-[1.5rem] hover:bg-primary-red hover:text-black hover:font-medium transition-all duration-75 lg:text-base">
                        Ticket
                      </button>
                      <button className="w-[10rem] bxl:w-[14rem] py-4 text-primary-red border-primary-red border rounded-xl font-Noto_Sans font-medium text-sm bxl:text-[1.5rem] hover:bg-primary-red hover:text-black hover:font-medium transition-all duration-75 lg:text-base">
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
                    className="w-full border rounded-lg border-none"
                    src="./home/Carousel-ongoing-upcoming/poster-4.png"
                    alt=""
                  />
                  {/* <div className="mt-6">
                    <p className="font-Noto_Sans text-3xl lg:font-bold xl:text-[2.5rem] text-white">
                    Dastan Amar Ayyar aur Mahtab Jadu ki
                    </p>
                    <p className="text-white opacity-60 text-sm xl:text-[1.5rem] font-light font-Noto_Sans my-6 lg:text-base">
                    Date: October 15, 2024 | <br/> Location: Habitat Centre, Delhi, <br/> India
                    </p>
                    <div className="w-full flex flex-wrap justify-between items-center gap-x-5 gap-y-2">
                      <button className="w-[10rem] bxl:w-[14rem] py-4 text-white bg-primary-red rounded-xl font-Noto_Sans font-medium text-sm bxl:text-[1.5rem] hover:bg-primary-red hover:text-black hover:font-medium transition-all duration-75 lg:text-base">
                        Ticket
                      </button>
                      <button className="w-[10rem] bxl:w-[14rem] py-4 text-primary-red border-primary-red border rounded-xl font-Noto_Sans font-medium text-sm bxl:text-[1.5rem] hover:bg-primary-red hover:text-black hover:font-medium transition-all duration-75 lg:text-base">
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
                    className="w-full border rounded-lg border-none" 
                    src="./home/Carousel-ongoing-upcoming/poster-5.png"
                    alt=""
                  />
                  {/* <div className="mt-6">
                    <p className="font-Noto_Sans text-3xl lg:font-bold xl:text-[2.5rem] text-white">
                    Dastan-E-Amir Hamza
                    </p>
                    <p className="text-white opacity-60 text-sm xl:text-[1.5rem] font-light font-Noto_Sans my-6 lg:text-base">
                    Date: October 15, 2024 | <br /> Location: Habitat Centre, Delhi, <br /> India
                    </p>
                    <div className="w-full flex flex-wrap justify-between items-center gap-x-5 gap-y-2">
                      <button className="w-[10rem] bxl:w-[14rem] py-4 text-white bg-primary-red rounded-xl font-Noto_Sans font-medium text-sm bxl:text-[1.5rem] hover:bg-primary-red hover:text-black hover:font-medium transition-all duration-75 lg:text-base">
                        Ticket
                      </button>
                      <button className="w-[10rem] bxl:w-[14rem] py-4 text-primary-red border-primary-red border rounded-xl font-Noto_Sans font-medium text-sm bxl:text-[1.5rem] hover:bg-primary-red hover:text-black hover:font-medium transition-all duration-75 lg:text-base">
                        Learn More
                      </button>
                    </div>
                  </div> */}
                </div>
              )}
            </SwiperSlide>
            <p className='opacity-0'>.</p>
            <p className='opacity-0'>.</p>
          </Swiper>
      </section>

      {/* // SECTION 6 */}

      <section className="bg-[#151515] w-full pt-12 px-6 lg:px-20">
          <motion.h4 className="uppercase text-white font-Noto_Sans font-bold text-5xl mb-6"
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
                  className={`mt-12 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <img
                    className="w-full border rounded-t-lg border-none"
                    src="./home/carousel-primary/poster-1.png"
                    alt=""
                  />
                  <div className="bg-red-700 rounded-b-lg p-5">
                    <p className="font-Noto_Sans text-3xl text-white font-bold md:text-xl xl:text-2xl ">
                    Besieged: Voices From Delhi-1857
                    </p>
                    <p className="text-white text-base font-light font-Noto_Sans mt-2">
                    Book (Compiler and Translator)
                    </p>
                    <div className="w-full text-center flex flex-wrap justify-between items-center mt-4 gap-x-5 gap-y-2">
                      <a href='https://www.amazon.in/Besieged-Voices-Delhi-Mahmood-Farooqui/dp/01434
 1822X' className="w-[8rem] bxl:w-[12rem] bg-white hover:text-white border rounded-md font-Noto_Sans font-bold py-2 text-md xl:text-lg md:text-[16px] md:min-w-[6rem] tracking-tighter hover:bg-primary-red text-primary-red
                      hover:font-medium
                      transition-all duration-75">
                        Read
                    </a>
                      <a href='https://www.amazon.in/Besieged-Voices-Delhi-Mahmood-Farooqui/dp/01434
 1822X' className="w-[8rem] bxl:w-[12rem] text-white border rounded-md font-Noto_Sans font-bold py-2 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-white hover:text-primary-red
                      hover:font-medium
                      transition-all duration-75">
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
                  className={`mt-12 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <img
                    className="w-full border rounded-t-lg border-none"
                    src="./home/carousel-primary/poster-2.png"
                    alt=""
                  />
                  <div className="bg-red-700 rounded-b-lg p-5">
                    <p className="font-Noto_Sans text-3xl text-white font-bold md:text-xl xl:text-2xl ">
                    A Requiem for Pakistan
                    </p>
                    <p className="text-white text-base font-light font-Noto_Sans mt-2">
                    Book (Author)
                    </p>
                    <div className="w-full text-center flex flex-wrap justify-between items-center mt-4 gap-x-5 gap-y-2">
                      <a href='https://www.amazon.in/Requiem-Pakistan-World-Intizar-Husain/dp/93825794
 27' className="w-[8rem] bxl:w-[12rem] bg-white hover:text-white border rounded-md font-Noto_Sans font-bold py-2 text-md xl:text-lg md:text-[16px] md:min-w-[6rem] tracking-tighter hover:bg-primary-red text-primary-red
                      hover:font-medium
                      transition-all duration-75">
                        Read
                    </a>
                      <a href='https://www.amazon.in/Requiem-Pakistan-World-Intizar-Husain/dp/93825794
 27' className="w-[8rem] bxl:w-[12rem] text-white border rounded-md font-Noto_Sans font-bold py-2 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-white hover:text-primary-red
                      hover:font-medium
                      transition-all duration-75">
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
                  className={`mt-12 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <img
                    className="w-full border rounded-t-lg border-none"
                    src="./home/carousel-primary/poster-3.png"
                    alt=""
                  />
                  <div className="bg-red-700 rounded-b-lg p-5">
                    <p className="font-Noto_Sans text-3xl text-white font-bold md:text-xl xl:text-2xl ">
                    दास्तानगोई : Dastangoi
                    </p>
                    <p className="text-white text-base font-light font-Noto_Sans mt-2">
                    Book (Writer & Compiler)
                    </p>
                    <div className="w-full text-center flex flex-wrap justify-between items-center mt-4 gap-x-5 gap-y-2">
                      <a href='https://www.amazon.in/Dastangoi-Mahmood-Faaruqui/dp/8126722304' className="w-[8rem] bxl:w-[12rem] bg-white hover:text-white border rounded-md font-Noto_Sans font-bold py-2 text-md xl:text-lg md:text-[16px] md:min-w-[8rem] tracking-tighter hover:bg-primary-red text-primary-red
                      hover:font-medium
                      transition-all duration-75">
                        Read
                    </a>
                      <a href='https://www.amazon.in/Dastangoi-Mahmood-Faaruqui/dp/8126722304' className="w-[8rem] bxl:w-[12rem] text-white border rounded-md font-Noto_Sans font-bold py-2 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-white hover:text-primary-red
                      hover:font-medium
                      transition-all duration-75">
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
                  className={`mt-12 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <img
                    className="w-full border rounded-t-lg border-none"
                    src="./home/carousel-primary/poster-4.png"
                    alt=""
                  />
                  <div className="bg-red-700 rounded-b-lg p-5">
                    <p className="font-Noto_Sans text-3xl text-white font-bold md:text-xl xl:text-2xl ">
                    दास्तानगोई- 2: Dastangoi- 2 (Short Stories)
                    </p>
                    <p className="text-white text-base font-light font-Noto_Sans mt-2">
                    Book (Writer & Compiler)
                    </p>
                    <div className="w-full text-center flex flex-wrap justify-between items-center mt-4 gap-x-5 gap-y-2">
                      <a href='https://www.amazon.in/Dastangoi-2-Mahmood-Farooqui/dp/9388753488' className="w-[8rem] bxl:w-[12rem] bg-white hover:text-white border rounded-md font-Noto_Sans font-bold py-2 text-md xl:text-lg md:text-[16px] md:min-w-[6rem] tracking-tighter hover:bg-primary-red text-primary-red
                      hover:font-medium
                      transition-all duration-75">
                        Read
                    </a>
                      <a href='https://www.amazon.in/Dastangoi-2-Mahmood-Farooqui/dp/9388753488' className="w-[8rem] bxl:w-[12rem] text-white border rounded-md font-Noto_Sans font-bold py-2 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-white hover:text-primary-red
                      hover:font-medium
                      transition-all duration-75">
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
                  className={`mt-12 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <img
                    className="w-full border rounded-t-lg border-none"
                    src="./home/carousel-primary/poster-5.png"
                    alt=""
                  />
                  <div className="bg-red-700 rounded-b-lg p-5">
                    <p className="font-Noto_Sans text-3xl text-white font-bold md:text-xl xl:text-2xl ">
                    Memoirs: Habib Tanvir
                    </p>
                    <p className="text-white text-base font-light font-Noto_Sans mt-2">
                    Translator
                    </p>
                    <div className="w-full text-center flex flex-wrap justify-between items-center mt-4 gap-x-5 gap-y-2">
                      <a href='https://www.amazon.in/Memoirs-Habib-Tanvir/dp/0143422758' className="w-[8rem] bxl:w-[12rem] bg-white hover:text-white border rounded-md font-Noto_Sans font-bold py-2 text-md xl:text-lg md:text-[16px] md:min-w-[6rem] tracking-tighter hover:bg-primary-red text-primary-red
                      hover:font-medium
                      transition-all duration-75">
                        Read
                    </a>
                      <a href='https://www.amazon.in/Memoirs-Habib-Tanvir/dp/0143422758' className="w-[8rem] bxl:w-[12rem] text-white border rounded-md font-Noto_Sans font-bold py-2 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-white hover:text-primary-red
                      hover:font-medium
                      transition-all duration-75">
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
                  className={`mt-12 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <img
                    className="w-full border rounded-t-lg border-none"
                    src="./home/carousel-primary/poster-6.png"
                    alt=""
                  />
                  <div className="bg-red-700 rounded-b-lg p-5">
                    <p className="font-Noto_Sans text-3xl text-white font-bold md:text-xl xl:text-2xl ">
                    The Last Mughal
                    </p>
                    <p className="text-white text-base font-light font-Noto_Sans mt-2">
                    Researcher
                    </p>
                    <div className="w-full text-center flex flex-wrap justify-between items-center mt-4 gap-x-5 gap-y-2">
                      <a href='#' className="w-[8rem] bxl:w-[12rem] bg-white hover:text-white border rounded-md font-Noto_Sans font-bold py-2 text-md xl:text-lg md:text-[16px] md:min-w-[6rem] tracking-tighter hover:bg-primary-red text-primary-red
                      hover:font-medium
                      transition-all duration-75">
                        Read
                    </a>
                      <a href='#' className="w-[8rem] bxl:w-[12rem] text-white border rounded-md font-Noto_Sans font-bold py-2 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-white hover:text-primary-red
                      hover:font-medium
                      transition-all duration-75">
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

      <section className="bg-[#151515] w-full pt-12 px-6 lg:px-20 pb-[4rem]">
          <motion.h4 className="uppercase text-white font-Noto_Sans font-bold text-5xl mb-6"
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
                  className={`mt-12 mb-10 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <img
                    className="w-full border rounded-t-lg border-none"
                    src="./home/carousel-secondary/poster-1.png"
                    alt=""
                  />
                  <div className="bg-red-700 rounded-b-lg p-5">
                    <p className="font-Noto_Sans text-3xl text-white font-bold md:text-xl xl:text-2xl">
                    Peepli Live
                    </p>
                    <p className="text-white text-base font-light font-Noto_Sans mt-2">
                    Movie (Co-Director)
                    </p>
                    <div className="w-full flex flex-wrap justify-between items-center mt-4 gap-x-5 gap-y-2">
                      <a href='#' className="w-[8rem] bxl:w-[12rem] text-center bg-white  border rounded-md font-Noto_Sans font-bold py-2 text-md xl:text-lg md:text-[16px] md:min-w-[6rem] tracking-tighter hover:bg-gray-300 text-primary-red
                      
                      transition-all duration-75">
                        Read
                    </a>
                      <a href='#' className="w-[8rem] bxl:w-[12rem] text-center text-white border rounded-md font-Noto_Sans font-bold py-2 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-[#77231e]
                      
                      transition-all duration-75">
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
                  className={`mt-12 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <img
                    className="w-full border rounded-t-lg border-none"
                    src="./home/carousel-secondary/poster-2.png"
                    alt=""
                  />
                  <div className="bg-red-700 rounded-b-lg p-5">
                    <p className="font-Noto_Sans text-3xl text-white font-bold md:text-xl xl:text-2xl">
                      Harud
                    </p>
                    <p className="text-white text-base font-light font-Noto_Sans mt-2">
                    Movie (Screenplay Writer)
                    </p>
                    <div className="w-full flex flex-wrap justify-between items-center mt-4 gap-x-5 gap-y-2">
                      <a href='https://tv.apple.com/ai/movie/harud/umc.cmc.4109qbdv19gejutn0uu4izprw' className="w-[8rem] bxl:w-[12rem] text-center bg-white  border rounded-md font-Noto_Sans font-bold py-2 text-md xl:text-lg md:text-[16px] md:min-w-[6rem] tracking-tighter hover:bg-gray-300 text-primary-red
                      
                      transition-all duration-75">
                        Read
                    </a>
                      <a href='https://tv.apple.com/ai/movie/harud/umc.cmc.4109qbdv19gejutn0uu4izprw' className="w-[8rem] bxl:w-[12rem] text-center text-white border rounded-md font-Noto_Sans font-bold py-2 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-[#77231e]
                      
                      transition-all duration-75">
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
                  className={`mt-12 mb-10 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <img
                    className="w-full border rounded-t-lg border-none"
                    src="./home/carousel-secondary/poster-3.png"
                    alt=""
                  />
                  <div className="bg-red-700 rounded-b-lg p-5">
                    <p className="font-Noto_Sans text-3xl text-white font-bold md:text-xl xl:text-2xl">
                    Mango Souffle 
                    </p>
                    <p className="text-white text-base font-light font-Noto_Sans mt-2">
                    Movie (Co-Director)
                    </p>
                    <div className="w-full flex flex-wrap justify-between items-center mt-4 gap-x-5 gap-y-2">
                      <a href='https://www.primevideo.com/detail/Mango-Souffl%C3%A9/0IQWGOK3KFEUYAZ7AKCR79EVGK' className="w-[8rem] bxl:w-[12rem] text-center bg-white  border rounded-md font-Noto_Sans font-bold py-2 text-md xl:text-lg md:text-[16px] md:min-w-[6rem] tracking-tighter hover:bg-gray-300 text-primary-red
                      
                      transition-all duration-75">
                        Read
                    </a>
                      <a href=' https://www.primevideo.com/detail/Mango-Souffl%C3%A9/0IQWGOK3KFEUYAZ7AK
 CR79EVGK' className="w-[8rem] bxl:w-[12rem] text-center text-white border rounded-md font-Noto_Sans font-bold py-2 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-[#77231e]
                      
                      transition-all duration-75">
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
                  className={`mt-12 mb-10 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <img
                    className="w-full border rounded-t-lg border-none"
                    src="./home/carousel-secondary/poster-3.png"
                    alt=""
                  />
                  <div className="bg-red-700 rounded-b-lg p-5">
                    <p className="font-Noto_Sans text-3xl text-white font-bold md:text-xl xl:text-2xl">
                    Mango Souffle 
                    </p>
                    <p className="text-white text-base font-light font-Noto_Sans mt-2">
                    Movie (Co-Director)
                    </p>
                    <div className="w-full flex flex-wrap justify-between items-center mt-4 gap-x-5 gap-y-2">
                      <a href='https://www.primevideo.com/detail/Mango-Souffl%C3%A9/0IQWGOK3KFEUYAZ7AKCR79EVGK' className="w-[8rem] bxl:w-[12rem] text-center bg-white  border rounded-md font-Noto_Sans font-bold py-2 text-md xl:text-lg md:text-[16px] md:min-w-[6rem] tracking-tighter hover:bg-gray-300 text-primary-red
                      
                      transition-all duration-75">
                        Read
                    </a>
                      <a href=' https://www.primevideo.com/detail/Mango-Souffl%C3%A9/0IQWGOK3KFEUYAZ7AK
 CR79EVGK' className="w-[8rem] bxl:w-[12rem] text-center text-white border rounded-md font-Noto_Sans font-bold py-2 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-[#77231e]
                      
                      transition-all duration-75">
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
