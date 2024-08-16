import React from "react";

const page = () => {
  return (
    <div className="h-screen bg-ucalgaryGold">
      <div className="bg-ucalgaryRed fixed top-0 z-10 h-20 w-full"></div>
      <div className="text-black font-extrabold text-5xl text-center pt-48 pb-20">
        Made By:
      </div>
      <div className="flex flex-col gap-3 text-center text-3xl text-black">
        <span>Jasmit</span>
        <span>Yotam</span>
        <span>Talaal</span>
        <span>Joseph</span>
      </div>
    </div>
  );
};

export default page;
