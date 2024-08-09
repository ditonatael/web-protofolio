import Image from "next/image";
import Link from "next/link";

export default function AboutAndProject() {
  return (
    <div className="bg-zinc-100 mt-10 md:mt-0" id="about">
      <div className="h-auto container mx-auto py-16">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col gap-4 w-full lg:w-3/4">
            <div className=" text-3xl font-bold text-zinc-800 pt-2">
              About Me
            </div>
            <div className="text-left pt-6 text-lg">
              I'm a FullStack Web Developer who began my journey at Purwadhika
              in January 2024. I specialize in creating responsive web
              applications using front-end (HTML, CSS, JavaScript) and back-end
              (Node.js, Express.js) technologies.
            </div>
            <div className="text-left font-semibold text-xl pt-6">
              Dedicated to learning and collaboration, I stay current to deliver
              high-quality web solutions.
            </div>
          </div>
          <div className="w-full pt-7 lg:w-1/4 lg:pt-0 flex justify-center">
            <div className="w-80 h-80 rounded-lg relative">
              <Image
                src={"/ditonatael.jpg"}
                fill={true}
                alt="ditonatael"
                className="object-cover rounded-lg "
              />
            </div>
          </div>
        </div>
        <div className="pt-12 divider"></div>
        <div
          className="flex flex-col gap-6 items-center justify-center pt-12"
          id="project"
        >
          <div className="text-3xl font-bold text-zinc-800">My Latest Work</div>
          <div className="flex flex-col items-center px-5 lg:flex-row justify-around gap-7 w-full lg:px-0 pt-16">
            <div className="w-full h-40 md:h-80 rounded-lg relative">
              <Image
                src={"/roomer-1.png"}
                fill={true}
                alt="roomer"
                className="object-cover rounded-lg "
              />
            </div>
            <div className="w-full h-40 md:h-80 rounded-lg relative">
              <Image
                src={"/roomer-3.png"}
                fill={true}
                alt="roomer"
                className="object-cover rounded-lg "
              />
            </div>
          </div>
          <div className="pt-10">
            <Link href={"https://github.com/ditonatael"}>
              <button className="border-2 border-black hover:bg-black hover:text-white w-44 h-10 rounded-full">
                Check Github Repo
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
