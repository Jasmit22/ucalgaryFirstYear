/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Page = () => {
  const sequenceInfoList = [
    {
      title: "Faculty Requirements",
      image: "/facultyrequirements.webp",
      document: <FacultyRequirementsDocument />,
    },
    {
      title: "Concentrations",
      image: "/concentrations.webp",
      document: <Concentrations />,
    },
    {
      title: "Table 1 Courses",
      image: "/table1.webp",
      document: <TableOneCourses />,
    },
    {
      title: "Honours",
      image: "/honours.webp",
      document: <Honours />,
    },
    {
      title: "Program Maximums",
      image: "/maximum.webp",
      document: <ProgramMaximums />,
    },
  ];

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
        <div className="flex flex-col m-auto justify-center items-center w-full border-ucalgaryGold border-2 rounded-full shadow-xl mt-24 lg:mb-8">
          <h2 className="text-lg md:text-xl lg:text-3xl font-bold text-black mb-5 mt-10 rad">
            Recommended Course Guides
          </h2>
          <p className="text-md lg:text-lg text-black mb-5 px-20">
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
      <div className="mt-10 mb-10 text-black flex gap-8 flex-grow flex-wrap justify-center items-center max-md:mx-4">
        {!popUpOpen ? (
          sequenceInfoList.map((sequenceInfo, key) => {
            return (
              <div
                key={key}
                className="hover:scale-105 hover:cursor-pointer card card-compact text-black max-w-[450px] max-h-[450px] h-[400px] w-[400px] shadow-xl border-2 transition-all duration-150 ease-in-out "
                onClick={() => {
                  setPopUpOpen(true);
                  setPopUpType(sequenceInfo.document);
                }}
              >
                <figure>
                  <Image
                    className="object-contain"
                    src={sequenceInfo.image}
                    alt="sequenceInfo"
                    width={1000}
                    height={1000}
                  />
                </figure>
                <div className="card-body align-middle items-center mb-1">
                  <h2 className="card-title text-3xl mt-2">{sequenceInfo.title}</h2>
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex flex-row justify-center flex-wrap w-full">
            <div className="pr-2">
              <button
                class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg mb-6 lg:mb-0 text-4xl px-11 py-6 me-2 
              dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 shadow-2xl"
                onClick={() => {
                  setPopUpOpen(false);
                }}
              >
                X
              </button>
            </div>
            <div className="card max-w-[1200px] max-h-[900px] w-[1200px] shadow-inner">
              <div className="p-5 overflow-y-scroll">
                {popUpType && <div>{popUpType}</div>}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col m-auto justify-center items-center md:w-3/5">
        <div className="flex flex-col m-auto justify-center items-center w-full border-ucalgaryLightOrange border-4 rounded-full shadow-xl lg:mt-12 mb-12">
          <h2 className="text-lg md:text-xl lg:text-3xl font-bold text-black mb-5 mt-10 rad px-20">
            Need More Details?
          </h2>
          <Link
            className="btn bg-ucalgaryRed text-gray-100 border-none hover:bg-red-800 btn-circle btn-wide mb-10"
            href="https://calendar.ucalgary.ca/"
          >
            Find More Details Here!
          </Link>
        </div>
      </div>
    </div>
  );
};

const FacultyRequirementsDocument = () => {
  return (
    <div>
      <h1>
        The Faculty of Science has provided numerous degree requirements a
        student must fulfill to graduate.
        <br />
        <br />
        <span className="font-bold">The following requirements are MAJOR DEGREE REQUIREMENTS.</span> To find second
        degree requirements, click the following link, find the program you are
        looking to get a second degree for, and view the second degree
        requirements under Faculty Requirements.
        <br />
        <br />
        <div className="flex flex-col items-center mt-4">
          <Link
            href={"https://calendar.ucalgary.ca/programs?page=1&pq="}
            className="btn bg-ucalgaryRed hover:bg-orange-500 text-gray-100 border-none btn-circle w-2/5 mb-5"
          >
            View Second Degree Requirements
          </Link>
        </div>
      </h1>
      <br />
      <br />
      <h1>
        Students in science programs must present an approved list of courses
        completed with passing grades to graduate. These lists can be found in
        their program details. 
      </h1>
        <br />
        <br />
      <h1 className="text-center text-lg font-bold">
        The student's program must satisfy the
        following conditions:
      </h1>
      <ul className="list-inside list-decimal mt-10">
        <li className="mb-10">
        The student's program must contain <span className="font-bold"> at least 120 units - 40 courses -
        </span> with a maximum of <span className="font-bold">48 units - 16 courses - at the 200 level.</span>
        </li>
        <li className="mb-10">
          The program must contain <span className="font-bold">at least 48 units in a science field</span>, but the
          maximum allowable course limits are specified in program details for
          each degree. Only 6 units - 2 courses - in the major field may have a "D" or "D+".
        </li>
        <li className="mb-10">
          The <span className="font-bold">GPA</span> calculated at the end of the program must be <span className="font-bold">at least 2.00</span>,
          and the GPA for courses in the major field must also be at least 2.00.
          The program may not contain more than 18 units - 6 courses - with a
          "D" or "D+" grade.
        </li>
        <li className="mb-10">
          There is a breadth requirement in the Faculty of Science. The program
          must contain 
          <span className="font-bold"> at least 54 units - 18 courses - from outside the major
          field.</span> Of these 18, <span className="font-bold">18 units - 6 courses - must be courses from
          faculties outside of the Faculty of Science.</span> There must be at least 6
          units - 2 courses - from the Faculty of Arts.
          <br />
          <br />
          18 units - 6 courses - from other faculties must not be from the courses listed in
          Table 1. To view Table 1, go to our Table 1 section.
        </li>
        <li className="mb-10">
          Program must include the <span className="font-bold">specified courses listed in the Program
          Details</span> for the program that the student wants to do.
        </li>
        <li className="mb-10">
          <span className="font-bold">No more than 60 units - 20 courses - done in other institutions</span> are
          acceptable for transfer credits, with a maximum of 24 units - 8
          courses - done in other institutions may be counted toward the major
          field.
        </li>
        <li className="mb-10">
          <span className="font-bold">No credit will be granted for Physical Activity courses</span> such as Dance
          Education, Outdoor Pursuits, and Physical Education.
        </li>
      </ul>
      <div className="flex flex-col items-center">
        <Link
          href={
            "https://calendar.ucalgary.ca/pages/6c62302fd2924d5e96f8801306dbd189"
          }
          className="btn bg-ucalgaryDarkOrange hover:bg-yellow-500 text-gray-100 border-none btn-circle w-2/5 mb-5"
        >
          View More Information on Faculty Regulations
        </Link>
      </div>
    </div>
  );
};

const Concentrations = () => {
  return (
    <div>
      <h1>
        Concentrations are a specific track of courses within a major. Students
        opting for a concentration will need to take specific courses in an
        order which encompass the area within a major that they wish to
        specialize in.
      </h1>
      <br></br>
      <h1>
        When a student completes a concentration, they will still <span className="font-bold">receive the
        same BSc/BSc Honours degree as any other student in the major</span>, but they
        shall have a <span className="font-bold">concentration denotion on their transcript.</span>
      </h1>
      <br></br>
      <h1>
        Concentrations can be very useful for students when they are seeking
        indepth learning on one part of their major. However, it is not a
        requirement to do a concentration and students can still opt for a
        general learning in their major.
      </h1>
      <br />
      <h1>
        The Faculty of Science offers concentrations for many of its programs
        and also offers program guides for these concentrations.
      </h1>
      <div className="flex flex-col items-center mt-10">
        <Link
            href={
              "https://science.ucalgary.ca/current-students/undergraduate/program-advising/program-guides"
            }
            className="btn bg-ucalgaryRed hover:bg-orange-500 text-gray-100 border-none btn-circle w-2/5 mb-5"
        >
            View Concentration Guides
        </Link>
      </div>
      <br />
      <div className="flex flex-col items-center mb-5">
        <Link
          href="https://calendar.ucalgary.ca/programs?departments=SC&page=1&pq="
          className="btn bg-ucalgaryDarkOrange hover:bg-yellow-500 text-gray-100 border-none btn-circle w-3/5"
        >
          View Further Information On Concentrations
        </Link>
        <br /> <br />
        For the link above, find your program and scroll to the concentrations
        tab if available.
      </div>
    </div>
  );
};

const TableOneCourses = () => {
  return (
    <div>
      <div>
        <h1 className="text-black mb-7">
          The Faculty of Science requires students to <span className="font-bold">take at least 54 units -
          18 courses - outside of their major.</span> Of those 54, 18 units - 6 courses
          - must be from faculties outside the Faculty of Science.
        </h1>
        <h1 className="mb-7">
          The following courses in Table 1 below may <span className="font-bold">NOT</span> be used to satisfy the
          requirement of the 18 courses outside the Faculty of Science.
        </h1>
      </div>
      <figure className="mt-5 mb-14">
        <Image
          className="w-full object-cover overflow-visible"
          src="/tableImage.PNG"
          alt="table1"
          width={1000}
          height={1000}
        />
      </figure>
      <div className="w-full flex flex-col items-center">
        <Link
          href={
            "https://calendar.ucalgary.ca/pages/6c62302fd2924d5e96f8801306dbd189"
          }
          className=" btn bg-ucalgaryGold hover:bg-yellow-500 text-gray-100 border-none btn-circle w-2/5 mb-2 "
        >
          View More Information on Table 1
        </Link>
      </div>
    </div>
  );
};

const Honours = () => {
  return (
    <div>
      <h1>
        An honours program is a way for a student to customize their education
        and offer a way to further dive into their area of study. Honours
        programs require students to maintain a higher GPA and may require them
        to take additional courses or complete a supervised final project. All
        programs in the Faculty of Science offer an honours program. Honours
        programs are an excellent way to attain in-depth learning and may even
        lead to real-life experience.
      </h1>
      <br></br>
      <h1>
        When a student graduates in a honours program, <span className="font-bold">they will have an honours
        designation noted on their degree.</span>
      </h1>
      <br></br>
      <h1 className="mb-20">
        The requirements for honours programs are the same as major programs,
        with a few changes. To see the major degree programs, go to Faculty
        Requirements.
      </h1>
      <h1 className="font-bold text-lg text-center mb-8">Additional Requirements for Honours</h1>
      <ul className="list-inside list-decimal mb-5">
        <li className="mb-16">
            Honours programs require students to maintain a higher GPA. Every
            year, academic performance is reviewed for all honours students and
            these students<span className="font-bold"> must maintain a minimum GPA of 3.30 over all courses
            completed.</span> A minimum GPA of 3.30 is also required over the last 90
            units - 30 courses - at the time of graduation.
        </li>
        <li className="mb-16">
            It is required that the program <span className="font-bold">must contain 54 units - 18 courses -</span> and no more than 78 units - 26 courses - in the major field.
        </li>
        <li>
            Students in a honours program must complete the requirements
            outlined the specific honours program details.
          <div className="flex flex-col items-center mt-8">
            <Link
              href={
                "https://calendar.ucalgary.ca/programs?departments=SC&page=1&pq="
              }
              className=" btn bg-ucalgaryGold hover:bg-yellow-500 text-gray-100 border-none btn-circle w-2/5 mb-10"
            >
              View Specific Program Requirements
            </Link>
          </div>
        </li>
      </ul>
      <h1>
        If a student fails to meet any of these requirements including the
        specific program requirements of the honours program they are doing,
        they will not be rewarded for their honours program at the time of
        graduation. However, it is important to note that if the student meets
        the non-honours BSc Major Requirements instead, they will be
        automatically rewarded the BSc Major.
      </h1>
      <div className="flex flex-col items-center mt-8">
        <Link
          href={
            "https://ucalgary.ca/news/understanding-honours-options-faculty-science"
          }
          className=" btn bg-ucalgaryLightOrange hover:bg-yellow-500 text-gray-100 border-none btn-circle w-2/5 mb-5"
        >
          View More About Honours Programs
        </Link>
      </div>
    </div>
  );
};

const ProgramMaximums = () => {
  return (
    <div>
      <h1 className="text-black mb-20">
        The Faculty of Science enforces a few maximums on student programs. It
        is important to understand and know of these maximums as they can impact
        a students program sequence, and even increase the number of years
        required before graduation if not taken into account.
      </h1>
      <ul className="list-decimal list-inside">
        <li className="mb-20">
            The Faculty of Science LIMITS the number of junior courses in a
            student's program to 48 units - 16 courses. <span className="font-bold">
              You may only take 16 courses at the 200 level.
            </span>
            <br />
            <br />
            Junior courses in the University of Calgary are 200 level courses.
            These courses are intended to be taken in first year, but may be
            taken at any point during the students program.
        </li>
        <li className="mb-20">
            The Faculty of Science restricts the number of <span className="font-bold">
              "D" or "D+ grades
            </span> acceptable in a student's program to be <span className="font-bold">no more than 18 units - 6
            courses. </span>
          <br></br>
          <br />
          <h1>
            Also, no more than 6 units - 2 courses - with a 'D' or 'D+'
            grade is acceptable in the major field.
          </h1>
          <br />
          <h1>
            A minimum of a 'C+' grade is required within prerequisite courses to
            be able to advance into future courses. For example, a 'C+' grade is
            required in CPSC 231 to be able to take CPSC 233, each of which is
            required to graduate in Computer Science.
          </h1>
          <br></br>
          <h1>
            So, ensure that a minimum 'C+' grade is attained in all prerequisite
            courses, especially in major field courses.
          </h1>
          <br></br>
          <div className="flex flex-col items-center">
            <Link
              href={"https://calendar.ucalgary.ca/courses?page=1&cq"}
              className=" btn bg-ucalgaryLightOrange hover:bg-yellow-500 text-gray-100 border-none btn-circle w-2/5 mt-7"
            >
              View Course Information
            </Link>
          </div>
        </li>
        <li className="mb-20">
            The Faculty of Science restricts the amount of transfer credits that
            a student can use for their program.
            <br />
            <br /> 
            <span className="font-bold">A maximum of 60 units - 20 courses - of transfer credit may be counted toward the degree. </span>
            <br />
            <br />
            No more than 24 units - 8 courses - of transfer credit may be used for
            the major field.
            <br />
          <br></br>
          <h1>
            The faculty has declared a minimum of 60 units - 20 courses - must
            be completed at the University of Calgary.
          </h1>
          <br></br>
          <div className="flex flex-col items-center mt-6">
            <Link
              href={
                "https://ucalgary.ca/future-students/undergraduate/transfer-credit"
              }
              className=" btn bg-ucalgaryDarkOrange hover:bg-yellow-500 text-gray-100 border-none btn-circle w-2/5"
            >
              View Information on Transfer Credit
            </Link>
          </div>
        </li>
        <li className="mb-5">
            Students in the Faculty of Science are allowed <span className="font-bold">5 years counted from
            the time of entry into their program to complete all program
            requirements and graduate</span>. Students within <span className="font-bold">Internship Programs or
            Co-opoerative Education have 6 years </span>counted from the time of entry
            into the program to complete all program requirements and graduate.
          <br></br>
          <br />
          <h1>
            If a student exceeds this 5-year limit for any reason, including
            failing prerequisite classes or taking a break, they must consult
            with the Head of the Department or Program Director who will decide
            on a set of course requirements for the proposed date of graduation.
          </h1>
        </li>
      </ul>
    </div>
  );
};

export default Page;
