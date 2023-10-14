import Info from "@/components/Info"
import Figma from "@/components/Figma"
import Stack from "@/components/Stack"
import ThinProjects from "@/components/ThinProjects"
import Footer from "@/components/Footer"
import { ThinProjectType } from "@/components/ThinProjects/thinProjectsTypes"
import { performRequest } from "@/lib/datocms"

const stack = {
  frontend: [
    "React", "NextJs", "TypeScript", "Remix"
  ],
  backend: [
    "NodeJs", "Express", "MongoDB", "MySQL"
  ],
  devops: [
    "Ubuntu", "NGINX", "Digital Ocean", "Google Analytics"
  ]
}

async function getThinProjects() {
  let { allProjects } : { allProjects: ThinProjectType[] } = await performRequest({
      query: `query MyQuery {
        allProjects(filter: {}, locale: en) {
          order
          name
          route
          description
          icon
        }
      }`
    });
    return allProjects.sort((a, b) => a.order - b.order);
}

export default async function Home() {
  const thinProjects = await getThinProjects();
  return (
    <>
      <Info/>
      <div className="container">
        <div style={{margin: "-200px 0 0 0"}}>
          <Stack {...stack}/>
        </div>
        <Figma/>
        <ThinProjects thinProjects={thinProjects}/>
        <Footer/>
      </div>
    </>
  )
}
