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
        <div id="carouselExampleCaptions" class="carousel slide relative rounded-lg mt-5" data-bs-ride="carousel">
          <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner relative w-full overflow-hidden">
            <div class="carousel-item active relative float-left w-full">
              <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg" class="block w-full" alt="..." />
              <div class="carousel-caption hidden md:block absolute text-center">
                <h5 class="text-xl">First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div class="carousel-item relative float-left w-full">
              <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg" class="block w-full" alt="..." />
              <div class="carousel-caption hidden md:block absolute text-center">
                <h5 class="text-xl">Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div class="carousel-item relative float-left w-full">
              <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg" class="block w-full" alt="..." />
              <div class="carousel-caption hidden md:block absolute text-center">
                <h5 class="text-xl">Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
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
