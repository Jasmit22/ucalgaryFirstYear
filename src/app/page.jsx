import Link from "next/link";
import FeatureCard from "./components/FeatureCard";

export default function Home() {
  const studySVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
      />
    </svg>
  );

  const mapSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      />
    </svg>
  );

  const forumsSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
      />
    </svg>
  );

  const ratingsSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
      />
    </svg>
  );

  return (
    <main>
      <div
        className="min-h-screen hero"
        style={{ backgroundImage: "url(/tfdl.jpg)" }}
      >
        <div className="hero-overlay bg-opacity-60 backdrop-blur-xs"></div>
        <div className="hero-content text-neutral-content text-center">
          <div>
            <h1 className="mb-5 text-4xl md:text-6xl font-extrabold text-ucalgaryGold uppercase">
              Explore the University of Calgary
            </h1>
            <h2 className="text-lg md:text-2xl mb-5">
              Your go-to resource for navigating campus life.
            </h2>
            <Link
              className="btn bg-ucalgaryRed text-gray-100 border-none hover:bg-red-800 btn-wide mb-5 font-bold shadow-2xl"
              href={"/"}
            >
              Get started now.
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center my-10 text-gray-800 gap-5 mx-5">
        <h1 className="text-2xl md:text-4xl font-bold flex justify-center mt-5">
          Why Use CampusConnect?
        </h1>
        <div className="flex w-full justify-center gap-5 lg:gap-10 mt-5 flex-wrap">
          <FeatureCard
            title={"Best Study Spots"}
            description={"Discover the top study spots tailored to your needs."}
            svg={studySVG}
          />
          <FeatureCard
            title={"Campus Guide"}
            description={
              "Find the best routes and tips for getting around campus."
            }
            svg={mapSVG}
          />
          <FeatureCard
            title={"Active Student Forum"}
            description={
              "Join discussions, ask questions, and share experiences with peers."
            }
            svg={forumsSVG}
          />
          <FeatureCard
            title={"Course Ratings"}
            description={
              "Read reviews and ratings for various courses to make informed decisions."
            }
            svg={ratingsSVG}
          />
        </div>
      </div>
      <div className="flex w-full flex-col">
        <div className="divider mt-0 mb-5"></div>
      </div>
    </main>
  );
}
