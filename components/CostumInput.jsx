import React from "react";
import { Input } from "@material-tailwind/react";

const CostumInput = ({ label, type, onChange, value }) => {
  return (
    <div className="w-full py-2 mt-5 ">
      <Input onChange={onChange} value={value} label={label} type={type} className="w-full text-black-airbnb" />
    </div>
  );
};

const CostumInput2 = () => {
  <textarea className="textarea textarea-info" placeholder="Bio"></textarea>;
};

const CostumInput3 = () => {
  return (
    <div className="mt-2 w-full">
      <input type="file" className="file-input file-input-bordered file-input-error border-pink-airbnb w-full " />
    </div>
  );
};

export { CostumInput, CostumInput2, CostumInput3 };
