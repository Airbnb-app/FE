import React from "react";
import HomestayCard from "../components/HomestayCard";
import Layout from "../components/Layout";
import { CgProfile } from "react-icons/cg";
import Navbar from "../components/Navbar";
import { Modal1, Modal2 } from "../components/Modal";
import { CostumInput3, CostumInput } from "../components/CostumInput";
import { RiPencilFill } from "react-icons/ri";

import { useState, useEffect } from 'react'
import { useCookies } from "react-cookie"
import axios from "axios";
import Swal from 'sweetalert2'
import Router from 'next/router'


const Profile = () => {
  const [profiledata, setProfileData] = useState({});
  const [cookie, setCookie, removeCookie] = useCookies();

  const getProfile = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${cookie.token
          }`
      }
    };

    axios
      .get(
        `http://18.143.102.15:8080/users`,
        config
      )
      .then((response) => {
        setProfileData(response.data.data)
      })
      .catch((error) => console.log(error))
  }


  useEffect(() => {
    getProfile();
  }, []);

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
      <Navbar namePages={"Profile"} />
      <div className="my-5 mx-5 text-pink-airbnb flex justify-start">
        <CgProfile size={100} />
        <div className="flex justify-between w-full">
          <div className="ml-10">
            <p className="text-black-airbnb mt-3 w-24 font-bold">Nama: {profiledata.name}</p>
            <p className="text-black-airbnb mt-3 font-bold">Email: {profiledata.email}</p>
          </div>
          <div className="mx-5 mt-8 flex">
            <div>
              <Modal1 titleModal={"Upgrade to Hoster"} no={6} title={"Upgrade to Hoster"} tombol1={"Cancel"} tombol2={"Upgrade"} inputOne={<CostumInput3 />} inputTwo={<CostumInput3 />} inputThree={<CostumInput3 />} />
            </div>
            <p>
              <span className="mx-2">|</span>
            </p>
            <a href="">
              <p>Edit Profile</p>
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <HomestayCard
          edit={
            <Modal2
              titleModal={"Edit Homestay Post"}
              no={2}
              title={
                <div className="flex flex-col items-center justify-center cursor-pointer">
                  <RiPencilFill />
                  <p>Edit</p>
                </div>
              }
              inputOne={<CostumInput3 />}
              tombol1={"Cancel"}
              tombol2={"Save"}
              inputTwo={<CostumInput label={"Villa Premium 3"} type={"text"} />}
              inputThree={<CostumInput label={"Description"} type={"text"} />}
              inputFour={<CostumInput label={"Price"} type={"number"} />}
            />
          }
        />
      </div>
    </Layout>
  );
};

export default Profile;
