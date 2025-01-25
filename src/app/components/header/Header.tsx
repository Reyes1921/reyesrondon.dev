import {Nav} from "../nav/Nav"
import Link from "next/link"
import Image from "next/image"
import {useTranslations} from "next-intl"
import {DarkMode} from "../index"

export const Header = () => {
  const dict = useTranslations("Header")

  return (
    <header className="w-full fixed top-0 left-0 z-20 py-3 md:py-5 backdrop-blur-sm bg-[#67676718] dark:bg-[#67676718]">
      <div className="flex justify-center items-center md:max-w-[950px] mx-auto px-10">
        <nav className="mx-auto">
          <Nav />
        </nav>
        <div className="flex"></div>
        <DarkMode />
        <Link href={dict("path")} className="">
          <button className="flex items-center border-2 border-transparent rounded-xl hover:scale-110 hover:opacity-70">
            <Image
              src={dict("logo")}
              height={20}
              width={20}
              alt={dict("alt")}
              className="md:pr-1"
            />
            <span className="text-xs md:text-base font-bold hidden md:block text-black dark:text-white">
              {dict("title")}
            </span>
          </button>
        </Link>
      </div>
    </header>
  )
}
