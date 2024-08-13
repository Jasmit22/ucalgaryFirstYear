"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Page = () => {

  const sequenceInfoList = [
    {
      title: "Faculty Requirements",
      image: "/product-requirements.jpg",
      document: <FacultyRequirementsDocument />    
    },
    {
      title: "Concentrations",
      image: "/Degree-Completion-Program.jpg",
      document: <Concentrations />
    },
    {
      title: "Table 1 Courses",
      image: "/document-table.svg",
      document: <TableOneCourses />
    },
    {
      title: "Honors",
      image: "/delgado-honors-logo.jpg",
      document: <Honors />
    },
    {
      title: "Program Maximums",
      image: "/maximum.jpg",
      document: <ProgramMaximums />  
    }
  ]

  const [popUpOpen, setPopUpOpen] = useState(false);
  const [popUpType, setPopUpType] = useState(null);

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
      <div  className="mt-10 mb-10 text-black flex gap-8 flex-grow flex-wrap justify-center items-center max-md:mx-4">
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
                  alt="sequenceInfo"
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
        <button class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-6xl px-8 py-5 me-2 
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

const FacultyRequirementsDocument = () => {
  return <div className="bg-ucalgaryRed">weofjeowjfojweofjewo</div>
}

const Concentrations = () => {
  return <div className="bg-ucalgaryGold">weofjeowjfojweofjewo</div>
}

const TableOneCourses = () => {
  return <div className="bg-ucalgaryDarkOrange">weofjeowjfojweofjewo</div>
}

const Honors = () => {
  return <div className="bg-ucalgaryLightOrange">weofjeowjfojweofjewo</div>
}

const ProgramMaximums = () => {
  return <div className="bg-ucalgaryLightGrey">weofjeowjfojweofjewo</div>
}

export default Page;
