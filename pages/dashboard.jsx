import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import HomestayCard from "../components/HomestayCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";
import Router from "next/router";
import Loading from "../components/Loading";

function dashboard() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [cookie, setCookie, removeCookie] = useCookies();
  const [search, setSearch] = useState("");
  console.log(data);

  const token = cookie.token;

  useEffect(() => {
    searchHomestay();
  }, [search]);

  function submitSearch() {
    searchHomestay();
  }

  function searchHomestay() {
    setLoading(true);
    axios
      .get(`http://18.143.102.15:80/homestays/?name=${search}`, { headers: { Authorization: `Bearer ${token}` } })
      .then((ress) => {
        const result = ress.data.data;
        setData(result);
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const getReserve = (item, title) => {
    Router.push({
      pathname: `/reservation/${title}`,
      query: {
        address: item.address,
        owner: item.owner,
        image1: item.image1,
        image2: item.image2,
        image3: item.image3,
        name: item.name,
        description: item.description,
        price_per_night: item.price_per_night,
        id: item.id,
      },
    });
  };

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

  return (
    <Layout dashboard={"shadow"} logout={() => logoutHandler()}>
      <div className="w-full flex flex-col px-5">
        {/* ini awal input */}
        <div className="form-control w-full sticky top-2 z-20">
          <div className="input-group  w-full">
            <input onChange={(e) => setSearch(e.target.value)} onSubmit={() => submitSearch()} type="text" placeholder="Search…" className="input input-bordered text-pink-airbnb w-full bg-white" />
            <button onClick={() => submitSearch()} className="btn btn-square bg-pink-airbnb border-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
        {/* ini akhir input */}
        {/* Ini awal Carrousel */}
        <div className=" mt-5 w-full">
          <div className="carousel w-full h-64 rounded-xl ">
            {data ? (
              data.map((item) => (
                <div id={item.id} className="carousel-item w-full">
                  <div className="grid grid-cols-3 w-full">
                    <div className="flex justify-center items-center w-full  h-64">
                      <img src={item.image1} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex justify-center items-center w-full h-64">
                      <img src={item.image2} alt="" className=" w-full h-full object-cover" />
                    </div>
                    <div className="flex justify-center items-center w-full h-64">
                      <img src={item.image3} alt="" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
          <div className=" w-full  ">
            <div className="overflow-auto py-2 gap-2 w-full flex flex-wrap justify-center">
              {data ? (
                data.map((item) => (
                  <a href={`#${item.id}`} className="btn text-white btn-xs hover:bg-white hover:text-pink-airbnb bg-pink-airbnb border-none">
                    {item.name}
                  </a>
                ))
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        {/* Ini akhir Carrousel */}
        <div className="w-full justify-center flex flex-col items-center">
          {loading ? (
            <Loading />
          ) : data ? (
            data.map((item) => (
              <HomestayCard
                address={item.address}
                owner={item.owner}
                image1={item.image1}
                image2={item.image2}
                image3={item.image3}
                name={item.name}
                deskripsi={item.description}
                harga={item.price_per_night}
                key={item.id}
                toReserve={() => getReserve(item, item.name)}
              />
            ))
          ) : (
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-5xl text-pink-airbnb font-bold">Homestay not found</h1>
              <p className="text-pink-airbnb font-bold mt-4">please search for other keywords</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default dashboard;
