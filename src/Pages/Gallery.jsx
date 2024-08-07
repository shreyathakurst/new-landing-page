import React from 'react'
import { images } from '../data'

function Gallery() {
  return (
    <div className='bg-gray-50 w-full h-auto'>
      <div>
      <h1 className='bg-h4 text-center font-bold text-clash text-2xl md:p-2 text-h1'>Gallery</h1>
      <div className='flex justify-center '>
      <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-col-1 gap-2 pt-2'>
           {
            images.map((val, index)=>(
              <div className='h-56 w-96 overflow-hidden '>
                <img className='object-cover h-full w-full' src={val.imageURl} alt="" />
              </div>
            ))
           }
      </div>
      </div>
      </div>
    </div>
    
  )
}

export default Gallery
