import React from 'react'
import HomestayCard from '../components/HomestayCard'
import Layout from '../components/Layout'
import { CgProfile } from 'react-icons/cg'
import Navbar from '../components/Navbar'

const Profile = () => {
    return (
        <Layout profile={"shadow"}>
            <Navbar namePages={"Profile"} />
            <div className='my-5 mx-5 text-pink-airbnb flex justify-start'>
                <CgProfile size={100} />
                <div className='flex justify-between w-full'>
                    <div className='ml-10'>
                        <p className='text-black-airbnb mt-3 w-24 font-bold'>Nama: </p>
                        <p className='text-black-airbnb mt-3 font-bold'>Email: </p>
                    </div>
                    <div className='mx-5 mt-8 flex'>
                        <p>Upgrade to Hoster</p>
                        <p><span className='mx-2'>|</span></p>
                        <a href=""><p>Edit Profile</p></a>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <HomestayCard />
            </div>
        </Layout>
    )
}

export default Profile