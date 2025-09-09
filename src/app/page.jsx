"use client";

export default function Home() {
  return (
    <div className="min-h-screen">
      <nav className="flex justify-between items-center px-8 py-4">
        <div className="flex gap-20">
          <h1 className="font-bold text-2xl">JobHuntly</h1>

          <div className="flex items-start gap-6 text-gray-300">
            <a href="#" className="transition-all duration-300 hover:text-blue-400">
              Find Jobs
            </a>
            <a href="#" className="transition-all duration-300 hover:text-blue-400">
              Browse Companies
            </a>
          </div>
        </div>

        <div className="flex gap-4">
          <button className="text-blue-500">Login</button>
          <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      </nav>

      <section className="px-32 py-28 max-w-screen">
        <h1 className="text-6xl font-extrabold">
          Discover <br /> more than{" "}
        </h1>

        <h1 className="text-6xl font-bold text-[#55a7ff] py-2">5000+ Jobs</h1>

        <p className="text-xl text-gray-400 mt-4">
          Great platform for the job seeker that searching for <br /> new career
          heights and passionate about startups.
        </p>

        <div className="bg-white text-black h-24 max-w-3xl flex items-center gap-4 mt-8 p-3">
          <input
            type="text"
            placeholder="Job title or keyword"
            className="flex-1 p-2 outline-none"
          />
          <input
            type="text"
            placeholder="Location"
            className="flex-1 p-2 outline-none"
          />
          <button className="bg-blue-600 text-white px-6 py-6 rounded hover:bg-blue-700">
            Search my job
          </button>
        </div>
      </section>
    </div>
  );
}
