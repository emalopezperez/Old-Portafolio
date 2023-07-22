import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaUserAstronaut } from "react-icons/fa";

const Nav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
  }, []);

  function scrollFunction() {
    if (document.getElementById("navbar")) {
      if (window.scrollY >= 10) {
        document.getElementById("navbar").classList.add("shadow-navbar");
        document.getElementById("navbar").classList.add("bg-[#01070c]");
        document
          .getElementById("title-color-mobil")
          .classList.add("text-white");
        document
          .getElementById("title-color-boton")
          .classList.add("text-white");
      } else {
        document.getElementById("navbar").classList.remove("shadow-navbar");
        document.getElementById("navbar").classList.remove("bg-[#01070c]");
        document
          .getElementById("title-color-mobil")
          .classList.remove("text-white");
        document
          .getElementById("title-color-boton")
          .classList.remove("text-white");
      }
    }
  }

  return (
    <nav
      id="navbar"
      data-scroll
      data-scroll-id="hey"
      className="fixed top-0 z-40 w-screen px-20 py-4 transition duration-300 ease-in-out shadow-navbar ">
      <div className="">
        <div className="flex-wrap items-center justify-between hidden px-4 -mt-2 -ml-4 lg:flex sm:flex-nowrap">
          <motion.div
            className=""
            animate={{ y: [4, -4] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}>
            <Link
              id="title-color"
              href="/"
              className="mx-4 mt-2 text-2xl font-bold leading-6 text-gray-200 transition duration-300 ease-in-out hover:border-white-900 font_titulos hover:text-red-300">
              <FaUserAstronaut className="" />
            </Link>
          </motion.div>

          <div
            id="text-color"
            className="flex-shrink-0 mt-2 ml-4 text-white text-md font_titulos">
            <Link
              href="/"
              className="inline-flex mx-4 font-semibold transition duration-300 ease-in-out eading-6 hover:text-red-300">
              Inicio
            </Link>
            <Link
              href="/#projects"
              className="inline-flex mx-4 font-semibold transition duration-300 ease-in-out eading-6 hover:text-red-300">
              Proyectos
            </Link>
            <Link
              href="/#about"
              className="inline-flex mx-4 text-sm font-semibold transition duration-300 ease-in-out eading-6 hover:text-red-300">
              Sobre mi
            </Link>
            <Link
              href="/#blog"
              className="inline-flex mx-4 text-sm font-semibold transition duration-300 ease-in-out eading-6 hover:text-red-300">
              Blog
            </Link>
            <Link
              href="/#skills"
              className="inline-flex mx-4 text-sm font-semibold transition duration-300 ease-in-out eading-6 hover:text-red-300">
              Skills
            </Link>
            <Link
              href="/#contact"
              className="inline-flex mx-4 text-sm font-semibold transition duration-300 ease-in-out eading-6 hover:text-red-300">
              Contacto
            </Link>
          </div>
        </div>
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-[#01070c] "
              : ""
          }>
          {/* Side Drawer Menu */}
          <div
            className={
              nav
                ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen  p-10 ease-in duration-500 "
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }>
            <div className="flex items-center w-full gap-20 ">
              <Link href="/">
                <h1 className="text-3xl text-red-200">Portafolio</h1>
              </Link>
              <div
                onClick={handleNav}
                className="p-3 bg-white rounded-full shadow-lg cursor-pointer shadow-gray-400">
                <AiOutlineClose />
              </div>
            </div>
            <div className="pt-4 border-b border-gray-300">
              <p className="text-[9px] tracking-widest text-white uppercase">
                Construyamos juntos
              </p>
            </div>
            <div className="flex flex-col py-4 pt-12 text-white">
              <ul className="uppercase">
                <Link href="/">
                  <li onClick={() => setNav(false)} className="py-2 text-sm">
                    Inicio
                  </li>
                </Link>
                <Link href="/#projects">
                  <li onClick={() => setNav(false)} className="py-2 text-sm">
                    Proyectos
                  </li>
                </Link>
                <Link href="/#skills">
                  <li onClick={() => setNav(false)} className="py-2 text-sm">
                    Skills
                  </li>
                </Link>
                <Link href="/#about">
                  <li onClick={() => setNav(false)} className="py-2 text-sm">
                    Sobre mi
                  </li>
                </Link>
                <Link href="/#contact">
                  <li onClick={() => setNav(false)} className="py-2 text-sm">
                    Contacto
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between text-black aling-center lg:hidden sm:flex-nowrap">
        <div id="title-color-mobil" className="">
          <motion.div
            className=""
            animate={{ y: [4, -4] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}>
            {!nav && (
              <Link
                id="title-color"
                href="/"
                className="inline-flex mx-4 mt-2 text-2xl font-bold leading-6 text-gray-200 transition duration-300 ease-in-out hover:border-white-900 font_titulos hover:text-red-300">
                <FaUserAstronaut />
              </Link>
            )}
          </motion.div>
        </div>
        <button
          id="title-color-boton"
          onClick={handleNav}
          className="cursor-pointer md:hidden ">
          <AiOutlineMenu size={20} />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
