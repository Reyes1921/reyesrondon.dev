import {Nav} from "../nav/Nav"

export const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-20 p-3 md:p-5 backdrop-blur-sm">
      <nav className="container flex justify-center items-center md:max-w-[850px] mx-auto">
        <Nav />
      </nav>
    </header>
  )
}
