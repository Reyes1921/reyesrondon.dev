import {
  About,
  Experiencie,
  Footer,
  Header,
  Intro,
  Project,
  Skills,
} from "./components"
export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen w-full ">
      <div className="md:w-[850px] mt-20 md:mt-20">
        <Header />
        <Intro />
        <Experiencie />
        <Project />
        <Skills />
        <About />
        <Experiencie />
        <Project />
        <Skills />
        <About />
        <Experiencie />
        <Project />
        <Skills />
        <About />
        <Footer />
      </div>
    </main>
  )
}
