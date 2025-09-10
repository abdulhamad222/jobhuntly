"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";

import {
  Brush,
  Briefcase,
  Megaphone,
  Wallet,
  Laptop,
  Cog,
  BarChart,
  Users,
  ArrowRight,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";

export default function Home() {

  const [title , setTitle] = useState("");
  const [location , setLocation] = useState("");

  const handleSearch = () => {
    if( !title || !location ) {
      toast.error("Please fill the both feild");
      return;
    }
    toast.success(`Searching Job for "${title}" in "${location}"`)
     setTitle("")
    setLocation("")
  };

  return (
    <div className="min-h-screen">

      {/*SECTION 1 */}
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

        <div className="bg-white text-black w-full md:max-w-4xl flex flex-col md:flex-row items-stretch md:items-center gap-3 mt-8 p-3">
          <input
            type="text"
            placeholder="Job title or keyword"
            className="flex-1 p-2 outline-none border md:border-0 rounded md:rounded-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Location"
            className="flex-1 p-2 outline-none border md:border-0 rounded md:rounded-none"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button className="bg-blue-600 text-white px-6 py-3 md:px-10 md:py-5 rounded hover:bg-blue-700" onClick={handleSearch}>
            Search my job
          </button>
        </div>
        <p className="text-base md:text-md lg:text-lg text-gray-400 mt-4">
          Popular: UI Designer, UX Researcher, Android, Admin
        </p>
      </section>

      {/* SECTION 2 */}
      <section className="min-h-screen px-8 py-12">
        <p className="text-base md:text-md lg:text-lg text-gray-400">Companies we helped grow</p>
        <div className="flex justify-center space-x-12">
          <svg 
            height="180" 
            viewBox=".132 .133 16.8984292 4.134" 
            width="180" 
            xmlns="http://www.w3.org/2000/svg"
            fill="#4e5562"
            >
              <path d="m4.266 2.2a2.067 2.067 0 1 1 -4.134 0 2.067 2.067 0 0 1 4.134 0"/><path d="m2.216 3.352c-.568.002-1.159-.482-1.162-1.261-.001-.515.277-1.01.631-1.304.347-.287.821-.47 1.251-.472a.52.52 0 0 1 .149.016.859.859 0 0 0 -.674.825c0 .014 0 .028.002.034.63.153.915.533.917 1.059a1.106 1.106 0 0 1 -1.114 1.103" fill="#222532"/>
              <path d="m5.601 3.056-.631-1.509h.413l.395 1.002.382-1.002h.394l-.614 1.509zm2.052-.762a.704.704 0 0 0 -.022-.18.428.428 0 0 0 -.066-.145.332.332 0 0 0 -.106-.097.287.287 0 0 0 -.147-.037.286.286 0 0 0 -.147.037.328.328 0 0 0 -.107.097.428.428 0 0 0 -.065.146.704.704 0 0 0 -.022.179.7.7 0 0 0 .022.18.472.472 0 0 0 .063.146.299.299 0 0 0 .255.135.29.29 0 0 0 .254-.135.45.45 0 0 0 .066-.145.7.7 0 0 0 .022-.181m.381.001a.956.956 0 0 1 -.045.29.796.796 0 0 1 -.135.255.663.663 0 0 1 -.542.25.668.668 0 0 1 -.543-.25.803.803 0 0 1 -.135-.255.956.956 0 0 1 0-.577.788.788 0 0 1 .135-.252.66.66 0 0 1 .225-.178.707.707 0 0 1 .318-.068.677.677 0 0 1 .541.246c.06.074.106.158.136.252s.045.19.045.287m1.166-.415a.576.576 0 0 0 -.209-.045.337.337 0 0 0 -.29.14.465.465 0 0 0 -.07.145.584.584 0 0 0 -.023.165.78.78 0 0 0 .02.18.465.465 0 0 0 .063.15.331.331 0 0 0 .106.104c.042.026.093.04.15.04a.316.316 0 0 0 .147-.04.259.259 0 0 0 .106-.092zm.031 1.176-.015-.116a.48.48 0 0 1 -.14.105.557.557 0 0 1 -.48-.02.614.614 0 0 1 -.2-.176.801.801 0 0 1 -.124-.253 1.075 1.075 0 0 1 -.042-.3c0-.099.014-.195.043-.289a.762.762 0 0 1 .133-.251.662.662 0 0 1 .538-.246c.08 0 .165.015.256.044v-.585h.388v2.087zm1.449-.708a2.218 2.218 0 0 0 -.255.032c-.084.017-.142.045-.175.086a.21.21 0 0 0 -.048.133c0 .05.018.09.055.12a.24.24 0 0 0 .155.046c.05 0 .1-.01.147-.031a.435.435 0 0 0 .121-.079zm.031.706-.015-.112a.43.43 0 0 1 -.16.109.565.565 0 0 1 -.4.006.458.458 0 0 1 -.313-.446.427.427 0 0 1 .163-.344.663.663 0 0 1 .173-.097 1.487 1.487 0 0 1 .369-.08l.15-.014v-.022c0-.083-.022-.142-.065-.178a.271.271 0 0 0 -.178-.053.549.549 0 0 0 -.316.102.589.589 0 0 0 -.058.042l-.129-.272a.86.86 0 0 1 .202-.114.917.917 0 0 1 .593-.038.463.463 0 0 1 .296.281.717.717 0 0 1 .042.261v.97zm1.553-1.741a.506.506 0 0 0 -.22-.044c-.053 0-.099.016-.135.049-.037.032-.055.085-.055.158v.071h.326v.313h-.323v1.196h-.388v-1.196h-.2v-.313h.2v-.08c0-.099.013-.182.038-.25a.41.41 0 0 1 .263-.26.851.851 0 0 1 .538.033zm1.058.981a.721.721 0 0 0 -.022-.18.428.428 0 0 0 -.066-.145.332.332 0 0 0 -.106-.097.287.287 0 0 0 -.147-.037.286.286 0 0 0 -.147.037.334.334 0 0 0 -.107.097.443.443 0 0 0 -.066.146.721.721 0 0 0 0 .36.482.482 0 0 0 .064.145.316.316 0 0 0 .107.1.301.301 0 0 0 .149.036.29.29 0 0 0 .253-.136.45.45 0 0 0 .066-.145.717.717 0 0 0 .022-.181m.381.001a.945.945 0 0 1 -.045.29.788.788 0 0 1 -.135.255.663.663 0 0 1 -.542.25.668.668 0 0 1 -.543-.25.803.803 0 0 1 -.135-.255.944.944 0 0 1 0-.577.788.788 0 0 1 .134-.252.66.66 0 0 1 .226-.178.707.707 0 0 1 .318-.068.677.677 0 0 1 .541.246c.06.074.106.158.136.252s.045.19.045.287m1.205.761v-.86a.431.431 0 0 0 -.072-.267.24.24 0 0 0 -.2-.094.311.311 0 0 0 -.168.047.705.705 0 0 0 -.133.104v1.07h-.388v-1.509h.354l.018.12a.677.677 0 0 1 .435-.157c.08 0 .153.012.22.036a.43.43 0 0 1 .171.114c.049.052.086.12.112.203.026.084.039.184.039.3v.893zm1.595-.936a.397.397 0 0 0 -.033-.136.288.288 0 0 0 -.066-.094.263.263 0 0 0 -.178-.07.297.297 0 0 0 -.192.075.321.321 0 0 0 -.107.225zm-.585.279c.008.127.048.219.12.275a.432.432 0 0 0 .275.085.759.759 0 0 0 .27-.05.74.74 0 0 0 .092-.044.304.304 0 0 0 .056-.041l.104.316a.79.729 0 0 1 -.191.092 1.32 1.32 0 0 1 -.382.058.84.84 0 0 1 -.28-.047.626.626 0 0 1 -.233-.145.711.711 0 0 1 -.16-.246.929.929 0 0 1 -.06-.35c0-.128.019-.24.055-.338a.664.664 0 0 1 .643-.454.74.74 0 0 1 .267.047c.081.031.151.08.21.145.06.066.107.151.141.256.035.104.052.228.052.372v.069zm0 0"/>
            </svg>

          <svg 
            height="150" 
            viewBox="3.7 1.1 450.2 100.1" 
            width="120" 
            xmlns="http://www.w3.org/2000/svg"
            fill="#4e5562"
          >
            <path d="m4.7 5.2h28.1v28.1h-28.1z"/>
            <path d="m32.1 151.6v-101.2h-26.6v101.2zm176.8 1v-24.8c-3.9 0-7.2-.2-9.6-.6-2.8-.4-4.9-1.4-6.3-2.8s-2.3-3.4-2.8-6c-.4-2.5-.6-5.8-.6-9.8v-35.4h19.3v-22.8h-19.3v-39.5h-26.7v97.9c0 8.3.7 15.3 2.1 20.9 1.4 5.5 3.8 10 7.1 13.4s7.7 5.8 13 7.3c5.4 1.5 12.2 2.2 20.3 2.2zm152.8-1v-148.5h-26.7v148.5zm-224.5-91.3c-7.4-8-17.8-12-31-12-6.4 0-12.2 1.3-17.5 3.9-5.2 2.6-9.7 6.2-13.2 10.8l-1.5 1.9v-14.5h-26.3v101.2h26.5v-53.9 1.9c.3-9.5 2.6-16.5 7-21 4.7-4.8 10.4-7.2 16.9-7.2 7.7 0 13.6 2.4 17.5 7 3.8 4.6 5.8 11.1 5.8 19.4v53.7h26.9v-57.4c.1-14.4-3.7-25.8-11.1-33.8zm184 40.5c0-7.3-1.3-14.1-3.8-20.5-2.6-6.3-6.2-11.9-10.7-16.7-4.6-4.8-10.1-8.5-16.5-11.2s-13.5-4-21.2-4c-7.3 0-14.2 1.4-20.6 4.1-6.4 2.8-12 6.5-16.7 11.2s-8.5 10.3-11.2 16.7c-2.8 6.4-4.1 13.3-4.1 20.6s1.3 14.2 3.9 20.6 6.3 12 10.9 16.7 10.3 8.5 16.9 11.2c6.6 2.8 13.9 4.2 21.7 4.2 22.6 0 36.6-10.3 45-19.9l-19.2-14.6c-4 4.8-13.6 11.3-25.6 11.3-7.5 0-13.7-1.7-18.4-5.2-4.7-3.4-7.9-8.2-9.6-14.1l-.3-.9h79.5zm-79.3-9.3c0-7.4 8.5-20.3 26.8-20.4 18.3 0 26.9 12.9 26.9 20.3zm150.2 46.9c-.5-1.2-1.2-2.2-2.1-3.1s-1.9-1.6-3.1-2.1-2.5-.8-3.8-.8c-1.4 0-2.6.3-3.8.8s-2.2 1.2-3.1 2.1-1.6 1.9-2.1 3.1-.8 2.5-.8 3.8c0 1.4.3 2.6.8 3.8s1.2 2.2 2.1 3.1 1.9 1.6 3.1 2.1 2.5.8 3.8.8c1.4 0 2.6-.3 3.8-.8s2.2-1.2 3.1-2.1 1.6-1.9 2.1-3.1.8-2.5.8-3.8-.3-2.6-.8-3.8zm-1.6 7c-.4 1-1 1.9-1.7 2.6s-1.6 1.3-2.6 1.7-2 .6-3.2.6c-1.1 0-2.2-.2-3.2-.6s-1.9-1-2.6-1.7-1.3-1.6-1.7-2.6-.6-2-.6-3.2c0-1.1.2-2.2.6-3.2s1-1.9 1.7-2.6 1.6-1.3 2.6-1.7 2-.6 3.2-.6c1.1 0 2.2.2 3.2.6s1.9 1 2.6 1.7 1.3 1.6 1.7 2.6.6 2 .6 3.2c.1 1.2-.2 2.2-.6 3.2zm-5.6-2.4c.8-.1 1.4-.4 1.9-.9s.8-1.2.8-2.2c0-1.1-.3-1.9-1-2.5-.6-.6-1.7-.9-3-.9h-4.4v11.3h2.1v-4.6h1.5l2.8 4.6h2.2zm-1.1-1.6h-2.5v-3.2h2.5c.3 0 .6.1.9.2s.5.3.6.5.2.5.2.9-.1.7-.2.9c-.2.2-.4.4-.6.5-.3.1-.6.2-.9.2z"/></svg>

          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 278.7 36.3" 
            width="180" 
            height="180"
            fill="#4e5562"
          >
            <path class="st0" d="M238.1 14.4v21.9h7V21.7h25.6v14.6h7V14.4h-39.6M244.3 7.3h27c3.8-.7 6.5-4.1 7.3-7.3H237c.8 3.2 3.6 6.5 7.3 7.3M216.8 36.3c3.5-1.5 5.4-4.1 6.2-7.1h-31.5V.1h-7.1v36.2h32.4M131.9 7.2h25c3.8-1.1 6.9-4 7.7-7.1H125v21.4h32.4V29H132c-4 1.1-7.4 3.8-9.1 7.3h41.5V14.4H132l-.1-7.2M70.3 7.3h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.5 7.4 7.3M70.3 21.6h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.5 7.4 7.3M70.3 36.3h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.6 7.4 7.3"/><path class="st0" d="M0 .1c.8 3.2 3.6 6.4 7.3 7.2h11.4l.6.2v28.7h7.1V7.5l.6-.2h11.4c3.8-1 6.5-4 7.3-7.2V0L0 .1"/>
          </svg>

          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="180" 
            height="180" 
            viewBox="0 0 2000 477.02"
            fill="#4e5562"
          >
              <path d="M469.72 445.31H358.8l-33.93-81.85H140l-30.91 81.85H0L166.67 31.94h119.4zM227.89 130.72l-60.61 160.61h127.28zM872.63 31.94h89.71v413.37H859.29V187.1L747.78 316.79H732L620.5 187.1v258.21h-103V31.94h89.7l132.69 153.34zM1223.43 31.94c150.91 0 228.49 93.93 228.49 207.27 0 118.8-75.14 206.1-240 206.1H1041V31.94zM1144 369.54h67.27c103.63 0 134.55-70.31 134.55-130.93 0-70.92-38.18-130.91-135.77-130.91h-66zM1870.08 129.95h-213.16L1526.99 0H2000v473.03l-129.92-129.95V129.95M1656.78 343.24V156L1523 289.76v187.26h187.22l133.77-133.78h-187.21"/>
          </svg>

          <svg 
            fill="#4e5562"
            height="150" 
            viewBox="-.054 -8.1 85.054 26.57918397" 
            width="150" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m6.317 24.674c-.481 0-.722-.206-.722-.62v-.13c0-.26.22-.652.659-1.174.46-.543.69-1.087.69-1.63v-17.15h-1.663c-.481 0-.92.207-1.318.62a5.33 5.33 0 0 0 -.91 1.369c-.21.478-.47.924-.784 1.337s-.628.62-.942.62h-.533c-.586 0-.848-.316-.785-.946l.628-4.435c.062-.673.418-1.01 1.067-1.01h16.13c.627 0 .983.337 1.066 1.01l.66 4.467c.041.283-.011.511-.158.685-.146.152-.355.228-.627.228h-.534c-.313 0-.627-.206-.941-.62s-.586-.858-.816-1.336c-.23-.5-.544-.956-.941-1.37-.398-.412-.837-.619-1.318-.619h-1.632v17.15c0 .543.22 1.087.659 1.63.46.522.69.913.69 1.174v.13c0 .414-.25.62-.753.62zm26.568-3.554c.063.522.178.946.345 1.272.189.304.366.5.534.587.188.087.355.195.502.326.146.13.22.293.22.489 0 .717-1.182 1.076-3.546 1.076-.963 0-1.685-.12-2.166-.36-.46-.238-.753-.64-.878-1.205-.796 1.13-2.124 1.695-3.986 1.695-1.757 0-3.19-.424-4.3-1.272-1.087-.847-1.63-2.075-1.63-3.684 0-1.565.543-2.782 1.63-3.652 1.089-.89 2.428-1.336 4.018-1.336 1.234 0 2.29.271 3.17.815v-.098c-.21-2.152-.45-3.608-.723-4.37-.25-.76-.753-1.14-1.506-1.14-.481 0-.868.228-1.161.684a5.324 5.324 0 0 0 -.659 1.5 3.613 3.613 0 0 1 -.753 1.5c-.377.457-.879.685-1.506.685-.649 0-1.182-.196-1.6-.587-.398-.391-.597-.902-.597-1.532 0-1.261.607-2.207 1.82-2.837 1.213-.652 2.699-.978 4.456-.978 2.092 0 3.818.597 5.178 1.793 1.38 1.174 2.197 2.771 2.448 4.793zm-7.249 2.217c.481 0 .868-.239 1.161-.717.314-.478.47-1.022.47-1.63l-.125-1.5c-.209-1.804-.857-2.706-1.945-2.706-.481 0-.868.206-1.161.62-.293.39-.44.923-.44 1.597 0 1.217.178 2.25.534 3.097.376.826.879 1.24 1.506 1.24zm10.224 1.337c-.482 0-.722-.206-.722-.62v-.13c0-.26.198-.652.596-1.174.418-.543.627-1.087.627-1.63v-14.9c0-.565-.209-1.109-.627-1.63-.398-.544-.596-.924-.596-1.142v-.13c0-.24.23-.49.69-.75l4.738-2.413c.44-.195.785-.206 1.036-.032.272.152.408.391.408.717v20.28c0 .543.23 1.087.69 1.63.46.522.69.913.69 1.174v.13c0 .414-.25.62-.752.62zm25.566-2.739c.105.152.419.435.942.848.544.413.816.793.816 1.141v.13c0 .414-.24.62-.722.62h-6.59c-.481 0-.722-.217-.722-.652v-.098c0-.26.157-.576.471-.946.314-.39.377-.739.188-1.043l-2.761-4.271-1.57 1.5v1.956c0 .543.23 1.087.691 1.63.481.522.722.913.722 1.174v.13c0 .414-.251.62-.753.62h-6.779c-.502 0-.753-.206-.753-.62v-.13c0-.26.21-.652.628-1.174.418-.543.628-1.087.628-1.63v-14.9c0-.565-.252-1.109-.754-1.63-.502-.544-.753-.924-.753-1.142v-.13c0-.24.23-.49.69-.75l5.023-2.413c.439-.174.784-.184 1.035-.032s.377.391.377.717v15.487l4.236-3.782c.251-.174.345-.391.283-.652a1.364 1.364 0 0 0 -.314-.685 27.007 27.007 0 0 0 -.502-.717c-.168-.26-.251-.49-.251-.685v-.13c0-.435.24-.652.721-.652h4.959c.48 0 .721.206.721.62v.13c0 .26-.146.532-.439.815-.293.26-.711.576-1.255.945a8.898 8.898 0 0 0 -1.255.979l-2.009 1.923zm6.328-14.835c-1.067 0-1.935-.304-2.605-.913-.67-.63-1.004-1.413-1.004-2.347 0-.935.335-1.707 1.004-2.315.67-.63 1.538-.946 2.605-.946 1.046 0 1.904.315 2.573.946.67.608 1.004 1.38 1.004 2.315 0 .934-.334 1.717-1.004 2.347-.67.609-1.527.913-2.573.913zm-3.358 17.574c-.502 0-.753-.206-.753-.62v-.13c0-.26.21-.663.628-1.206s.627-1.087.627-1.63v-6.195c0-.565-.209-1.109-.627-1.63-.419-.544-.628-.914-.628-1.11v-.13c0-.26.24-.51.722-.75l4.738-2.412c.44-.196.785-.218 1.036-.065.251.152.377.402.377.75v11.542c0 .543.23 1.086.69 1.63.481.543.722.945.722 1.206v.13c0 .413-.262.62-.785.62zm15.394.326c-1.59 0-2.844-.522-3.765-1.565-.9-1.043-1.35-2.532-1.35-4.467v-7.727h-1.192a.774.774 0 0 1 -.533-.196.843.843 0 0 1 -.189-.554v-.717c0-.5.241-.75.722-.75h.596c.963 0 1.79-.294 2.48-.88.69-.61 1.14-1.413 1.349-2.413.105-.565.387-.848.847-.848h.722c.565 0 .847.283.847.848v3.293h3.233c.209 0 .376.076.502.228.146.13.22.304.22.522v.717a.77.77 0 0 1 -.22.554.665.665 0 0 1 -.502.196h-3.233v7.825c0 .543.136.978.408 1.304.272.305.607.457 1.004.457.9 0 1.59-.402 2.072-1.207.146-.195.313-.304.502-.326.188-.043.345-.01.47.098.147.109.22.26.22.457 0 1.369-.47 2.575-1.412 3.619-.92 1.021-2.186 1.532-3.798 1.532z"/>
          </svg>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <h2 className="text-5xl font-bold">
            Explore by <span className="text-[#56a9f3]">category</span>
          </h2>
          <Link href="#" className="text-sm text-[#463fe2]">Show all jobs →</Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          <div className="bg-white text-black p-6 flex flex-col">
            <Brush className="w-14 h-14 text-[#443fd5]" />
            <h3 className="mt-6 text-2xl font-semibold text-[#25314b]">Design</h3>
            <p className="text-gray-500 text-lg mt-1 flex justify-between">
              259 jobs available
              <Link href="#"><ArrowRight className="text-[#25314b]" /></Link>
            </p>
            
          </div>

          <div className="bg-white text-black p-6 flex flex-col">
            <Briefcase className="w-14 h-14 text-[#443fd5]" />
            <h3 className="mt-6 text-2xl font-semibold text-[#25314b]">Sales</h3>
            <p className="text-gray-500 text-lg mt-1 flex justify-between">
              305 jobs available
              <Link href="#"><ArrowRight className="text-[#25314b]" /></Link>
            </p>
          </div>

          <div className="bg-[#463fde] text-white p-6 flex flex-col">
            <Megaphone className="w-14 h-14" />
            <h3 className="mt-6 text-2xl font-semibold">Marketing</h3>
            <p className="text-lg mt-1 flex justify-between">
              180 jobs available
              <Link href="#"><ArrowRight /></Link>              
            </p>
          </div>

          <div className="bg-white text-black p-6 flex flex-col">
            <Wallet className="w-14 h-14 text-[#443fd5]" />
            <h3 className="mt-6 text-2xl font-semibold text-[#25314b]">Finance</h3>
            <p className="text-gray-500 text-lg mt-1 flex justify-between">
              250 jobs available
              <Link href="#"><ArrowRight className="text-[#25314b]" /></Link>
            </p>
          </div>

          <div className="bg-white text-black p-6 flex flex-col">
            <Laptop className="w-14 h-14 text-[#443fd5]" />
            <h3 className="mt-6 text-2xl font-semibold text-[#25314b]">Technology</h3>
            <p className="text-gray-500 text-lg mt-1 flex justify-between">
              420 jobs available
              <Link href="#"><ArrowRight className="text-[#25314b]" /></Link>              
            </p>
          </div>

          <div className="bg-white text-black p-6 flex flex-col">
            <Cog className="w-14 h-14 text-[#443fd5]" />
            <h3 className="mt-6 text-2xl font-semibold text-[#25314b]">Engineering</h3>
            <p className="text-gray-500 text-lg mt-1 flex justify-between">
              547 jobs available
              <Link href="#"><ArrowRight className="text-[#25314b]" /></Link>              
            </p>
          </div>

          <div className="bg-white text-black p-6 flex flex-col">
            <BarChart className="w-14 h-14 text-[#443fd5]" />
            <h3 className="mt-6 text-2xl font-semibold text-[#25314b]">Business</h3>
            <p className="text-gray-500 text-lg mt-1 flex justify-between">
              211 jobs available
              <Link href="#"><ArrowRight className="text-[#25314b]" /></Link>              
            </p>
          </div>

          <div className="bg-white text-black p-6 flex flex-col">
            <Users className="w-14 h-14 text-[#443fd5]" />
            <h3 className="mt-6 text-2xl font-semibold text-[#25314b]">Human Resource</h3>
            <p className="text-gray-500 text-lg mt-1 flex justify-between">
              345 jobs available
              <Link href="#"><ArrowRight className="text-[#25314b]" /></Link>             
            </p>
          </div>
        </div>

        <div className="bg-[#463fde] p-14 mt-16 flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-md">
            <h3 className="text-5xl font-bold">Start posting <br /> jobs today</h3>
            <p className="mt-5 text-lg">
              Start posting jobs for only $99. 
            </p>
            <Link href="#" className="block mt-6 bg-white max-w-44 text-[#453cdf] px-6 py-4 font-semibold">
              Sign Up for Free
            </Link>
          </div>

          <div className="mt-6 md:mt-0">
            <Image
              src="/hero/dashboard.png"
              alt="Dashboard"
              width={500}
              height={350}
            />
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="min-h-screen px-8 py-12">
        <div className="mt-8 mb-8 flex items-center justify-between">
          <h2 className="text-5xl font-bold">
            Features <span className="text-[#56a9f3]">Jobs</span>
          </h2>
          <button className="text-sm text-[#463fe2]">Show all jobs →</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 1 */}
          <div className="bg-white text-black p-6">
            <a href="#">
              <div className="flex justify-between items-start">
                <Image src="/logos/revolut.jpg" alt="Revolut" width={40} height={40} />
                <span className="border border-[#4745b0] text-[#4745b0] text-md px-2 py-1">
                  Full Time
                </span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[#22334d]">Email Marketing</h3>
              <p className="text-gray-500 text-md mt-1">Revolut • Madrid, Spain</p>
              <p className="text-gray-400 text-md mt-3">
                Revolut is looking for Email Marketing to help team ma...
              </p>
              <div className="flex gap-2 mt-4">
                <span className="text-md px-3 py-1 rounded-full bg-orange-50 text-orange-500">Marketing</span>
                <span className="text-md px-3 py-1 rounded-full bg-green-50 text-green-500">Design</span>
              </div>
            </a>
          </div>


          {/* 2 */}
          <div className="bg-white text-black p-6">
            <a href="#">
              <div className="flex justify-between items-start">
                <Image src="/logos/dropbox.png" alt="Dropbox" width={40} height={40} />
                <span className="border border-[#4745b0] text-[#4745b0] text-md px-2 py-1">
                  Full Time
                </span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[#22334d]">Brand Designer</h3>
              <p className="text-gray-500 text-md mt-1">Dropbox • San Francisco, US</p>
              <p className="text-gray-400 text-md mt-3">
                Dropbox is looking for Brand Designer to help the team t...
              </p>
              <div className="flex gap-2 mt-4">
                <span className="text-md px-3 py-1 rounded-full bg-green-50 text-green-500">Design</span>
                <span className="text-md px-3 py-1 rounded-full bg-purple-50 text-purple-500">Business</span>
              </div>
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-white text-black p-6">
            <a href="#">
              <div className="flex justify-between items-start">
                <Image src="/logos/pitch.png" alt="Pitch" width={40} height={40} />
                <span className="border border-[#4745b0] text-[#4745b0] text-md px-2 py-1">
                  Full Time
                </span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[#22334d]">Email Marketing</h3>
              <p className="text-gray-500 text-md mt-1">Pitch • Berlin, Germany</p>
              <p className="text-gray-400 text-md mt-3">
                Pitch is looking for Customer Manager to join marketing t...
              </p>
              <div className="flex gap-2 mt-4">
                <span className="text-md px-3 py-1 rounded-full bg-orange-50 text-orange-500">Marketing</span>
              </div>
            </a>
          </div>

          {/* Card 4 */}
          <div className="bg-white text-black p-6">
            <a href="#">
              <div className="flex justify-between items-start">
                <Image src="/logos/blinkist.png" alt="Blinkist" width={40} height={40} />
                <span className="border border-[#4745b0] text-[#4745b0] text-md px-2 py-1">
                  Full Time
                </span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[#22334d]">Visual Designer</h3>
              <p className="text-gray-500 text-md mt-1">Blinkist • Granada, Spain</p>
              <p className="text-gray-400 text-md mt-3">
                Blinkist is looking for Visual Designer to help team desi...
              </p>
              <div className="flex gap-2 mt-4">
                <span className="text-md px-3 py-1 rounded-full bg-green-50 text-green-500">Design</span>
              </div>
            </a>
          </div>

          {/* Card 5 */}
          <div className="bg-white text-black p-6">
            <a href="#">
              <div className="flex justify-between items-start">
                <Image src="/logos/classpass.jpg" alt="ClassPass" width={40} height={40} />
                <span className="border border-[#4745b0] text-[#4745b0] text-md px-2 py-1">
                  Full Time
                </span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[#22334d]">Product Designer</h3>
              <p className="text-gray-500 text-md mt-1">ClassPass • Manchester, UK</p>
              <p className="text-gray-400 text-md mt-3">
                ClassPass is looking for Product Designer to help us...
              </p>
              <div className="flex gap-2 mt-4">
                <span className="text-md px-3 py-1 rounded-full bg-orange-50 text-orange-500">Marketing</span>
                <span className="text-md px-3 py-1 rounded-full bg-green-50 text-green-500">Design</span>
              </div>
            </a>
          </div>

          {/* Card 6 */}
          <div className="bg-white text-black p-6">
            <a href="#">
              <div className="flex justify-between items-start">
                <Image src="/logos/canva.png" alt="Canva" width={40} height={40} />
                <span className="border border-[#4745b0] text-[#4745b0] text-md px-2 py-1">
                  Full Time
                </span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[#22334d]">Lead Designer</h3>
              <p className="text-gray-500 text-md mt-1">Canva • Ontario, Canada</p>
              <p className="text-gray-400 text-md mt-3">
                Canva is looking for Lead Engineer to help develop n...
              </p>
              <div className="flex gap-2 mt-4">
                <span className="text-md px-3 py-1 rounded-full bg-green-50 text-green-500">Design</span>
                <span className="text-md px-3 py-1 rounded-full bg-purple-50 text-purple-500">Business</span>
              </div>
            </a>
          </div>

          {/* Card 7 */}
          <div className="bg-white text-black p-6">
            <a href="#">
              <div className="flex justify-between items-start">
                <Image src="/logos/godaddy.png" alt="GoDaddy" width={40} height={40} />
                <span className="border border-[#4745b0] text-[#4745b0] text-md px-2 py-1">
                  Full Time
                </span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[#22334d]">Brand Strategist</h3>
              <p className="text-gray-500 text-md mt-1">GoDaddy • Marseille, France</p>
              <p className="text-gray-400 text-md mt-3">
                GoDaddy is looking for Brand Strategist to join the team...
              </p>
              <div className="flex gap-2 mt-4">
                <span className="text-md px-3 py-1 rounded-full bg-orange-50 text-orange-500">Marketing</span>
              </div>
            </a>
          </div>

          {/* Card 8 */}
          <div className="bg-white text-black p-6">
            <a href="#">
              <div className="flex justify-between items-start">
                <Image src="/logos/twitter.jpg" alt="Twitter" width={40} height={40} />
                <span className="border border-[#4745b0] text-[#4745b0] text-md px-2 py-1">
                  Full Time
                </span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[#22334d]">Data Analyst</h3>
              <p className="text-gray-500 text-md mt-1">Twitter • San Diego, US</p>
              <p className="text-gray-400 text-md mt-3">
                Twitter is looking for Data Analyst to help team desi...
              </p>
              <div className="flex gap-2 mt-4">
                <span className="text-md px-3 py-1 rounded-full bg-red-50 text-red-500">Technology</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold text-white">
              Latest <span className="text-[#54a5fd]">jobs open</span>
            </h2>
            <a href="#" className="flex items-center text-[#413ace]">
              Show all jobs <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

            {/* 1 */}
            <div className="bg-white p-6 flex items-start justify-between">
              <a href="#">
                <div className="grid grid-cols-3">
                  <div className="col-span-1 gap-2">
                    <Image
                      src="/logos/dropbox.png"
                      alt="Nomad"
                      width={42}
                      height={42}
                    />
                  </div>
                  <div className="col-span-2">
                    <h3 className="text-xl font-semibold text-[#28324a]">Social Media Assistant</h3>
                    <p className="text-gray-500 text-md mt-1">Nomad • Paris, France</p>
                    <div className="flex gap-2 mt-3">
                      <span className="px-3 py-1 text-sm rounded-full bg-green-50 text-green-500">
                        Full-Time
                      </span>
                      <span className="px-3 py-1 text-sm rounded-full border border-orange-500 bg-orange-50 text-orange-500">
                        Marketing
                      </span>
                      <span className="px-3 py-1 text-sm rounded-full border border-purple-500 bg-purple-50 text-purple-500">
                        Design
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* 2 */}
            <div className="bg-white p-6 flex items-start justify-between">
              <a href="#">
                <div className="grid grid-cols-3">
                  <div className="col-span-1 gap-2">
                    <Image
                      src="/logos/dropbox.png"
                      alt="Netlify"
                      width={42}
                      height={42}
                    />
                  </div>
                  <div className="col-span-2">
                    <h3 className="text-xl font-semibold text-[#28324a]">Social Media Assistant</h3>
                    <p className="text-gray-500 text-md mt-1">
                      Netlify • Paris, France
                    </p>
                    <div className="flex gap-2 mt-3">
                      <span className="px-3 py-1 text-sm rounded-full bg-green-50 text-green-500">
                        Full-Time
                      </span>
                      <span className="px-3 py-1 text-sm rounded-full border border-orange-500 bg-orange-50 text-orange-500">
                        Marketing
                      </span>
                      <span className="px-3 py-1 text-sm rounded-full border border-purple-500 bg-purple-50 text-purple-500">
                        Design
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* 3 */}
            <div className="bg-white p-6 flex items-start justify-between">
              <a href="#">
                <div className="grid grid-cols-3">
                  <div className="col-span-1 gap-2">
                    <Image
                      src="/logos/dropbox.png"
                      alt="Dropbox"
                      width={42}
                      height={42}
                    />
                  </div>
                  <div className="col-span-2">
                    <h3 className="text-xl font-semibold text-[#28324a]">Brand Designer</h3>
                    <p className="text-gray-500 text-md mt-1">
                      Dropbox • San Francisco, USA
                    </p>
                    <div className="flex gap-2 mt-3">
                      <span className="px-3 py-1 text-sm rounded-full bg-green-50 text-green-500">
                        Full-Time
                      </span>
                      <span className="px-3 py-1 text-sm rounded-full broder border-orange-500 bg-orange-50 text-orange-500">
                        Marketing
                      </span>
                      <span className="px-3 py-1 text-sm rounded-full border border-purple-500 bg-purple-50 text-purple-500">
                        Design
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* 4 */}
            <div className="bg-white p-6 flex items-start justify-between">
              <a href="#">
                <div className="grid grid-cols-3">
                  <div className="col-span-1 gap-2">
                    <Image
                      src="/logos/dropbox.png"
                      alt="Maze"
                      width={42}
                      height={42}
                    />
                  </div>
                  <div className="col-span-2">
                    <h3 className="text-xl font-semibold text-[#28324a]">Brand Designer</h3>
                    <p className="text-gray-500 text-md mt-1">
                      Maze • San Francisco, USA
                    </p>
                    <div className="flex gap-2 mt-3">
                      <span className="px-3 py-1 text-sm rounded-full bg-green-50 text-green-500">
                        Full-Time
                      </span>
                      <span className="px-3 py-1 text-sm rounded-full border border-orange-500 bg-orange-50 text-orange-500">
                        Marketing
                      </span>
                      <span className="px-3 py-1 text-sm rounded-full border border-purple-500 bg-purple-50 text-purple-500">
                        Design
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* 5 */}
            <div className="bg-white p-6 flex items-start justify-between">
              <a href="#">
                <div className="grid grid-cols-3">
                  <div className="col-span-1 gap-2">
                    <Image
                      src="/logos/dropbox.png"
                      alt="Terraform"
                      width={42}
                      height={42}
                    />
                  </div>
                  <div className="col-span-2">
                    <h3 className="text-xl font-semibold text-[#28324a]">Interactive Developer</h3>
                    <p className="text-gray-500 text-md mt-1">
                      Terraform • Hamburg, Germany
                    </p>
                    <div className="flex gap-2 mt-3">
                      <span className="px-3 py-1 text-sm rounded-full bg-green-50 text-green-500">
                        Full-Time
                      </span>
                      <span className="px-3 py-1 text-sm rounded-full border border-orange-500 bg-orange-50 text-orange-500">
                        Marketing
                      </span>
                      <span className="px-3 py-1 text-sm rounded-full border border-purple-500 bg-purple-50 text-purple-500">
                        Design
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* 6 */}
            <div className="bg-white p-6 flex items-start justify-between">
              <a href="#">
                <div className="grid grid-cols-3">
                  <div className="col-span-1 gap-2">
                    <Image
                      src="/logos/dropbox.png"
                      alt="Udacity"
                      width={42}
                      height={42}
                    />
                  </div>
                  <div className="col-span-2">
                    <h3 className="text-xl font-semibold text-[#28324a]">Interactive Developer</h3>
                    <p className="text-gray-500 text-md mt-1">
                      Udacity • Hamburg, Germany
                    </p>
                    <div className="flex gap-2 mt-3">
                      <span className="px-3 py-1 text-sm rounded-full bg-green-50 text-green-500">
                        Full-Time
                      </span>
                      <span className="px-3 py-1 text-sm rounded-full border border-orange-500 bg-orange-50 text-orange-500">
                        Marketing
                      </span>
                      <span className="px-3 py-1 text-sm rounded-full border border-purple-500 bg-purple-50 text-purple-500">
                        Design
                      </span>
                    </div>
                  </div>  
                </div>
              </a>
            </div>

            {/* 7 */}
            <div className="bg-white p-6 flex items-start justify-between">
              <a href="#">
                <div className="grid grid-cols-3">
                  <div className="col-span-1 gap-2">
                    <Image
                      src="/logos/dropbox.png"
                      alt="Packer"
                      width={42}
                      height={42}
                    />
                  </div>
                  <div className="col-span-2">
                    <h3 className="text-xl font-semibold text-[#28324a]">HR Manager</h3>
                    <p className="text-gray-500 text-md mt-1">
                      Packer • Lucern, Switzerland
                    </p>
                    <div className="flex gap-2 mt-3">
                      <span className="px-3 py-1 text-sm rounded-full bg-green-50 text-green-500">
                        Full-Time
                      </span>
                      <span className="px-3 py-1 text-sm rounded-full border border-orange-500 bg-orange-50 text-orange-500">
                        Marketing
                      </span>
                      <span className="px-3 py-1 text-sm rounded-full border border-purple-500 bg-purple-50 text-purple-500">
                        Design
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* 8 */}
            <div className="bg-white p-6 flex items-start justify-between">
              <a href="#">
                <div className="grid grid-cols-3">
                  <div className="col-span-1 gap-2">
                    <Image
                      src="/logos/dropbox.png"
                      alt="Webflow"
                      width={42}
                      height={42}
                    />
                  </div>
                  <div className="col-span-2">
                    <h3 className="text-xl font-semibold text-[#28324a]">HR Manager</h3>
                    <p className="text-gray-500 text-md mt-1">
                      Webflow • Lucern, Switzerland
                    </p>
                    <div className="flex gap-2 mt-3">
                      <span className="px-3 py-1 text-sm rounded-full bg-green-50 text-green-500">
                        Full-Time
                      </span>
                      <span className="px-3 py-1 text-sm rounded-full border border-orange-500 bg-orange-50 text-orange-500">
                        Marketing
                      </span>
                      <span className="px-3 py-1 text-sm rounded-full border border-purple-500 bg-purple-50 text-purple-500">
                        Design
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
