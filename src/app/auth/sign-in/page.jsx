"use client";
import { signIn } from "next-auth/react";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const userName = useRef("");
  const pass = useRef("");
  const router = useRouter();

  const onSubmit = async () => {
    const result = await signIn("credentials", {
      username: userName.current,
      password: pass.current,
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-ucalgaryRed to-ucalgaryLightOrange p-4">
      <div className="flex w-2/5 max-w-6xl bg-white shadow-2xl rounded-xl min-h-[500px] h-[500px]">
        <div className="flex flex-col justify-center items-center px-6 py-8 w-full">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Sign In
          </h2>
          <div className="mb-4 w-full">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Username
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-ucalgaryDarkOrange transition duration-150 ease-in-out"
              placeholder="Username"
              onChange={(e) => (userName.current = e.target.value)}
            />
          </div>
          <div className="mb-6 w-full">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-ucalgaryDarkOrange transition duration-150 ease-in-out"
              placeholder="Password"
              onChange={(e) => (pass.current = e.target.value)}
            />
          </div>
          <button
            onClick={onSubmit}
            className="w-full bg-gradient-to-br from-ucalgaryRed to-ucalgaryDarkOrange text-white font-bold py-2 rounded-md hover:bg-red-800 transition duration-150 ease-in-out"
          >
            Login
          </button>
          <div className="flex items-center justify-center my-4 w-full">
            <div className="w-full border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500">or</span>
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="w-full text-gray-500 font-semibold py-2 rounded-md flex items-center justify-center"
          >
            <FcGoogle className="mr-2" size={24} />
            Sign in with Google
          </button>
          <div className="text-center mt-6">
            <p className="text-gray-600">
              Don&apos;t have an account?{" "}
              <span
                onClick={() => router.push("/auth/sign-up")}
                className="text-ucalgaryRed cursor-pointer"
              >
                Sign up
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
