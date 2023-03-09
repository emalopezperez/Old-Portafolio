import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion';

const Main = () => {
  return (
    <div className='h-screen mt-12 text-center md:mt-0 '>
      <div className='max-w-[1200px] h-full mx-8 md:mx-auto p-2 flex justify-center items-center shadow-base shadow-white group hover:bg-gradient-to-r'>
        <div>
          <div className='pb-3 text-[10px] md:text-sm tracking-widest text-white uppercase'>
            <Typewriter
              words={ ['Construyamos juntos...'] }
              loop={ 0 }
              cursor
              cursorStyle="_"
              typeSpeed={ 120 }
              deleteSpeed={ 50 }
              delaySpeed={ 1000 }
            />
          </div>
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
            <h1 className='py-2 text-3xl text-white sm:text-5xl md:text-6xl'>
              Hola soy <span className='text-red-300'>Emanuel Lopez</span>
            </h1>
            <h1 className='text-3xl text-white sm:text-5xl md:text-6xl'>desarrollador web</h1>
            <p className='pt-6  sm:max-w-[70%] m-auto  text-sm md:text-lg text-white'>
              Me especializo en la creación de sitios y aplicaciones web con diseño responsivo, lo que permite que se adapten a diferentes dispositivos y asegura una experiencia óptima para el usuario.
            </p>
          </motion.div>
          <motion.div
            className=""
            initial="hidden"
            whileInView="visible"
            viewport={ { once: true, amount: 0.5 } }
            transition={ { delay: 0.10, duration: 0.5 } }
            variants={ {
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            } }
          >
            <div className='flex items-center justify-between max-w-[330px] m-auto py-9 text-white mt-4'>
              <a
                href='https://www.linkedin.com/in/emanuel-lopez-developer/'
                target='_blank'
                rel='noreferrer'
              >
                <div className='p-6 duration-300 ease-in rounded-full shadow-md cursor-pointer md:shadow-lg hover:scale-90 shadow-gray-600 md:shadow-gray-600 md:hover:scale-110'>
                  <FaLinkedinIn className="text-red-200 text-md md:text-xl" />
                </div>
              </a>
              <a
                href='https://github.com/emalopezperez'
                target='_blank'
                rel='noreferrer'
              >
                <div className='p-6 duration-300 ease-in rounded-full shadow-md cursor-pointer md:shadow-lg hover:scale-90 shadow-gray-600 md:shadow-gray-600 md:hover:scale-110'>
                  <FaGithub className="text-red-200 text-md md:text-xl" />
                </div>
              </a>
              <Link href="mailto:emanuel-lopez13@hotmail.com">
                <div className="p-6 duration-300 ease-in rounded-full shadow-md cursor-pointer md:shadow-lg hover:scale-90 shadow-gray-600 md:shadow-gray-600 md:hover:scale-110'">
                  <AiOutlineMail className="text-red-200 text-md md:text-xl" />
                </div>
              </Link>
              <Link href='https://wa.link/zlkyij'>
                <div className='p-6 duration-300 ease-in rounded-full shadow-md cursor-pointer md:shadow-lg hover:scale-90 shadow-gray-600 md:shadow-gray-600 md:hover:scale-110'>
                  <BsFillPersonLinesFill className="text-red-200 text-md md:text-xl" />
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Main;