import React from "react";
import { Input } from "@material-tailwind/react";

const CostumInput = ({ value, label, type, onChange }) => {
  return (
    <div className="w-full py-2 mt-5 ">
      <Input value={value} onChange={onChange} label={label} type={type} className="w-full text-black-airbnb" />
    </div>
  );
};

const CostumInput2 = () => {
  <textarea className="textarea textarea-info" placeholder="Bio"></textarea>;
};

const CostumInput3 = ({ onChange, value }) => {
  return (
    <div className="mt-2 w-full">
      <input onChange={onChange} accept={value} type="file" className="file-input file-input-bordered file-input-error border-pink-airbnb w-full " />
    </div>
  );
};

export { CostumInput, CostumInput2, CostumInput3 };
