import React from "react";
import HomestayCard from "../components/HomestayCard";
import Layout from "../components/Layout";
import { CgProfile } from "react-icons/cg";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";
import { CostumInput3, CostumInput } from "../components/CostumInput";
import { RiPencilFill } from "react-icons/ri";

const Profile = () => {
  return (
    <Layout profile={"shadow"}>
      <Navbar namePages={"Profile"} />
      <div className="my-5 mx-5 text-pink-airbnb flex justify-start">
        <CgProfile size={100} />
        <div className="flex justify-between w-full">
          <div className="ml-10">
            <p className="text-black-airbnb mt-3 w-24 font-bold">Nama: </p>
            <p className="text-black-airbnb mt-3 font-bold">Email: </p>
          </div>
          <div className="mx-5 mt-8 flex">
            <p>
              <Modal titleModal={"Upgrade to Hoster"} no={"1"} title={"Upgrade to Hoster"} tombol1={"Cancel"} tombol2={"Upgrade"} inputOne={<CostumInput3 />} />
            </p>
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
            <Modal
              titleModal={"Edit Homestay Post"}
              no={"2"}
              title={
                <div className="flex flex-col justify-center items-center">
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
