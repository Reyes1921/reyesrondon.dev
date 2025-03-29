"use client"
import Image from "next/image"
import {useTranslations} from "next-intl"

export const Project = () => {
  const dict = useTranslations("Projects")
  const projects = [
    {
      color: dict("shortner_color"),
      title: "Shortner Url",
      desc: dict("shortner_text"),
      img: dict("shortner_img"),
      path: dict("shortner_path"),
      level: "Full Stack",
      github: dict("shortner_git"),
      icons: [
        {
          path: "/icons/typescript.svg",
          title: "TypeScript",
          alt: "TypeScript logo",
          color: false,
        },
        {
          path: "/icons/nextdotjs.svg",
          title: "Next.Js",
          alt: "Next.Js logo",
          color: true,
        },
        {
          path: "/icons/tailwindcss.svg",
          title: "Tailwind CSS",
          alt: "Tailwind CSS logo",
          color: false,
        },
        {
          path: "/icons/nodedotjs.svg",
          title: "NodeJs",
          alt: "NodeJs logo",
          color: false,
        },
        {
          path: "/icons/express.svg",
          title: "Express",
          alt: "Express logo",
          color: true,
        },
        {
          path: "/icons/mongodb.svg",
          title: "MongoDB",
          alt: "MongoDB logo",
          color: false,
        },
      ],
    },
    {
      color: dict("dev_freebies_color"),
      title: "Dev Freebies",
      desc: dict("dev_freebies_text"),
      img: dict("dev_freebies_img"),
      path: dict("dev_freebies_path"),
      level: "Frontend",
      github: dict("dev_freebies_git"),
      icons: [
        {
          path: "/icons/typescript.svg",
          title: "TypeScript",
          alt: "TypeScript logo",
          color: false,
        },
        {
          path: "/icons/nextdotjs.svg",
          title: "Next.Js",
          alt: "Next.Js logo",
          color: true,
        },
        {
          path: "/icons/tailwindcss.svg",
          title: "Tailwind CSS",
          alt: "Tailwind CSS logo",
          color: false,
        },
        {
          path: "/icons/shadcnui.svg",
          title: "Shadcn/ui",
          alt: "Shadcn/ui logo",
          color: true,
        },
      ],
    },
    {
      color: dict("movie_finder_color"),
      title: "Movie Finder",
      desc: dict("movie_finder_text"),
      img: dict("movie_finder_img"),
      path: dict("movie_finder_path"),
      level: "Frontend",
      github: dict("movie_finder_git"),
      icons: [
        {
          path: "/icons/react.svg",
          title: "React",
          alt: "React logo",
          color: false,
        },
        {
          path: "/icons/tailwindcss.svg",
          title: "Tailwind CSS",
          alt: "Tailwind CSS logo",
          color: false,
        },
        {
          path: "/icons/themoviedatabase.svg",
          title: "The Movie Database",
          alt: "The Movie Database logo",
          color: true,
        },
      ],
    },
    {
      color: dict("img_detector_color"),
      title: "Image Color Detector",
      desc: dict("img_detector_text"),
      img: dict("img_detector_img"),
      path: dict("img_detector_path"),
      level: "Frontend",
      github: dict("img_detector_git"),
      icons: [
        {
          path: "/icons/react.svg",
          title: "React",
          alt: "React logo",
          color: false,
        },
        {
          path: "/icons/typescript.svg",
          title: "TypeScript",
          alt: "TypeScript logo",
          color: false,
        },
        {
          path: "/icons/tailwindcss.svg",
          title: "Tailwind CSS",
          alt: "Tailwind CSS logo",
          color: false,
        },
      ],
    },
  ]

  return (
    <article className="flex flex-col items-center justify-center">
      <div className="px-10 py-5 w-full">
        <h2
          id="projects"
          className="text-3xl md:text-5xl text-center pb-2 font-bold mb-5 mt-4 scroll-mt-20 text-black dark:text-white"
        >
          {dict("title")}
        </h2>
        <div className="grid grid-cols md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <div
              style={
                {
                  "--color": project.color === "#ffffff" ? "" : project.color,
                } as React.CSSProperties
              }
              key={i}
              className={`relative inline-flex overflow-hidden rounded-lg p-[1px] hover:scale-105 ease-in-out duration-500 ${
                project.color === "#ffffff"
                  ? "hover:shadow-[0_0_15px_0_rgb(0,0,0)] dark:hover:shadow-[0_0_15px_0_rgb(255,255,255)]"
                  : "shadow-drop-center"
              }`}
            >
              <a
                href={project.path}
                className="flex"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <div
                  style={{
                    borderColor:
                      project.color === "#ffffff" ? "" : project.color,
                  }}
                  className={`block rounded-lg shadow-secondary-1 border-2 bg-[#E3E6E8] dark:bg-[#0D131E] min-h-3.5 relative ${
                    project.color === "#ffffff" &&
                    "border-black dark:border-white"
                  }`}
                >
                  <span
                    style={{backgroundColor: project.color}}
                    className={`${
                      project.color === "#ffffff" ? "text-black" : "text-white"
                    } absolute p-1 m-2 rounded-lg`}
                  >
                    {project.level}
                  </span>
                  <Image
                    className="rounded-t-lg w-full aspect-video object-cover"
                    width={400}
                    height={200}
                    src={project.img}
                    alt={project.title}
                  />

                  <div className="p-5">
                    <h3
                      style={{
                        color: project.color,
                      }}
                      className={`mb-2 text-base md:text-xl leading-tight text-primary font-bold ${
                        project.color === "#ffffff" && "invert dark:invert-0"
                      }`}
                    >
                      {project.title}
                    </h3>

                    <p className="mb-4 text-sm md:text-base text-black dark:text-[#ffffffb5]">
                      {project.desc}
                    </p>
                    <div className="flex justify-start flex-wrap">
                      {project.icons.map((icon) => (
                        <Image
                          key={icon.title}
                          width={70}
                          height={70}
                          src={icon.path}
                          className={`w-9 md:w-10 color-[#F7DF1E] p-2 ${
                            icon.color ? "invert" : "invert-0"
                          } dark:invert-0`}
                          alt={icon.alt}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </a>
              <a
                target="_blank"
                href={project.github}
                className="absolute right-0 m-2 hover:scale-110 hover:opacity-70 inline-block"
                rel="noopener noreferrer nofollow"
              >
                <Image
                  width={25}
                  height={25}
                  src="/icons/github.svg"
                  alt="github logo"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}
