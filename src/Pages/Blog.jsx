import React from 'react';
import { images } from '../data';
import classNames from 'classnames';

function Blog() {
  return (
    <div className='bg-gray-50 pt-2'>
      <h1 className='bg-h4 text-center font-bold text-clash text-2xl md:p-2 text-h1'>Blogs</h1>
      <div className='p-4 md:p-20'>
        {
          images.map((val, index) => (
            <div 
              key={index} 
              className={classNames(
                'flex flex-col gap-10 md:gap-36 mb-10', 
                {
                  'md:flex-row-reverse': index % 2 !== 0,
                  'md:flex-row': index % 2 === 0
                }
              )}
            >
              <div className='h-56 w-full md:h-96 md:w-96'>
                <img src={val.imageURl} alt="" className='object-cover h-full w-full' />
              </div>
              <div className='w-full md:w-1/2 h-auto p-4 md:p-10 text-h1 font-clash'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam repudiandae nostrum eligendi velit autem quis ipsam architecto inventore laborum accusamus neque fuga pariatur facere similique non nulla labore, perferendis et! Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit et adipisci expedita tempora repellat? Eum nulla, sunt at hic accusantium voluptatum error molestiae recusandae esse sed dolore excepturi corrupti veniam! Lorem ipsum dolor sit amet consectetur adipisicing elit. A cumque voluptatibus ducimus praesentium id molestias fugiat libero facere quo veniam delectus, in, amet vel ab ea. Animi maxime earum corporis!</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Blog;
