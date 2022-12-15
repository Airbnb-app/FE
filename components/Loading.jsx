import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="m-2 flex flex-col justify-between p-3 w-full">
        <div className="flex animate-pulse space-x-4">
          <div className=" flex-1 py-1 space-y-5">
            <div className="bg-pink-airbnb h-52 rounded-xl flex">
              <div className="h-52 w-52 flex items-center justify-center">
                <div className="bg-cream-airbnb rounded-xl  w-48 h-48 flex justify-center items-center">
                  <h1 className="text-pink-airbnb text-bold text-3xl animate-bounce">Loading</h1>
                </div>
              </div>
              <div className="space-y-2 w-3/4 p-2">
                <div className="h-6 bg-cream-airbnb rounded" />
                <div className="h-6 rounded bg-cream-airbnb" />
                <div className="h-6 bg-cream-airbnb rounded" />
                <div className="h-6 rounded bg-cream-airbnb" />
                <div className="h-6 bg-cream-airbnb rounded" />
                <div className="h-6 rounded bg-cream-airbnb" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-6 bg-pink-airbnb rounded" />
              <div className="h-6 rounded bg-pink-airbnb" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
