import React from 'react'

const HeadlineCards = () => {
  return (
    <>
        <div className='max-w-[1640px] mx-auto py-12 grid md:grid-cols-3 gap-3 px-4'>
            <div className='rounded-xl relative'>
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='text-2xl font-bold px-2 pt-4 cursor-default'>Sun's Out, BOGO'S Out</p>
                    <p className='px-2 cursor-default'>Through 8/26</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-orange-500 hover:scale-105 duration-200 hover:border-orange-500 hover:text-white font-semibold'>Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/3789885/pexels-photo-3789885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
            </div>

            <div className='rounded-xl relative'>
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='text-2xl font-bold px-2 pt-4 cursor-default'>New Restaurant</p>
                    <p className='px-2 cursor-default'>Noodles 24/7</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-orange-500 hover:scale-105 duration-200 hover:border-orange-500 hover:text-white font-semibold'>Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
            </div>

            <div className='rounded-xl relative'>
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='text-2xl font-bold px-2 pt-4 cursor-default'>We Deliver Pizzas Too !</p>
                    <p className='px-2 cursor-default'>Pizza available</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-orange-500 duration-200 hover:border-orange-500 hover:text-white font-semibold  hover:scale-105'>Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/2762942/pexels-photo-2762942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
            </div>
        </div>   
    </>
  )
}

export default HeadlineCards