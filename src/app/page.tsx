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
    <>
      <Header />
      <main className="flex items-center justify-center min-h-screen w-full">
        <div className="md:max-w-[850px] mx-auto mt-20">
          <Intro />
          <Experiencie />
          <Project />
          <Skills />
          <About />
        </div>
      </main>
      <Footer />
    </>
  )
}
