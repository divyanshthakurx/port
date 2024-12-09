"use client";
// import Image from "next/image";
import { motion } from 'framer-motion';
import { useEffect } from "react";
import gsap from "gsap";



const About = () => {

    useEffect(() => {
        const timelineContainer = document.querySelector('.timeline-container');
    
        gsap.to(timelineContainer, {
          scrollTrigger: {
            trigger: timelineContainer,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
            pin: true, // This will pin the timeline in place until the end
          },
        });
      }, []);

    useEffect(() => {
      gsap.fromTo(
        ".blur-text",
        { filter: "blur(10px)" },
        {
          filter: "blur(0px)",
          duration: 3,
          ease: "power3.out",
        }
      );
    }, []);

    useEffect(() => {
        gsap.from(".fade-in-text", {
          opacity: 0,  // Start hidden
          duration: 1.5,  // Fade duration
          ease: "power3.out",  // Easing for smooth effect
        });
      }, []);

      useEffect(() => {
        // GSAP animation to fade in text from bottom to top
        gsap.from('.fade-bottom-up', {
          opacity: 0,  // Start with the text being invisible
          y: 50,  // Start the text 50px lower than its final position
          duration: 2,  // Duration of the animation
          ease: 'power3.out',  // Ease to make the animation smooth
        });
      }, []);
    
  
  return (

    <div>
        
        <section className="bg-[#101010] text-white">
            <div className="relative h-[180vw] grid items-end min-[950px]:h-[52vw]">
                <h1 className="text-[8vw]  blur-text text-red-700 z-10 absolute font-Trajan_Pro font-bold top-[40vw] left-[8vw] min-[950px]:top-[30vw] min-[950px]:left-[73.5vw] min-[950px]:text-[3.5vw] min-[950px]:leading-none">
                    MAHMOOD<br/>FAROOQUI
                </h1>
                <img className="w-[50%] absolute top-[0] right-0 min-[950px]:w-[24vw]" src="/about/Barwai Photos 040 4.png" alt=""/>
                <img className="w-[85vw] absolute top-[65vw] left-[8vw] z-10 min-[950px]:top-[18vw] min-[950px]:left-[50vw] min-[950px]:translate-x-[-50%] min-[950px]:w-[45vw]" src="/about/mf11.jpg" alt=""/>
                <img className="w-[67vw] absolute top-[160vw] translate-y-[-100%] left-0 min-[950px]:translate-y-[0%] min-[950px]:top-[8vw] min-[950px]:left-[5.5vw] min-[950px]:w-[30vw]" src="/about/Barwai Photos 040 3.png" alt=""/>
                <p className="absolute  blur-text uppercase font-Noto_Sans text-[7vw] text-white font-medium leading-snug top-[133vw] right-[7vw] min-[950px]:top-[36.5vw] min-[950px]:left-[9vw] min-[950px]:text-[40px] min-[950px]:leading-tight min-[950px]:font-medium">Writer <br/> Performer <br/> Director</p>
                <p className="px-8  blur-text mb-[-5vw] font-Noto_Sans font-light md:font-normal md:text-2xl min-[550px]:text-xl min-[750px]:mb-0 min-[950px]:absolute min-[950px]:right-[2vw] min-[950px]:w-[36vw] min-[950px]:text-[1.5vw] min-[950px]:bottom-[1.5vw] min-[950px]:z-10 min-[950px]:mb-0">Mahmood Farooqui is an acclaimed Indian writer, performer, and director, celebrated for his expertise in Dastangoi, a traditional form of Urdu storytelling.</p>
            </div>
        </section>

        <section className="pb-16 pt-[4rem] md:pt-0 lg:pb-0 xl:mb-0 bg-[#101010] text-white">
            <div className="px-[8.5vw] xl:px-0">
            <div className="xl:grid grid-cols-[35%,65%] gridrows-3 xl:px-[8vw] xl:pt-[10vw] xl:gap-x-[5vw]">
                <motion.p className="text-5xl font-normal pt-[10vw] mb-6 font-Noto_Sans sm:text-6xl xl:order-2  xl:text-7xl xl:w-[32vw] xl:leading-none xl:pt-[0vw] xl:mb-0"
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }}  
                transition={{ duration: 2, ease: 'easeOut' }}  
                viewport={{ once: true, amount: 0.25 }} 
                >Born in <span className="text-red-700">1972</span> in Gorakhpur, Uttar Pradesh</motion.p>
                <img src="/about/Frame 13.jpg" alt="" className="w-full mb-12 px-6 xl:hidden"/>
                <img src="/about/Frame 13_2.jpg" alt="" className="hidden xl:block xl:w-[25vw] xl:order-1 xl:row-span-3"/>
                <motion.p className="mb-10 font-Noto_Sans font-light sm:text-2xl xl:order-3 xl:text-3xl xl:leading-none xl:mb-0 xl:mt-[24px]"
                initial={{ opacity: 0, y: 50 }}  
                whileInView={{ opacity: 1, y: 0 }}  
                transition={{ duration: 1.25, ease: 'easeOut' }}  
                viewport={{ once: true, amount: 0.25 }}
                >He was inspired by his family's rich literary background and developed a passion for literature and storytelling from an early age.
                </motion.p>
            </div>
            <div className="text-2xl mb-[4.5rem] sm:text-4xl xl:px-[8vw] xl:flex justify-between xl:w-full xl:text-4xl xl:mt-[5vw]">
                <motion.div className="font-Noto_Sans font-light flex flex-col gap-[1vw]"
                initial={{ opacity: 0, y: 50 }}  
                whileInView={{ opacity: 1, y: 0 }}  
                transition={{ duration: 1.25, ease: 'easeOut' }}  
                viewport={{ once: true, amount: 0.25 }}
                >
                <span className="opacity-[80%] xl:text-[2vw]">Father</span>
                <p className="mb-[10vw] sm:mb-[0vw] ">Mahboob Ur Rahman Farooqi</p>
                </motion.div>
                <motion.div className="text-right font-Noto_Sans font-light flex flex-col gap-[1vw] mt-[5vw]"
                initial={{ opacity: 0, y: 50 }}  
                whileInView={{ opacity: 1, y: 0 }}  
                transition={{ duration: 1.25, ease: 'easeOut' }}  
                viewport={{ once: true, amount: 0.25 }}
                >
                <span className="opacity-[80%] xl:text-[2vw]">Mother</span>
                <p>Suraiya Farooqui</p>
                </motion.div>
            </div>
            <div className="xl:grid xl:grid-cols-2 xl:px-[8vw] gap-[5vw]">
                <img src="/about/Facebook post - 2.jpg" alt="" className="mb-6 order-2 m-auto sm:w-[50vw] xl:w-full xl:mb-0"/>
                <div className="order-1 sm:text-3xl xl:text-[1.72rem]">
                    <motion.p className="text-4xl font-Noto_Sans font-medium mb-4 md:text-7xl"
                    initial={{ opacity: 0, y: 50 }}  
                    whileInView={{ opacity: 1, y: 0 }}  
                    transition={{ duration: 1.25, ease: 'easeOut' }}  
                    viewport={{ once: true, amount: 0.25 }}
                    > Education</motion.p>
                    <motion.p className="mb-5 leading-tight font-Noto_Sans font-light"
                    initial={{ opacity: 0, y: 50 }} 
                    whileInView={{ opacity: 1, y: 0 }}  
                    transition={{ duration: 2, ease: 'easeOut' }}  
                    viewport={{ once: true, amount: 0.25 }} 
                    >Farooqui completed his schooling at the Doon School in Dehradun and pursued history at St. Stephen's College, Delhi.</motion.p>
                    <motion.p className="leading-tight font-Noto_Sans font-light"
                    initial={{ opacity: 0, y: 50 }} 
                    whileInView={{ opacity: 1, y: 0 }}  
                    transition={{ duration: 2, ease: 'easeOut' }}  
                    viewport={{ once: true, amount: 0.25 }} 
                    >His work in theatre and academic excellence earned him a Rhodes Scholarship to study at St. Peter's College, University of Oxford, where he achieved a Top First in History.</motion.p>
                </div>
            </div>
            </div>
        </section>

        <section className="relative pt-14 bg-gradient-to-r from-[#101010] from-20% to-[#AA1F18] text-white pb-20 lg:px-[8vw]">
            <motion.h2 className="px-10 text-5xl font-Noto_Sans font-bold mb-[5vw] sm:mb-0 lg:px-0 xl:text-[65px] xl:font-normal xl:tracking-tight xl:w-[80%]"
            initial={{ opacity: 0, y: 50 }}  
            whileInView={{ opacity: 1, y: 0 }}  
            transition={{ duration: 1.25, ease: 'easeOut' }}  
            viewport={{ once: true, amount: 0.25 }}
            >IN 2005  HE BEGAN REVIVING THE FORGOTTEN <span className="text-red-700 xl:text-white">ART</span> OF DASTANGOI
            </motion.h2>
            <div className="lg:grid lg:grid-cols-[2fr_1fr] lg:mt-[5vw]">
                <div className="pr-10 lg:order-2 lg:pr-0">
                    <div className="w-full flex justify-end mb-5">
                    <img src="/about/shamsur-rahman-faruqi 1.png" alt="" className="md:w-[18%] lg:w-[15vw]"/>
                    </div>
                    <motion.p className="text-right mb-[5vw] text-[#ffffffd0] font-Noto_Sans leading-tight md:mb-[2vw] md:text-xl lg:text-[19px] xl:text-2xl xl:mb-48"
                    initial={{ opacity: 0, y: 50 }} 
                    whileInView={{ opacity: 1, y: 0 }}  
                    transition={{ duration: 2, ease: 'easeOut' }}  
                    viewport={{ once: true, amount: 0.25 }} 
                    >With The Guidance Of His Uncle, <br/><span className="text-white">Shamsur Rahman Faruqi</span>
                    </motion.p>
                </div>
                <div className="lg:order-1">
                    <img src="/about/mf5 2.jpg" alt="" className="w-[100%] mb-[5vw] xl:w-[54vw]"/>
                    <motion.p className="px-10 leading-tight font-Noto_Sans sm:text-xl lg:px-0 xl:text-2xl bxl:text-3xl"
                    initial={{ opacity: 0, y: 50 }} 
                    whileInView={{ opacity: 1, y: 0 }}  
                    transition={{ duration: 2, ease: 'easeOut' }}  
                    viewport={{ once: true, amount: 0.25 }} 
                    >Determined to keep the art alive, he founded the Dastangoi Collective. gathering and training new performers, ensuring its continuity. His efforts were recognized in 2010 when he received the prestigious Ustad Bilsmillah Khan Yuva Puraskar.
                    </motion.p>
                </div>
            </div>
        </section>

        <section className="bg-[#101010]">
            <div className="py-[4rem] px-[2rem]">  
                <div className="bxl:px-[6rem]">
                    <motion.h5 className="uppercase mb-16 text-white font-Noto_Sans font-bold xl:font-normal xl:text-[72px] xl:w-[60rem] xl:leading-[5rem] text-[3rem] leading-[3rem]"
                    initial={{ opacity: 0, y: 50 }}  
                    whileInView={{ opacity: 1, y: 0 }}  
                    transition={{ duration: 1.25, ease: 'easeOut' }}  
                    viewport={{ once: true, amount: 0.25 }}
                    >career in theater & revival of dastangoi
                    </motion.h5>
                    <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:gap-[8rem] content-center gap-y-20">
                    <img className=" xl:w-[30rem] h-[26rem] md:h-[34rem]" src={"/about/career.png"} alt="My Image" />
                    
                        <div className="text-white font-Noto_Sans font-light">
                                <ul className="w-full h-[34rem] timeline-container flex flex-col gap-8 no-scrollbar overflow-y-scroll no-scrollbar overflow-x-hidden">
                                    <hr /> 
                                    <li className="flex gap-x-6">
                                        <div>2002</div>
                                        <p>Started as an actor in Mango Souffle</p>
                                    </li>
                                    <hr />
                                    <li className="flex gap-x-6">
                                        <div>2005</div>
                                        <p>Performed his first modern Dastangoi presenting "Tilism-e Hoshruba" at the India International Centre on May 4, initiating the revival of this art form with a focus on contemporary adaptations.</p>
                                    </li>
                                    <hr />
                                    <li className="flex gap-x-6">
                                        <div>2006</div>
                                        <p>Worked as an researcher in The Last Mugal by William Dalrymple</p>
                                    </li>
                                    <hr />
                                    <li className="flex gap-x-6">
                                        <div>2010</div>
                                        <div className="flex flex-col gap-4">
                                            <p>For reviving ancient art form of urdu story telling Dastangoi .He was awarded the Ustad Bismillah Khan Yuva Puraskar </p>
                                            <div className="flex items-center gap-4">
                                                <div className="w-3 h-3">
                                                    <div className="w-3 h-3 bg-primary-red rounded-full animate-ping-slow"></div>
                                                </div>
                                                <p>Ustad Bismillah Khan Yuva Puraskar</p>
                                            </div>
                                        </div>
                                    </li>
                                    <hr />
                                    <li className="flex gap-x-6">
                                        <div>2010</div>
                                        <div className="flex flex-col gap-4">
                                            <p>He Wrote a Book Voices from Delhi 1857: Won the Ram Nath Goenka Award for Best Non-Fiction, offering insights into the 1857 uprising.</p>
                                            <div className="flex items-center gap-4">
                                                <div className="w-3 h-3 bg-primary-red rounded-full animate-ping-slow"></div>
                                                <p>Ram Nath Goenka Award</p>
                                            </div>
                                        </div>
                                    </li>
                                    <hr />
                                    <li className="flex gap-x-6">
                                        <div>2010</div>
                                        <p>Worked as a screenplay writer in Harud. It tells the story of a family who lives in the conflict-ridden region of Kashmir.</p>
                                    </li>
                                    <hr />
                                    <li className="flex gap-x-6">
                                        <div>2010</div>
                                        <div className="flex flex-col gap-4">
                                            <p>Co-directed Peepli Live: The film gained critical acclaim and was nominated for Best Feature Film at the National Film Awards. </p>
                                            <div className="w-full flex items-center gap-4">
                                                <div className="w-3 h-3">
                                                    <div className="w-3 h-3 bg-primary-red rounded-full animate-ping-slow"></div>
                                                </div>
                                                <p>Best feature film at national film awards.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <hr />
                                    <li className="flex gap-x-6">
                                        <div>2011</div>
                                        <p>National Tours: Began touring nationally with Dastangoi performances, increasing awareness and appreciation of the art form across India.</p>
                                    </li>
                                    <hr />
                                    <li className="flex gap-x-6">
                                        <div>2012</div>
                                        <p>International Performances: Performed at international festivals, introducing Dastangoi to global audiences and expanding its reach.</p>
                                    </li>
                                    <hr />
                                    <li className="flex gap-x-6">
                                        <div>2014</div>
                                        <p>Wrote his first book Dastagoi in urdu and hindi.</p>
                                    </li>
                                    <hr />
                                    <li className="flex gap-x-6">
                                        <div>2016</div>
                                        <p>Requiem of Pakistan</p>
                                    </li>
                                    <hr />
                                    <li className="flex gap-x-6">
                                        <div>2019</div>
                                        <p>Presented a compilation of dastans written by him in Dastangoi 2</p>
                                    </li>
                                    <hr />
                                    <li className="flex gap-x-6">
                                        <div>2019</div>
                                        <p>Innovative Adaptations: His performances included Dastan-e-Karn Az Mahabharat, exploring themes from Indian epics.</p>
                                    </li>
                                    <hr />
                                    <li className="flex gap-x-6">
                                        <div>2020</div>
                                        <p>Continued to perform Dastangoi, adapting it to modern themes and social issues, solidifying his role in cultural preservation. He has utilized his unique storytelling magic to attract new fans, making the art form accessible and engaging for diverse audiences.</p>
                                    </li>
                                    <hr />
                                </ul>
                        </div>
                    </div>
                </div>             
            </div>
        </section>

        <section className="bg-[#D4D4D4]">
            <div className="py-[64px] sm:py-0 sm:pt-[64px] ">
                <div className="flex flex-col justify-center items-center gap-12 lg:gap-0 bxl:gap-4 lg:relative md:px-[4rem] lg:px-[9rem]">
                    <motion.div className="font-Noto_Sans w-full flex flex-col md:flex-row md:justify-between gap-6 px-[2rem]"
                    initial={{ opacity: 0, y: 50 }}  
                    whileInView={{ opacity: 1, y: 0 }}  
                    transition={{ duration: 1.25, ease: 'easeOut' }}  
                    viewport={{ once: true, amount: 0.25 }}
                    >
                        <div className="md:text-3xl">In 2002</div>
                        <h6 className="uppercase text-5xl lg:text-[72px] md:w-[40rem] lg:w-[54rem]">married to acclaimed writer & director <span className="text-primary-red">anusha rizvi</span></h6>
                    </motion.div>
                    <div className="self-start flex flex-col gap-[4rem] justify-center items-center xl:mt-[6rem] z-20 px-[2rem] ">
                        <img className="w-[22rem] lg:w-[30vw] bxl:w-[33vw] h-auto shadow-xl" src={"/about/Anusha-Rizvi-and-Mehmood-Farooqui-with-son.png"}  alt={"picture of Anusha Rizvi and Mehmood Farooqui"} />
                        <motion.p className="font-Noto_Sans  xl:leading-10 font-medium lg:font-normal  lg:text-[32px] place-self-start"
                        initial={{ opacity: 0, y: 50 }}  // Start with opacity 0 and move the element 50px down
                        whileInView={{ opacity: 1, y: 0 }}  // Animate to full opacity and original position
                        transition={{ duration: 2, ease: 'easeOut' }}  // Duration and easing of the animation
                        viewport={{ once: true, amount: 0.25 }}
                        >
                            With Whom He Has a Son <br /><span className="font-Noto_Sans text-primary-red">Raamish Mujeeb Farooqui</span>
                        </motion.p>
                    </div>
                    <div className="lg:absolute lg:top-[18rem] lg:right-0">
                        <img className="w-full h-auto sm:w-[30rem] lg:w-[50vw] bxl:w-[56vw] md:self-center" src={"/about/mehmood-farooqui-with-son.png"}  alt={"picture of Anusha Rizvi and Mehmood Farooqui"}  />
                    </div>
                    <div className="font-Noto_Sans w-full flex flex-col md:flex-row-reverse justify-center lg:justify-between items-center gap-12 lg:gap-0">
                        <img className="w-[22rem] lg:w-[34vw] h-auto" src={"/about/Anusha-Rizvi-and-Mehmood-Farooqui.jpg"}  alt={"picture of Anusha Rizvi and Mehmood Farooqui"} />
                        <motion.p className="font-Noto_Sans md:self-end pb-[4rem] font-light lg:font-normal lg:text-2xl w-[22rem] md:w-[33rem]"
                        initial={{ opacity: 0, y: 50 }}  // Start with opacity 0 and move the element 50px down
                        whileInView={{ opacity: 1, y: 0 }}  // Animate to full opacity and original position
                        transition={{ duration: 2, ease: 'easeOut' }}  // Duration and easing of the animation
                        viewport={{ once: true, amount: 0.25 }}
                        >
                            His marriage to filmmaker Anusha Rizvi further enriches this artistic lineage, cultivating a dynamic space for creative expression. Together, they honor a legacy that not only reveres the past but also resonates vibrantly within contemporary storytelling, inviting audiences to immerse themselves in the beauty of their shared cultural heritage.
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-[#101010]">
            <div >
                <div className="w-full flex flex-col md:flex-row-reverse justify-center md:justify-between items-center">
                    <div className="mb-[1rem] md:mb-0 px-8 md:px-0 font-Noto_Sans  md:pr-[7%] bxl:pr-[13%]">
                        <motion.h6 className="uppercase text-primary-red font-extrabold text-[72px]"
                        initial={{ opacity: 0, y: 50 }}  // Start with opacity 0 and move the element 50px down
                        whileInView={{ opacity: 1, y: 0 }}  // Animate to full opacity and original position
                        transition={{ duration: 1.25, ease: 'easeOut' }}  // Duration and easing of the animation
                        viewport={{ once: true, amount: 0.25 }}
                        >vision
                        </motion.h6>
                        <motion.p className="text-white font-light leading-[22px] mt-4 xl:text-2xl xl:w-[33rem]"
                         initial={{ opacity: 0, y: 50 }} 
                         whileInView={{ opacity: 1, y: 0 }}  
                         transition={{ duration: 2, ease: 'easeOut' }}  
                         viewport={{ once: true, amount: 0.25 }}  
                        >
                            Mahmood Farooqui's philosophy centers on the revival and adaptation of Dastangoi, the ancient art of Urdu storytelling. He envisions this art form as a bridge between tradition and modernity, allowing for the exploration of contemporary themes through historical narratives. Farooqui believes in making storytelling accessible to new generations, using it as a medium to engage with social issues and foster cultural preservation, ultimately inspiring dialogue and reflection among audiences.He hopes that in the years to come, his team will be able to provide audiences with stories from different eras, genres and traditions.
                        </motion.p>
                    </div>
                    <img className="w-[80vw] md:w-[26rem] lg:w-[40rem] md:pt-8 place-self-start" src={"/about/vision.png"} alt={"my image"} />
                </div>             
            </div>
        </section>

    </div>

  );
}

export default About;