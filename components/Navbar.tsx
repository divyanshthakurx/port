"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { NAV_LINKS, SOCIALS_URL } from '@/constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (href: string) => {
    setIsOpen(false);
    router.push(href);
  };

  return (
    <>
      {/* Hamburger menu button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 right-4 z-50 p-2 text-white rounded-md focus:outline-none transition-transform duration-300 ease-in-out"
      >
        {isOpen ? (
          // X icon
          <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // Hamburger icon
          <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 bg-[#AA1F18] px-2 py-2 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        )}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed py-[4rem] sm:py-[6rem] px-8 md:px-[3rem] lg:px-[4rem] xl:px-[7rem] bxl:px-[10rem] top-0 right-0 h-screen w-full bg-[#aa1f00] text-white transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Sidebar Content */}
        <nav className="flex flex-col items-center justify-between h-full space-y-6">

          <div className='w-full flex flex-col justify-center items-center sm:flex-row sm:justify-between gap-y-6'>
            <div className="flex flex-col justify-center items-center self-start">         
              <ul className="self-start flex flex-col gap-2 font-Noto_Sans text-2xl sm:text-4xl md:text-6xl lg:leading-[5rem] font-semibold">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <button onClick={() => handleNavigation(link.href)} className="text-white hover:text-white/60 transition-colors duration-300 ease-in-out">
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className="w-fit h-auto">
              <img className="w-[21rem] h-auto sm:w-[52vw] md:w-[48vw] lg:w-[40vw] bxl:w-[34vw]" src="/navbar/mohmood-farooqui.jpg" alt="mohmood farooqui" />
            </div>
          </div>

          <div className='w-full flex flex-col justify-center items-center sm:flex-row sm:justify-between gap-y-6'>
            {/* Email */}
            <div className="self-start">
              <div className="font-semibold md:text-2xl lg:text-[32px] opacity-[80%] uppercase mb-2">Email</div>
              <div className="font-bold text-xl md:text-2xl bxl:text-4xl text-white hover:text-white/60 transition-colors duration-300 ease-in-out cursor-pointer">mahmood.farooqui@gmail.com</div>
            </div>
            
            {/* Social Links */}
            <div className="self-start">
              <div className="font-semibold md:text-2xl lg:text-[32px] opacity-[80%] uppercase mb-2">Follow Us</div>
              <div className="flex items-center justify-start gap-3">
                {SOCIALS_URL.map((url, index) => (
                  <Link key={index} href="/">
                    <img className="w-10 h-10" src={url} alt={`Social ${index}`} />
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </nav>
      </div>
    </>
  );
}
