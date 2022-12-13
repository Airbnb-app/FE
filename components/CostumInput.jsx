import React from "react";
import { Input } from "@material-tailwind/react";

const CostumInput = ({ label, type, onChange, value }) => {
  return (
    <div className="flex flex-col py-2 mt-5">
      <Input onChange={onChange} value={value} size="lg" label={label} type={type} className=" text-black-airbnb" />
    </div>
  );
};

const CostumInput2 = () => {
  <textarea className="textarea textarea-info" placeholder="Bio"></textarea>;
};

export { CostumInput, CostumInput2 };
