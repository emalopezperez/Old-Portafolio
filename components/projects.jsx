
import React from 'react';
import propertyImg from '../public/assets/projects/property.jpg';
import cryptoImg from '../public/assets/projects/crypto.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'
import ProjectItem from './projectItem';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div id='projects' className='w-full '>
      <div className='max-w-[1200px] mx-4 md:mx-auto px-2 py-16'>
        <motion.div
          className=""
          initial="hidden"
          whileInView="visible"
          viewport={ { once: true, amount: 0.5 } }
          transition={ { delay: 0.10, duration: 0.5 } }
          variants={ {
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          } }
        >
          <p className='pb-10 py-6 font-poppins font-semibold  text-3xl sm:text-4xl md:text-5xl text-red-300 ss:leading-[100.8px] leading-[75px'>
            Projectos
          </p>
        </motion.div>
        <div className='grid gap-8 md:grid-cols-2'>
          <motion.div
            className=""
            initial="hidden"
            whileInView="visible"
            viewport={ { once: true, amount: 0.5 } }
            transition={ { delay: 0.10, duration: 0.5 } }
            variants={ {
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            } }
          >
            <ProjectItem
              title='Netflix App'
              backgroundImg={ netflixImg }
              projectUrl='/netflix'
              tech='React JS'

            />

          </motion.div>
          <motion.div
            className=""
            initial="hidden"
            whileInView="visible"
            viewport={ { once: true, amount: 0.5 } }
            transition={ { delay: 0.10, duration: 0.5 } }
            variants={ {
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            } }
          >
            <ProjectItem
              title='Property Finder'
              backgroundImg={ propertyImg }
              projectUrl='/property'
              tech='React JS'
            />
          </motion.div>
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
            <ProjectItem
              title='Crypto App'
              backgroundImg={ cryptoImg }
              projectUrl='/crypto'
              tech='React JS'

            />
          </motion.div>

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
            <ProjectItem
              title='Twitch UI'
              backgroundImg={ twitchImg }
              projectUrl='/twitch'
              tech='Next JS'

            />
          </motion.div>
        </div>
      </div>
      <div className="flex justify-center mb-10 ">
        <p className="flex duration-300 ease-in items-center w-[150px] py-1 text-lg text-center text-red-200 bg-black rounded-md px-4 cursor-pointer shadow-md  shadow-white hover:scale-110">
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
              strokeWidth={ 2 }
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </p>
      </div>
    </div>

  );
};

export default Projects;