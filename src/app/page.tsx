import Info from "@/components/Info"
import Figma from "@/components/Figma"
import Stack from "@/components/Stack"
import ThinProjects from "@/components/ThinProjects"
import Footer from "@/components/Footer"

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

export default function Home() {
  return (
    <>
      <Info/>
      <div className="container">
        <div style={{margin: "-200px 0 0 0"}}>
          <Stack {...stack}/>
        </div>
        <Figma/>
        <ThinProjects/>
        <Footer/>
      </div>
    </>
  )
}
