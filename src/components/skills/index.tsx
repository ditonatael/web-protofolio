import Image from "next/image";

export default function Skills() {
  return (
    <div className="h-screen w-full bg-neutral-900">
      <div className="text-white h-full w-full">
        <div className="lg:container h-full mx-5 md:mx-auto pt-10">
          <div>
            <div className="text-2xl font-bold text-white">My Skills</div>
            <div className="h-1 w-32 bg-zinc-300"></div>
          </div>
          <div className="h-5/6 px-4 sm:px-8 md:px-12 lg:px-24 mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 justify-items-center items-center bg-zinc-100 rounded-tr-3xl rounded-bl-3xl">
            <div className="w-16 h-16 sm:w-20 sm:h-20 relative">
              <Image
                src={"/JavaScript.png"}
                fill={true}
                alt="JavaScript"
                className="object-cover duration-300 hover:scale-105 transition-transform"
              />
            </div>
            <div className="w-16 h-16 sm:w-20 sm:h-20 relative">
              <Image
                src={"/TypeScript.webp"}
                fill={true}
                alt="TypeScript"
                className="object-cover duration-300 hover:scale-105 transition-transform"
              />
            </div>
            <div className="w-16 h-16 sm:w-20 sm:h-20 relative">
              <Image
                src={"/NextJs.svg"}
                fill={true}
                alt="Next.js"
                className="object-cover duration-300 hover:scale-105 transition-transform"
              />
            </div>
            <div className="w-16 h-16 sm:w-20 sm:h-20 relative">
              <Image
                src={"/TailwindCSS.svg"}
                fill={true}
                alt="Tailwind CSS"
                className="object-cover duration-300 hover:scale-105 transition-transform"
              />
            </div>
            <div className="w-16 h-16 sm:w-20 sm:h-20 relative">
              <Image
                src={"/Redux.svg"}
                fill={true}
                alt="Redux"
                className="object-cover duration-300 hover:scale-105 transition-transform"
              />
            </div>
            <div className="w-16 h-16 sm:w-20 sm:h-20 relative">
              <Image
                src={"/tanstack.png"}
                fill={true}
                alt="Tanstack"
                className="object-cover duration-300 hover:scale-105 transition-transform"
              />
            </div>
            <div className="w-16 h-16 sm:w-20 sm:h-20 relative">
              <Image
                src={"/ExpressJS.png"}
                fill={true}
                alt="ExpressJS"
                className="object-cover duration-300 hover:scale-105 transition-transform"
              />
            </div>
            <div className="w-16 h-16 sm:w-20 sm:h-20 relative">
              <Image
                src={"/NodeJS.png"}
                fill={true}
                alt="NodeJS"
                className="object-cover duration-300 hover:scale-105 transition-transform"
              />
            </div>
            <div className="w-16 h-16 sm:w-20 sm:h-20 relative">
              <Image
                src={"/MySQL.png"}
                fill={true}
                alt="MySQL"
                className="object-cover duration-300 hover:scale-105 transition-transform"
              />
            </div>
            <div className="w-16 h-16 sm:w-20 sm:h-20 relative">
              <Image
                src={"/prisma.png"}
                fill={true}
                alt="Prisma"
                className="object-cover duration-300 hover:scale-105 transition-transform"
              />
            </div>
            <div className="w-16 h-16 sm:w-20 sm:h-20 relative">
              <Image
                src={"/github.png"}
                fill={true}
                alt="GitHub"
                className="object-cover duration-300 hover:scale-105 transition-transform"
              />
            </div>
            <div className="w-16 h-16 sm:w-20 sm:h-20 relative">
              <Image
                src={"/postman.png"}
                fill={true}
                alt="Postman"
                className="object-cover duration-300 hover:scale-105 transition-transform"
              />
            </div>
            <div className="w-16 h-16 sm:w-20 sm:h-20 relative">
              <Image
                src={"/firebase.png"}
                fill={true}
                alt="Firebase"
                className="object-cover duration-300 hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
