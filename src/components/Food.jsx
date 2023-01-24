import React from 'react'
import {data} from '../data/Data'

const Food = () => {
  console.log(data);
  return (
    <>
     <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-orange-500 font-bold text-4xl text-center cursor-default underline'>Top Rated Menu Items</h1>

        <div className='flex flex-col lg:flex-row justify-between'>

            <div>
                <p className='font-bold text-gray-700'>Filter Type</p>
                <div className='flex justify-between flex-wrap'>
                    <button className='m-1 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white duration-200'>All</button>
                    <button className='m-1 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white duration-200'>Burgers</button>
                    <button className='m-1 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white duration-200'>Pizza</button>
                    <button className='m-1 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white duration-200'>Salads</button>
                    <button className='m-1 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white duration-200'>Chicken</button>
                </div>
            </div>

            <div>
                <p className='font-bold text-gray-700 cursor-default'>Filter Price</p>
                <div>
                    <button className='m-1 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white duration-200'>$</button>
                    <button className='m-1 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white duration-200'>$$</button>
                    <button className='m-1 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white duration-200'>$$$</button>
                    <button className='m-1 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white duration-200'>$$$$</button>
                </div>
            </div>

        </div>
     </div>
    </>
  )
}

export default Food