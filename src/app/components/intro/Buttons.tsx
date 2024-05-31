export const Buttons = () => {
  const items = [
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
    <div className="flex flex-cols-2 md:flex-row justify-between mt-3">
      {items.map((item) => (
        <a href={item.path} target="_blank">
          <button className="flex gap-1 my-1 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-2 md:px-3 py-2 text-xs md:text-sm md:py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900">
            <img
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
