import React from "react";

const Modal = ({ no, title, inputOne, inputTwo, inputThree, inputFour, inputFive, onClick, tombol1, tombol2, titleModal }) => {
  return (
    <>
      <label htmlFor={`my-modal-${no}`} className={`normal-case text-pink-airbnb bg-transparent`}>
        {title}
      </label>

      <input type="checkbox" id={`my-modal-${no}`} className="modal-toggle" />
      <div className="modal modal-middle sm:modal-middle">
        <div className="modal-box  flex flex-col justify-center items-center">
          <h3 className="font-bold lg:text-2xl  text-base text-pink-airbnb text-center  ">{titleModal}</h3>
          {inputOne}
          {inputTwo}
          {inputThree}
          {inputFour}
          {inputFive}

          <div className="grid grid-cols-2 w-2/3 md:w-full lg:w-full max-w-md mt-3">
            <label htmlFor={`my-modal-${no}`} className="btn bg-pink-airbnb normal-case border-none mx-1 hover:bg-red-900">
              {tombol1}
            </label>

            <label htmlFor={`my-modal-${no}`} onClick={onClick} className="disabled:bg-white btn bg-pink-airbnb normal-case  border-none mx-1 hover:bg-green-700">
              {tombol2}
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
