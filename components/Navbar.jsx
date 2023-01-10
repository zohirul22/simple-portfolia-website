import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { AiOutlineBars, AiOutlineClose } from 'react-icons/ai';
import SocialLogin from '../hooks/socialLogin'


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);


  const handelNavbar = () => {
    setNav(!nav)
  }

  useEffect(() => {
    const handelShadow = () => {
      if (window.scrollY >= 90){
        setShadow(true);
      } 
      else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handelShadow);
  }, []);


 
  return (
    <div className={shadow ? ' w-full shadow-xl px-2 z-[100] fixed' : 'fluid w-full  px-2 z-[100] fixed'}>

      {/*-------------------- menu full screen-------------- */}
      <div className="flex justify-between items-center w-full px-2 2xl:px-16">
        {/*----------------------- logo--------------------- */}
        <Link href='/#home'>
          <Image src="/../public/asserts/Mynet_logo.jpg"
            alt=""
            width='125'
            height='50'
          />
        </Link>
        {/*----------------------- logo-------------------- */}
        {/*------------------- menu items------------------ */}
        <div>
          <ul className='hidden md:flex'>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase '>Home</li>
            </Link>
            <Link href='/#about'>
              <li className='ml-10 text-sm uppercase '>About</li>
            </Link>
            <Link href='/#skills'>
              <li className='ml-10 text-sm uppercase '>Skills</li>
            </Link>
            <Link href='/#project'>
              <li className='ml-10 text-sm uppercase '>Projects</li>
            </Link>
            <Link href='/#contract'>
              <li className='ml-10 text-sm uppercase '>Contract</li>
            </Link>
          </ul>
          {/*------------------ menu items----------------- */}

          {/*---------------- React Icon------------------- */}
          <div onClick={handelNavbar} className="md:hidden">
            <AiOutlineBars />
          </div>
          {/*---------------- React Icon------------------- */}
        </div>
      </div>
      {/*-------------------- menu for full screen---------- */}


      {/*------------------ menu for short  screen----------- */}
      <div className={nav ? 'md:hidden fixed left-0 top-0 h-screen bg-black/70' : ''}>
        <div className={nav ?
          '  fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500'
          :
          'fixed left-[-100%] top-0  p-10 ease-in duration-500'}>
          <div >
            {/*-------------------- logo------------------ */}
            <div className="flex w-full items-center  justify-between">
            <Link  href='/'>
            <Image onClick={()=>setNav(false)}  src="/../public/asserts/Mynet_logo.jpg"
                alt=""
                width='125'
                height='50'
              />
            </Link>
              {/*-------------------- logo----------------- */}

              {/*-------------- React Icon----------------- */}
              <div onClick={handelNavbar} className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer">
                <AiOutlineClose />
              </div>
              {/*---------------- React Icon-------------- */}
            </div>
          </div>
          <div className='border-b border-gray-300 my-4'>

          </div>
          <div className="">
            {/*----------------- menu items---------------- */}
            <ul>
              <Link href='/'>
                <li onClick={()=>setNav(false)} className='py-4 text-sm'>Home</li>
              </Link>
              <Link href='/#about'>
                <li onClick={()=>setNav(false)}  className='py-4 text-sm'>About</li>
              </Link>
              <Link href='/#skills'>
                <li onClick={()=>setNav(false)}  className='py-4 text-sm'>Skills</li>
              </Link>
              <Link href='/#project'>
                <li onClick={()=>setNav(false)}  className='py-4 text-sm'>Project</li>
              </Link>

              <Link href='/#contract'>
                <li onClick={()=>setNav(false)}  className='py-4 text-sm'>Contract</li>
              </Link>
            </ul>
            {/*------------------ menu items------------------ */}
            {/*-------------------Social icons---------------- */}
            <div className="pt-10">
              <p className='uppercase text-lime-500'>lets connect</p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[85%]">
                <SocialLogin />
                {/*--------------------Social icons---------------- */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*------------------ menu for short  screen----------- */}
    </div>
  )
}

export default Navbar