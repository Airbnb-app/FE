import React from "react";
import { RiPencilFill } from "react-icons/ri";

const HomestayCard = ({ edit }) => {
  return (
    <div className="card card-side bg-white shadow-xl rounded-lg w-[1000px] h-[250px] my-5">
      <figure>
        <img src="https://placeimg.com/200/280/arch" alt="homestay" className="rounded-lg w-[250px] h-[250px]" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title text-pink-airbnb">
            <a href="" className="hover:text-[#E75056]">
              Villa Puncak Premium
            </a>
          </h2>
          <div>{edit}</div>
        </div>
        <p className="text-black-airbnb w-[750px] h-[100px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam expedita aliquid ad, eveniet est eum magnam ipsam commodi totam facilis illum, ea nisi dolor exercitationem nemo quae nesciunt ratione necessitatibus assumenda rem?
          Magnam, nesciunt labore!
        </p>
        <div className="card-actions justify-start">
          <div className="rating">
            <input type="radio" name="rating-1" className="mask mask-star bg-black-airbnb" />
            <input type="radio" name="rating-1" className="mask mask-star bg-black-airbnb" />
            <input type="radio" name="rating-1" className="mask mask-star bg-black-airbnb" />
            <input type="radio" name="rating-1" className="mask mask-star bg-black-airbnb" />
            <input type="radio" name="rating-1" className="mask mask-star bg-black-airbnb" />
          </div>
          <p className="text-black-airbnb text-right">Price: $25/night</p>
        </div>
      </div>
    </div>
  );
};

export default HomestayCard;
