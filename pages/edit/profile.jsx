import React from 'react'
import Layout from '../../components/Layout'
import Navbar from '../../components/Navbar'
import { CgProfile } from 'react-icons/cg'

const Profile = () => {
    return (
        <Layout profile={"shadow"}>
            <Navbar namePages={"Edit Profile"} />
            <div className='h-[500px] bg-white shadow-xl rounded-lg m-5'>
                <div className='text-pink-airbnb flex justify-center py-5'>
                    <CgProfile size={80} />
                </div>
                <div className='w-full bg-[#FBFBFB] flex items-center justify-center rounded-lg pt-6'>
                    <form class="w-[90%] justify-center align-middle">
                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-[25%]">
                                <label class="block text-pink-airbnb font-semibold text-2xl md:text-left mb-1 md:mb-0 pr-4" for="inline-full-name">
                                    Full Name
                                </label>
                            </div>
                            <div class="md:w-[75%]">
                                <input class="bg-gray-200 appearance-none border-2 border-[#D9D9D9] rounded-2xl w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-pink-airbnb h-14" id="inline-full-name" type="text" placeholder='Name' />
                            </div>
                        </div>
                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-[25%]">
                                <label class="block text-pink-airbnb font-semibold text-2xl md:text-left mb-1 md:mb-0 pr-4" for="inline-email">
                                    Email
                                </label>
                            </div>
                            <div class="md:w-[75%]">
                                <input class="bg-gray-200 appearance-none border-2 border-[#D9D9D9] rounded-2xl  w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-pink-airbnb h-14" id="inline-email" type="text" placeholder='Email' />
                            </div>
                        </div>
                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-[25%]">
                                <label class="block text-pink-airbnb font-semibold text-2xl md:text-left mb-1 md:mb-0 pr-4" for="inline-password">
                                    Password
                                </label>
                            </div>
                            <div class="md:w-[75%]">
                                <input class="bg-gray-200 appearance-none border-2 border-[#D9D9D9] rounded-2xl  w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-pink-airbnb h-14" id="inline-password" type="password" placeholder='Password' />
                            </div>
                        </div>
                    </form>
                </div>
                <div className='flex justify-end my-5 mx-14'>
                    <button className='btn bg-pink-airbnb text-white border-none w-1/6 normal-case hover:bg-[#E75056] text-[22px]'>Edit</button>
                </div>
            </div>
        </Layout>
    )
}

export default Profile