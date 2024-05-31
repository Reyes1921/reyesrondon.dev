import {Nav} from "../nav/Nav"

export const Footer = () => {
  const icons = [
    {
      path: "https://github.com/Reyes1921",
      src: "/github.svg",
      title: "Github",
      alt: '"github logo',
    },
    {
      path: "https://www.linkedin.com/in/reyes-rondon/",
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
      path: "/cv-reyes-rondon.pdf",
      src: "/readdotcv.svg",
      title: "CV",
      alt: '"cv logo',
    },
  ]
  return (
    <footer className="flex justify-between w-full mt-5 px-10 py-5">
      <div className="flex">
        {icons.map((icon) => (
          <a href={icon.path} target="_blank" className="p-2">
            <img
              src={icon.src}
              height="12"
              width="20"
              className="filter invert"
              alt={icon.alt}
            />
          </a>
        ))}
      </div>
      <p className="p-2"> Reyes Rondon</p>
    </footer>
  )
}
