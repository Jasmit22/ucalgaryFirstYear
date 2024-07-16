import Link from "next/link";
import Image from "next/image";

export default function StudySpotsPage() {
  const studySpots = [
    {
      title: "Taylor Family Digital Library",
      description:
        "The TFDL is a modern library offering various study spaces, from silent areas to collaborative rooms. It features extensive resources, including books, computers, and study rooms. The views from the upper floors are also a great bonus.",
      image: "/tfdl-study.jpg",
      tag: ["Modern", "Collaborative"],
    },
    {
      title: "Atrium",
      description:
        "A spacious and bright area with ample seating, ideal for both group and individual study. The natural light and greenery create a refreshing atmosphere. It’s conveniently located near the Science Theatres, making it easy to pop in between classes.",
      image: "/atrium-study.jpg",
      tag: ["Bright", "Natural"],
    },
    {
      title: "Scurfield Hall",
      description:
        "Scurfield Hall, home to the Haskayne School of Business, offers several study areas ideal for business students. There are quiet lounges and dedicated study rooms, perfect for individual work or group projects. The building's central location and proximity to business resources make it a convenient and practical study spot.",
      image: "/scurfield-study.jpg",
      tag: ["Business", "Central"],
    },
  ];

  return (
    <div className="flex flex-col gap-5 mb-10">
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
      <div
        id="content"
        className="mt-10 text-black flex flex-col gap-10 items-center"
      >
        {studySpots.map((studySpot, key) => {
          return (
            <div
              key={key}
              className="card bg-base-100 max-w-[500px] max-h-[500px] shadow-xl"
            >
              <figure>
                <Image
                  className="w-full object-cover overflow-hidden"
                  src={studySpot.image}
                  alt="Shoes"
                  width={500}
                  height={500}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{studySpot.title}</h2>
                <p>{studySpot.description}</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">{studySpot.tag[0]}</div>
                  <div className="badge badge-outline">{studySpot.tag[1]}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
