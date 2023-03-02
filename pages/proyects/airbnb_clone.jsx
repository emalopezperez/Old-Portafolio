import Image from 'next/image';
import React from 'react';
import propertyImg from '../../public/assets/projects/airbnb.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const Airbnb = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={ propertyImg }
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2 text-white'>Clone Airbnb</h2>
          <h3>React JS / Tailwind / Firebase</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8 text-white'>
        <div className='col-span-4'>
          <h2 className='py-4'>Projecto</h2>
          <p>
            Este proyecto es un clon de la interfaz de usuario de Airbnb construido con Next.js, Tailwind CSS y Sanity. El objetivo es demostrar cómo puedes utilizar estas tecnologías para construir una aplicación web moderna y escalable con una interfaz de usuario atractiva, consumiendo los datos y funcionalidades del backend de Sanity. Con esta aplicación, podrás explorar cómo integrar una base de datos de Sanity en tu proyecto, crear modelos de datos personalizados y utilizar los datos de forma dinámica en tu interfaz de usuario.
          </p>
          <a
            href='https://github.com/emalopezperez/frontend-clone-AirBnb'
            target=''
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>

        </div>
        <div className='col-span-4 py-4 shadow-xl md:col-span-1 shadow-gray-400 rounded-xl'>
          <div className='p-2'>
            <p className='pb-2 font-bold text-center'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='flex items-center py-2 text-gray-600'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='flex items-center py-2 text-gray-600'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='flex items-center py-2 text-gray-600'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='flex items-center py-2 text-gray-600'>
                <RiRadioButtonFill className='pr-1' /> Sanity
              </p>


            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default Airbnb