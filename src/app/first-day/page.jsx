import Link from "next/link";

export default function FirstDayPage() {
  return (
    <div className="flex flex-col gap-5 mb-10">
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: "url(/first-day/hero.jpeg)" }}
      >
        <div className="hero-overlay bg-opacity-70 backdrop-blur-sm"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold tracking-tight text-white">
              Get Ready for Your First Day
            </h1>
            <p className="mb-5">
              There is a lot of uncertainty early on. We have compiled resources
              to help you navigate your first day at the University of Calgary.
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
      <div className="mt-20 text-black flex flex-col gap-10 items-center w-3/4">
        <div
          tabIndex={0}
          className="collapse collapse-arrow border-base-300 bg-base-200 border"
        >
          <div className="collapse-title text-xl font-medium">
            Focus me to see content
          </div>
          <div className="collapse-content">
            <p>tabindex={0} attribute is necessary to make the div focusable</p>
          </div>
        </div>
      </div>
      <div
        id="content"
        className="py-28 text-black flex gap-8 flex-grow flex-wrap justify-center items-center max-md:mx-4"
      >
        <div>
          <h2>Should I go to orientation?</h2>
          <p>
            There is no obligation to stay with your orientation group. If you
            enjoy what the University has put together, stick around. Otherwise,
            make sure to take a look around campus. Try to locate your classes
            now, as it will save you a lot of time and stress on your first day.
          </p>
        </div>
        <div>
          <h2>What do I need?</h2>
          <p>
            You shouldn&apos;t need much. If you are taking notes on paper,
            bring a notebook and pen. If you are using a laptop, make sure it is
            charged and ready to go. Bring a water bottle and a snack to keep
            you going throughout the day. University isn&apos;t like high
            school, professors won&apos;t be telling you to get off your phone
            or monitor your devices.
          </p>
        </div>
        <div>
          <h2>When do I get there?</h2>
          <p>
            Come around 30 minutes to an hour early. Firstly, the campus is
            packed at the start of the semester. Secondly, you will want to
            confirm the location of your classes if you haven&apos;t already.
            It&apos;s better to be early than late.
          </p>
        </div>
        <div>
          <h2>Where is the food?</h2>
          <p>
            Mac Hall is the go-to destination if you&apos;re hungry. Again,
            beware that it will be packed. There are other locations scattered
            around campus, including multiple coffee shops, which you are sure
            to find if you explore.
          </p>
        </div>
        <div>
          <h2>I&apos;m driving, where should I park?</h2>
          <p>
            Parking is quite expensive. You can park at Brentwood station but
            again, it will be packed. Plan ahead and don&apos;t bank on the free
            parking at Brentwood.
          </p>
        </div>
      </div>
    </div>
  );
}
