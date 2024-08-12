"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function ScheduleTipsPage() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="flex flex-col gap-5 mb-10">
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: "url(/schedule-tips/hero.jpeg)" }}
      >
        <div className="hero-overlay bg-opacity-70 backdrop-blur-sm"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold tracking-tight text-white">
              &ldquo;Do I Have a Good Schedule?&rdquo;
            </h1>
            <p className="mb-5">
              This is one of the most common questions among students. Here are
              some tips to help you create a balanced and effective study
              schedule.
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
        className="py-28 text-black flex gap-8 flex-grow flex-wrap justify-center items-center max-md:mx-4 px-10"
      >
        <div className="w-full max-w-7xl mx-auto">
          {/* Existing Sections */}
          <div className="accordion-item">
            <div
              className="flex justify-between items-center cursor-pointer bg-gray-200 p-4 rounded"
              onClick={() => toggleSection("section1")}
            >
              <h1 className="text-2xl font-semibold">
                What time is too early for my first class?
              </h1>
              <FontAwesomeIcon
                icon={openSection === "section1" ? faChevronUp : faChevronDown}
              />
            </div>
            <div
              className={`accordion-content transition-max-height duration-500 ease-in-out overflow-hidden ${
                openSection === "section1"
                  ? "max-h-screen py-4"
                  : "max-h-0 py-0"
              }`}
            >
              <p className="text-base">
                A good rule of thumb is to think of the earliest time you would
                be willing to go to school, and then add an hour. You get more
                worn out as the semester goes on, so it&apos;s important to plan
                ahead and ensure you aren&apos;t setting yourself up to skip
                classes.
              </p>
              <p className="text-base mb-10">
                Just about everyone agrees that 8:00 AM classes are not a good
                idea, but if you are strictly a morning person, go right ahead.
              </p>
              <Image
                alt="Schedule Builder Tip"
                src="/schedule-tips/scheduleBuilder1.png"
                width={1000}
                height={500}
              />
              <p className="text-base">
                Remember you can block out certain times and sort by time in
                schedule builder.
              </p>
            </div>
          </div>

          <div className="accordion-item mt-5">
            <div
              className="flex justify-between items-center cursor-pointer bg-gray-200 p-4 rounded"
              onClick={() => toggleSection("section2")}
            >
              <h1 className="text-2xl font-semibold">
                Is my schedule manageable?
              </h1>
              <FontAwesomeIcon
                icon={openSection === "section2" ? faChevronUp : faChevronDown}
              />
            </div>
            <div
              className={`accordion-content transition-max-height duration-500 ease-in-out overflow-hidden ${
                openSection === "section2"
                  ? "max-h-screen py-4"
                  : "max-h-0 py-0"
              }`}
            >
              <p className="text-base">
                This depends more on you and your degree. Generally, 5 classes
                is manageable if you don&apos;t have other commitments such as a
                big role in a club, a part-time job, or athletics.
              </p>
              <p className="text-base">
                Some people find there is a big difference between 4 classes and
                5 classes. 4 classes are typically seen as more manageable.
                However, don&apos;t be afraid to take 5. Just be sure to plan
                ahead.
              </p>
            </div>
          </div>

          <div className="accordion-item mt-5">
            <div
              className="flex justify-between items-center cursor-pointer bg-gray-200 p-4 rounded"
              onClick={() => toggleSection("section3")}
            >
              <h1 className="text-2xl font-semibold">
                Can I make it to my next class?
              </h1>
              <FontAwesomeIcon
                icon={openSection === "section3" ? faChevronUp : faChevronDown}
              />
            </div>
            <div
              className={`accordion-content transition-max-height duration-500 ease-in-out overflow-hidden ${
                openSection === "section3"
                  ? "max-h-screen py-4"
                  : "max-h-0 py-0"
              }`}
            >
              <p className="text-base">
                If the schedule builder gives you a warning, it&apos;s probably
                a good idea to listen. However, if it doesn&apos;t, you should
                be fine. Be aware that classes are packed on the first few days
                of the semester, so it may take longer to get to your next
                class.
              </p>
            </div>
          </div>

          {/* New Sections */}
          <div className="accordion-item mt-5">
            <div
              className="flex justify-between items-center cursor-pointer bg-gray-200 p-4 rounded"
              onClick={() => toggleSection("section4")}
            >
              <h1 className="text-2xl font-semibold">
                Should I schedule all my classes on the same day?
              </h1>
              <FontAwesomeIcon
                icon={openSection === "section4" ? faChevronUp : faChevronDown}
              />
            </div>
            <div
              className={`accordion-content transition-max-height duration-500 ease-in-out overflow-hidden ${
                openSection === "section4"
                  ? "max-h-screen py-4"
                  : "max-h-0 py-0"
              }`}
            >
              <p className="text-base">
                If you&apos;re taking 3 classes, sure. But taking 4 classes in 1
                day is a lot. You might get burnt out fast, so try to spread out
                your classes a bit so you can spend less time on campus per day.
                Some days, even 1 class feels like 3.
              </p>
            </div>
          </div>

          <div className="accordion-item mt-5">
            <div
              className="flex justify-between items-center cursor-pointer bg-gray-200 p-4 rounded"
              onClick={() => toggleSection("section5")}
            >
              <h1 className="text-2xl font-semibold">
                Should I schedule breaks between classes?
              </h1>
              <FontAwesomeIcon
                icon={openSection === "section5" ? faChevronUp : faChevronDown}
              />
            </div>
            <div
              className={`accordion-content transition-max-height duration-500 ease-in-out overflow-hidden ${
                openSection === "section5"
                  ? "max-h-screen py-4"
                  : "max-h-0 py-0"
              }`}
            >
              <p className="text-base">
                If you have 2 classes that day, it&apos;s probably not
                necessary. But 3 back-to-back-to-back classes is a heavy load.
                Mental fatigue will almost certainly set in. Set some time aside
                to have a snack or socialize.
              </p>
            </div>
          </div>

          <div className="accordion-item mt-5">
            <div
              className="flex justify-between items-center cursor-pointer bg-gray-200 p-4 rounded"
              onClick={() => toggleSection("section6")}
            >
              <h1 className="text-2xl font-semibold">
                What should I do if a class is only offered at a bad time?
              </h1>
              <FontAwesomeIcon
                icon={openSection === "section6" ? faChevronUp : faChevronDown}
              />
            </div>
            <div
              className={`accordion-content transition-max-height duration-500 ease-in-out overflow-hidden ${
                openSection === "section6"
                  ? "max-h-screen py-4"
                  : "max-h-0 py-0"
              }`}
            >
              <p className="text-base">
                This shouldn&apos;t be too much of an issue if you&apos;re in
                your first year unless your admission was very late. Don&apos;t
                panic, you have at least 3 more years to get the classes you
                need. If it&apos;s a mandatory class, reach out to advising and
                they can potentially overload the course.
              </p>
            </div>
          </div>

          <div className="accordion-item mt-5">
            <div
              className="flex justify-between items-center cursor-pointer bg-gray-200 p-4 rounded"
              onClick={() => toggleSection("section7")}
            >
              <h1 className="text-2xl font-semibold">
                How can I avoid getting overwhelmed during the semester?
              </h1>
              <FontAwesomeIcon
                icon={openSection === "section7" ? faChevronUp : faChevronDown}
              />
            </div>
            <div
              className={`accordion-content transition-max-height duration-500 ease-in-out overflow-hidden ${
                openSection === "section7"
                  ? "max-h-screen py-4"
                  : "max-h-0 py-0"
              }`}
            >
              <p className="text-base">
                Don&apos;t forget that nearly everyone feels overwhelmed at
                first. University is nothing like high school in most cases. Be
                sure to do things you enjoy and take time off. Create a
                realistic schedule and establish a routine.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
