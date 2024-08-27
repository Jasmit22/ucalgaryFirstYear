"use client";

import { faL } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useState } from "react";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleMessageRequest = async (e) => {
    e.preventDefault();

    if (!email || !description) return;

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, description }),
      });
      if (response.ok) {
        setEmail("");
        setDescription("");
      }
    } catch (error) {
      console.error("Error submitting message:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="hero min-h-screen bg-slate-400">
      <div className="bg-ucalgaryRed fixed top-0 left-0 z-10 h-20 w-full"></div>
      <div className="hero-content flex-col lg:flex-row">
        <Image
          src={"/svg/contact.svg"}
          alt="Contact Image"
          width={1000}
          height={1000}
          className="w-52 md:w-64 lg:w-1/3"
        />
        <div className="mx-5">
          <h1 className="text-5xl font-bold text-white">Contact Us</h1>
          <p className="py-6 text-black">
            If you have any questions, face issues, or have suggestions on how
            we can improve the website, please do not hesitate to reach out to
            us. We value your feedback and are here to help!
          </p>
          <label className="input input-bordered flex items-center gap-2 text-ucalgaryDarkGrey my-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <textarea
            className="textarea textarea-bordered w-full mb-4 text-black"
            placeholder="Message"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button
            className="btn bg-ucalgaryRed text-white border-none hover:bg-red-800 mb-5 font-bold shadow-2xl"
            onClick={(e) => handleMessageRequest(e)}
          >
            {loading && (
              <span className="loading loading-spinner loading-sm"></span>
            )}
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
