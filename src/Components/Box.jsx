import React from 'react'
//  import '../../public/Images/points.svg'

function Box(props) {
  return (
    <div className='h-auto w-96 border-2 border-h1 rounded-lg p-5 bg-h4'>
      <div className='mb-5'>
      <div className='text-clash font-semibold text-lg text-h1'>
         <h3>{props.title}</h3>
      </div>
      <div className='text-clash text-h2 pl-5 text-sm'>
         <p>{props.description}</p>
      </div>
      </div>

      <div>
        <h1 className='text-clash font-semibold text-lg text-h1'>Benifits</h1>
        <ul className='text-clash text-h2 text-sm pl-5'>
          {
          props.benefits.map((val, idx)=>(
            <div className='flex items-center gap-2'>
             <div className='bg-h1 h-1 w-1 rounded-full'></div>
              <li key={idx}>{val}</li></div>
            
          ))
          }
          
        </ul>
      </div>

      <div className='flex justify-end'>
      <button className='font-clash'>
          <div className='flex items-center justify-around h-8 w-24 bg-gray-50 rounded-lg p-1'> 
            <div className='bg-h2 h-6 rounded-lg text-black text-sm px-1 p-1'>Register</div>
            <div>
            <svg className='h-4 w-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#2c6975" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
            </div>
          </div>
          </button>
      </div>
    </div>
  )
}

export default Box