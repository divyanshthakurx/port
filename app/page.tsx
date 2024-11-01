// import Image from "next/image";
"use client";
import Image from 'next/image';
import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from '@/components/EmblaCarousel';

export default function Home() {

  return (

    <div>

      {/* SECTION 1 */}

      <section className="bg-primary-bg py-[5rem] w-full h-screen relative">
          <img className="w-[19rem] h-auto -mt-10 top-[12rem] sm:w-[20rem] sm:top-[16rem] md:w-[28rem] lg:top-[6rem] lg:w-[35rem] bxl:w-[31rem] left-1/2 transform -translate-x-1/2 absolute" src="/home/hero/hero-main-bg.jpg" alt="" />
          <img className="w-[19rem] h-auto -mt-10 top-[12rem] sm:w-[20rem] sm:top-[16rem] md:w-[28rem] lg:top-[6rem] lg:w-[35rem] bxl:w-[31rem] left-1/2 transform -translate-x-1/2 absolute" src="/home/hero/hero-main-fg.jpg" alt="" />
          <div className="w-full h-full flex flex-col justify-between items-center gap-[25rem] lg:gap-[8rem] bxl:gap-0">
            <h1 className="uppercase font-black font-Noto_Sans text-[19vw] text-white">dastango</h1>
            <div className='w-full lg:px-20 flex flex-col justify-center items-center lg:gap-[4rem] bxl:gap-0'>
              <div className='hidden md:block self-start md:px-7 mb-8'>
                <ul className='uppercase text-white font-Noto_Sans font-medium text-2xl flex flex-col justify-center gap-2'>
                  <li>writer</li>
                  <li>dastango</li>
                  <li>director</li>
                </ul>
              </div>
              <div className="w-full text-white px-7 -mt-3 z-10 md:flex md:justify-between md:items-center  self-end">
                <h2 className="uppercase font-Trajan_Pro font-bold w-[50%] text-5xl text-primary-red mb-2">Mahmood Farooqui</h2>
                <p className="font-Noto_Sans md:w-[32vw] lg:text-2xl ">Mahmood Farooqui is an acclaimed Indian writer, performer, and director, celebrated for his expertise in Dastangoi, a traditional form of Urdu storytelling.</p>
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

                </div>
              </div>            
            </div>
      </section>

      

      {/* // SECTION 4 */}

      <div className="bg-primary-bg w-full h-auto">
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
      </div>

      {/* // SECTION 5 */}

      <div className="bg-primary-bg w-full h-auto">
        <div className="py-[5rem] px-8 lg:px-20">
          <div className='w-full flex flex-col justify-between items-center'>
            <div className="uppercase text-[#AA1F18] font-Noto_Sans font-bold text-5xl mb-[4rem]">
              <h4>ongoing / up-coming shows</h4>
            </div>
            <div>
              
            </div>
          </div> 
        </div>
      </div>

      {/* // SECTION 7 */}

      <section className="bg-[#151515] text-white w-full h-auto">
          <div className="py-[6rem] px-8 lg:px-20">
            <div className='flex flex-col justify-center items-center gap-16'>
              <div className='w-full flex flex-col justify-center items-center'>
                <h3 className="uppercase font-Noto_Sans font-bold text-[5rem] self-start">books</h3>
                <div className="w-full flex justify-between items-center">
                  <p className="font-Noto_Sans font-light leading-5 md:w-[26rem]">Experience Mahmood Farooqui’s latest shows, interactive workshops, and book launches. Dive into the art of Dastangoi and explore storytelling, history, and literature. Join the cultural celebration!</p>
                  <ul className="font-Noto_Sans text-xl lg:text-3xl text-right hidden md:block">
                    <li>Author</li>
                    <li>Researcher</li>
                    <li>Compiler & Translator</li>
                  </ul>
                </div>
              </div>
              <div>

              </div>
            </div>
          </div>
      </section>

      {/* // SECTION 6 */}

      <section className="bg-[#151515] text-white w-full h-auto">
          <div className="py-[6rem] px-8 lg:px-20">
            <div className='flex flex-col justify-center items-center gap-16'>
              <div className='w-full flex flex-col justify-center items-center'>
                <h3 className="uppercase font-Noto_Sans font-bold text-[5rem] self-start">movies</h3>
                <div className="w-full flex justify-between items-center">
                  <p className="font-Noto_Sans font-light leading-5 md:w-[24rem]">Experience Mahmood Farooqui’s latest shows, interactive workshops, and book launches. Dive into the art of Dastangoi and explore storytelling, history, and literature. Join the cultural celebration!</p>
                  <ul className="font-Noto_Sans text-xl lg:text-3xl text-right hidden md:block">
                    <li>Director</li>
                    <li>Actor</li>
                    <li>Writer</li>
                  </ul>
                </div>
              </div>
              <div>
              {/* <EmblaCarousel
                  slides={[
                    
                    { imgSrc: '/home/carousel-primary/Posters-2.jpg', title: 'Peepli Live', description: 'Movie (Co-Director)', buttonText1: 'Ticket', buttonText2: 'Learn More' },
                    { imgSrc: '/home/carousel-primary/Posters-3.jpg', title: 'Peepli Live', description: 'Movie (Co-Director)', buttonText1: 'Ticket', buttonText2: 'Learn More' },
                    { imgSrc: '/home/carousel-primary/Posters-4.jpg', title: 'Peepli Live', description: 'Movie (Co-Director)', buttonText1: 'Ticket', buttonText2: 'Learn More' },
                    { imgSrc: '/home/carousel-primary/Posters-5.jpg', title: 'Peepli Live', description: 'Movie (Co-Director)', buttonText1: 'Ticket', buttonText2: 'Learn More' }                  ]}
                />     */}
              </div>
            </div>
          </div>
      </section>

      

    </div>

  );
}
