"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed  w-full z-50 bg-transparent h-12">
      <div className="lg:container md:mx-auto w-full text-white flex justify-end items-center h-full">
        <div className="hidden pr-10 lg:pr-0 md:flex gap-7 text-lg font-semibold">
          <Link href="#skill" scroll={true}>
            <span className="hover:cursor-pointer text-white">Skills</span>
          </Link>
          <Link href="#project" scroll={true}>
            <span className="hover:cursor-pointer text-white">Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
