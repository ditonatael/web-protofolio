import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function IntroductionSection() {
  return (
    <div className="min-h-screen w-full">
      <div className="bg-neutral-950 min-h-screen w-full relative">
        <div className="text-white h-full w-full absolute z-30 flex items-center">
          <div className="container mx-10 md:mx-auto text-white">
            <div className="text-7xl font-bold">Handito Natael</div>
            <div className="bg-zinc-400 h-2 w-1/3"></div>
            <div className="text-3xl font-semibold opacity-60 italic">
              Full-stack Web Developer
            </div>
            <div className="pt-7 text-base font-medium opacity-90">
              Designs, builds, and maintains websites and web applications.
              Proficient in front-end <br /> (HTML, CSS, JavaScript) and
              back-end (Node.js, Express.js) development. Collaborates <br />
              effectively and stays updated with industry trends.
            </div>
            <div className="flex gap-7 items-end md:justify-end w-3/4 lg:w-1/2 pt-7">
              <Link href={"https://github.com/ditonatael"}>
                <div>
                  <FaGithub className="w-10 h-10" />
                </div>
              </Link>
              <Link
                href={"https://www.linkedin.com/in/handito-natael-83268028b/"}
              >
                <div>
                  <FaLinkedin className="w-10 h-10" />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <Image
          src={"/sky.jpg"}
          fill={true}
          alt="Picture"
          className="opacity-70 object-cover"
        />
      </div>
    </div>
  );
}
