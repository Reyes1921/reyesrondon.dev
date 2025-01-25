import {
  About,
  // Blog,
  Experiencie,
  Intro,
  Project,
  ProjectWordpress,
  Skills,
} from "../components"
export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen w-full animated fadeIn">
      <div className="md:max-w-[950px] mx-auto mt-20">
        <Intro />
        <Experiencie />
        <Project />
        <ProjectWordpress />
        <Skills />
        {/* <Blog /> */}
        <About />
      </div>
    </main>
  )
}
