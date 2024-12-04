// import Image from "next/image";
"use client";
import Image from 'next/image';
import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from '@/components/EmblaCarousel';
import { useEffect } from "react";
import gsap from "gsap";
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
          <img className="top-image cursor-pointer w-[19rem] h-auto -mt-10 top-[12rem] sm:w-[20rem] sm:top-[16rem] md:w-[25rem] lg:top-[6rem] lg:w-[30rem] min-[1300px]:w-[35rem] bxl:w-[30vw] left-1/2 transform -translate-x-1/2 absolute" src="/home/hero/hero-main-bg.jpg" alt="" />
          <img className="foreground-image cursor-pointer w-[19rem] h-auto -mt-10 top-[12rem] sm:w-[20rem] sm:top-[16rem] md:w-[25rem] lg:top-[6rem] lg:w-[30rem] min-[1300px]:w-[35rem] bxl:w-[30vw] left-1/2 transform -translate-x-1/2 absolute" src="/home/hero/hero-main-fg.jpg" alt="" />
          <div className="w-full h-[44rem] flex flex-col justify-between items-center lg:gap-24 lg:h-auto min-[1300px]:gap-36 bxl:gap-0">
            <h1 className="uppercase font-black font-Noto_Sans text-[19vw] text-white">dastango</h1>
            <div className='w-full min-[1300px]:px-20 flex flex-col justify-center items-center lg:gap-16 min-[1300px]:gap-12 bxl:gap-0'>
              <div className='hidden md:block self-start md:px-7 mb-10'>
                <ul className='uppercase text-white font-Noto_Sans font-medium text-2xl flex flex-col justify-center gap-2 min-[1300px]:text-[32px] bxl:text-[2.5vw] bxl:leading-none'>
                  <li>writer</li>
                  <li>dastango</li>
                  <li>director</li>
                </ul>
              </div>
              <div className="w-full text-white px-7 -mt-3 z-10 md:flex md:justify-between md:items-center self-end">
                <h2 className="uppercase font-Trajan_Pro font-bold text-5xl text-primary-red bxl:text-[3.5vw]"><span className='text-3xl lg:text-5xl bxl:text-[3.5vw]'>Mahmood</span><br/>Farooqui</h2>
                <p className="font-Noto_Sans font-light md:w-[32vw] md:pl-12 lg:pl-0 lg:font-medium min-[1300px]:text-[22px] bxl:text-[1.5vw]">Mahmood Farooqui is an acclaimed Indian writer, performer, and director, celebrated for his expertise in Dastangoi, a traditional form of Urdu storytelling.</p>
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
                    <h3 className="font-Noto_Sans w-full font-bold text-[52px] lg:text-[104px]">DASTANGOI</h3>
                    <p className="font-Noto_Sans mt-6">Mahmood Farooqui is a pivotal figure in Indian arts, celebrated for reviving the ancient art of Dastangoi. A master storyteller, he brings history and culture to life, using this traditional Urdu narrative form to connect the past with modern-day themes. His performances transcend mere storytelling, immersing audiences in deeply evocative and timeless narratives.</p>
                  </div>
                  <div>
                    <Image className="mt-16 w-full" src="/home/posters.jpg" alt="My Image" width={500} height={300} />
                  </div>
                </div>
                <div>
                  <Swiper className='xl:w-[28vw]'
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
             <h3 className="uppercase font-Noto_Sans font-bold text-[5rem]">latest</h3>
             <div className=" flex justify-between items-center">
              <p className="font-Noto_Sans font-light leading-5 md:w-[24rem]">Experience Mahmood Farooqui’s latest shows, interactive workshops, and book launches. Dive into the art of Dastangoi and explore storytelling, history, and literature. Join the cultural celebration!</p>
              <ul className="font-Noto_Sans text-xl lg:text-3xl text-right hidden md:block">
                <li>Shows</li>
                <li>News</li>
                <li>Interviews</li>
              </ul>
             </div>
          </div>
          <div className="mt-[5rem]">
            <iframe 
              width="100%" 
              height="230"
              className="rounded-xl shadow-2xl lg:w-[100%] lg:h-[700px]"
              src="https://youtu.be/aZG5Op2yuA8?si=wL62zukusq9y9z3R" 
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
          <div className='w-full flex flex-col justify-between items-center'>
            <div className="uppercase text-[#AA1F18] font-Noto_Sans font-bold text-5xl mb-[4rem] xl:text-[64px] xl:font-extrabold">
              <h4>ongoing /<br/> up-coming shows</h4>
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
                    className="w-full border rounded-lg border-none"
                    src="./home/Carousel-ongoing-upcoming/poster-1.jpg"
                    alt=""
                  />
                  <div className="mt-6">
                    <p className="font-Noto_Sans text-3xl text-white md:text-xl xl:text-2xl">
                    Dastan-e-Gandhi and Dastan-e-Partition
                    </p>
                    <p className="text-white opacity-60 text-sm font-light font-Noto_Sans mt-2 lg:text-base">
                    Date: October 5, 2024 | Location: Adchini Sarvodaya Enclave, Delhi
                    </p>
                    <div className="w-full flex flex-wrap justify-center items-center mt-4 gap-x-5 gap-y-2">
                      <button className="min-w-[6.5rem] text-primary-red border-primary-red border rounded font-Noto_Sans font-medium py-1 text-sm hover:bg-primary-red hover:text-black hover:font-medium transition-all duration-75 lg:text-base">
                        Ticket
                      </button>
                      <button className="min-w-[6.5rem] text-primary-red border-primary-red border rounded font-Noto_Sans font-medium py-1 text-sm hover:bg-primary-red hover:text-black hover:font-medium transition-all duration-75 lg:text-base">
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
                  className={`mt-12 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <img
                    className="w-full border rounded-lg border-none"
                    src="./home/Carousel-ongoing-upcoming/poster-2.jpg"
                    alt=""
                  />
                  <div className="mt-6">
                    <p className="font-Noto_Sans text-3xl text-white md:text-xl xl:text-2xl">
                    Dastan-e-Chauboli
                    </p>
                    <p className="text-white opacity-60 text-sm font-light font-Noto_Sans mt-2 lg:text-base">
                    Date: October 15, 2024 | Location: Habitat Centre, Delhi, India
                    </p>
                    <div className="w-full flex flex-wrap justify-center items-center mt-4 gap-x-5 gap-y-2">
                      <button className="min-w-[6.5rem] text-primary-red border-primary-red border rounded font-Noto_Sans font-medium py-1 text-sm hover:bg-primary-red hover:text-black hover:font-medium transition-all duration-75 lg:text-base">
                        Ticket
                      </button>
                      <button className="min-w-[6.5rem] text-primary-red border-primary-red border rounded font-Noto_Sans font-medium py-1 text-sm hover:bg-primary-red hover:text-black hover:font-medium transition-all duration-75 lg:text-base">
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
                  className={`mt-12 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <img
                    className="w-full border rounded-lg border-none"
                    src="./home/Carousel-ongoing-upcoming/poster-3.jpg"
                    alt=""
                  />
                  <div className="mt-6">
                    <p className="font-Noto_Sans text-3xl text-white md:text-xl xl:text-2xl">
                    Dastan-e-Karn az Mahabharat
                    </p>
                    <p className="text-white opacity-60 text-sm font-light font-Noto_Sans mt-2 lg:text-base">
                    Date: October 20, 2024 | Location: Habitat Centre, Delhi, India
                    </p>
                    <div className="w-full flex flex-wrap justify-center items-center mt-4 gap-x-5 gap-y-2">
                      <button className="min-w-[6.5rem] text-primary-red border-primary-red border rounded font-Noto_Sans font-medium py-1 text-sm hover:bg-primary-red hover:text-black hover:font-medium transition-all duration-75 lg:text-base">
                        Ticket
                      </button>
                      <button className="min-w-[6.5rem] text-primary-red border-primary-red border rounded font-Noto_Sans font-medium py-1 text-sm hover:bg-primary-red hover:text-black hover:font-medium transition-all duration-75 lg:text-base">
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
                  className={`mt-12 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <img
                    className="w-full border rounded-lg border-none"
                    src="./home/Carousel-ongoing-upcoming/poster-2.jpg"
                    alt=""
                  />
                  <div className="mt-6">
                    <p className="font-Noto_Sans text-3xl text-white md:text-xl xl:text-2xl">
                    Dastan Amar Ayyar aur Mahtab Jadu ki
                    </p>
                    <p className="text-white opacity-60 text-sm font-light font-Noto_Sans mt-2 lg:text-base">
                    Date: October 15, 2024 | Location: Habitat Centre, Delhi, India
                    </p>
                    <div className="w-full flex flex-wrap justify-center items-center mt-4 gap-x-5 gap-y-2">
                      <button className="min-w-[6.5rem] text-primary-red border-primary-red border rounded font-Noto_Sans font-medium py-1 text-sm hover:bg-primary-red hover:text-black hover:font-medium transition-all duration-75 lg:text-base">
                        Ticket
                      </button>
                      <button className="min-w-[6.5rem] text-primary-red border-primary-red border rounded font-Noto_Sans font-medium py-1 text-sm hover:bg-primary-red hover:text-black hover:font-medium transition-all duration-75 lg:text-base">
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
                  className={`mt-12 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <img
                    className="w-full border rounded-lg border-none"
                    src="./home/Carousel-ongoing-upcoming/poster-2.jpg"
                    alt=""
                  />
                  <div className="mt-6">
                    <p className="font-Noto_Sans text-3xl text-white md:text-xl xl:text-2xl">
                    Dastan-E-Amir Hamza
                    </p>
                    <p className="text-white opacity-60 text-sm font-light font-Noto_Sans mt-2 lg:text-base">
                    Date: October 15, 2024 | Location: Habitat Centre, Delhi, India
                    </p>
                    <div className="w-full flex flex-wrap justify-center items-center mt-4 gap-x-5 gap-y-2">
                      <button className="min-w-[6.5rem] text-primary-red border-primary-red border rounded font-Noto_Sans font-medium py-1 text-sm hover:bg-primary-red hover:text-black hover:font-medium transition-all duration-75 lg:text-base">
                        Ticket
                      </button>
                      <button className="min-w-[6.5rem] text-primary-red border-primary-red border rounded font-Noto_Sans font-medium py-1 text-sm hover:bg-primary-red hover:text-black hover:font-medium transition-all duration-75 lg:text-base">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
            <p className='opacity-0'>.</p>
            <p className='opacity-0'>.</p>
          </Swiper>
      </section>

      {/* // SECTION 6 */}

      <section className="bg-[#151515] w-full pt-12 px-6 lg:px-20">
          <h4 className="uppercase text-white font-Noto_Sans font-bold text-5xl">Books</h4>
          <div className="w-full text-white flex justify-between items-center">
                  <p className="font-Noto_Sans font-light leading-5 md:w-[26rem]">Experience Mahmood Farooqui’s latest shows, interactive workshops, and book launches. Dive into the art of Dastangoi and explore storytelling, history, and literature. Join the cultural celebration!</p>
                  <ul className="font-Noto_Sans text-xl lg:text-3xl text-right hidden md:block">
                    <li>Author</li>
                    <li>Researcher</li>
                    <li>Compiler & Translator</li>
                  </ul>
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
                    src="./home/carousel-primary/Posters-1.jpg"
                    alt=""
                  />
                  <div className="bg-red-700 rounded-b-lg p-5">
                    <p className="font-Noto_Sans text-3xl text-white font-bold md:text-xl xl:text-2xl">
                    Besieged: Voices From Delhi-1857
                    </p>
                    <p className="text-white text-base font-light font-Noto_Sans mt-2">
                    Book (Compiler and Translator)
                    </p>
                    <div className="w-full flex flex-wrap justify-center items-center mt-4 gap-x-5 gap-y-2">
                      <button className="min-w-[6.5rem] text-white border rounded-md font-Noto_Sans font-light py-1 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-white hover:text-primary-red
                      hover:font-medium
                      transition-all duration-75">
                        Read
                    </button>
                      <button className="min-w-[6.5rem] text-white border rounded-md font-Noto_Sans font-light py-1 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-white hover:text-primary-red
                      hover:font-medium
                      transition-all duration-75">
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
                  className={`mt-12 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <img
                    className="w-full border rounded-t-lg border-none"
                    src="./home/carousel-primary/Posters-2.jpg"
                    alt=""
                  />
                  <div className="bg-red-700 rounded-b-lg p-5">
                    <p className="font-Noto_Sans text-2xl text-white font-bold">
                    A Requiem for Pakistan: The World of Intizar Husain
                    </p>
                    <p className="text-white text-base font-light font-Noto_Sans mt-2">
                      Book (Author)
                    </p>
                    <div className="w-full flex flex-wrap justify-center items-center mt-4 gap-x-5 gap-y-2">
                      <button className="min-w-[6.5rem] text-white border rounded-md font-Noto_Sans font-light py-1 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-white hover:text-primary-red
                      hover:font-medium
                      transition-all duration-75">
                        Read
                    </button>
                      <button className="min-w-[6.5rem] text-white border rounded-md font-Noto_Sans font-light py-1 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-white hover:text-primary-red
                      hover:font-medium
                      transition-all duration-75">
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
                  className={`mt-20 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <img
                    className="w-full border rounded-t-lg border-none"
                    src="./home/carousel-primary/Posters-3.jpg"
                    alt=""
                  />
                  <div className="bg-red-700 rounded-b-lg p-5">
                    <p className="font-Noto_Sans text-3xl text-white font-bold md:text-xl xl:text-2xl">
                      Dastangoi
                    </p>
                    <p className="text-white text-base font-light font-Noto_Sans mt-2">
                      Book (Co-Author, Compiler)
                    </p>
                    <div className="w-full flex flex-wrap justify-center items-center mt-4 gap-x-5 gap-y-2">
                      <button className="min-w-[6.5rem] text-white border rounded-md font-Noto_Sans font-light py-1 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-white hover:text-primary-red
                      hover:font-medium
                      transition-all duration-75">
                        Read
                    </button>
                      <button className="min-w-[6.5rem] text-white border rounded-md font-Noto_Sans font-light py-1 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-white hover:text-primary-red
                      hover:font-medium
                      transition-all duration-75">
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
                  className={`mt-20 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <img
                    className="w-full border rounded-t-lg border-none"
                    src="./home/carousel-primary/Posters-4.jpg"
                    alt=""
                  />
                  <div className="bg-red-700 rounded-b-lg p-5">
                    <p className="font-Noto_Sans text-3xl text-white font-bold md:text-xl xl:text-2xl">
                      Dastangoi - 2
                    </p>
                    <p className="text-white text-base font-light font-Noto_Sans mt-2">
                      Book (Co-Author, Compiler)
                    </p>
                    <div className="w-full flex flex-wrap justify-center items-center mt-4 gap-x-5 gap-y-2">
                      <button className="min-w-[6.5rem] text-white border rounded-md font-Noto_Sans font-light py-1 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-white hover:text-primary-red
                      hover:font-medium
                      transition-all duration-75">
                        Read
                    </button>
                      <button className="min-w-[6.5rem] text-white border rounded-md font-Noto_Sans font-light py-1 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-white hover:text-primary-red
                      hover:font-medium
                      transition-all duration-75">
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
                  className={`mt-12 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <img
                    className="w-full border rounded-t-lg border-none"
                    src="./home/carousel-primary/Posters-5.jpg"
                    alt=""
                  />
                  <div className="bg-red-700 rounded-b-lg p-5">
                    <p className="font-Noto_Sans text-3xl text-white font-bold md:text-xl xl:text-2xl">
                    Memoirs: Habib Tanvir
                    </p>
                    <p className="text-white text-base font-light font-Noto_Sans mt-2">
                      Book (Translator)
                    </p>
                    <div className="w-full flex flex-wrap justify-center items-center mt-4 gap-x-5 gap-y-2">
                      <button className="min-w-[6.5rem] text-white border rounded-md font-Noto_Sans font-light py-1 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-white hover:text-primary-red
                      hover:font-medium
                      transition-all duration-75">
                        Read
                    </button>
                      <button className="min-w-[6.5rem] text-white border rounded-md font-Noto_Sans font-light py-1 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-white hover:text-primary-red
                      hover:font-medium
                      transition-all duration-75">
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
                  className={`mt-20 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <img
                    className="w-full border rounded-t-lg border-none"
                    src="./home/carousel-primary/Posters-5.jpg"
                    alt=""
                  />
                  <div className="bg-red-700 rounded-b-lg p-5">
                    <p className="font-Noto_Sans text-3xl text-white font-bold md:text-xl xl:text-2xl">
                    The Last Mughal
                    </p>
                    <p className="text-white text-base font-light font-Noto_Sans mt-2">
                      Book (Researcher)
                    </p>
                    <div className="w-full flex flex-wrap justify-center items-center mt-4 gap-x-5 gap-y-2">
                      <button className="min-w-[6.5rem] text-white border rounded-md font-Noto_Sans font-light py-1 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-white hover:text-primary-red
                      hover:font-medium
                      transition-all duration-75">
                        Read
                    </button>
                      <button className="min-w-[6.5rem] text-white border rounded-md font-Noto_Sans font-light py-1 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-white hover:text-primary-red
                      hover:font-medium
                      transition-all duration-75">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>         
            <p className='opacity-0'>.</p>
            <p className='opacity-0'>.</p>
          </Swiper>
      </section>

      {/* // SECTION 7 */}

      <section className="bg-[#151515] w-full pt-12 px-6 lg:px-20">
          <h4 className="uppercase text-white font-Noto_Sans font-bold text-5xl">Movies</h4>
          <div className="w-full text-white flex justify-between items-center">
                  <p className="font-Noto_Sans font-light leading-5 md:w-[24rem]">Experience Mahmood Farooqui’s latest shows, interactive workshops, and book launches. Dive into the art of Dastangoi and explore storytelling, history, and literature. Join the cultural celebration!</p>
                  <ul className="font-Noto_Sans text-xl lg:text-3xl text-right hidden md:block">
                    <li>Director</li>
                    <li>Actor</li>
                    <li>Writer</li>
                  </ul>
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
                  className={`mt-12 mb-10 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <img
                    className="w-full border rounded-t-lg border-none"
                    src="./home/carousel-primary/Posters-1.jpg"
                    alt=""
                  />
                  <div className="bg-red-700 rounded-b-lg p-5">
                    <p className="font-Noto_Sans text-3xl text-white font-bold md:text-xl xl:text-2xl">
                    Peepli Live
                    </p>
                    <p className="text-white text-base font-light font-Noto_Sans mt-2">
                    Movie (Co-Director)
                    </p>
                    <div className="w-full flex flex-wrap justify-center items-center mt-4 gap-x-5 gap-y-2">
                      <button className="min-w-[6.5rem] text-white border rounded-md font-Noto_Sans font-light py-1 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-white hover:text-primary-red
                      hover:font-medium
                      transition-all duration-75">
                        Read
                    </button>
                      <button className="min-w-[6.5rem] text-white border rounded-md font-Noto_Sans font-light py-1 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-white hover:text-primary-red
                      hover:font-medium
                      transition-all duration-75">
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
                  className={`mt-12 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <img
                    className="w-full border rounded-t-lg border-none"
                    src="./home/carousel-primary/Posters-2.jpg"
                    alt=""
                  />
                  <div className="bg-red-700 rounded-b-lg p-5">
                    <p className="font-Noto_Sans text-3xl text-white font-bold md:text-xl xl:text-2xl">
                      Harud
                    </p>
                    <p className="text-white text-base font-light font-Noto_Sans mt-2">
                    Movie (Screenplay Writer)
                    </p>
                    <div className="w-full flex flex-wrap justify-center items-center mt-4 gap-x-5 gap-y-2">
                      <button className="min-w-[6.5rem] text-white border rounded-md font-Noto_Sans font-light py-1 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-white hover:text-primary-red
                      hover:font-medium
                      transition-all duration-75">
                        Read
                    </button>
                      <button className="min-w-[6.5rem] text-white border rounded-md font-Noto_Sans font-light py-1 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-white hover:text-primary-red
                      hover:font-medium
                      transition-all duration-75">
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
                  className={`mt-12 mb-10 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <img
                    className="w-full border rounded-t-lg border-none"
                    src="./home/carousel-primary/Posters-1.jpg"
                    alt=""
                  />
                  <div className="bg-red-700 rounded-b-lg p-5">
                    <p className="font-Noto_Sans text-3xl text-white font-bold md:text-xl xl:text-2xl">
                    Peepli Live
                    </p>
                    <p className="text-white text-base font-light font-Noto_Sans mt-2">
                    Movie (Co-Director)
                    </p>
                    <div className="w-full flex flex-wrap justify-center items-center mt-4 gap-x-5 gap-y-2">
                      <button className="min-w-[6.5rem] text-white border rounded-md font-Noto_Sans font-light py-1 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-white hover:text-primary-red
                      hover:font-medium
                      transition-all duration-75">
                        Read
                    </button>
                      <button className="min-w-[6.5rem] text-white border rounded-md font-Noto_Sans font-light py-1 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-white hover:text-primary-red
                      hover:font-medium
                      transition-all duration-75">
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
                  className={`mt-12 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <img
                    className="w-full border rounded-t-lg border-none"
                    src="./home/carousel-primary/Posters-2.jpg"
                    alt=""
                  />
                  <div className="bg-red-700 rounded-b-lg p-5">
                    <p className="font-Noto_Sans text-3xl text-white font-bold md:text-xl xl:text-2xl">
                      Harud
                    </p>
                    <p className="text-white text-base font-light font-Noto_Sans mt-2">
                    Movie (Screenplay Writer)
                    </p>
                    <div className="w-full flex flex-wrap justify-center items-center mt-4 gap-x-5 gap-y-2">
                      <button className="min-w-[6.5rem] text-white border rounded-md font-Noto_Sans font-light py-1 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-white hover:text-primary-red
                      hover:font-medium
                      transition-all duration-75">
                        Read
                    </button>
                      <button className="min-w-[6.5rem] text-white border rounded-md font-Noto_Sans font-light py-1 text-md xl:text-lg md:text-[15px] md:min-w-[6rem] tracking-tighter hover:bg-white hover:text-primary-red
                      hover:font-medium
                      transition-all duration-75">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
            <p className='opacity-0'>.</p>
            <p className='opacity-0'>.</p>
          </Swiper>
      </section>

      

    </div>

  );
}
