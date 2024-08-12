import Link from "next/link";
import Image from "next/image";

export default function ScheduleTipsPage() {
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
        <div className="text-center flex flex-col items-center m-auto px-28 max-md:px-0">
          <h1 className="text-3xl font-bold mb-3">
            What time is too early for my first class?
          </h1>
          <p className="text-base">
            A good rule of thumb is to think of the earliest time you would be
            willing to go to school, and then add an hour. You get more worn out
            as the semester goes on, so it&apos;s important to plan ahead and
            ensure you aren&apos;t setting yourself up to skip classes.
          </p>
          <p className="text-base mb-10">
            Just about everyone agrees that 8:00 AM classes are not a good idea,
            but if you are strictly a morning person, go right ahead.
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
        <div className="text-center flex flex-col items-center m-auto px-28 max-md:px-0 mt-10">
          <h1 className="text-3xl font-bold mb-3">
            Is my schedule manageable?
          </h1>

          <p className="text-base">
            This depends more on you and your degree. Generally, 5 classes is
            manageable if you don&apos;t have other commitments such as a big
            role in a club, a part-time job, or athletics.
          </p>
          <p className="text-base">
            Some people find there is a big difference between 4 classes and 5
            classes. 4 classes are typically seen as more manageable. However,
            don&apos;t be afraid to take 5. Just be sure to plan ahead.
          </p>
        </div>
        <div className="text-center flex flex-col items-center m-auto px-28 max-md:px-0 mt-10">
          <h1 className="text-3xl font-bold mb-3">
            Can I make it to my next class?
          </h1>

          <p className="text-base">
            If the schedule builder gives you a warning, it&apos;s probably a
            good idea to listen. However, if it doesn&apos;t, you should be
            fine. Be aware that classes are packed on the first few days of the
            semester, so it may take longer to get to your next class.
          </p>
        </div>
      </div>
    </div>
  );
}
