import React from "react";
import HomestayCard from "../components/HomestayCard";
import Layout from "../components/Layout";
import { CgProfile } from "react-icons/cg";
import Navbar from "../components/Navbar";
import { Modal1, Modal2 } from "../components/Modal";
import { CostumInput3, CostumInput } from "../components/CostumInput";
import { RiPencilFill } from "react-icons/ri";
import { FaTrashAlt } from "react-icons/fa";

import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import Swal from "sweetalert2";
import Router from "next/router";

const Profile = () => {
  const [profiledata, setProfileData] = useState({});
  const [cookie, setCookie, removeCookie] = useCookies();
  const [role, setRole] = useState();
  const [loading, setLoading] = useState(false);
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");

  // Ini untuk masukan Add Homestay
  const [nameHomestay, setNameHomestay] = useState("");
  const [address, setAddres] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [upload1, setUpload1] = useState("");
  const [upload2, setUpload2] = useState("");
  const [upload3, setUpload3] = useState("");

  const addHomestay = () => {
    setLoading(true);
    const bodyFormData = new FormData();
    bodyFormData.append("image1", upload1);
    bodyFormData.append("image2", upload2);
    bodyFormData.append("image3", upload3);

    const body = {
      name: nameHomestay,
      address: address,
      description: description,
      price_per_night: price,
      image1: bodyFormData,
      image2: bodyFormData,
      image3: bodyFormData,
    };
    const config = {
      headers: {
        Authorization: `Bearer ${cookie.token}`,
        "Content-Type": "multipart/form-data",
      },
    };

    axios
      .post("http://18.143.102.15:80/homestays", body, config)
      .then((ress) => {
        const { message } = ress.data;
        Swal.fire({
          position: "center",
          icon: "success",
          title: message,
          showConfirmButton: false,
          timer: 1500,
        });
        getProfile();
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err,
        });
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  const deleteHomestay = (id) => {
    setLoading(true);
    const config = {
      headers: {
        Authorization: `Bearer ${cookie.token}`,
      },
    };
    axios
      .delete(`http://18.143.102.15:80/homestays/${id}`, config)
      .then((ress) => {
        const { message } = ress.data;
        Swal.fire({
          position: "center",
          icon: "success",
          title: message,
          showConfirmButton: false,
          timer: 1500,
        });
        getProfile();
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err,
        });
      })
      .finally(() => setLoading(false));
  };

  const handleUpgrade = (e) => {
    setLoading(true);

    const bodyFormData = new FormData();

    bodyFormData.append("image1", image1);
    bodyFormData.append("image2", image2);
    bodyFormData.append("image3", image3);

    const config = {
      headers: {
        Authorization: `Bearer ${cookie.token}`,
        "Content-Type": "multipart/form-data",
      },
    };

    axios
      .post(`http://18.143.102.15:80/users/upgrade`, bodyFormData, config)
      .then((ress) => {
        const { message } = ress.data;
        Swal.fire({
          position: "center",
          icon: "success",
          title: message,
          showConfirmButton: false,
          timer: 1500,
        });
        getProfile();
        setCookie("role", profiledata.role);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err,
        });
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  const getProfile = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${cookie.token}`,
      },
    };

    axios
      .get(`http://18.143.102.15:80/users`, config)
      .then((response) => {
        setProfileData(response.data.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProfile();
    setRole(cookie.role);
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
        Router.push("/");
      }
    });
  };

  console.log(profiledata);
  return (
    <Layout profile={"shadow"} logout={() => logoutHandler()}>
      <div className="w-full px-5">
        <Navbar namePages={"Profile"} />
        <div className="my-5 mx-5 text-pink-airbnb flex justify-start">
          <CgProfile size={100} />
          <div className="flex justify-between w-full">
            <div className="ml-10">
              <p className="text-black-airbnb mt-3  font-bold w-full">Nama : {profiledata.name}</p>
              <p className="text-black-airbnb mt-3 font-bold">Email : {profiledata.email}</p>
            </div>
            <div className="mx-5 mt-8 flex">
              <div>
                {role === "User" ? (
                  <Modal1
                    onClick={(e) => handleUpgrade(e)}
                    titleModal={"Upgrade to Hoster"}
                    no={6}
                    title={"Upgrade to Hoster"}
                    tombol1={"Cancel"}
                    tombol2={"Upgrade"}
                    inputOne={<CostumInput3 onChange={(e) => setImage1(e.target.files[0])} />}
                    inputTwo={<CostumInput3 onChange={(e) => setImage2(e.target.files[0])} />}
                    inputThree={<CostumInput3 onChange={(e) => setImage3(e.target.files[0])} />}
                  />
                ) : (
                  <Modal1
                    onClick={() => addHomestay()}
                    titleModal={"Add New Post Homestay"}
                    no={3}
                    title={"Add New Post Homestay"}
                    tombol1={"Cancel"}
                    tombol2={"Update"}
                    inputOne={<CostumInput onChange={(e) => setNameHomestay(e.target.value)} label={"Homestay Name"} type={"text"} />}
                    inputTwo={<CostumInput onChange={(e) => setAddres(e.target.value)} label={"Address"} type={"text"} />}
                    inputThree={<CostumInput onChange={(e) => setDescription(e.target.value)} label={"Description"} type={"text"} />}
                    inputFour={<CostumInput onChange={(e) => setPrice(e.target.value)} label={"Price"} type={"number"} />}
                    inputFive={<CostumInput3 onChange={(e) => setUpload1(e.target.files[0])} />}
                    inputSix={<CostumInput3 onChange={(e) => setUpload2(e.target.files[0])} />}
                    inputSeven={<CostumInput3 onChange={(e) => setUpload3(e.target.files[0])} />}
                  />
                )}
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
          {role === "User" ? (
            <div>You Not Hoster</div>
          ) : (
            <div className=" w-full">
              {profiledata.Homestay
                ? profiledata.Homestay?.map((item) => (
                    <HomestayCard
                      onDelete={() => deleteHomestay(item.id)}
                      delet={
                        <div>
                          <div className="flex flex-col items-center justify-center cursor-pointer">
                            <FaTrashAlt />
                            <p className="text-xs">Delete</p>
                          </div>
                        </div>
                      }
                      address={item.address}
                      owner={cookie.name}
                      name={item.name}
                      image1={item.image1}
                      harga={item.price_per_night}
                      deskripsi={item.description}
                      edit={
                        <label htmlFor={`my-modal-2`} className={`normal-case text-pink-airbnb bg-transparent`}>
                          <div className="flex flex-col items-center justify-center cursor-pointer">
                            <RiPencilFill />
                            <p className="text-xs">Edit</p>
                          </div>
                        </label>
                      }
                    />
                  ))
                : "add post Homestay"}
            </div>
          )}
        </div>
        <Modal2
          titleModal={"Edit Homestay Post"}
          no={2}
          inputOne={<CostumInput3 />}
          tombol1={"Cancel"}
          tombol2={"Save"}
          inputTwo={<CostumInput label={"Villa Premium 3"} type={"text"} />}
          inputThree={<CostumInput label={"Description"} type={"text"} />}
          inputFour={<CostumInput label={"Price"} type={"number"} />}
        />
      </div>
    </Layout>
  );
};

export default Profile;
