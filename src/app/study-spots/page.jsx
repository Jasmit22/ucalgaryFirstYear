import Link from "next/link";

export default function StudySpotsPage() {
  return (
    <div className="flex flex-col gap-5">
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: "url(/study-spots-hero.jpg)" }}
      >
        <div className="hero-overlay bg-opacity-70 backdrop-blur-sm"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold tracking-tight">
              Top Study Spots
            </h1>
            <p className="mb-5">
              Explore the top study locations on campus to find the perfect
              place to focus, collaborate, and succeed. Whether you need a quiet
              corner or a vibrant space, we’ve got you covered.
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
      <div id="content" className="mt-40">Content</div>
    </div>
  );
}
