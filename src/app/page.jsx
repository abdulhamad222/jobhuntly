"use client";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 md:px-8 py-4">
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-20">
          <h1 className="font-bold text-2xl text-white">JobHuntly</h1>

          <div className="flex gap-4 md:gap-6 text-gray-300 text-sm md:text-base">
            <a
              href="#"
              className="transition-all duration-300 hover:text-blue-400"
            >
              Find Jobs
            </a>
            <a
              href="#"
              className="transition-all duration-300 hover:text-blue-400"
            >
              Browse Companies
            </a>
          </div>
        </div>

        <div className="flex gap-3 md:gap-4 text-sm md:text-base">
          <button className="text-blue-500">Login</button>
          <button className="bg-blue-600 px-3 md:px-4 py-2 rounded hover:bg-blue-700 text-white">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 md:px-16 lg:px-32 py-16 md:py-28 max-w-screen text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
          Discover <br /> more than{" "}
        </h1>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#55a7ff] py-2">
          5000+ Jobs
        </h1>

        <p className="text-base md:text-lg lg:text-xl text-gray-400 mt-4">
          Great platform for the job seeker that searching for <br className="hidden md:block" />{" "}
          new career heights and passionate about startups.
        </p>

        {/* Search Bar */}
        <div className="bg-white text-black w-full md:max-w-4xl flex flex-col md:flex-row items-stretch md:items-center gap-3 mt-8 p-3">
          <input
            type="text"
            placeholder="Job title or keyword"
            className="flex-1 p-2 outline-none border md:border-0 rounded md:rounded-none"
          />
          <input
            type="text"
            placeholder="Location"
            className="flex-1 p-2 outline-none border md:border-0 rounded md:rounded-none"
          />
          <button className="bg-blue-600 text-white px-6 py-3 md:px-10 md:py-5 rounded hover:bg-blue-700">
            Search my job
          </button>
        </div>
        <p className="text-base md:text-md lg:text-lg text-gray-400 mt-4">
          Popular: UI Designer, UX Researcher, Android, Admin
        </p>
      </section>
    </div>
  );
}
