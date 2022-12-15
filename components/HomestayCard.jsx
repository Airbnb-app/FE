import React from "react";

const HomestayCard = ({ edit, image1, image2, image3, name, deskripsi, harga, address, owner, delet, onDelete, toReserve, onEdit }) => {
  return (
    <div className="card card-side bg-white shadow-xl rounded-lg w-full h-64 my-5  hover:z-10 transition hover:scale-105">
      <figure className="w-64">
        <div className="h-96 carousel carousel-vertical rounded-box">
          <div className="carousel-item w-64 h-64">
            <img src={image1} alt="homestay" className="w-full h-full  object-cover" />
          </div>
          <div className="carousel-item w-64 h-64">
            <img src={image2} className="w-full h-full object-cover" />
          </div>
          <div className="carousel-item w-64 h-80">
            <img src={image3} className="w-full h-full object-cover" />
          </div>
        </div>
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title text-pink-airbnb uppercase hover:cursor-pointer hover:text-[#E75056]" onClick={toReserve}>
            {name}
          </h2>
          <div className="flex items-center">
            <button onClick={onDelete} className="mr-2 text-pink-airbnb">
              {delet}
            </button>
            <button onClick={onEdit}>{edit}</button>
          </div>
        </div>
        <p className="text-black-airbnb text-xs">{deskripsi}</p>
        <div>
          <p className="text-black-airbnb text-xs">Address : {address}</p>
          <p className="text-black-airbnb text-xs">Owner : {owner}</p>
        </div>

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
