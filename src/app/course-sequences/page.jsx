"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Page = () => {

  const sequenceInfoList = [
    {
      title: "Table 1",
      image: "/document-table.svg",
      document: <TableOneDocument />    
    }
  ]

  const [popUpOpen, setPopUpOpen] = useState(false);
  const [popUpType, setPopUpType] = useState(null);


  const studySpots = [
    {
      title: "Taylor Family Digital Library",
      description:
        "A modern library offering various study spaces, from silent areas to collaborative rooms. It features extensive resources, including books, computers, and study rooms. The views from the upper floors are also a great bonus.",
      image: "/tfdl-study.jpg",
      tag: ["Modern", "Collaborative"],
    },
    {
      title: "Atrium",
      description:
        "A spacious and bright area with ample seating, ideal for both group and individual study. The natural light and greenery create a refreshing atmosphere. It’s conveniently located near the Science Theatres, making it easy to pop in between classes.",
      image: "/atrium-study.jpg",
      tag: ["Bright", "Natural"],
    },
    {
      title: "Scurfield Hall",
      description:
        "Scurfield Hall, home to the Haskayne School of Business, offers several study areas ideal for business students. There are quiet lounges and dedicated study rooms, perfect for individual work or group projects.",
      image: "/scurfield-study.jpg",
      tag: ["Business", "Central"],
    },
    {
      title: "Hunter Student Commons",
      description:
        "The Hunter Student Commons is a vibrant and social study space. It offers a variety of seating options, from cozy nooks to large tables. The bustling atmosphere is perfect for group work or casual study sessions.",
      image: "/hunter-student.jpg",
      tag: ["Bright", "Collaborative"],
    },
    {
      title: "Math Sciences Building",
      description:
        "A relatively quiet and focused study spot with many study spaces and computer labs, perfect for math and science students. The building's location and proximity to the science theatres make it a convenient and practical study spot.",
      image: "/ms-study.jpg",
      tag: ["Focused", "Resourceful"],
    },
    {
      title: "Engineering Building",
      description:
        "The Engineering Building features unique study areas, including innovation labs and project rooms designed specifically for engineering students. The vibrant atmosphere and specialized spaces make it an ideal spot for hands-on learning and collaborative projects.",
      image: "/eng-building-study.jpg",
      tag: ["Modern", "Collaborative"],
    },
  ];

  return (
    <div className="flex flex-col gap-5 mb-10">
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: "url(/ucalgary-signs.png)" }}
      >
        <div className="hero-overlay bg-opacity-70 backdrop-blur-sm"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold tracking-tight text-white">
              Course Sequencing
            </h1>
            <p className="mb-5 text-lg">
              Understanding the ins-and-outs of your specific degree sequence
              can be difficult for a lot of first years. Luckily, we have got
              you covered with a basic guide on course sequencing.
            </p>
            <Link
              className="btn bg-ucalgaryRed text-gray-100 border-none hover:bg-red-800 btn-circle btn-wide mb-5 font-bold"
              href="#content"
            >
              Explore Now
            </Link>
          </div>
        </div>
      </div>
      <div
        id="content"
        className="flex flex-col m-auto justify-center items-center"
      >
        <div className="flex flex-col m-auto justify-center items-center w-full border-ucalgaryGold border-2 rounded-full shadow-xl mt-28 mb-16">
          <h2 className="text-3xl font-bold text-black mb-5 mt-10 rad">
            Recommended Course Guides
          </h2>
          <p className="text-lg text-black mb-5 px-20">
            The university provides numerous program guides for all Faculty of
            Science students, including guides for specific specializations!
          </p>
          <Link
            className="btn bg-ucalgaryRed text-gray-100 border-none hover:bg-red-800 btn-circle btn-wide mb-10"
            href="https://science.ucalgary.ca/current-students/undergraduate/program-advising/program-guides"
          >
            Find Your Program Guides Here!
          </Link>
        </div>
      </div>
      <div  className="mt-10 text-black flex gap-8 flex-grow flex-wrap justify-center items-center max-md:mx-4">
        {!popUpOpen ?
        sequenceInfoList.map((sequenceInfo, key) => {
          return (
            <div
              key={key}
              className="hover:scale-105 hover:cursor-pointer card card-compact text-black max-w-[450px] max-h-[450px] h-[450px] w-[450px] shadow-xl border-2 transition-all duration-150 ease-in-out "
              onClick={() => {
                setPopUpOpen(true);
                setPopUpType(sequenceInfo.document);
              }}
            >
              <figure className="mt-5 mb-1">
                <Image
                  className="w-full object-cover overflow-visible"
                  src={sequenceInfo.image}
                  alt="Shoes"
                  width={500}
                  height={500}
                />
              </figure>
              <div className="card-body align-middle items-center mb-1">
                <h2 className="card-title text-3xl">
                  {sequenceInfo.title}
                </h2>
              </div>
            </div>
          )
        })
      :
      <div className="flex flex-row justify-center flex-wrap w-full">
        <div className="p-4">
        <button class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-4xl px-8 py-5 me-2 
        mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 shadow-lg" onClick={() => {setPopUpOpen(false)}} >
          X
        </button>
        </div>
        <div className="card max-w-[1000px] max-h-[750px] h-[750px] w-[1000px] shadow-xl">
          {popUpType && <div>{popUpType}</div>}
        </div>
      </div>
      }
      </div>
      <div className="flex flex-col m-auto justify-center items-center">
        <div className="flex flex-col m-auto justify-center items-center w-full border-ucalgaryLightOrange border-4 rounded-full shadow-xl mt-12 mb-12 uclag">
          <h2 className="text-3xl font-bold text-black mb-5 mt-10 rad px-20">
            Need More Program Details?
          </h2>
          <Link
            className="btn bg-ucalgaryRed text-gray-100 border-none hover:bg-red-800 btn-circle btn-wide mb-10"
            href="https://calendar.ucalgary.ca/programs?departments=SC&page=1&pq="
          >
            Find More Details Here!
          </Link>
        </div>
      </div>
    </div>
  );
};

const TableOneDocument = () => {
  return <div className="bg-ucalgaryRed">weofjeowjfojweofjewo</div>
}

export default Page;
