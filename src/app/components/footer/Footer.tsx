import Image from "next/image"
import {useTranslations} from "next-intl"

export const Footer = () => {
  const dict = useTranslations("Links")
  const icons = [
    {
      path: dict("github"),
      src: "/github.svg",
      title: "Github",
      alt: '"github logo',
    },
    {
      path: dict("linkedin"),
      src: "/linkedin.svg",
      title: "Linkedin",
      alt: '"linkedin logo',
    },
    {
      path: "mailto:reyesjrondon@gmail.com",
      src: "/gmail.svg",
      title: "reyesjrondon@gmail.com",
      alt: '"gmail logo',
    },
    {
      path: dict("cv"),
      src: "/readdotcv.svg",
      title: "CV",
      alt: '"cv logo',
    },
  ]
  return (
    <footer className="w-full md:max-w-[850px] mx-auto">
      <div className="container flex justify-between items-center p-8 pt-0">
        <div className="flex">
          {icons.map((icon) => (
            <a
              href={icon.path}
              key={icon.alt}
              target="_blank"
              className="p-2 hover:scale-110 hover:opacity-70 inline-block"
            >
              <Image
                src={icon.src}
                height="12"
                width="20"
                className="filter invert"
                alt={icon.alt}
              />
            </a>
          ))}
        </div>
        <p className="p-2"> Reyes Rondón</p>
      </div>
    </footer>
  )
}
