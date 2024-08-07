import React from 'react'
import mainImg from '../../public/Images/mainImg.png'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

function Home() {
  return (
    <div className='h-screen w-full bg-gray-50 overflow-hidden'>
      <div className='w-full md:h-64 h-52 md:p-16 p-10  text-h2 font-semibold bg-h4'>
        {/* heading  */}
        <h1 className='md:text-7xl text-3xl font-clash flex flex-col'>
          <span>"Nurturing New <strong className='text-h1'>Beginnings</strong> ,</span> 
          <span className='md:pl-[600px]'> One Birth at a Time."</span>
        </h1>
      </div>

      {/* 2nd container  */}
      <div className='flex md:flex-row flex-col justify-center mx-auto items-center'>
      <div className=' md:h-[500px] h-[300px] w-96 p-10 font-clash text-h1'>
        <p>At OneGen, we understand that the journey to motherhood is a unique and special experience. Our dedicated team of medical professionals is here to support you every step of the way, ensuring a safe and joyful birth experience for you and your baby.</p>
      </div>

      {/* image  */}
      <div className='md:h-[500px] md:w-[600px] h-[400px] w-[400px] relative cover md:overflow-visible overflow-hidden'>
        <div className='flex flex-col absolute h-60 w-fit justify-center gap-16 px-6 top-2'>
        <button className='font-clash'>
          <div className='flex items-center justify-around w-36 bg-h4 rounded-lg p-1'> 
            <div className='bg-h2 text-black rounded-lg px-4 p-2'>Register</div>
            <div>
            <svg className='h-4 w-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#2c6975" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
            </div>
          </div>
          </button>
          <button className='font-clash'>
          <div className='flex items-center justify-around bg-h4 rounded-lg p-1'> 
            <div className='bg-h2 rounded-lg px-2 p-2 text-black'>Availability</div>
            <div>
            <svg className='h-4 w-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#2c6975" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
            </div>
          </div>
          </button>
        </div>
        <img className='absolute md:left-20 md:-top-28 left-20' src={mainImg}/>
      </div>

      <div className=' h-[500px] w-96 p-10 font-clash text-h1'>
        <p>At OneGen, we understand that the journey to motherhood is a unique and special experience. Our dedicated team of medical professionals is here to support you every step of the way, ensuring a safe and joyful birth experience for you and your baby.</p>
      </div>
      </div>
    </div>
  )
}

export default Home