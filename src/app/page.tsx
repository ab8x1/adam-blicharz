import Info from "@/components/Info"
import Figma from "@/components/Figma"
import Stack from "@/components/Stack"
import Projects from "@/components/Projects"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Info/>
      <div className="container">
        <Stack/>
        <Figma/>
        <Projects/>
        <Footer/>
      </div>
    </>
  )
}
