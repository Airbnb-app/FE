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
import { data } from "autoprefixer";
import Loading from "../components/Loading";

const Profile = () => {
  const [profiledata, setProfileData] = useState({});
  const [cookie, setCookie, removeCookie] = useCookies();
  const [loading, setLoading] = useState(false);
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");

  const role = profiledata.role;

  // Ini untuk masukan Add Homestay
  const [nameHomestay, setNameHomestay] = useState("");
  const [address, setAddres] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [upload1, setUpload1] = useState("");
  const [upload2, setUpload2] = useState("");
  const [upload3, setUpload3] = useState("");

  // ini untuk masukan Edit HomeStay

  const [editNameHomestay, setEditNameHomestay] = useState("");
  const [editAddress, setEditAddres] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editPrice, setEditPrice] = useState();
  const [idHomestay, setIdHomestay] = useState();
  const [idUser, setIdUser] = useState();
  const [editUpload1, setEditUpload1] = useState("");
  const [editUpload2, setEditUpload2] = useState("");
  const [editUpload3, setEditUpload3] = useState("");

  const getHomestayByID = (id) => {
    setLoading(true);
    const config = {
      headers: {
        Authorization: `Bearer ${cookie.token}`,
      },
    };
    axios
      .get(`https://numpangtidur.my.id/homestays/${id}`, config)
      .then((res) => {
        const { name, description, image1, image2, image3, id, price_per_night, user_id, address } = res.data.data;
        setEditNameHomestay(name);
        setEditDescription(description);
        setEditAddres(address);
        setEditPrice(price_per_night);
        setEditUpload1(image1);
        setEditUpload2(image2);
        setEditUpload3(image3);
        setIdHomestay(id);
        setIdUser(user_id);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const editHomestay = () => {
    setLoading(true);
    axios
      .put(
        `https://numpangtidur.my.id/homestays/${idHomestay}`,
        {
          name: editNameHomestay,
          address: editAddress,
          description: editDescription,
          price_per_night: editPrice,
          user_id: idUser,
          image1: editUpload1,
          image2: editUpload2,
          image3: editUpload3,
        },
        {
          headers: {
            Authorization: `Bearer ${cookie.token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        const { message } = res.data;
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

  const addHomestay = () => {
    setLoading(true);

    axios
      .post(
        "https://numpangtidur.my.id/homestays",
        {
          name: nameHomestay,
          address: address,
          description: description,
          price_per_night: price,
          image1: upload1,
          image2: upload2,
          image3: upload3,
        },
        {
          headers: {
            Authorization: `Bearer ${cookie.token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      )
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

  const deleteHomestay = (id) => {
    setLoading(true);
    const config = {
      headers: {
        Authorization: `Bearer ${cookie.token}`,
      },
    };
    Swal.fire({
      title: "Are you sure want to Delete?",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Yes",
      cancelButtonColor: "#d33",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://numpangtidur.my.id/homestays/${id}`, config)
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
        Swal.fire({
          position: "center",
          icon: "success",
          text: "Delete successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleUpgrade = (e) => {
    setLoading(true);
    axios
      .post(
        `https://numpangtidur.my.id/users/upgrade`,
        {
          image1: image1,
          image2: image2,
          image3: image3,
        },
        {
          headers: {
            Authorization: `Bearer ${cookie.token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((ress) => {
        const { message } = ress.data;
        Swal.fire({
          position: "center",
          icon: "success",
          title: message,
          showConfirmButton: false,
          timer: 1500,
        });
        removeCookie("role");
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

  const getProfile = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${cookie.token}`,
      },
    };
    await axios
      .get(`https://numpangtidur.my.id/users`, config)
      .then((response) => {
        setProfileData(response.data.data);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error,
        });
      });
  };

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
        Router.push("/");
      }
    });
  };

  const onDelete = () => {
    axios
      .delete(`https://numpangtidur.my.id/users`, {
        headers: { Authorization: `Bearer ${cookie.token}` },
      })
      .then((response) => {
        console.log("data hapus: ", response);
        Swal.fire({
          title: "Are you sure want to delete account?",
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
              text: "Delet account successfully",
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
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error,
        });
      });
  };

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
              <button className="btn btn-ghost normal-case" onClick={() => Router.push("/edit/profile")}>
                <p>Edit Profile</p>
              </button>
              <div className="flex items-start">
                <button className="btn btn-ghost normal-case" onClick={() => onDelete()}>
                  Hapus Profil
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mx-5 justify-center">
          {role === "User" ? (
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-5xl text-pink-airbnb font-bold animate-pulse">You Not Hoster</h1>
              <p className="text-pink-airbnb font-bold mt-4 animate-pulse">Please Upgrade to Hoster with Upload three Photos</p>
            </div>
          ) : (
            <div className=" w-full">
              {loading ? (
                <Loading />
              ) : profiledata.Homestay ? (
                profiledata.Homestay?.map((item) => (
                  <HomestayCard
                    onEdit={() => getHomestayByID(item.id)}
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
                    image2={item.image2}
                    image3={item.image3}
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
                    key={item.id}
                  />
                ))
              ) : (
                <div className="flex flex-col justify-center items-center">
                  <h1 className="text-5xl text-pink-airbnb font-bold animate-pulse">Add Post Your Homestay</h1>
                  <p className="text-pink-airbnb font-bold mt-4 animate-pulse">Offer your most comfortable homestay</p>
                </div>
              )}
            </div>
          )}
        </div>
        <Modal1
          onClick={() => editHomestay()}
          titleModal={"Edit Homestay Post"}
          no={2}
          tombol1={"Cancel"}
          tombol2={"Save"}
          inputOne={<CostumInput value={editNameHomestay} onChange={(e) => setEditNameHomestay(e.target.value)} label={"Homestay Name"} type={"text"} />}
          inputTwo={<CostumInput value={editAddress} onChange={(e) => setEditAddres(e.target.value)} label={"Address"} type={"text"} />}
          inputThree={<CostumInput value={editDescription} onChange={(e) => setEditDescription(e.target.value)} label={"Description"} type={"text"} />}
          inputFour={<CostumInput value={editPrice} label={"Price"} onChange={(e) => setEditPrice(e.target.value)} type={"number"} />}
          inputFive={<CostumInput3 id={"image1"} name={"image1"} value={data.name} onChange={(e) => setEditUpload1(e.target.files[0])} />}
          inputSix={<CostumInput3 onChange={(e) => setEditUpload2(e.target.files[0])} />}
          inputSeven={<CostumInput3 onChange={(e) => setEditUpload3(e.target.files[0])} />}
        />
      </div>
    </Layout>
  );
};

export default Profile;
