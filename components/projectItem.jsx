import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ProjectItem = ({ title, backgroundImg, tech, projectUrl }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="relative flex items-center justify-center w-full h-auto shadow-md bg-black/30 shadow-white rounded-xl group hover:bg-gradient-to-r"
    > <Link href={ projectUrl }>
        <Image
          className="rounded-xl group-hover:opacity-10"
          src={ backgroundImg }
          alt="/" />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-xl text-center text-white lg:text-3xl">{ title }</h3>
          <p className="pt-4 pb-4 text-center text-white lg:pt-8 lg:pb-8">{ tech }</p>
          <p className="py-2 text-lg text-center text-black bg-red-300 rounded-lg cursor-pointer ">
            More Info
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProjectItem;

