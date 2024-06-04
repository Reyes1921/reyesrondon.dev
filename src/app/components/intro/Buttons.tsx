import Image from "next/image"

export const Buttons = () => {
  const items = [
    {
      path: "https://www.linkedin.com/in/reyes-rondon/",
      src: "/linkedin.svg",
      title: "Linkedin",
      alt: '"linkedin logo',
    },
    {
      path: "https://github.com/Reyes1921",
      src: "/github.svg",
      title: "Github",
      alt: '"github logo',
    },
    {
      path: "/cv-reyes-rondon.pdf",
      src: "/readdotcv.svg",
      title: "CV",
      alt: '"cv logo',
    },
    {
      path: "mailto:reyesjrondon@gmail.com",
      src: "/gmail.svg",
      title: "reyesjrondon@gmail.com",
      alt: '"gmail logo',
    },
  ]

  return (
    <div className="grid gap-1 md:flex md:flex-row md:justify-between mt-3">
      {items.map((item) => (
        <a
          href={item.path}
          key={item.title}
          target="_blank"
          className=" flex justify-center"
        >
          <button className="flex  gap-1 cursor-pointer pl-3 pr-6 md:px-2 py-2 text-xs md:text-sm md:py-3 text-white font-semibold bg-gradient-to-r from-gray-800 to-black rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900">
            <Image
              src={item.src}
              height="12"
              width="20"
              className="filter invert"
              alt={item.alt}
            />
            {item.title}
          </button>
        </a>
      ))}
    </div>
  )
}
