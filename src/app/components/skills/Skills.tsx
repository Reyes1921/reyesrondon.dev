export const Skills = () => {
  const frontend = [
    {
      path: "/icons/html5.svg",
      title: "HTML",
      alt: "HTML logo",
    },
    {
      path: "/icons/css3.svg",
      title: "CSS",
      alt: "CSS logo",
    },
    {
      path: "/icons/javascript.svg",
      title: "JavaScript",
      alt: "JavaScript logo",
    },
    {
      path: "/icons/typescript.svg",
      title: "TypeScript",
      alt: "TypeScript logo",
    },
    {
      path: "/icons/react.svg",
      title: "React",
      alt: "React logo",
    },
    {
      path: "/icons/nextdotjs.svg",
      title: "Next.Js",
      alt: "Next.Js logo",
    },
    {
      path: "/icons/tailwindcss.svg",
      title: "Tailwind CSS",
      alt: "Tailwind CSS logo",
    },
    {
      path: "/icons/bootstrap.svg",
      title: "Bootstrap CSS",
      alt: "Bootstrap logo",
    },
  ]

  const backend = [
    {
      path: "/icons/nodedotjs.svg",
      title: "NodeJs",
      alt: "NodeJs logo",
    },
    {
      path: "/icons/express.svg",
      title: "Express",
      alt: "Express logo",
    },
    {
      path: "/icons/php.svg",
      title: "PHP",
      alt: "PHP logo",
    },
  ]

  const bd = [
    {
      path: "/icons/mongodb.svg",
      title: "MongoDB",
      alt: "MongoDB logo",
    },
    {
      path: "/icons/postgresql.svg",
      title: "PostgreSQL",
      alt: "PostgreSQL logo",
    },
    {
      path: "/icons/mysql.svg",
      title: "MySQL",
      alt: "MySQL logo",
    },
  ]

  const testing = [
    {
      path: "/icons/jest.svg",
      title: "Jest",
      alt: "Jest logo",
    },
    {
      path: "/icons/testinglibrary.svg",
      title: "Testing Library",
      alt: "Testing Library logo",
    },
  ]

  const tools = [
    {
      path: "/icons/git.svg",
      title: "Git",
      alt: "Git logo",
    },
    {
      path: "/icons/github.svg",
      title: "GitHub",
      alt: "GitHub logo",
    },
    {
      path: "/icons/visualstudio.svg",
      title: "VSCode",
      alt: "VSCode logo",
    },
    {
      path: "/icons/npm.svg",
      title: "npm",
      alt: "npm logo",
    },
    {
      path: "/icons/gnometerminal.svg",
      title: "Terminal",
      alt: "Terminal logo",
    },
    {
      path: "/icons/wordpress.svg",
      title: "WordPress",
      alt: "WordPress logo",
    },
  ]

  return (
    <article className="flex items-center justify-center flex-col-reverse md:flex-row">
      <div className="p-10 md:pr-10 w-full">
        <h2
          id="projects"
          className="text-4xl text-center md:text-5xl pb-2 font-bold"
        >
          Tecnologías
        </h2>

        <div className="">
          <div className="">
            <h2 className="text-center text-3xl font-bold mb-4 mt-5">
              Frontend
            </h2>
            <div className="flex flex-row justify-between items-center backdrop-brightness-75">
              {frontend.map((icon) => (
                <div className="flex flex-col flex-justify spac- items-center p-4">
                  <img
                    src={icon.path}
                    className="w-11 md:w-10 color-[#F7DF1E]"
                    alt={icon.alt}
                  />
                  <span className="text-sm mt-2">{icon.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-row justify-around">
            <div>
              <h2 className="text-center text-3xl font-bold mb-4 mt-5 pr-2">
                Backend
              </h2>
              <div className="flex flex-row justify-between items-center backdrop-brightness-75">
                {backend.map((icon) => (
                  <div className="flex flex-col flex-justify items-center p-4">
                    <img
                      src={icon.path}
                      className="w-10 md:w-10 color-[#F7DF1E]"
                      alt={icon.alt}
                    />
                    <span className="text-sm mt-2">{icon.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-center text-3xl font-bold mb-4 mt-5">
                Bases de Datos
              </h2>
              <div className="flex flex-row justify-between items-center backdrop-brightness-75">
                {bd.map((icon) => (
                  <div className="flex flex-col flex-justify items-center p-4">
                    <img
                      src={icon.path}
                      className="w-10 md:w-10 color-[#F7DF1E]"
                      alt={icon.alt}
                    />
                    <span className="text-sm mt-2">{icon.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              {" "}
              <h2 className="text-center text-3xl font-bold mb-4 mt-5 pr-2">
                Testing
              </h2>
              <div className="flex flex-row justify-center items-center backdrop-brightness-75">
                {testing.map((icon) => (
                  <div className="flex flex-col flex-justify items-center p-4">
                    <img
                      src={icon.path}
                      className="w-10 md:w-10 color-[#F7DF1E]"
                      alt={icon.alt}
                    />
                    <span className="text-sm mt-2">{icon.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className=""></div>
          <div className="">
            <h2 className="text-center text-3xl font-bold mb-4 mt-5 pr-2">
              Herramientas
            </h2>
            <div className="flex flex-row justify-between items-center backdrop-brightness-75">
              {tools.map((icon) => (
                <div className="flex flex-col flex-justify items-center p-4">
                  <img
                    src={icon.path}
                    className="w-10 md:w-10 color-[#F7DF1E]"
                    alt={icon.alt}
                  />
                  <span className="text-sm mt-2">{icon.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
