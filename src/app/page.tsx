import Info from "@/components/Info"
import Figma from "@/components/Figma"
import Stack from "@/components/Stack"
import Projects from "@/components/Projects"

export default function Home() {
  return (
    <>
      <Info/>
      <div className="container">
        <Stack/>
        <Figma/>
        <Projects/>
      </div>
    </>
  )
}
