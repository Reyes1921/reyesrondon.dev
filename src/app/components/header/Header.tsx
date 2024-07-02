import {Nav} from "../nav/Nav"
import Link from "next/link"
import Image from "next/image"
import {useTranslations} from "next-intl"

export const Header = () => {
  const dict = useTranslations("Header")
  return (
    <header className="w-full fixed top-0 left-0 z-20 py-3 md:py-5 backdrop-blur-sm">
      <div className="flex justify-center items-center md:max-w-[850px] mx-auto px-10">
        <nav className="mx-auto">
          <Nav />
        </nav>
        <Link href={dict("path")} className="">
          <button className="flex items-center border-2 border-transparent rounded-xl  hover:scale-110 hover:opacity-70">
            <Image
              src={dict("logo")}
              height={20}
              width={20}
              alt={dict("alt")}
              className="md:pr-1"
            />
            <span className="text-xs md:text-base font-normal hidden md:block">
              {dict("title")}
            </span>
          </button>
        </Link>
      </div>
    </header>
  )
}
