import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <div className=" h-96 bg-black text-white rounded-t-3xl border-t-2 border-zinc-100 shadow-xl ">
      <div className="container px-6 md:mx-auto flex items-center h-full">
        <div className="flex flex-col gap-5">
          <div className="font-bold text-3xl md:text-5xl">
            Let's Work Together
          </div>
          <div className=" text-lg md:text-3xl font-semibold">
            Get free consultation now!
          </div>
          <div className="flex gap-3">
            <Link
              href={
                "https://api.whatsapp.com/send/?phone=6289668247663&text&type=phone_number&app_absent=0"
              }
            >
              <div className="size-12 bg-white rounded-full flex items-center justify-center text-black text-2xl">
                <FaWhatsapp />
              </div>
            </Link>
            <Link href={"https://github.com/ditonatael"}>
              <div className="size-12 bg-white rounded-full flex items-center justify-center text-black text-2xl">
                <FaGithub />
              </div>
            </Link>
            <Link
              href={"https://www.linkedin.com/in/handito-natael-83268028b/"}
            >
              <div className="size-12 bg-white rounded-full flex items-center justify-center text-black text-2xl">
                <FaLinkedinIn />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
