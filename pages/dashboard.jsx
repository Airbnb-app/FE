import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import HomestayCard from "../components/HomestayCard";

function dashboard() {
  <Head>
    <script src="./TW-ELEMENTS-PATH/dist/js/index.min.js"></script>
  </Head>;
  return (
    <Layout dashboard={"shadow"}>
      <div className="w-full px-5">
        {/* ini awal input */}
        <div className="form-control w-full sticky top-2 z-10">
          <div className="input-group w-full">
            <input type="text" placeholder="Search…" className="input input-bordered w-full" />
            <button className="btn btn-square bg-pink-airbnb border-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
        {/* ini akhir input */}
        {/* Ini awal Carrousel */}
        <div className="bg-green-300 mt-5 w-full">
          <div className="carousel w-full h-64">
            <div id="item1" className="carousel-item w-full">
              <img src="https://tse3.mm.bing.net/th?id=OIP.8SSKF5CeIk-RhFsiNUIwagHaEV&pid=Api&P=0" alt="" className="w-full object-cover" />
            </div>
            <div id="item2" className="carousel-item w-full">
              <img src="https://tse4.mm.bing.net/th?id=OIP.ZdITF732zPb6BFuQgNVG4QHaEK&pid=Api&P=0" className="w-full" />
            </div>
            <div id="item3" className="carousel-item w-full">
              <img src="https://placeimg.com/800/200/arch" className="w-full" />
            </div>
            <div id="item4" className="carousel-item w-full">
              <img src="https://placeimg.com/800/200/arch" className="w-full" />
            </div>
          </div>
          <div className="flex justify-center w-full py-2 gap-2">
            <a href="#item1" className="btn btn-xs">
              O
            </a>
            <a href="#item2" className="btn btn-xs">
              O
            </a>
            <a href="#item3" className="btn btn-xs">
              O
            </a>
            <a href="#item4" className="btn btn-xs">
              O
            </a>
          </div>
        </div>
        {/* Ini akhir Carrousel */}
        <div className="w-full flex justify-center">
          <HomestayCard />
        </div>
      </div>
    </Layout>
  );
}

export default dashboard;
