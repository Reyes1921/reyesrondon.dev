import {Nav} from "../nav/Nav"
import Link from "next/link"
import Image from "next/image"
import {useTranslations} from "next-intl"

export const Header = () => {
  const dict = useTranslations("Header")
  return (
    <header className="w-full fixed top-0 left-0 z-20 p-3 md:p-5 backdrop-blur-sm ">
      <div className="container flex justify-center  md:justify-center items-center md:max-w-[850px] md:mx-auto">
        <nav className="flex md:mx-auto">
          <Nav />
        </nav>
        <Link href={dict("path")} className="md:mr-10">
          <button className="button-flag hover:scale-110 hover:opacity-70 inline-block">
            <Image
              src={dict("logo")}
              height={20}
              width={20}
              alt={dict("alt")}
              className="pr-1"
            />
            <span className="text-sm hidden md:block">{dict("title")}</span>
          </button>
        </Link>
      </div>
    </header>
  )
}
