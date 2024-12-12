import React from 'react'

function Banner() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 mt-12 md:mt-32">
         <div className='space-y-12'>
         <h1 className="text-4xl font-bold">
  Hey, ready to discover                  
         <span className="text-pink-500"> something amazing </span> today?
</h1>

<p className="text-gray-600 mt-4">
  Learning is a journey, not a destination. Whether you're here to explore new ideas, sharpen your skills, or dive into something completely unfamiliar, today is the perfect day to start. Every small step forward brings you closer to your goals. So, why wait? Let’s make today count and create something extraordinary together!
</p>
        </div>
        </div>
       
        <div className="w-full md:w-1/2">Right</div>
    </div>
    </>
  )
}

export default Banner;