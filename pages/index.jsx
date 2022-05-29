import Head from 'next/head';
import Navbar from '../src/components/Navbar';
import AboutMe from '../src/components/AboutMe';
import Skills from '../src/components/Skills';
import Projects from '../src/components/Projects';
import GitHub from '../src/components/GitHub';
import Contact from '../src/components/Contact';

export default function Home({allProjects}) {
  return (
    <>
      <Head>
          <title>Adam Blicharz</title>
          <meta name="description" content="Adam Blicharz - Fullstack JavaScript Developer. Szczecin, Police"/>
      </Head>
      <Navbar/>
      <main>
        <section>
          <AboutMe/>
        </section>
        <section>
          <Skills/>
        </section>
        <section>
          <Projects allProjects={allProjects}/>
        </section>
        <section>
            <GitHub/>
        </section>
        <section>
            <Contact/>
        </section>
      </main>
    </>
  )
}

//------------------------------ Server Side Code ------------------------------

import {request} from '../lib/datocms';

export async function getStaticProps({locale}) {
  let { allProjects } = await request({
    query: `query MyQuery {
      allProjects(filter: {}, locale: ${locale}) {
        order
        name
        route
        description
        icon
      }
    }`
  });
  allProjects = allProjects.sort((a, b) => a.order - b.order);
  return {
    props: {
      allProjects
    }
  }
}