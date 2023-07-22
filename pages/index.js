import { useEffect } from 'react';
import Head from 'next/head'
import Nav from '../components/presentational/header/nav';
import Main from '../components/presentational/mainContent/main';
import About from '../components/presentational/about';
import Projects from '../components/presentational/projects';
import Skils from '../components/presentational/skils';
import BlogSection from '../components/presentational/blog';
import Contact from '../components/presentational/contact';


export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        <title>Emanuel Lopez</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <div className='container'>

        <header>
          <Nav />
        </header>

        <main>
          <Main />
          <About />
          <Projects />
          <Skils />

          <BlogSection />
        </main>

        <footer>
          <Contact />
        </footer>

      </div>
    </>
  );
}
