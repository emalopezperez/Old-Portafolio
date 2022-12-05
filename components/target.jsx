import single from"../public/assets/logos/single.png"
import Image from "next/image"



const Target = () => {
  return (
    <div id="target" className=' w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <Image className='w-20 mx-auto mt-[-3rem] bg-transparent' src={single} alt="/" />
              <span className='text-gray-600'>Paquete básico</span>
              <h2 className=' font-bold text-center py-8'>Básico</h2>
              <p className='text-center text-4xl font-bold'>$149</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                  <p className='py-2 border-b mx-8'>1 Granted User</p>
                  <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
              </div>
              <button className='bg-red-300 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Elegir</button>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <Image className='w-20 mx-auto mt-[-3rem] bg-transparent' src={single} alt="/" />
              <span className='text-gray-600 mt-3'>Autoadministrable</span>
              <h2 className=' font-bold text-center py-8'>Estandar</h2>
              <p className='text-center text-4xl font-bold'>$149</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                  <p className='py-2 border-b mx-8'>1 Granted User</p>
                  <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
              </div>
              <button className='bg-red-300 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Elegir</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <Image className='w-20 mx-auto mt-[-3rem] bg-transparent' src={single} alt="/" />
              <span className='text-gray-600'>Empresarial</span>
              <h2 className=' font-bold text-center py-8'>Personalizado</h2>
              <p className='text-center text-4xl font-bold'>$149</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                  <p className='py-2 border-b mx-8'>1 Granted User</p>
                  <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
              </div>
              <button className='bg-red-300 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Elegir</button>
          </div>
      </div>
    </div>
  )
}

export default Target