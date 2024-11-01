// import Image from "next/image";
import { SOCIAL_LINKS } from "@/constants";
import Link from "next/link";
import Image from 'next/image';
import { motion } from 'framer-motion';


export default function About() {
  return (

    <div>

        <section className="pb-12 xl:pb-96 bg-[#101010] text-white pt-4 ">
            <div className="relative h-[620px] mb-16 xl:mb-28">
            <h1 className="text-4xl text-red-700 z-10 absolute font-Trajan_Pro font-bold top-40 left-5 xl:top-[78%] xl:left-[73vw] xl:text-6xl">
                MAHMOOD<br/>FAROOQUI
            </h1>
            <img className="absolute top-[0] right-0 xl:w-[24vw]" src="/about/Barwai Photos 040 4.png" alt=""/>
            <img className="absolute top-[65vw] left-[8vw] z-10 xl:top-[50%] xl:left-[50%] xl:translate-x-[-50%] xl:w-[45vw]" src="/about/mf11.jpg" alt=""/>
            <img className="absolute bottom-0 left-0 xl:top-[8vw] xl:left-[5.5vw] xl:w-[30vw]" src="/about/Barwai Photos 040 3.png" alt=""/>
            <p className="absolute uppercase font-Noto_Sans text-[32px] text-white font-bold leading-tight bottom-[-6vw] right-[7vw] xl:bottom-[-8vw] xl:left-[9vw] xl:text-[42px] xl:leading-tight">Writer <br/> Performer <br/> Director</p>
            </div>
            <p className="absolute px-8 xl:w-[34vw] right-0 font-Noto_Sans font-light md:font-normal md:text-2xl z-20">Mahmood Farooqui is an acclaimed Indian writer, performer, and director, celebrated for his expertise in Dastangoi, a traditional form of Urdu storytelling.</p>
        </section>

        <section className="pb-16 pt-28 lg:pb-0 xl:mb-0 bg-[#101010] text-white">
            <div className="px-8">
            <div className="xl:grid grid-cols-2 gridrows-3 xl:px-52">
                <p className="text-5xl font-normal mb-6 font-Noto_Sans xl:order-2 xl:row-span-2 xl:text-7xl xl:leading-tight">Born in <span className="text-red-700">1973</span> in Gorakhpur, Uttar Pradesh</p>
                <img src="/about/Frame 13.jpg" alt="" className="w-full mb-12 px-6 xl:order-1 xl:row-span-3 xl:pr-28"/>
                <p className="mb-20 font-Noto_Sans font-light xl:order-3 xl:text-2xl xl:leading-normal">He was inspired by his family's rich literary background and developed a passion for literature and storytelling from an early age.
                </p>
            </div>
            <div className="text-2xl mb-[4.5rem] xl:px-80 xl:flex justify-between xl:w-full xl:text-4xl">
                <div className="font-Noto_Sans font-light">
                <span className="opacity-[80%]">Father</span>
                <p className="mb-14">Mahboob Ur Rahman</p>
                </div>
                <div className="text-right font-Noto_Sans font-light">
                <span className="opacity-[80%]">Mother</span>
                <p>Sraiya Farooqui</p>
                </div>
            </div>
            <div className="xl:grid xl:grid-cols-2 xl:px-40 gap-[5vw]">
                <img src="/about/Facebook post - 2.jpg" alt="" className="mb-6 order-2 xl:w-full xl:mb-0"/>
                <div className="order-1 xl:text-[1.72rem]">
                    <p className="mb-5 leading-tight font-Noto_Sans font-light">Farooqui completed his schooling at the Doon School in Dehradun and pursued history at St. Stephen's College, Delhi.</p>
                    <p className="leading-tight font-Noto_Sans font-light">His academic excellence earned him a Rhodes Scholarship to study at St. Peter's College, University of Oxford, where he achieved a Top First in History</p>
                </div>
            </div>
            </div>
        </section>

        <section className="px-10 relative pt-14 bg-gradient-to-r from-[#101010] from-20% to-[#AA1F18] text-white pb-20 xl:px-24 lg:pt-32">
            <h2 className="text-5xl font-Noto_Sans font-bold mb-14 xl:text-7xl xl:w-[64vw] xl:font-normal xl:mb-60">IN 2005  HE BEGAN REVIVING THE FORGOTTEN <span className="text-red-700 xl:text-white">ART</span> OF DASTANGOI</h2>
            <div className="w-full flex justify-end mb-5">
            <img src="/about/shamsur-rahman-faruqi 1.png" alt="" className="xl:w-[14%]"/>
            </div>
            <p className="text-right mb-[19rem] text-[#ffffffd0] font-Noto_Sans leading-tight xl:text-2xl xl:mb-48">With The Guidance Of His Uncle, <br/><span className="text-white">Shamsur Rahman Faruqi</span></p>
            <img src="/about/mf5 2.jpg" alt="" className="absolute w-[90%] bottom-[17rem] left-0 xl:w-[54vw] xl:left-24 xl:bottom-[26vw]"/>
            <p className="pl-5 pt-24 leading-tight font-Noto_Sans xl:pl-96 xl:text-[2.9rem] font-light">Determined to keep the art alive, he founded the Dastangoi Collective. gathering and training new performers, ensuring its continuity. His efforts were recognized in 2010 when he received the prestigious Ustad Bilsmillah Khan Yuva Puraskar.</p>
        </section>

        <div className="bg-[#101010]">
            <div className="py-[6rem] px-[2rem]">  
                <div>
                    <h5 className="uppercase mb-16 text-white font-Noto_Sans font-bold xl:font-medium xl:text-[102px] xl:w-[80rem] xl:leading-[7rem] text-[3rem] leading-[3rem]">career in theater & revival of dastangoi</h5>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 justify-items-center content-center gap-y-20">
                    <img className="w-full xl:w-[29vw]" src={"/about/career.png"} alt="My Image" /> 
                    <div className="text-white font-Noto_Sans font-light">
                            <ul className="w-full h-[34rem] flex flex-col gap-8 no-scrollbar overflow-y-scroll overflow-x-hidden">
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
                                    <p>Co-Author of dastangoi (Part-1)</p>
                                </li>
                                <hr />
                                <li className="flex gap-x-6">
                                    <div>2016</div>
                                    <p>Requiem of Pakistan</p>
                                </li>
                                <hr />
                                <li className="flex gap-x-6">
                                    <div>2019</div>
                                    <p>Co-Author of dastangoi (Part-2)</p>
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
        </div>

        <div className="bg-[#D4D4D4]">
            <div className="py-[6rem] sm:py-0 sm:pt-[6rem] ">
                <div className="flex flex-col justify-center items-center gap-12 lg:gap-24 bxl:gap-36 lg:relative md:px-[4rem] lg:px-[8rem]">
                    <div className="font-Noto_Sans w-full flex flex-col md:flex-row md:justify-between gap-6 px-[2rem]">
                        <div className="md:text-3xl">In 2002</div>
                        <h6 className="uppercase text-5xl lg:text-[72px] md:w-[40rem] lg:w-[54rem]">married to acclaimed writer & director <span className="text-primary-red">anusha rizvi</span></h6>
                    </div>
                    <div className="self-start flex flex-col lg:flex-row gap-8 justify-center items-center z-20 px-[2rem]">
                        <img className="w-[22rem] lg:w-[30vw] h-auto shadow-xl" src={"/about/Anusha-Rizvi-and-Mehmood-Farooqui-with-son.png"}  alt={"picture of Anusha Rizvi and Mehmood Farooqui"} />
                        <p className="font-Noto_Sans  xl:leading-10 font-medium lg:font-normal  lg:text-[32px] md:pt-24 place-self-start">With Whom He Has a Son <br /><span className="font-Noto_Sans text-primary-red">Raamish Mujeeb Farooqui</span></p>
                    </div>
                    <div className="lg:absolute lg:top-[18rem] lg:right-0">
                        <img className="w-full h-auto sm:w-[30rem] lg:w-[50vw] mb-[4rem] md:self-center" src={"/about/mehmood-farooqui-with-son.png"}  alt={"picture of Anusha Rizvi and Mehmood Farooqui"}  />
                    </div>
                    <div className="font-Noto_Sans w-full flex flex-col md:flex-row-reverse justify-center lg:justify-between items-center gap-12 lg:gap-0 px-[2rem]">
                        <img className="w-[22rem] lg:w-[34vw] h-auto" src={"/about/Anusha-Rizvi-and-Mehmood-Farooqui.jpg"}  alt={"picture of Anusha Rizvi and Mehmood Farooqui"} />
                        <p className="font-Noto_Sans font-light lg:font-normal lg:text-2xl w-[22rem] md:w-[33rem]">His marriage to filmmaker Anusha Rizvi further enriches this artistic lineage, cultivating a dynamic space for creative expression. Together, they honor a legacy that not only reveres the past but also resonates vibrantly within contemporary storytelling, inviting audiences to immerse themselves in the beauty of their shared cultural heritage.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-[#101010]">
            <div className="pt-[6rem]">
                <div className="w-full flex flex-col md:flex-row-reverse justify-center md:justify-between items-center">
                    <div className="mb-[1rem] md:mb-0 px-8 md:px-0 font-Noto_Sans  md:pr-[7%] bxl:pr-[13%]">
                        <h6 className="uppercase text-primary-red font-bold text-[80px]">vision</h6>
                        <p className="text-white font-light leading-[22px] mt-4 xl:text-2xl xl:w-[33rem]">Mahmood Farooqui's philosophy centers on the revival and adaptation of Dastangoi, the ancient art of Urdu storytelling. He envisions this art form as a bridge between tradition and modernity, allowing for the exploration of contemporary themes through historical narratives. Farooqui believes in making storytelling accessible to new generations, using it as a medium to engage with social issues and foster cultural preservation, ultimately inspiring dialogue and reflection among audiences.He hopes that in the years to come, his team will be able to provide audiences with stories from different eras, genres and traditions.</p>
                    </div>
                    <img className="w-[80vw] md:w-[26rem] lg:w-[40rem] md:pt-8 place-self-start" src={"/about/vision.png"} alt={"my image"} />
                </div>             
            </div>
        </div>

    </div>

  );
}
