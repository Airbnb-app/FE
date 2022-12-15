import React from "react";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import { CgProfile } from "react-icons/cg";
import Swal from "sweetalert2";
import Router from "next/router";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import axios from "axios";

const Profile = () => {
  const [cookie, setCookie, removeCookie] = useCookies();
  const router = useRouter();

  const [name, setName] = useState()

  useEffect(() =>{
    setName(cookie.name);
  },[])

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
        Router.push("/");
      }
    });
  };

  const [emailEdit, setEmailEdit] = useState("");
  const [passwordEdit, setPasswordEdit] = useState("");
  const [nameEdit, setNameEdit] = useState("");

  const getEditProfile = () => {
    axios
      .get(`https://numpangtidur.my.id/users`, { headers: { Authorization: `Bearer ${cookie.token}` } })
      .then((res) => {
        const { name, email } = res.data.data;
        setEmailEdit(email);
        setNameEdit(name);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err,
        });
      });
  };

  useEffect(() => {
    getEditProfile();
  }, []);

  const editHandler = async (e) => {
    e.preventDefault();
    axios
      .put(
        "https://numpangtidur.my.id/users",
        {
          name: nameEdit,
          role: "User",
          email: emailEdit,
          password: passwordEdit,
        },
        { headers: { Authorization: `Bearer ${cookie.token}` } }
      )
      .then((response) => {
        console.log(response);
        router.push("/profile");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const swalEdit = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      text: "Edit User Success",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  useEffect(() => {
    if (!cookie.token) {
      router.push("/");
    }
  }, [cookie.token]);

  return (
    <Layout profile={"shadow"} logout={() => logoutHandler()}name={name === undefined ? (
        <><p>you are not login</p></>
      ) : (
        <><p className='mt-2'>{name}</p></>
      )}>
      <Navbar namePages={"Edit Profile"} />
      <div className="h-[500px] bg-white shadow-xl rounded-lg m-5">
        <div className="text-pink-airbnb flex justify-center py-5">
          <CgProfile size={80} />
        </div>
        <div className="w-full bg-[#FBFBFB] flex items-center justify-center rounded-lg pt-6">
          <form class="w-[90%] justify-center align-middle" onSubmit={(e) => editHandler(e)}>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-[25%]">
                <label class="block text-pink-airbnb font-semibold text-xl md:text-left mb-1 md:mb-0 pr-4" for="inline-full-name">
                  Full Name
                </label>
              </div>
              <div class="md:w-[75%]">
                <input
                  class="bg-gray-200 appearance-none border-2 border-[#D9D9D9] rounded-2xl w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-pink-airbnb h-14"
                  value={nameEdit}
                  id="inline-full-name"
                  type="text"
                  placeholder="Name"
                  onChange={(e) => {
                    setNameEdit(e.target.value);
                  }}
                />
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-[25%]">
                <label class="block text-pink-airbnb font-semibold text-xl md:text-left mb-1 md:mb-0 pr-4" for="inline-email">
                  Email
                </label>
              </div>
              <div class="md:w-[75%]">
                <input
                  class="bg-gray-200 appearance-none border-2 border-[#D9D9D9] rounded-2xl  w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-pink-airbnb h-14"
                  id="inline-email"
                  type="text"
                  value={emailEdit}
                  placeholder="Email"
                  onChange={(e) => {
                    setEmailEdit(e.target.value);
                  }}
                />
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-[25%]">
                <label class="block text-pink-airbnb font-semibold text-xl md:text-left mb-1 md:mb-0 pr-4" for="inline-password">
                  Password
                </label>
              </div>
              <div class="md:w-[75%]">
                <input
                  class="bg-gray-200 appearance-none border-2 border-[#D9D9D9] rounded-2xl  w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-pink-airbnb h-14"
                  id="inline-password"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setPasswordEdit(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex justify-end my-5">
              <button className="btn bg-pink-airbnb text-white border-none w-1/6 normal-case hover:bg-[#E75056] text-lg" type="submit" onClick={() => swalEdit()}>
                Edit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
