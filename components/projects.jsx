
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
            transition={ {delay: 0.10,  duration: 0.5 } }
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
    </div>

  );
};

export default Projects;