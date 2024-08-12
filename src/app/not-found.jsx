import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen bg-ucalgaryRed">
      <div className="pt-20 flex flex-col items-center justify-center h-full text-white">
        <h2 className="text-4xl font-bold mb-4">404 Not Found</h2>
        <p className="text-xl mb-4">Could not find requested resource</p>
        <Link
          href="/"
          className="p-4 bg-ucalgaryGold rounded-2xl text-black font-bold"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
