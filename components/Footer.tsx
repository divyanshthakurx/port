"use client";
import { FOOT_LINKS, SOCIALS_URL } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail('');
  };

    const router = useRouter();

    const handleFootNavigation = (href: string) => {
      router.push(href);
    };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.25 }}
      className='bg-primary-bg z-50'
    >
      <footer className='bottom-0 rounded-t-[2rem] bg-gradient-to-t from-[#AA1F18] from-60% to-[#440C0A] to-100% h-3/4 relative z-30'>
        <motion.img className="rounded-t-[2rem] sm:rounded-tl-none w-full sm:absolute sm:w-[17rem] md:w-[24rem] lg:w-[30rem] xl:w-[38rem] bxl:w-[42rem] h-auto opacity-40 top-0 sm:right-0" src={"/footer/mahmood-farooqui.jpg"} alt="Picture of Mahmood farooqui" width={390} height={310} 
         initial={{ y: -60, opacity: 0 }}
         animate={{ y: 0, opacity: 0.5 }}
         transition={{ duration: 1.75 }}
         viewport={{ once: true, amount: 0.25 }}
         /> 
        <div className='px-6 py-8 md:px-8 lg:px-10 flex flex-col justify-center items-center gap-10 lg:gap-14 xl:gap-20'>
          <motion.div 
            initial={{ y: 30, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.25 }}
            className='sm:self-start w-full sm:w-fit flex flex-col sm:justify-center sm:items-start gap-4 sm:pt-[4rem] md:pt-[7rem] lg:pt-[8rem] xl:pt-[10rem]'
          >
            <motion.p className='text-[46px] xl:text-[72px] font-bold font-Noto_Sans uppercase text-white text-center'
             initial={{ opacity: 0, y: 50 }}  // Start with opacity 0 and move the element 50px down
             whileInView={{ opacity: 1, y: 0 }}  // Animate to full opacity and original position
             transition={{ duration: 1, ease: 'easeOut' }}  // Duration and easing of the animation
             viewport={{ once: true, amount: 0.25 }}
            >Want to Talk
            </motion.p>
            <div className="w-full flex justify-around xl:justify-start xl:gap-6 bxl:gap-16 items-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
                viewport={{ once: true, amount: 0.25 }}
                href="mailto:mahmood.farooqui@gmail.com"
                className='text-primary-red flex justify-center text-center items-center gap-2 xl:gap-4 font-semibold text-sm bg-white border-2 rounded-full px-8 py-3 bxl:w-[14rem] bxl:text-2xl'
              >
                <Image src={"/footer/mail.svg"} className='w-4 h-4 bxl:w-6 bxl:h-6' alt={"Mahmood Farooqui"} width={4} height={4} />
                Email Me
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'tween', stiffness: 300 }}
                viewport={{ once: true, amount: 0.25 }}
                target="_blank"
                rel="noopener noreferrer"
                href="https://en.wikipedia.org/wiki/Mahmood_Farooqui"
                className='text-white border-2 text-sm font-semibold rounded-full text-center  px-8 py-3 bxl:w-[14rem] bxl:text-2xl'
              >
                Learn More
              </motion.a>
            </div>
          </motion.div>
          <div className='w-full flex flex-col sm:flex-row-reverse justify-center items-center md:justify-between sm:items-end gap-8 sm:gap-0 z-20'>
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.75 }}
              viewport={{ once: true, amount: 0.25 }}
              className="w-full flex flex-col justify-between items-end gap-6 text-white"
            >
              <div className='w-full font-Noto_Sans flex flex-col gap-4 text-right uppercase font-extrabold text-3xl sm:text-[24px] lg:text-[32px]'>
                {FOOT_LINKS.map((link) => (
                  <div key={link.label}>
                    <button onClick={() => handleFootNavigation(link.href)} className="text-white hover:text-white/60 transition-colors duration-300 ease-in-out">
                      {link.label}
                    </button>
                  </div>
                ))}
              </div>
              <div className='flex justify-end gap-6 sm:gap-2'>
                {SOCIALS_URL.map((social, index) => (
                  <motion.div
                  whileHover={{ scale: 1.2 }}
                  key={index}
                >
                  <a key={index} href={social.href} target="_blank" rel="noopener noreferrer">
                    <img className="w-10 h-10"  src={social.src} alt={`Social ${index}`} />
                  </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <div className='w-full self-center text-center'>
              <motion.p
                 initial={{ opacity: 0, y: 50 }}  // Start with opacity 0 and move the element 50px down
                 whileInView={{ opacity: 1, y: 0 }}  // Animate to full opacity and original position
                 transition={{ duration: 2, ease: 'easeOut' }}  // Duration and easing of the animation
                 viewport={{ once: true, amount: 0.25 }}
                className="font-black md:font-extrabold font-Noto_Sans w-1/2 text-[56px] sm:text-[74px] sm:leading-[4.25rem] md:text-[88px] lg:text-[8rem] md:leading-[5rem] lg:leading-[6.5rem] bxl:text-[12rem] bxl:leading-[10rem] uppercase text-white leading-[4rem]"
              >
                Mahmood Farooqui
              </motion.p>
            </div>
          </div>              
        </div>
        <div className='mx-6 py-8 md:mx-8 lg:mx-10 font-Noto_Sans text-xs pt-3 border-t-2 border-white text-white flex flex-col md:flex-row justify-center md:justify-between items-center gap-1'>
          <p>Copyright © 2024 Mahmood Farooqui. All rights reserved. </p>
          <p>Website crafted with care by <Link href='https://www.digitcrib.com/'>Digitcrib</Link></p>
        </div>
      </footer>
    </motion.div>
  );
};

export default Footer;
