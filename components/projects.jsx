import { useState } from "react";
import netflixImg from "../public/assets/projects/netflix.png";
import airbnb from "../public/assets/projects/airbnb.png";
import ecommerce from "../public/assets/projects/guitar.png";
import gastos from "../public/assets/projects/gastos.png";
import informatica from "../public/assets/projects/informatica.png";
import agenda from "../public/assets/projects/agenda.png";
import food from "../public/assets/projects/food.png";
import ProjectItem from "./projectItem";
import { motion } from "framer-motion";
import Link from "next/link";

const Projects = () => {
  const [activity, setActivity] = useState(false);

  function onSubmit() {
    setActivity(!activity);
  }

  return (
    <div id="projects" className="w-full ">
      <div className="max-w-[1200px] mx-4 md:mx-auto px-2 py-16">
        <header className="flex justify-center mt-2 mb-3 md:mt-8 md:mb-12">
          <p className="py-6 pb-10 text-3xl font-semibold text-red-300 font-poppins sm:text-4xl md:text-5xl ">
            Projectos
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            className=""
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}>
            <ProjectItem
              title="Netflix App"
              backgroundImg={netflixImg}
              projectUrl="/proyects/netflix_clone"
              tech="React.js"
            />
          </motion.div>
          <motion.div
            className=""
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}>
            <ProjectItem
              title="E-commerce Guitar"
              backgroundImg={ecommerce}
              projectUrl="/proyects/ecommerce_guitar"
              tech="Next.js"
            />
          </motion.div>
          <motion.div
            className=""
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}>
            <ProjectItem
              title="Restaurante Onlinea"
              backgroundImg={food}
              projectUrl="/proyects/restaurante"
              tech="React.js"
            />
          </motion.div>

          <motion.div
            className=""
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}>
            <ProjectItem
              title="Clone Airbnb"
              backgroundImg={airbnb}
              projectUrl="/proyects/airbnb_clone"
              tech="Next.js"
            />
          </motion.div>
          {activity ? (
            <>
              <motion.div
                className=""
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: -50 },
                  visible: { opacity: 1, y: 0 },
                }}>
                <ProjectItem
                  title="E-commerce Informatica"
                  backgroundImg={informatica}
                  projectUrl="/proyects/informatica"
                  tech="React.js"
                />
              </motion.div>

              <motion.div
                className=""
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: -50 },
                  visible: { opacity: 1, y: 0 },
                }}>
                <ProjectItem
                  title="Planificador de Gastos"
                  backgroundImg={gastos}
                  projectUrl="/proyects/gestor_de_gastos"
                  tech="React.js"
                />
              </motion.div>
              <ProjectItem
                title="Agenda"
                backgroundImg={agenda}
                projectUrl="/proyects/agenda"
                tech="React.js"
              />
            </>
          ) : (
            ""
          )}
        </div>
      </div>
      <motion.div
        className=""
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}>
        <div className="flex justify-center mb-10 ">
          {activity ? (
            <Link href="/#projects">
              {" "}
              <p
                onClick={onSubmit}
                className="flex justify-center duration-300 ease-in items-center w-[150px] py-1 text-lg text-center text-red-200 bg-black rounded-md px-4 cursor-pointer shadow-md  shadow-white hover:scale-110">
                Close x
              </p>
            </Link>
          ) : (
            <p
              onClick={onSubmit}
              className="flex duration-300 ease-in items-center w-[150px] py-1 text-lg text-center text-red-200 bg-black rounded-md px-4 cursor-pointer shadow-md  shadow-white hover:scale-110">
              Ver mas
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 m-2 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </p>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
