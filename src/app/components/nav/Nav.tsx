import Link from "next/link"
import {useTranslations} from "next-intl"

export const Nav = () => {
  const dict = useTranslations("Header")
  const items = [
    {
      path: "/#experience",
      title: dict("experience"),
    },
    {
      path: "/#projects",
      title: dict("projects"),
    },
    {
      path: "/#about",
      title: dict("about"),
    },
  ]
  return (
    <ul className="flex justify-center">
      {items.map((item) => (
        <li
          key={item.title}
          className="hover:scale-110 hover:opacity-70 inline-block"
        >
          <Link href={item.path} className="text-sm md:text-xl p-5 md:p5">
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}
