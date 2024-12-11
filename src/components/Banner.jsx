import React from 'react'

function Banner() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 mt-12 md:mt-32">
         <div className='space-y-12'>
        <h1 div className='text-4xl font-bold'>Hey, Excited to learn  <span className = "text-pink-500"> something new today?</span> 
        </h1>
        
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur quas quam in vero laudantium inventore hic itaque, enim earum nisi repellendus cupiditate veritatis corporis, impedit unde harum, magni quibusdam expedita?</p>
        </div>
        </div>
       
        <div className="w-full md:w-1/2">Right</div>
    </div>
    </>
  )
}

export default Banner;