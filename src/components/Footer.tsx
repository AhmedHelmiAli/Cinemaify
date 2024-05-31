import { FaTwitter, FaGithub } from "react-icons/fa6";
import { TiSocialFacebook } from "react-icons/ti";
import { RiDiscordFill } from "react-icons/ri";
import { FaDribbble } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" p-2 sm:px-4  sm:py-4 h-[6rem] mt-auto bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
        © 2023 Cinemaify™. All Rights Reserved.
      </span>
      <div className="flex mt-4 space-x-5 text-xl text-slate-400 sm:justify-center md:mt-0 rtl:space-x-reverse">
        <span className="cursor-pointer hover:text-slate-900">
          <TiSocialFacebook />
        </span>
        <span className="cursor-pointer hover:text-slate-900">
          <RiDiscordFill />
        </span>
        <span className="cursor-pointer hover:text-slate-900">
          <FaTwitter />
        </span>
        <span className="cursor-pointer hover:text-slate-900">
          <FaGithub />
        </span>
        <span className="cursor-pointer hover:text-slate-900">
          <FaDribbble />
        </span>
      </div>
    </footer>
  );
}
