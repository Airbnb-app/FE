import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout'
import Navbar from '../../components/Navbar'
import { useCookies } from "react-cookie"
import Swal from 'sweetalert2'
import Router, { useRouter } from 'next/router'
import axios from 'axios'

function Payment() {
  const router = useRouter()
  const [cookie, setCookie, removeCookie] = useCookies()
  const [name, setName] = useState()
  const [fullName, setFullName] = useState()
  const [cardNumber, setCardNumber] = useState()
  const [cvv, setCvv] = useState()
  const [exMonth, setExMonth] = useState()
  const [exYear, setExYear] = useState()

  const title = router?.query?.titleHomestay
  const durasi = router?.query?.duration
  const idHome = router?.query?.id_homestay
  const price = router?.query?.price_per_night
  const totalPrice = router?.query?.total_price
  const start = router?.query?.start_date
  const end = router?.query?.end_date
  const user_id = cookie.user_id

  const confirmHandler = (e) =>{
    e.preventDefault()
    axios.post(`https://numpangtidur.my.id/reservations`,
   { homestay_id: parseInt(idHome),
    start_date: start,
    duration: parseInt(durasi),
    total_price: parseInt(totalPrice),
    user_id: parseInt(user_id),
    payments: {
      credit_card: "visa",
      name: fullName,
      card_number: cardNumber,
      cvv: cvv,
      month: exMonth,
      year: exYear,
    },
  }, {
    headers: {
      Authorization: `Bearer ${cookie.token}`
    },
  }
    ).then((response)=>{
      console.log("jadi: ",response)
    }).catch((err)=>{
      console.log("gagal: ",err)
    })
  }
  console.log("user id", user_id)
  console.log("cek fullname: ", fullName)
  console.log("cek card number: ", cardNumber)
  console.log("cek cvv: ", cvv)
  console.log("cek ex month: ", exMonth)
  console.log("cek ex year: ", exYear)

  useEffect(() => {
    setName(cookie.name);
  }, [])

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

    useEffect(() => {
      if (!cookie.token) {
        Router.push("/");
      }
    }, [cookie.token]);

  }

  useEffect(() => {
    if (!cookie.token) {
      Router.push("/");
    }
  }, [cookie.token]);

  return (
    <Layout
      logout={() => logoutHandler()}
      name={
        name === undefined ? (
          <><p>you are not login</p></>
        ) : (
          <><p className='mt-2'>{name}</p></>
        )
      }>
      <Navbar namePages="Payment" />
      <div className='w-[90%] bg-[#FBFBFB] flex flex-col items-center justify-center rounded-lg py-6 text-black font-[Poppins]'>
        <form class="w-[90%] " onSubmit={(e)=>confirmHandler(e)}>
          <p className='text-3xl text-pink-airbnb font-bold py-5 '>Credit Card</p>
          <div class="flex flex-wrap -mx-3 mb-5">
            <div class="w-full px-3">
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-airbnb" id="grid-password" type="text" placeholder="Cardholder name" 
              onChange={(e)=>{setFullName(e.target.value)}}/>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-5">
            <div class="w-full md:w-2/3 px-3 mb-6 md:mb-0">
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border  py-3 px-4 mb-3 leading-tight rounded focus:outline-none focus:bg-white focus:border-pink-airbnb" id="grid-first-name" type="text" placeholder="Card Number" 
              onChange={(e)=>{setCardNumber(e.target.value)}}/>
            </div>
            <div class="w-full md:w-1/3 px-3">
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-pink-airbnb" id="grid-last-name" type="text" placeholder="CVV" 
              onChange={(e)=>{setCvv(e.target.value)}}/>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-3">
            <div class="w-full md:w-1/3 px-3 mb-3 md:mb-0 flex items-center justify-center">
              <p className='text-black'>Expiration Date</p>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-3 md:mb-0">
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-pink-airbnb" id="grid-last-name" type="text" placeholder="MM" 
              onChange={(e)=>{setExMonth(e.target.value)}}/>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-3 md:mb-0">
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-pink-airbnb" id="grid-last-name" type="text" placeholder="YYYY" 
              onChange={(e)=>{setExYear(e.target.value)}}/>
            </div>
          </div>
          <div className='w-full bg-[#FBFBFB] flex items-center  rounded-lg pb-6 text-black'>
            <div className='grid grid-col w-[90%] pt-5'>
              <p className='text-3xl text-pink-airbnb font-bold py-3'>{router?.query?.titleHomestay}</p>
              <div className='flex justify-between pt-3'>
                <div className='flex flex-row gap-3'>
                  <div className='mr-5'>
                    <p>check in</p>
                    <p className='text-xl font-semibold'>{router?.query?.start_date}</p>
                  </div>
                  <div className='ml-5'>
                    <p className=' '>check out</p>
                    <p className=' text-xl font-semibold'>{router?.query?.end_date}</p>
                  </div>
                </div>
                <div className='text-xl font-semibold'>
                  <p>{router?.query?.duration} nights @ {router?.query?.price_per_night}/night</p>
                  <p className='text-end'>Total ${router?.query?.total_price}</p>
                </div>
              </div>
              <div className='flex justify-end pt-5'>
                <button className="btn h-12 border-none bg-[#FF5A60] w-20 text-white" type='submit'>Confirm</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Layout >
  )
}

export default Payment