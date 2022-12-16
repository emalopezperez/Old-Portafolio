
import React from 'react';
import propertyImg from '../public/assets/projects/property.jpg';
import cryptoImg from '../public/assets/projects/crypto.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'
import ProjectItem from './projectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1200px] mx-auto px-2 py-16'>
        <p className=' py-6 font-poppins font-semibold  text-3xl sm:text-4xl md:text-5xl text-white ss:leading-[100.8px] leading-[75px'>
          Projectos
        </p>
        <div className='grid md:grid-cols-2 gap-8'>
        <ProjectItem
            title='Netflix App'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech='React JS'

          />
          
          <ProjectItem
            title='Property Finder'
            backgroundImg={propertyImg}
            projectUrl='/property'
            tech='React JS'
          />
          <ProjectItem
            title='Crypto App'
            backgroundImg={cryptoImg}
            projectUrl='/crypto'
            tech='React JS'

          />
          <ProjectItem
            title='Twitch UI'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
            tech='Next JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;