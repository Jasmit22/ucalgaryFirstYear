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
      title: "Honours",
      image: "/delgado-honors-logo.jpg",
      document: <Honours />
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
      <div className="flex flex-row justify-center flex-wrap w-full mb-5">
        <div className="pr-2">
          <button class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-6xl px-11 py-20 me-2 
           dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 shadow-lg" onClick={() => {setPopUpOpen(false)}} >
            X
          </button>
        </div>
        <div className="card max-w-[1200px] max-h-[900px] h-[900px] w-[1200px] shadow-inner">
          <div className="p-5 overflow-y-scroll">
            {popUpType && <div>{popUpType}</div>}
          </div>
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
            href="https://calendar.ucalgary.ca/pages/6c62302fd2924d5e96f8801306dbd189"
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
  return (
    <div>
      <div>
        <h1 className="text-black">
          The Faculty of Science requires students to take at least 54 units - 18 courses -
          outside of their major. Of those 54, 18 units - 6 courses - must be from faculties outside the Faculty of Science.
        </h1>
        <br></br>
        <h1>
          The following courses in Table 1 below may NOT be used to satisfy the requirement of the 18 courses outside the
          Faculty of Science.
        </h1>
      </div>
      <figure className="mt-5 mb-1">
          <Image
            className="w-full object-cover overflow-visible"
            src="/table1.png"
            alt="table1"
            width={500}
            height={500}
          />
        </figure>
        <br></br>
        <br></br>
        <h1>
          For more information on Table 1, <Link href={"https://calendar.ucalgary.ca/pages/6c62302fd2924d5e96f8801306dbd189"} className=" btn bg-ucalgaryGold hover:bg-yellow-500 text-gray-100 border-none btn-circle w-32 mb-10">
            Click Me!
          </Link>
        </h1>
    </div>
  )
}

const Honours = () => {
  return (
    <div>
      <h1>
        An honours program is a way for a student to customize their education and offer a way to further dive into their area of study. 
        Honours programs require students to maintain a higher GPA and may require them to take additional courses or complete a supervised final project. 
        All programs in the Faculty of Science offer an honours program. Honours programs are an excellent way to attain in-depth learning and may even lead to 
        real-life experience.
      </h1>
      <br></br>
      <h1>
        When a student graduates in a honours program, they will have an honours designation noted on their degree. 
      </h1>
      <br></br>
      <h1>
        The requirements for honours programs are the same as major programs, with a few changes. To see the major degree programs, go to
        Faculty Requirements.
      </h1>
      <br></br>
      <br></br>
      <br></br>
      <h1>Additional Requirements for Honours</h1>
      <br></br>
      <br></br>
      <ul className="list-inside list-decimal mb-6">
        <li className="mb-16">
          <h1>
            Honours programs require students to maintain a higher GPA. Every year, academic performance is reviewed for all honours students and these students must
            maintain a minimum GPA of 3.30 over all courses completed. A minimum GPA of 3.30 is also required over the last 90 units - 30 courses - at the time of graduation. 
          </h1>
        </li>
        <li className="mb-16">
          <h1>
            It is required that the program must contain 54 units - 18 courses - and no more than 78 units - 26 courses - in the major field.
          </h1>
        </li>
        <li>
          <h1>
            Students in a honours program must complete the requirements outlined the specific honours program details.
          </h1>
          <br></br>
          <h1>
            To find 
            these specific requirements, <Link href={"https://calendar.ucalgary.ca/programs?departments=SC&page=1&pq="}
            className=" btn bg-ucalgaryLightOrange hover:bg-yellow-500 text-gray-100 border-none btn-circle w-32 mb-10" >Click Here!</Link>
          </h1>
        </li>
      </ul>
      <h1>
        If a student fails to meet any of these requirements including the specific program requirements of the honours program
        they are doing, they will not be rewarded for their honours program at the time of graduation. However, it is important to note
        that if the student meets the non-honours BSc Major Requirements instead, they will be automatically rewarded the BSc Major.
      </h1>
      <br></br>
      <br></br>
      <br></br>
      <h1>
        To learn more about Honours programs, <Link href={"https://ucalgary.ca/news/understanding-honours-options-faculty-science"}
        className=" btn bg-ucalgaryLightOrange hover:bg-yellow-500 text-gray-100 border-none btn-circle w-32 mb-10" >Click Here!</Link>
      </h1>
    </div>
  )
}

const ProgramMaximums = () => {
  return (
    <div>
      <h1 className="text-black">
        The Faculty of Science enforces a few maximums on student programs. It is important to understand and know of these
        maximums as they can impact a students program sequence, and even increase the number of years required before graduation
        if not taken into account.
      </h1>
      <br></br>
      <br></br>
      <br></br>
      <ul className="list-decimal list-inside">
        <li className="mb-20">
          <h1>
          Junior courses in the University of Calgary are 200 level courses. These courses are intended to be taken in first year, but
          may be taken at any point during the students program.
          </h1>
          <br></br>
          <h1>
            The Faculty of Science LIMITS the number of junior courses in a student's program to 48 units - 16 courses. You may only take 16 courses
            at the 200 level. 
          </h1>
        </li>
        <li className="mb-20">
          <h1>
            The Faculty of Science restricts the number of 'D' or 'D+' grades acceptable in a student's program to be no more than 18 units
            - 6 courses. Also, no more than 6 units - 2 courses - with a 'D' or 'D+' grade is acceptable in the major field.
          </h1>
          <br></br>
          <h1>
            A minimum of a 'C+' grade is required within prerequisite courses to be able to advance into future courses. For example, a 'C+' grade
            is required in CPSC 231 to be able to take CPSC 233, each of which is required to graduate in Computer Science. 
          </h1>
          <br></br>
          <h1>
            So, ensure that a minimum 'C+' grade is attained in all prerequisite courses, especially in major field courses. 
          </h1>
          <br></br>
          <h1>
            For specific information on a course, <Link href={"https://calendar.ucalgary.ca/courses?page=1&cq"} className=" btn bg-ucalgaryLightOrange hover:bg-yellow-500 text-gray-100 border-none btn-circle w-32 mb-10">
            Click Me!
            </Link>
          </h1>
        </li>
        <li className="mb-20">
          <h1>
            The Faculty of Science restricts the amount of transfer credits that a student can use for their program. A maximum of 60 units - 20 courses - of transfer credit may be counted
            toward the degree. No more than 24 units - 8 courses - of transfer credit may be used for the major field.
          </h1>
          <br></br>
          <h1>
            The faculty has declared a minimum of 60 units - 20 courses - must be completed at the University of Calgary. 
          </h1>
          <br></br>
          <h1>
            To learn more about transfer credit, including high school advanced credit, <Link href={"https://ucalgary.ca/future-students/undergraduate/transfer-credit"} className=" btn bg-ucalgaryLightOrange hover:bg-yellow-500 text-gray-100 border-none btn-circle w-32 mb-10">
            Click Me!
            </Link>
          </h1>
        </li>
        <li>
          <h1>
            Students in the Faculty of Science are allowed 5 years counted from the time of entry into their program to complete all program requirements and graduate. Students within Internship Programs
            or Co-opoerative Education have 6 years counted from the time of entry into the program to complete all program requirements and graduate.
          </h1>
          <br></br>
          <h1>
            If a student exceeds this 5-year limit for any reason, including failing prerequisite classes or taking a break, they must consult with the Head of the Department or Program Director who will decide on a set
            of course requirements for the proposed date of graduation. 
          </h1>
        </li>
      </ul>
  </div>
)
}

export default Page;
