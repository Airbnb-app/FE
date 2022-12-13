import React from 'react'
import Layout from '../components/Layout'

function Payment() {
  return (
    <Layout>
      <div className='w-[90%] bg-[#FBFBFB] flex flex-col items-center justify-center rounded-lg py-6 text-black font-[Poppins]'>
        <form class="w-[90%] ">
          <p className='text-3xl text-pink-airbnb font-bold py-5 '>Credit Card</p>
          <div class="flex flex-wrap -mx-3 mb-5">
            <div class="w-full px-3">
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-airbnb" id="grid-password" type="password" placeholder="Cardholder name" />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-5">
            <div class="w-full md:w-2/3 px-3 mb-6 md:mb-0">
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border  py-3 px-4 mb-3 leading-tight rounded focus:outline-none focus:bg-white focus:border-pink-airbnb" id="grid-first-name" type="text" placeholder="Card Number" />
            </div>
            <div class="w-full md:w-1/3 px-3">
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-pink-airbnb" id="grid-last-name" type="text" placeholder="CVV" />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-3">
            <div class="w-full md:w-1/3 px-3 mb-3 md:mb-0 flex items-center justify-center">
              <p className='text-black'>Expiration Date</p>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-3 md:mb-0">
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-pink-airbnb" id="grid-last-name" type="text" placeholder="MM" />
            </div>
            <div class="w-full md:w-1/3 px-3 mb-3 md:mb-0">
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-pink-airbnb" id="grid-last-name" type="text" placeholder="YYYY" />
            </div>

          </div>
        </form>
        <div className='w-full bg-[#FBFBFB] flex items-center justify-center rounded-lg pb-6 text-black'>
          <div className='grid grid-col w-[90%] pt-5'>
            <p className='text-3xl text-pink-airbnb font-bold py-3'>Bromo Homestay</p>
            <div className='flex justify-between pt-3'>
              <div className='flex flex-row gap-3'>
                <div className='mr-5'>
                  <p>check in</p>
                  <p className='text-xl font-semibold'>31-10-2022</p>
                </div>
                <div className='ml-5'>
                  <p className=' '>check out</p>
                  <p className=' text-xl font-semibold'>10-11-2022</p>
                </div>
              </div>
              <div className='text-xl font-semibold'>
                <p>10 nights @ $25/night</p>
                <p className='text-end'>Total $250</p>
              </div>

            </div>
            <div className='flex justify-end pt-5'>
              <button className="btn h-12 border-none bg-[#FF5A60] w-20 text-white">Submit</button>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Payment