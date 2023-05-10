import Head from 'next/head'
import Nav from '../components/presentational/header/nav';
import Main from '../components/presentational/mainContent/main';
import About from '../components/presentational/about';
import Projects from '../components/presentational/projects';
import Contact from '../components/presentational/contact';
import Skils from '../components/presentational/skils';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portafolio Emanuel Lopez</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <main className=''>
        <header>
          <Nav />
        </header>
        <selection className='mt-[26px] '>
          <Main />
        </selection>

        <About />
        <Projects />
        <Skils />
        <Contact />
      </main>
    </>
  );
}
