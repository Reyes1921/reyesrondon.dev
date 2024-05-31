import {Nav} from "../nav/Nav"

export const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-20 p-3 md:p-5 backdrop-blur-sm">
      <nav className="flex justify-center items-center ">
        <Nav />
      </nav>
    </header>
  )
}
