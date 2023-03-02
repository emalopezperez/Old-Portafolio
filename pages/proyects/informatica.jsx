import Image from 'next/image';
import React from 'react';
import propertyImg from '../../public/assets/projects/informatica.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const Informatica = () => {
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
          <h2 className='py-2 text-white'>E-commerce Informatica</h2>
          <h3>React JS / Tailwind / Firebase</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8 text-white'>
        <div className='col-span-4'>
          <h2 className='py-4'>Projecto</h2>
          <p>
            Este proyecto es un sitio de E-commerce desarrollado por Emanuel Lopez como parte del curso React / Coderhouse. El sitio está construido con React JS y algunas librerías y frameworks complementarios, incluyendo Node.js, TailwindCSS, Firebase, react-hot-toast y react-router-dom.

            El sitio cuenta con varias características, como una barra de navegación con enlaces por categoría y un carrito de compras, que utiliza React Router para navegar entre páginas. El carrito de compras almacena los productos aunque el usuario salga del sitio o recargue la página gracias al almacenamiento local.

            El sitio también permite ver los detalles de los productos, filtrar vistas por categoría y listar todos los artículos disponibles en la página principal. Además, cuenta con un formulario de contacto para que los clientes puedan dejar sus dudas e inquietudes y el dueño del sitio pueda acceder a ellas mediante Firebase y resolver las dudas o ponerse en contacto con ellos.</p>
          <a
            href='https://github.com/emalopezperez/Tienda-Online-Informatica'
            target=''
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://heling-emalopezperez.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
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
                <RiRadioButtonFill className='pr-1' /> Firebase
              </p>
              <p className='flex items-center py-2 text-gray-600'>
                <RiRadioButtonFill className='pr-1' /> Node js
              </p>
              <p className='flex items-center py-2 text-gray-600'>
                <RiRadioButtonFill className='pr-1' /> react-router-dom
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

export default Informatica