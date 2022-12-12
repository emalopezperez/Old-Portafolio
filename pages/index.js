import Head from 'next/head'
import Nav from '../components/nav';
import Main from '../components/main';
import About from '../components/about';
import Projects from '../components/projects';
import Contact from '../components/contact';
import Target from "../components/target"


export default function Home() {

  return (
    <div>
      <Head>
        <title>Carmma</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Nav/>
      <Main/>
      <About/>
      <Projects/>
      <Target/>
      <Contact/>
    </div>
  );
}
