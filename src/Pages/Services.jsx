import React from 'react';
import Box from '../Components/Box';
import { cardContent } from '../data';

function Services() {
  return (
    
    <div className='flex flex-col justify-center bg-gray-50 py-10'>
      <h1 className='bg-h4 text-center font-bold text-clash text-2xl md:p-2 text-h1'>Services</h1>
      <div className='grid md:grid-cols-3 sm:grid-col-2 grid-col-1 gap-5 mx-auto pt-4 '>
      {cardContent.map((val, index) => (
        <Box 
          key={index} 
          title={val.title} 
          description={val.description} 
          benefits={val.benefits} 
        />
      ))}
    </div>
    </div>
  );
}

export default Services;
