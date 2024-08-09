"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed w-full bg-white rounded-b-3xl border-b-2 border-zinc-100 h-20 shadow-xl z-50">
      <div className="h-full w-full md:pr-10 flex justify-center md:justify-end gap-7 items-center text-black font-bold ">
        <Link href="#about" scroll={true}>
          <span className="hover:cursor-pointer">About</span>
        </Link>
        <Link href="#project" scroll={true}>
          <span className="hover:cursor-pointer">Project</span>
        </Link>
        <Link href="#service" scroll={true}>
          <span className="hover:cursor-pointer">Service</span>
        </Link>
      </div>
    </div>
  );
}
