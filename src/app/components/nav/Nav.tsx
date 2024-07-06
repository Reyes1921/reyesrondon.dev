import Link from "next/link"
import {useTranslations} from "next-intl"

export const Nav = () => {
  const dict = useTranslations("Header")
  const items = [
    {
      path: dict("experience_path"),
      title: dict("experience"),
    },
    {
      path: dict("projects_path"),
      title: dict("projects"),
    },
    {
      path: dict("about_path"),
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
          <Link
            href={item.path}
            className="text-xs font-bold md:text-base py-2 px-1 md:p-4 text-black dark:text-white"
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}
