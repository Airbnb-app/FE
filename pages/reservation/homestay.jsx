import React from 'react'
import Layout from '../../components/Layout'
import Navbar from '../../components/Navbar'
import HomestayCard from '../../components/HomestayCard'
import DateRangeComp from '../../components/DateRangeComp'
import Swal from 'sweetalert2'
import Router from 'next/router'
import { useCookies } from "react-cookie"

const Homestay = () => {
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
    <Layout dashboard={"shadow"} logout={()=>logoutHandler()}>
      <Navbar namePages={"Reservation "} />
      <div className="w-full flex justify-center">
        <HomestayCard />
      </div>
      <div className="w-full flex justify-end">
        <div className='w-1/4 h-full bg-[#FBFBFB] rounded-lg shadow-xl mx-20'>
          <div className='m-5'>
            <DateRangeComp />
          </div>

        </div>
      </div>
    </Layout>
  )
}

export default Homestay