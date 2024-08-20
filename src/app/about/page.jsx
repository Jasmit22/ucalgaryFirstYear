import React from "react";
import { FaGithub } from "react-icons/fa";

const page = () => {
  return (
    <div className="min-h-screen text-black py-28">
      <div className="bg-ucalgaryRed fixed top-0 left-0 z-10 h-20 w-full"></div>
      <div className="text-center flex flex-col gap-8 px-16 max-lg:px-12 max-md:px-8">
        <h1 className="text-6xl font-bold mt-6">Calgary First Year</h1>

        {/* GitHub Logo */}
        <a
          href="https://github.com/Jasmit22/ucalgaryFirstYear"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center mt-4"
        >
          <FaGithub className="text-4xl" />
        </a>

        <p className="text-xl leading-relaxed mt-4">
          Calgary First Year helps first-year UofC students navigate life as
          school approaches. We know it can be a bit strange coming to
          university for the first time if you know nothing about it.
        </p>

        <div className="mt-10">
          <h2 className="text-4xl font-semibold mb-4">Tech Stack</h2>
          <p className="text-xl leading-relaxed">
            We used Next.js with several front-end utility libraries such as
            Tailwind and Daisy UI for this website.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-4xl font-semibold mb-4">API Acknowledgements</h2>
          <p className="text-xl leading-relaxed">
            Thank you to the official Transit app, which granted us access to
            their API for this project. We used the API to help students
            navigate to campus. Although it only takes a few days to memorize
            your transit route, it can be a bit difficult for students in remote
            areas near the beginning.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-4xl font-semibold mb-4">Features</h2>
          <ul className="list-disc list-inside space-y-3 text-xl leading-relaxed">
            <li>
              Several Static FAQ Pages, which will most likely be the most used.
            </li>
            <li>
              A reviews page that stores each individual review and ensures each
              user can only leave 1 review.
            </li>
            <li>
              A go-to page that customizes the route from a user&apos;s location
              to provide real-time, detailed transit data.
            </li>
            <li>
              A compilation of informational pages from the University all put
              into one place.
            </li>
            <li>Google Analytics / API integration.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
