import React from 'react'
import Layout from '../../components/Layout'
import Navbar from '../../components/Navbar'
import HomestayCard from '../../components/HomestayCard'
import DateRangeComp from '../../components/DateRangeComp'

const Homestay = () => {
  return (
    <Layout dashboard={"shadow"}>
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