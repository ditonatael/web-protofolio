import Image from "next/image";

export default function Efnote() {
  return (
    <div className="h-screen w-full bg-sky-950">
      <div className="text-white h-full w-full">
        <div className="lg:container h-full mx-10 md:mx-auto pt-10">
          <div className="hidden md:block">
            <div className="text-2xl font-bold">Efnote</div>
            <div className="h-1 w-32 bg-zinc-300"></div>
          </div>
          <div className="h-5/6  flex flex-col  md:flex-row md:items-center md:justify-around md:gap-10 md:px-24 md:mt-12">
            <div className="flex md:flex-col gap-3">
              <div className="w-96 h-52 relative">
                <Image
                  src={"/efnote-1.png"}
                  fill={true}
                  alt="Picture"
                  className="object-cover"
                />
              </div>
              <div className="w-96 h-52 hidden relative md:block">
                <Image
                  src={"/efnote-2.png"}
                  fill={true}
                  alt="Picture"
                  className="object-cover"
                />
              </div>
              <div className="w-96 h-52 hidden relative md:block">
                <Image
                  src={"/efnote-3.png"}
                  fill={true}
                  alt="Picture"
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <div className="text-lg py-3 italic font-semibold">
                Efnote | Company Profile
              </div>
              <div className="h-1 w-52 bg-zinc-300"></div>
              <div className="py-3 text-wrap w-72 md:w-96">
                For the Efnote project, I developed a comprehensive company
                profile website aimed at enhancing their online presence and
                showcasing their products. My task was to create a user-friendly
                website. I focused on designing an intuitive website layout that
                facilitated easy navigation and information accessibility.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
