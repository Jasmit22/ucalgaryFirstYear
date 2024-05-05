import React from "react";

const page = () => {
  return (
    <div className="bg-yellow-300 font-semibold text-black flex justify-center items-center h-screen">
      <form>
        <div className="flex flex-col justify-center items-center w-full gap-7 border-2 shadow-2xl border-ucalgaryLightOrange p-20 rounded-md">
          <div className="font-bold text-3xl">Login</div>
          <div className="flex flex-col justify-center gap-2">
            <label for="uname">Username or Email:</label>
            <input
              className="p-1 pl-2 border-black border-2 rounded-md"
              placeholder="Username or Email"
              type="text"
              id="uname"
              name="uname"
            ></input>
          </div>
          <div className="flex flex-col justify-center gap-2">
            <label for="password">Password:</label>
            <input
              className="p-1 pl-2 border-black border-2 rounded-md"
              placeholder="Password"
              type="text"
              id="password"
              name="password"
            ></input>
          </div>
          <input
            className=" bg-white border-black border-2 p-1 px-3 rounded-md hover:bg-ucalgaryDarkOrange hover:text-white"
            type="submit"
            value="Login"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default page;
