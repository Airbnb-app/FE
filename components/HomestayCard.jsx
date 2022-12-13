import React from "react";

const HomestayCard = ({ edit, image1, image2, image3, name, deskripsi, harga }) => {
  return (
    <div className="card card-side bg-white shadow-xl rounded-lg w-4/5 h-64 my-5  hover:z-10 transition hover:scale-110">
      <figure className="w-64">
        <div className="h-96 carousel carousel-vertical rounded-box">
          <div className="carousel-item w-64 h-64">
            <img src={image1} alt="homestay" className=" w-64 h-64 object-cover" />
          </div>
          <div className="carousel-item w-64 h-64">
            <img src={image2} className="w-64 h-64" />
          </div>
          <div className="carousel-item w-64 h-80">
            <img src={image3} className="w-64 h-64" />
          </div>
        </div>
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title text-pink-airbnb">
            <a href="" className="hover:text-[#E75056]">
              {name}
            </a>
          </h2>
          <div>{edit}</div>
        </div>
        <p className="text-black-airbnb ">{deskripsi}</p>
        <div className="card-actions justify-start">
          <div className="rating">
            <input type="radio" name="rating-1" className="mask mask-star bg-black-airbnb" />
            <input type="radio" name="rating-1" className="mask mask-star bg-black-airbnb" />
            <input type="radio" name="rating-1" className="mask mask-star bg-black-airbnb" />
            <input type="radio" name="rating-1" className="mask mask-star bg-black-airbnb" />
            <input type="radio" name="rating-1" className="mask mask-star bg-black-airbnb" />
          </div>
          <p className="text-black-airbnb text-right">Price: {harga}/night</p>
        </div>
      </div>
    </div>
  );
};

export default HomestayCard;
