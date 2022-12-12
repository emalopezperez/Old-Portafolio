import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';

const Main = () => {
  return (
    <div id='home' className=' h-screen text-center mt-0 '>
      <div className='max-w-[1200px]  h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <div className='uppercase text-sm tracking-widest text-gray-600 pb-3'>
            <Typewriter
            options={{
              strings: ['CONSTRUIMOS jUNTOS...'],
              autoStart: true,
              loop: true
            }}
          />
          </div>
          <h1 className='py-2 text-gray-700 text-3xl sm:text-5xl md:text-6xl '>
            Hola somos <span className='titulo-logo'>Carmma</span>
          </h1>
          <h1 className=' text-gray-700 text-3xl sm:text-5xl md:text-6xl '>tu empresa de desarrollo web</h1>
          <p className='pt-6 text-gray-600 sm:max-w-[70%] m-auto  text-sm md:text-lg'>
            Nos enfocamos en crear sitios y aplicaciones web con diseño responsivo para que se adapte a los diferentes dispoitivos, garantizando la experiencia del usuario.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-9'>
            <a
              href=''
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href=''
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
