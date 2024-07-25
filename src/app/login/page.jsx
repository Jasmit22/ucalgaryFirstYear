import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="bg-ucalgaryRed font-semibold text-black flex justify-center items-center h-screen">
      <form>
        <div className="flex flex-col justify-center items-center w-full gap-7 border-4 shadow-2xl bg-yellow-100 border-ucalgaryLightOrange p-20 rounded-md">
          <div className="font-bold text-3xl">Login</div>
          <div className="flex flex-col justify-center gap-2">
            <label htmlFor="uname">Username or Email:</label>
            <input
              className="p-1 pl-2 border-black border-2 rounded-md bg-white"
              placeholder="Username or Email"
              type="text"
              id="uname"
              name="uname"
            ></input>
          </div>
          <div className="flex flex-col justify-center gap-2">
            <label htmlFor="password">Password:</label>
            <input
              className="p-1 pl-2 border-black border-2 rounded-md bg-white"
              placeholder="Password"
              type="password"
              id="password"
              name="password"
            ></input>
          </div>
          <input
            className=" bg-white border-black border-2 p-1 px-3 rounded-md hover:bg-ucalgaryDarkOrange hover:text-white"
            type="submit"
            value="Login"
          ></input>
          <div className="text-xs text-center">
            <h1>Don&apos;t have an account?</h1>
            <Link
              className="text-ucalgaryDarkOrange hover:border-ucalgaryDarkOrange hover:border-b hover:font-extrabold"
              href="/signup"
            >
              Sign up here!
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default page;
