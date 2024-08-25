/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faLayerGroup,
  faTable,
  faGraduationCap,
  faChartBar,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Page = () => {
  const sequenceInfoList = [
    {
      title: "Faculty Requirements",
      icon: faBookOpen,
      document: <FacultyRequirementsDocument />,
    },
    {
      title: "Concentrations",
      icon: faLayerGroup,
      document: <Concentrations />,
    },
    {
      title: "Courses Table",
      icon: faTable,
      document: <TableOneCourses />,
    },
    {
      title: "Honours",
      icon: faGraduationCap,
      document: <Honours />,
    },
    {
      title: "Program Maximums",
      icon: faChartBar,
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
        className="flex flex-col m-auto justify-center items-center max-md:px-10"
      >
        <div
          className="bg-yellow-200 text-yellow-800 p-4 rounded-md flex items-center justify-center mb-5 mt-24"
          role="alert"
        >
          <FontAwesomeIcon icon={faExclamationTriangle} className="mr-2" />
          <span>
            This information pertains mainly to the Faculty of Science, however,
            there is reference to other faculties and lots of the information
            should be applicable elsewhere.
          </span>
        </div>
        <div className="flex flex-col m-auto justify-center items-center w-full border-ucalgaryRed border-2 rounded-full max-md:rounded-3xl shadow-xl lg:mb-8">
          <h2 className="text-lg md:text-xl lg:text-3xl font-bold text-black mb-5 mt-10 rad">
            Recommended Course Guides
          </h2>
          <p className="text-md lg:text-lg text-black mb-5 px-20 max-md:px-10">
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
      <div className="mt-10 mb-10 text-black flex gap-8 px-20 max-md:px-10 flex-grow flex-wrap justify-center items-center max-md:mx-4">
        {!popUpOpen ? (
          sequenceInfoList.map((sequenceInfo, key) => {
            return (
              <div
                key={key}
                className="hover:scale-105 hover:cursor-pointer card card-compact text-black max-w-[450px] max-h-[450px] h-[400px] w-[400px] shadow-xl border-2 transition-all duration-150 ease-in-out"
                onClick={() => {
                  setPopUpOpen(true);
                  setPopUpType(sequenceInfo.document);
                }}
              >
                <figure className="flex justify-center items-center h-full">
                  <FontAwesomeIcon
                    icon={sequenceInfo.icon}
                    className="text-[7rem] text-ucalgaryRed"
                  />
                </figure>
                <div className="card-body align-middle items-center mb-1">
                  <h2 className="card-title text-3xl mt-2">
                    {sequenceInfo.title}
                  </h2>
                </div>
              </div>
            );
          })
        ) : (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="relative bg-white w-full max-w-4xl mx-auto rounded-lg shadow-lg overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <button
                  className="text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded-full p-2 shadow-lg z-50"
                  onClick={() => setPopUpOpen(false)}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="p-8 pr-12 overflow-y-auto max-h-[80vh]">
                {popUpType && (
                  <div className="prose max-w-none">{popUpType}</div>
                )}
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
    <div className="space-y-8">
      <h1 className="font-bold">
        The Faculty of Science has provided numerous degree requirements a
        student must fulfill to graduate.
      </h1>
      <p>
        The following requirements are MAJOR DEGREE REQUIREMENTS. To find second
        degree requirements, click the following link, find the program you are
        looking to get a second degree for, and view the second degree
        requirements under Faculty Requirements.
      </p>
      <div className="flex justify-center">
        <Link
          href={"https://calendar.ucalgary.ca/programs?page=1&pq="}
          className="btn bg-ucalgaryRed hover:bg-orange-500 text-gray-100 border-none px-8"
        >
          View Second Degree Requirements
        </Link>
      </div>

      <h1 className="font-bold">
        Students in science programs must present an approved list of courses
        completed with passing grades to graduate.
      </h1>
      <p>These lists can be found in their program details.</p>

      <h1 className="text-center text-lg font-bold">
        The student's program must satisfy the following conditions:
      </h1>
      <ul className="list-inside list-decimal space-y-6">
        <li>
          The student's program must contain at least 120 units (40 courses),
          with a maximum of 48 units (16 courses) at the 200 level.
        </li>
        <li>
          The program must contain at least 48 units in a science field, but the
          maximum allowable course limits are specified in program details for
          each degree. Only 6 units (2 courses) in the major field may have a
          "D" or "D+".
        </li>
        <li>
          The GPA calculated at the end of the program must be at least 2.00,
          and the GPA for courses in the major field must also be at least 2.00.
          The program may not contain more than 18 units (6 courses) with a "D"
          or "D+" grade.
        </li>
        <li>
          There is a breadth requirement in the Faculty of Science. The program
          must contain at least 54 units (18 courses) from outside the major
          field. Of these 18, 18 units (6 courses) must be courses from
          faculties outside of the Faculty of Science. There must be at least 6
          units (2 courses) from the Faculty of Arts. 18 units (6 courses) from
          other faculties must not be from the courses listed in the Courses
          Table. To view the Courses Table, go to our Courses Table section.
        </li>
        <li>
          The program must include the specified courses listed in the Program
          Details for the program that the student wants to do.
        </li>
        <li>
          No more than 60 units (20 courses) done in other institutions are
          acceptable for transfer credits, with a maximum of 24 units (8
          courses) done in other institutions may be counted toward the major
          field.
        </li>
        <li>
          No credit will be granted for Physical Activity courses such as Dance
          Education, Outdoor Pursuits, and Physical Education.
        </li>
      </ul>
      <div className="flex justify-center">
        <Link
          href={
            "https://calendar.ucalgary.ca/pages/6c62302fd2924d5e96f8801306dbd189"
          }
          className="btn bg-ucalgaryRed hover:bg-ucalgaryDarkOrange text-gray-100 border-none px-8"
        >
          View More on Faculty Regulations
        </Link>
      </div>
    </div>
  );
};

const Concentrations = () => {
  return (
    <div className="space-y-8">
      <h1 className="font-bold">
        Concentrations are a specific track of courses within a major.
      </h1>
      <p>
        Students opting for a concentration will need to take specific courses
        in an order which encompass the area within a major that they wish to
        specialize in.
      </p>
      <h1>
        When a student completes a concentration, they will still receive the
        same BSc/BSc Honours degree as any other student in the major, but they
        shall have a concentration denotion on their transcript.
      </h1>
      <p>
        Concentrations can be very useful for students when they are seeking
        in-depth learning on one part of their major. However, it is not a
        requirement to do a concentration and students can still opt for a
        general learning in their major.
      </p>
      <h1 className="font-bold">
        The Faculty of Science offers concentrations for many of its programs
        and also offers program guides for these concentrations.
      </h1>
      <div className="flex justify-center">
        <Link
          href={
            "https://science.ucalgary.ca/current-students/undergraduate/program-advising/program-guides"
          }
          className="btn bg-ucalgaryRed hover:bg-orange-500 text-gray-100 border-none px-8"
        >
          View Concentration Guides
        </Link>
      </div>

      <div className="flex flex-col items-center">
        <p>
          For the link below, find your program and scroll to the concentrations
          tab if available.
        </p>
        <Link
          href="https://calendar.ucalgary.ca/programs?departments=SC&page=1&pq="
          className="btn bg-ucalgaryRed hover:bg-ucalgaryDarkOrange text-gray-100 border-none px-8 mt-4"
        >
          View More On Concentrations
        </Link>
      </div>
    </div>
  );
};

const TableOneCourses = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-black font-bold">
        The Faculty of Science requires students to take at least 54 units (18
        courses) outside of their major.
      </h1>
      <p>
        Of those 54, 18 units (6 courses) must be from faculties outside the
        Faculty of Science. The following courses in our Courses Table below may
        not be used to satisfy the requirement of the 18 courses outside the
        Faculty of Science.
      </p>
      <figure className="mt-5">
        <Image
          className="w-full object-cover"
          src="/tableImage.PNG"
          alt="table1"
          width={1000}
          height={1000}
        />
      </figure>
      <div className="flex justify-center">
        <Link
          href={
            "https://calendar.ucalgary.ca/pages/6c62302fd2924d5e96f8801306dbd189"
          }
          className="btn bg-ucalgaryRed hover:bg-ucalgaryDarkOrange text-gray-100 border-none px-8"
        >
          View More on Courses Table
        </Link>
      </div>
    </div>
  );
};

const Honours = () => {
  return (
    <div className="space-y-8">
      <h1 className="font-bold">
        An honours program is a way for a student to customize their education
        and offer a way to further dive into their area of study.
      </h1>
      <p>
        Honours programs require students to maintain a higher GPA and may
        require them to take additional courses or complete a supervised final
        project. All programs in the Faculty of Science offer an honours
        program. Honours programs are an excellent way to attain in-depth
        learning and may even lead to real-life experience.
      </p>
      <h1>
        When a student graduates in an honours program, they will have an
        honours designation noted on their degree.
      </h1>
      <h1 className="font-bold text-lg text-center">
        Additional Requirements for Honours
      </h1>
      <ul className="list-inside list-decimal space-y-6">
        <li>
          Honours programs require students to maintain a higher GPA. Every
          year, academic performance is reviewed for all honours students and
          these students must maintain a minimum GPA of 3.30 over all courses
          completed. A minimum GPA of 3.30 is also required over the last 90
          units (30 courses) at the time of graduation.
        </li>
        <li>
          It is required that the program must contain 54 units (18 courses) and
          no more than 78 units (26 courses) in the major field.
        </li>
        <li>
          Students in an honours program must complete the requirements outlined
          in the specific honours program details.
          <div className="flex justify-center">
            <Link
              href={
                "https://calendar.ucalgary.ca/programs?departments=SC&page=1&pq="
              }
              className="btn bg-ucalgaryRed hover:bg-ucalgaryDarkOrange text-gray-100 border-none px-8"
            >
              View Specific Program Requirements
            </Link>
          </div>
        </li>
      </ul>
      <p>
        If a student fails to meet any of these requirements including the
        specific program requirements of the honours program they are doing,
        they will not be rewarded for their honours program at the time of
        graduation. However, it is important to note that if the student meets
        the non-honours BSc Major Requirements instead, they will be
        automatically rewarded the BSc Major.
      </p>
      <div className="flex justify-center">
        <Link
          href={
            "https://ucalgary.ca/news/understanding-honours-options-faculty-science"
          }
          className="btn bg-ucalgaryRed hover:bg-ucalgaryDarkOrange text-gray-100 border-none px-8"
        >
          View More About Honours Programs
        </Link>
      </div>
    </div>
  );
};

const ProgramMaximums = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-black font-bold">
        The Faculty of Science enforces a few maximums on student programs.
      </h1>
      <p>
        It is important to understand and know of these maximums as they can
        impact a student’s program sequence, and even increase the number of
        years required before graduation if not taken into account.
      </p>
      <ul className="list-decimal list-inside space-y-6">
        <li>
          The Faculty of Science limits the number of junior courses in a
          student's program to 48 units (16 courses). You may only take 16
          courses at the 200 level. Junior courses in the University of Calgary
          are 200 level courses. These courses are intended to be taken in first
          year, but may be taken at any point during the student’s program.
        </li>
        <li>
          The Faculty of Science restricts the number of "D" or "D+" grades
          acceptable in a student's program to be no more than 18 units (6
          courses). Also, no more than 6 units (2 courses) with a "D" or "D+"
          grade is acceptable in the major field. A minimum of a "C+" grade is
          required within prerequisite courses to be able to advance into future
          courses. For example, a "C+" grade is required in CPSC 231 to be able
          to take CPSC 233, each of which is required to graduate in Computer
          Science. So, ensure that a minimum "C+" grade is attained in all
          prerequisite courses, especially in major field courses.
        </li>
        <li>
          The Faculty of Science restricts the amount of transfer credits that a
          student can use for their program. A maximum of 60 units (20 courses)
          of transfer credit may be counted toward the degree. No more than 24
          units (8 courses) of transfer credit may be used for the major field.
          The faculty has declared a minimum of 60 units (20 courses) must be
          completed at the University of Calgary.
        </li>
        <li>
          Students in the Faculty of Science are allowed 5 years counted from
          the time of entry into their program to complete all program
          requirements and graduate. Students within Internship Programs or
          Co-operative Education have 6 years counted from the time of entry
          into the program to complete all program requirements and graduate. If
          a student exceeds this 5-year limit for any reason, including failing
          prerequisite classes or taking a break, they must consult with the
          Head of the Department or Program Director who will decide on a set of
          course requirements for the proposed date of graduation.
        </li>
      </ul>
    </div>
  );
};

export default Page;
