import {Intro} from "./components"
export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-900 to-black">
      <div className="w-[950px]">
        <Intro />
      </div>
    </main>
  )
}
