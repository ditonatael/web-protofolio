import Image from "next/image";

export default function Roomer() {
  return (
    <div className="h-screen w-full bg-neutral-900">
      <div className="text-white h-full w-full">
        <div className="lg:container h-full mx-10 md:mx-auto pt-10">
          <div className="hidden md:block">
            <div className="text-2xl font-bold">Roomer</div>
            <div className="h-1 w-32 bg-zinc-300"></div>
          </div>
          <div className="h-5/6  flex flex-col  md:flex-row md:items-center md:justify-around md:gap-10 md:px-24 md:mt-12">
            <div className="flex md:flex-col gap-3">
              <div className="w-96 h-52 relative">
                <Image
                  src={"/roomer-1.png"}
                  fill={true}
                  alt="Picture"
                  className="object-cover"
                />
              </div>
              <div className="w-96 h-52 hidden relative md:block">
                <Image
                  src={"/roomer-2.png"}
                  fill={true}
                  alt="Picture"
                  className="object-cover"
                />
              </div>
              <div className="w-96 h-52 hidden relative md:block">
                <Image
                  src={"/roomer-3.png"}
                  fill={true}
                  alt="Picture"
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <div className="text-lg py-3 italic font-semibold">
                Roomer | Property Renting App
              </div>
              <div className="h-1 w-52 bg-zinc-300"></div>
              <div className="py-3 text-wrap w-72 md:w-96">
                In the Roomer project, I developed a property renting app using
                Firebase Auth for secure signup/signin, including social media
                accounts like Google. I implemented role-based authorization,
                user profile management, and dynamic listing features, including
                seasonal pricing and availability management. This created a
                secure, user-friendly platform for property management.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
