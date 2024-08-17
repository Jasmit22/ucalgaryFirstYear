/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import RedditEmbed from "../components/RedditEmbed";

export default function BakeChefPage() {
  return (
    <div className="flex flex-col gap-5 mb-10">
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: "url(bakechef.jpeg)" }}
      >
        <div className="hero-overlay bg-opacity-70 backdrop-blur-sm"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold tracking-tight text-white">
              Bakechef
            </h1>
            <p className="mb-5 text-lg">
              If Bake Chef has a million fans, then I am one of them. If Bake
              Chef has ten fans, then I am one of them. If Bake Chef has only
              one fan then that is me. If Bake Chef has no fans, then that means
              I am no longer on earth. If the world is against Bake Chef, then I
              am against the world.
            </p>
            <Link
              className="btn bg-ucalgaryRed text-gray-100 border-none hover:bg-red-800 btn-circle btn-wide mb-5 font-bold"
              href="#content"
            >
              Enlighten Me
            </Link>
          </div>
        </div>
      </div>
      <div
        id="content"
        className="text-black flex flex-col items-center w-full py-28"
      >
        <div className="px-20 max-md:px-10 gap-16 flex flex-col">
          <div className="text-center flex flex-col justify-center m-auto">
            <h1 className="text-3xl font-bold mb-2">What is Bakechef?</h1>
            <p className="text-lg">
              The most beloved place to eat on campus among University students.
            </p>
          </div>
          <div className="text-center flex flex-col justify-center m-auto">
            <h1 className="text-3xl font-bold mb-2">Why is it so beloved?</h1>
            <p className="text-lg">
              The service is super fast, the food is pretty affordable, and of
              course it tastes good.
            </p>
          </div>
          <div className="text-center flex flex-col justify-center m-auto">
            <h1 className="text-3xl font-bold mb-2">How do I order it?</h1>
            <p className="text-lg">
              It sounds like a bit of a ridiculous question, but just about
              everyone doesn&apos;t know what they&apos;re doing the first time
              they go. If you are getting a sub, go up to the counter and take a
              pencil and a sub order form. After you fill it out, get in the
              line and pay. Don&apos;t wait in line just to get the paper as the
              line moves fast. If you are getting anything else, just get in
              line.
            </p>
          </div>

          {/* Reddit Embed */}
          <RedditEmbed
            url="https://www.reddit.com/r/UCalgary/comments/10nr0ax/i_come_to_university_to_eat_bakechef/"
            height="740px"
          />

          <div className="text-center flex flex-col justify-center m-auto">
            <h1 className="text-3xl font-bold mb-2">
              "Bake Chef is overrated, why would you make an entire page on it?"
            </h1>
            <p className="text-2xl">🤓🤓🤓🤓🤓🤓🤓🤓🤓🤓🤓🤓🤓🤓🤓🤓🤓🤓🤓🤓</p>
          </div>
        </div>
      </div>
    </div>
  );
}
