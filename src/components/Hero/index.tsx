import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="h-screen flex flex-col gap-3 items-center justify-center text-center">
      <div className="font-bold text-2xl text-zinc-800">
        Hi, My name is Dito 👋
      </div>
      <div className="text-center font-bold text-5xl md:text-7xl pt-3">
        I&apos;m a Fullstack <br /> Website Developer
      </div>
      <div className="text-2xl text-center pt-2">
        Ready to help your business grow with the power of technology.
      </div>
      <div className="flex gap-6 md:gap-12 pt-4">
        <Link
          href={
            "https://api.whatsapp.com/send/?phone=6289668247663&text&type=phone_number&app_absent=0"
          }
          target="_blank"
        >
          <button className="bg-black text-white hover:bg-white hover:text-black hover:border-2 border-black w-36 h-10 rounded-full">
            Contact Me
          </button>
        </Link>
        <Link href="#project" scroll={true}>
          <button className="border-2 border-black hover:bg-black hover:text-white w-36 h-10 rounded-full">
            My Project
          </button>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row gap-3 pt-10">
        <div className="flex items-center justify-around border w-40 h-16 rounded-md px-8 text-xl font-bold text-zinc-700 hover:text-white hover:bg-black">
          <div className="w-8 h-8 relative">
            <Image
              src={"/HTML.png"}
              fill={true}
              alt="HTML"
              className="object-cover duration-300 hover:scale-105 transition-transform"
            />
          </div>
          HTML
        </div>
        <div className="flex items-center justify-around border w-40 h-16 rounded-md px-10 text-xl font-bold text-zinc-700 hover:text-white hover:bg-black">
          <div className="w-8 h-8 relative">
            <Image
              src={"/CSS.png"}
              fill={true}
              alt="CSS"
              className="object-cover duration-300 hover:scale-105 transition-transform"
            />
          </div>
          CSS
        </div>
        <div className="flex items-center justify-around border w-40 h-16 rounded-md px-2 text-xl font-bold text-zinc-700 hover:text-white hover:bg-black">
          <div className="w-8 h-8 relative">
            <Image
              src={"/js.png"}
              fill={true}
              alt="JavaScript"
              className="object-cover duration-300 hover:scale-105 transition-transform"
            />
          </div>
          JavaScript
        </div>
      </div>
      {/* <div className="bg-green-500 rounded-full w-10 h-10 sticky"></div> */}
    </div>
  );
}
