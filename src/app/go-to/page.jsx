import Link from "next/link";

export default function GoToPage() {
  return (
    <div className="flex flex-col gap-5">
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: "url(/calgary-transit.jpg)" }}
      >
        <div className="hero-overlay bg-opacity-70 backdrop-blur-sm"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold tracking-tight">
              How do I get there?
            </h1>
            <p className="mb-5">
              Not everyone has experience with public transit. The City provides
              both bus and train services to get you to school.
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
      <div id="content" className="mt-40">
        Content
      </div>
    </div>
  );
}
