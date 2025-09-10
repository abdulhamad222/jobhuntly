"use client"

import Link from "next/link";

export default function Navbar(){

    return(
        <div>
            {/* Navbar */}
            <nav className="flex justify-between items-center px-6 md:px-8 py-4">
                <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-20">
                <h1 className="font-bold text-2xl">JobHuntly</h1>

                <div className="flex gap-4 md:gap-6 text-gray-500 text-sm md:text-base">
                    <Link
                    href="#"
                    className="transition-all duration-300 hover:text-blue-400"
                    >
                    Find Jobs
                    </Link>
                    <Link
                    href="#"
                    className="transition-all duration-300 hover:text-blue-400"
                    >
                    Browse Companies
                    </Link>
                </div>
                </div>

                <div className="flex gap-3 md:gap-4 text-sm md:text-base">
                <Link href="#" className="mt-3 font-bold text-blue-500">Login</Link>
                <Link href="#" className="bg-blue-600 px-3 md:px-4 py-2 rounded hover:bg-blue-700 text-white">
                    Sign Up
                </Link>
                </div>
            </nav>
        </div>
    );

};