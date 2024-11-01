"use client";

import { SOCIALS_URL } from '@/constants';
import Link from 'next/link'
import Image from 'next/image';
import React from 'react'
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here, you can add logic to handle the email submission
    console.log("Email submitted:", email);
    setEmail(''); // Clear the input field after submission
  };

  return (
    <>

      <div className='bg-primary-bg z-50'>

        <footer className='bottom-0 rounded-t-[2rem] bg-gradient-to-t from-[#AA1F18] from-60% to-[#440C0A] to-100% h-3/4 relative z-30 '>
          <Image className="rounded-t-[2rem] sm:rounded-tl-none w-full sm:absolute sm:w-[17rem] md:w-[24rem] lg:w-[30rem] xl:w-[38rem] h-auto opacity-40 top-0 sm:right-0" src={"/footer/mahmood-farooqui.jpg"} alt="Picture of Mahmood farooqui" width={390} height={310} /> 
          <div className='px-6 py-8 md:px-8 lg:px-10 flex flex-col justify-center items-center gap-10 lg:gap-14 xl:gap-20'>
            <div className='sm:self-start w-full sm:w-fit flex flex-col sm:justify-center sm:items-start gap-4 sm:pt-[4rem] md:pt-[7rem] lg:pt-[8rem] xl:pt-[10rem]'>
              <p className='text-[46px] xl:text-[72px] font-bold font-Noto_Sans uppercase text-white text-center'>want to talk</p>
              <div className="w-full flex justify-around items-center">
                <button className='text-primary-red flex justify-center items-center gap-2 font-semibold text-sm bg-white border-2 rounded-full px-8 py-3 '>
                    <Image src={"/footer/mail.svg"} className='w-4 h-4' alt={"Mahmood Farooqui"} width={4} height={4} />
                  Email Me
                </button>
                <button className='text-white border-2 text-sm font-semibold rounded-full px-8 py-3'>
                  Learn More
                </button>
              </div>
            </div>
            <div className='w-full flex flex-col sm:flex-row-reverse justify-center items-center md:justify-between sm:items-end gap-8 sm:gap-0 z-20'>
              <div className="w-full flex flex-col justify-between items-end gap-6 text-white">
                <div className='w-full font-Noto_Sans flex flex-col gap-4 text-right uppercase font-extrabold text-3xl sm:text-[24px] lg:text-[32px]'>
                  <div>Home</div>
                  <div>About</div>
                  <div>Gallery</div>
                </div>
                <div className='flex justify-end gap-6 sm:gap-2'>
                  <Link href={'/'}>
                    <img className='w-10 h-10' src={SOCIALS_URL[0]} alt="Instagram" />
                  </Link>
                  <Link href={'/'}>
                    <img className='w-10 h-10' src={SOCIALS_URL[1]} alt="Twitter" />
                  </Link>
                  <Link href={'/'}>
                    <img className='w-10 h-10' src={SOCIALS_URL[2]} alt="Facebook" />
                  </Link>
                  <Link href={'/'}>
                  <img className='w-10 h-10' src={SOCIALS_URL[3]} alt="Youtube" />
                  </Link>
                </div>
              </div>
              <div className='w-full self-center text-center'>
                <p className=" font-black md:font-extrabold font-Noto_Sans w-1/2 text-[56px] sm:text-[74px] sm:leading-[4.25rem] md:text-[88px] lg:text-[8rem] md:leading-[5rem] lg:leading-[6.5rem] uppercase text-white leading-[4rem]">Mahmood Farooqui</p>
              </div>
            </div>              
          </div>
          <div className='mx-6 py-8 md:mx-8 lg:mx-10 font-Noto_Sans text-xs pt-3 border-t-2 border-white text-white flex flex-col md:flex-row justify-center md:justify-between items-center gap-1'>
            <p>Copyright © 2024 Mahmood Farooqui. All rights reserved. </p>
            <p>Website crafted with care by <Link   href='https://www.digitcrib.com/'>Digitcrib</Link></p>
          </div>

        </footer>

      </div>

    </>

    
  )
}

export default Footer