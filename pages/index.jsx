import Head from 'next/head';
import Navbar from '../src/components/Navbar';
import AboutMe from '../src/components/AboutMe';
import Skills from '../src/components/Skills';
import Projects from '../src/components/Projects';
import GitHub from '../src/components/GitHub';
import Contact from '../src/components/Contact';
import { Element } from 'react-scroll';

export default function Home() {
  return (
    <>
      <Head>
          <title>Adam Blicharz</title>
          <meta name="description" content="Adam Blicharz - Fullstack JavaScript Developer. Szczecin, Police"/>
      </Head>
      <Navbar/>
      <AboutMe/>
      <Element name="skills">
          <Skills/>
      </Element>
      <Element name="projects">
          <Projects/>
      </Element>
      <Element name="github">
          <GitHub/>
      </Element>
      <Element name="contact">
          <Contact/>
      </Element>
    </>
  )
}
