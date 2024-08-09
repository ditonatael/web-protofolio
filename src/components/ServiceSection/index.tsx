import Link from "next/link";

export default function ServiceSection() {
  return (
    <div className=" py-36 container px-5 lg:mx-auto">
      <div
        className="flex items-center justify-center text-3xl font-bold text-zinc-800"
        id="service"
      >
        Web Services
      </div>
      <div className="flex flex-col gap-4 items-center lg:flex lg:flex-row justify-around pt-12">
        <div className="shadow-lg shadow-zinc-300 rounded-lg w-full lg:w-96 h-56 bg-zinc-50 flex flex-col justify-center items-start gap-3 px-5">
          <div className="text-3xl font-bold text-zinc-800">
            Company Profile
          </div>
          <div className="text-left">
            Perfect for showcase your company to the world.
          </div>
          <div>
            <Link
              href={
                "https://api.whatsapp.com/send/?phone=6289668247663&text&type=phone_number&app_absent=0"
              }
            >
              <button className="border-2 border-black hover:bg-black hover:text-white w-40 h-10 rounded-full text-sm">
                Free Consultation
              </button>
            </Link>
          </div>
        </div>
        <div className="shadow-lg shadow-zinc-300 rounded-lg w-full lg:w-96 h-56 bg-zinc-50 flex flex-col justify-center items-start gap-3 px-5">
          <div className="text-3xl font-bold text-zinc-800">Landing Page</div>
          <div className="text-left">
            Get more sales now with stunning and converting landing page.
          </div>
          <div>
            <Link
              href={
                "https://api.whatsapp.com/send/?phone=6289668247663&text&type=phone_number&app_absent=0"
              }
            >
              <button className="border-2 border-black hover:bg-black hover:text-white w-40 h-10 rounded-full text-sm">
                Free Consultation
              </button>
            </Link>
          </div>
        </div>
        <div className="shadow-lg shadow-zinc-300 rounded-lg w-full lg:w-96 h-56 bg-zinc-50 flex flex-col justify-center items-start gap-3 px-5">
          <div className="text-3xl font-bold text-zinc-800">Custom Service</div>
          <div className="text-left">
            Need custom service for your business? Lets talk now.
          </div>
          <div>
            <Link
              href={
                "https://api.whatsapp.com/send/?phone=6289668247663&text&type=phone_number&app_absent=0"
              }
            >
              <button className="border-2 border-black hover:bg-black hover:text-white w-40 h-10 rounded-full text-sm">
                Free Consultation
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
