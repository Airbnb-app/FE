import React from 'react'

function RegisterForm() {
  return (
    <div className='w-full bg-[#FBFBFB] flex items-center justify-center rounded-lg pt-6'>
      <form class="w-[90%] justify-center align-middle">
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-[25%]">
            <label class="block text-pink-airbnb font-semibold text-2xl md:text-left mb-1 md:mb-0 pr-4" for="inline-full-name">
              Full Name
            </label>
          </div>
          <div class="md:w-[75%]">
            <input class="bg-gray-200 appearance-none border-2 border-[#D9D9D9] rounded-2xl w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-pink-airbnb h-14" id="inline-full-name" type="text" placeholder='your name here'/>
          </div>
        </div> 
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-[25%]">
            <label class="block text-pink-airbnb font-semibold text-2xl md:text-left mb-1 md:mb-0 pr-4" for="inline-email">
              Email
            </label>
          </div>
          <div class="md:w-[75%]">
            <input class="bg-gray-200 appearance-none border-2 border-[#D9D9D9] rounded-2xl  w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-pink-airbnb h-14" id="inline-email" type="text" placeholder='your email here'/>
          </div>
        </div> 
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-[25%]">
            <label class="block text-pink-airbnb font-semibold text-2xl md:text-left mb-1 md:mb-0 pr-4" for="inline-password">
              Password
            </label>
          </div>
          <div class="md:w-[75%]">
            <input class="bg-gray-200 appearance-none border-2 border-[#D9D9D9] rounded-2xl  w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-pink-airbnb h-14" id="inline-password" type="text" placeholder='********'/>
          </div>
        </div> 
        {/* <div class="md:flex md:items-center">
          <div class="md:w-1/3"></div>
          <div class="md:w-2/3">
            <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
              Sign Up
            </button>
          </div>
        </div> */}
      </form>
    </div>
  )
}

export default RegisterForm