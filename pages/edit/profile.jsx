import React from 'react'
import Layout from '../../components/Layout'
import Navbar from '../../components/Navbar'
import { CgProfile } from 'react-icons/cg'
import Swal from 'sweetalert2'
import Router from 'next/router'
import { useCookies } from "react-cookie"

const Profile = () => {
    const [cookie, setCookie, removeCookie] = useCookies();

    const logoutHandler = () => {
        Swal.fire({
          title: "Are you sure want to logout?",
          // text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Yes",
          cancelButtonColor: "#d33",
          cancelButtonText: "No",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              position: "center",
              icon: "success",
              text: "Logout successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            removeCookie("name");
            removeCookie("role");
            removeCookie("token");
            removeCookie("user_id");
            Router.push('/');
          }
        })
    
      }
      
    return (
        <Layout profile={"shadow"} logout={()=>logoutHandler()}>
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