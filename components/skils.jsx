import { motion } from "framer-motion";
import Link from "next/link";
import {
  SiTailwindcss,
  SiFirebase,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3
} from "react-icons/si"

const Skils = () => {
  return (
    <div id="skills" className="w-full">
      <Link href="https://www.linkedin.com/in/emanuel-lopez-developer/details/certifications/" className="max-w-[1100px] mx-2 md:mx-auto flex flex-col justify-center h-full shadow-base shadow-white group hover:bg-gradient-to-r ">
        <motion.div
          className=""
          initial="hidden"
          whileInView="visible"
          viewport={ { once: true, amount: 0.5 } }
          transition={ { delay: 0.2, duration: 0.5 } }
          variants={ {
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          } }
        >
        <header className="flex justify-center mt-2 mb-3 md:mt-8 md:mb-12">
        <h2 className="py-4 mb-4 text-3xl font-semibold text-red-300 font-poppins sm:text-4xl md:text-5xl">Tecnologias</h2>
        </header>
          
          <div className="grid grid-cols-2 gap-8 text-white cursor-pointer lg:grid-cols-4 ">
            <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 hover:text-red-500">
              <div className="grid items-center justify-center grid-cols-2 gap-4">
                <div className="m-auto">
                  <SiHtml5 className='text-4xl md:text-6xl' />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="titulo-secundary text-md md:text-xl ">HTML</h3>
                </div>
              </div>
            </div>
            <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 hover:text-blue-400">
              <div className="grid items-center justify-center grid-cols-2 gap-4">
                <div className="m-auto">
                  <SiCss3 className='text-4xl md:text-6xl' />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="titulo-secundary text-md md:text-xl ">CSS</h3>
                </div>
              </div>
            </div>
            <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 hover:text-yellow-400">
              <div className="grid items-center justify-center grid-cols-2 gap-4">
                <div className="m-auto">
                  <SiJavascript className='text-4xl md:text-6xl' />
                </div>
                <div className="flex flex-col items-center justify-center px-9">
                  <h3 className="text-sm titulo-secundary text-md md:text-xl ">JavaScript</h3>
                </div>
              </div>
            </div>
            <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 hover:text-blue-300 ">
              <div className="grid items-center justify-center grid-cols-2 gap-4">
                <div className="m-auto">
                  <SiReact className='text-4xl md:text-6xl' />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="titulo-secundary text-md md:text-xl ">React</h3>
                </div>
              </div>
            </div>
            <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 hover:text-blue-300">
              <div className="grid items-center justify-center grid-cols-2 gap-4">
                <div className="m-auto">
                  <SiTailwindcss className='text-4xl md:text-6xl' />
                </div>
                <div className="flex flex-col items-center justify-center px-7">
                  <h3 className="titulo-secundary text-md md:text-xl ">Tailwind</h3>
                </div>
              </div>
            </div>
            <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 hover:text-yellow-600">
              <div className="grid items-center justify-center grid-cols-2 gap-4">
                <div className="m-auto">
                  <SiFirebase className='text-4xl md:text-6xl' />
                </div>
                <div className="flex flex-col items-center justify-center px-6">
                  <h3 className="titulo-secundary text-md md:text-xl ">Firebase</h3>
                </div>
              </div>
            </div>

            <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 hover:text-gray-300">
              <div className="grid items-center justify-center grid-cols-2 gap-4">
                <div className="m-auto">
                  <SiNextdotjs className='text-4xl md:text-6xl' />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-md md:text-xl titulo-secundary">Next</h3>
                </div>
              </div>
            </div>
            <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 hover:text-green-500">
              <div className="grid items-center justify-center grid-cols-2 gap-2">
                <div className="m-auto">
                  <SiNodedotjs className='text-4xl md:text-6xl' />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="titulo-secundary text-md md:text-xl ">Node</h3>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    </div>
  );
};

export default Skils;
