import Info from "@/components/Info"
import Stack from "@/components/Stack"
import Projects from "@/components/Projects"

export default function Home() {
  return (
    <>
      <Info/>
      <div className="container">
        <Stack/>
        <Projects/>
      </div>
    </>
  )
}
