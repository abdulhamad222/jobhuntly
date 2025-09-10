"use client"

import { Dribbble, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Footer(){

    const [subs , setSubs] = useState("");

    const handleSubs = () => {
        if(!subs){
        toast.error("Please enter your email")
        return;
        }
        toast.success("Subscribe Is On Working")
        setSubs("");
    }

    return(
        <div>
            {/* FOOTER */}
            <footer className="bg-[#212431] text-gray-300 py-16 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
                <div>
                    <div className="flex items-center gap-2">
                    <span className="text-xl font-semibold text-white">JobHuntly</span>
                    </div>
                    <p className="text-sm mt-4">
                    Great platform for the job seeker that passionate about startups. Find your dream job easier.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-white mb-4">About</h3>
                    <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:text-white">Companies</a></li>
                    <li><a href="#" className="hover:text-white">Pricing</a></li>
                    <li><a href="#" className="hover:text-white">Terms</a></li>
                    <li><a href="#" className="hover:text-white">Advice</a></li>
                    <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-white mb-4">Resources</h3>
                    <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:text-white">Help Docs</a></li>
                    <li><a href="#" className="hover:text-white">Guide</a></li>
                    <li><a href="#" className="hover:text-white">Updates</a></li>
                    <li><a href="#" className="hover:text-white">Contact Us</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-white mb-4">Get job notifications</h3>
                    <p className="text-sm mb-4">
                    The latest job news, articles, sent to your inbox weekly.
                    </p>
                    <div className="flex">
                    <input
                        type="email"
                        placeholder="Email Address"
                        value={subs}
                        onChange={(e)=> setSubs(e.target.value)}
                        className="px-4 py-2 rounded-l-md bg-white text-gray-700 text-sm w-full focus:outline-none"
                    />
                    <button className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-r-md hover:bg-indigo-700" onClick={handleSubs}>
                        Subscribe
                    </button>
                    </div>
                </div>
                </div>

                <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                <p>2021 © JobHuntly. All rights reserved.</p>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                    <Facebook size={16} />
                    </a>
                    <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                    <Instagram size={16} />
                    </a>
                    <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                    <Dribbble size={16} />
                    </a>
                    <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                    <Linkedin size={16} />
                    </a>
                    <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                    <Twitter size={16} />
                    </a>
                </div>
                </div>
            </footer>
        </div>
    );
};