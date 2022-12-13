import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { IconContext } from "react-icons";

function Historycard() {
  return (
    <div className='w-full bg-[#FBFBFB] flex items-center justify-center rounded-lg py-6 text-black'>
      <div className='grid grid-col w-[90%]'>
        <p className='text-3xl text-pink-airbnb font-bold pb-5'>Bromo Homestay</p>
        <div className='flex justify-between pt-5'>
          <div className='flex flex-row gap-5'>
            <div className='mr-5'>
              <p>check in</p>
              <p className='text-xl font-semibold'>31-10-2022</p>
            </div>
            <div className='ml-5'>
              <p className=' '>check out</p>
              <p className=' text-xl font-semibold'>10-11-2022</p>
            </div>
          </div>
          <div className='text-xl '>
            <p>10 nights @ $25/night</p>
            <p className='text-end'>Total $250</p>
          </div>
        </div>

        <div className='pt-5'>
          <form className=''>
            <div className='flex '>
              <p className=' inline-block align-middle text-xl  mr-5'>rate your experience :</p>
              <div className='flex items-center'>
                <IconContext.Provider
                  value={{ color: '#FF5A60', size: '24px' }}
                >
                  <AiFillStar />
                </IconContext.Provider>
                <IconContext.Provider
                  value={{ color: '#FF5A60', size: '24px' }}
                >
                  <AiFillStar />
                </IconContext.Provider>
                <IconContext.Provider
                  value={{ color: '#FF5A60', size: '24px' }}
                >
                  <AiFillStar />
                </IconContext.Provider>
                <IconContext.Provider
                  value={{ color: '#FF5A60', size: '24px' }}
                >
                  <AiFillStar />
                </IconContext.Provider>
                <IconContext.Provider
                  value={{ color: '#D9D9D9', size: '24px' }}
                >
                  <AiFillStar />
                </IconContext.Provider>

              </div>
            </div>
            <div className='w-full flex pt-5'>
              <input className=" bg-gray-200 appearance-none border-2 border-[#D9D9D9] w-full mr-5 py-2 px-4 rounded-2xl leading-tight focus:outline-none focus:bg-white focus:border-pink-airbnb h-12 placeholder:text-semibold placeholder:text-black" type="text" placeholder='write a review ...' />
              <button className="btn h-12  bg-[#FF5A60] w-20 border-none text-white pr-10 pl-10">Submit</button>
            </div>


          </form>
        </div>
      </div>
    </div>
  )
}

export default Historycard