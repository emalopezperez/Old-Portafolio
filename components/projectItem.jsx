import Image from "next/image";
import Link from "next/link";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ProjectItem = ({ title, backgroundImg, tech, projectUrl }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      
      className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-500 rounded-xl group hover:bg-gradient-to-r bg-gray-300 "
    >
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-black  text-center">{title}</h3>
        <p className="pb-4 pt-2 text-black text-center">{tech}</p>
        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-lg boton text-black  text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
