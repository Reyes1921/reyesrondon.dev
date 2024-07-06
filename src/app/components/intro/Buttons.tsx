import Image from "next/image"
import {useTranslations} from "next-intl"
import Link from "next/link"

export const Buttons = () => {
  const dict = useTranslations("Links")
  const items = [
    {
      path: dict("linkedin"),
      src: "/linkedin.svg",
      title: "Linkedin",
      alt: '"linkedin logo',
      color: true,
    },
    {
      path: dict("github"),
      src: "/github.svg",
      title: "Github",
      alt: '"github logo',
      color: true,
    },
    {
      path: "mailto:reyesjrondon@gmail.com",
      src: "/gmail.svg",
      title: "reyesjrondon@gmail.com",
      alt: '"gmail logo',
      color: true,
    },
    {
      path: dict("cv"),
      src: "/readdotcv.svg",
      title: "CV",
      alt: '"cv logo',
      color: true,
    },
  ]

  return (
    <div className="flex justify-center md:justify-start gap-2 md:flex md:flex-row mt-3">
      {items.map((item) => (
        <Link
          href={item.path}
          key={item.title}
          target="_blank"
          className=" flex justify-center"
        >
          <button className="flex gap-1 cursor-pointer p-3 text-black dark:text-white text-base md:text-sm font-semibold bg-[#E3E6E8] dark:bg-gradient-to-r from-gray-800 to-black rounded-xl border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900">
            <Image
              src={item.src}
              height="12"
              width="20"
              className={`dark:invert`}
              alt={item.alt}
            />
            {item.title === "CV" ? item.title : ""}
          </button>
        </Link>
      ))}
    </div>
  )
}
