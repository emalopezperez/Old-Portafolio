import Head from 'next/head'
import Nav from '../components/nav';
import Main from '../components/main';
import About from '../components/about';
import Projects from '../components/projects';
import Contact from '../components/contact';
import Skils from "../components/skils"

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Portafolio Emanuel Lopez</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Nav/>
      <div className='mt-[26px] '>
      <Main/>
      </div>
      <About/>
      <Projects/>
      <Skils/>
      <Contact/>
    </div>
  );
}
