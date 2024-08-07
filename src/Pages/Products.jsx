import React from 'react'
import Box from '../Components/Box'
import { cardContent } from '../data'

function Products() {
  return (
    <div>
      <div className="carousel rounded-box">
      <div className="carousel-item">
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
    </div>
  )
}

export default Products