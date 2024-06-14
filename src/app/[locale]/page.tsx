import {About, Experiencie, Intro, Project, Skills} from "../components"
export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen w-full animated fadeIn">
      <div className="md:max-w-[850px] mx-auto mt-20">
        <Intro />
        <Experiencie />
        <Project />
        <Skills />
        <About />
      </div>
    </main>
  )
}
