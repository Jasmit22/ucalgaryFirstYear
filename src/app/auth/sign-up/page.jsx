"use client";
import { signIn } from "next-auth/react";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";

const SignUpPage = () => {
  const emailRef = useRef("");
  const userNameRef = useRef("");
  const passRef = useRef("");
  const router = useRouter();

  const onSubmit = async () => {
    const result = await fetch("/api/auth/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailRef.current,
        username: userNameRef.current,
        password: passRef.current,
      }),
    });

    if (result.ok) {
      router.push("/auth/sign-in");
    } else {
      const error = await result.json();
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-ucalgaryRed to-ucalgaryLightOrange p-4">
      <div className="flex w-full max-w-6xl bg-white shadow-2xl rounded-xl min-h-[500px]">
        <div className="flex flex-col justify-center items-center px-6 py-8 w-full">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Sign Up
          </h2>
          <div className="mb-4 w-full">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-ucalgaryDarkOrange transition duration-150 ease-in-out"
              placeholder="Email"
              onChange={(e) => (emailRef.current = e.target.value)}
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Username
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-ucalgaryDarkOrange transition duration-150 ease-in-out"
              placeholder="Username"
              onChange={(e) => (userNameRef.current = e.target.value)}
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
              onChange={(e) => (passRef.current = e.target.value)}
            />
          </div>
          <button
            onClick={onSubmit}
            className="w-full bg-gradient-to-br from-ucalgaryRed to-ucalgaryDarkOrange text-white font-bold py-2 rounded-md hover:bg-red-800 transition duration-150 ease-in-out"
          >
            Sign Up
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
            Sign up with Google
          </button>
          <div className="text-center mt-6">
            <p className="text-gray-600">
              Already have an account?{" "}
              <span
                onClick={() => router.push("/auth/sign-in")}
                className="text-ucalgaryRed cursor-pointer"
              >
                Sign in
              </span>
            </p>
          </div>
        </div>
        <Image
          src="/auth-images/sign-up-image.webp"
          alt="Sign up"
          width={600}
          height={400}
          className="max-md:hidden rounded-r-xl"
        />
      </div>
    </div>
  );
};

export default SignUpPage;
