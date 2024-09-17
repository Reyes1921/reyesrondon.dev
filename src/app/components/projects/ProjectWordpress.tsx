"use client"
import Image from "next/image"
import Link from "next/link"
import {useTranslations} from "next-intl"

export const ProjectWordpress = () => {
  const dict = useTranslations("Projects")
  const projects = [
    {
      color: "#ffffff",
      title: "Opaque Retouching",
      img: "/wordpress/opaque.webp",
      path: "https://opaque-retouching.com/",
      icons: [
        {
          path: "/wordpress/wordpress.svg",
          title: "Wordpress",
          alt: "Wordpress logo",
          color: true,
        },
        {
          path: "/wordpress/elementor.svg",
          title: "Elementor",
          alt: "Elementor logo",
          color: false,
        },
      ],
    },
    {
      color: "#62b5e5",
      title: "Eventrental",
      img: "/wordpress/eventrental.webp",
      path: "https://eventrental.de/",
      icons: [
        {
          path: "/wordpress/wordpress.svg",
          title: "Wordpress",
          alt: "Wordpress logo",
          color: true,
        },
        {
          path: "/wordpress/elementor.svg",
          title: "Elementor",
          alt: "Elementor logo",
          color: false,
        },
        {
          path: "/wordpress/woocommerce.svg",
          title: "Woocommerce",
          alt: "Woocommerce logo",
          color: false,
        },
        {
          path: "/wordpress/wprocket.svg",
          title: "wprocket",
          alt: "wprocket logo",
          color: true,
        },
      ],
    },
    {
      color: "#f23534",
      title: "Dtc Factory",
      img: "/wordpress/dtc-factory.webp",
      path: "https://dtc-factory.de/",
      icons: [
        {
          path: "/wordpress/wordpress.svg",
          title: "Wordpress",
          alt: "Wordpress logo",
          color: true,
        },
        {
          path: "/wordpress/elementor.svg",
          title: "Elementor",
          alt: "Elementor logo",
          color: false,
        },
        {
          path: "/wordpress/woocommerce.svg",
          title: "Woocommerce",
          alt: "Woocommerce logo",
          color: false,
        },
      ],
    },
    {
      color: "#fc7523",
      title: "Culivento Catering",
      img: "/wordpress/culivento.webp",
      path: "https://culivento.de/",
      icons: [
        {
          path: "/wordpress/wordpress.svg",
          title: "Wordpress",
          alt: "Wordpress logo",
          color: true,
        },
        {
          path: "/wordpress/elementor.svg",
          title: "Elementor",
          alt: "Elementor logo",
          color: false,
        },
      ],
    },
    {
      color: "#61ce70",
      title: "Brautmacher",
      img: "/wordpress/brautmacher.webp",
      path: "https://brautmacher.ch/",
      icons: [
        {
          path: "/wordpress/wordpress.svg",
          title: "Wordpress",
          alt: "Wordpress logo",
          color: true,
        },
        {
          path: "/wordpress/elementor.svg",
          title: "Elementor",
          alt: "Elementor logo",
          color: false,
        },
        {
          path: "/wordpress/woocommerce.svg",
          title: "Woocommerce",
          alt: "Woocommerce logo",
          color: false,
        },
      ],
    },
    {
      color: "#0f3c74",
      title: "MEDICOLEO",
      img: "/wordpress/medicoleo.webp",
      path: "https://medicoleo.de/",
      icons: [
        {
          path: "/wordpress/wordpress.svg",
          title: "Wordpress",
          alt: "Wordpress logo",
          color: true,
        },
        {
          path: "/wordpress/elementor.svg",
          title: "Elementor",
          alt: "Elementor logo",
          color: false,
        },
        {
          path: "/wordpress/wprocket.svg",
          title: "wprocket",
          alt: "wprocket logo",
          color: true,
        },
      ],
    },
    {
      color: "#ffffff",
      title: "Metropol",
      img: "/wordpress/metropol.webp",
      path: "https://metropol-verlag.de/",
      icons: [
        {
          path: "/wordpress/wordpress.svg",
          title: "Wordpress",
          alt: "Wordpress logo",
          color: true,
        },
        {
          path: "/wordpress/elementor.svg",
          title: "Elementor",
          alt: "Elementor logo",
          color: false,
        },
        {
          path: "/wordpress/woocommerce.svg",
          title: "Woocommerce",
          alt: "Woocommerce logo",
          color: false,
        },
        {
          path: "/wordpress/wprocket.svg",
          title: "wprocket",
          alt: "wprocket logo",
          color: true,
        },
      ],
    },
    {
      color: "#e3ae3c",
      title: "Heilpraktikerin",
      img: "/wordpress/heilpraktikerin.webp",
      path: "https://heilpraktikerinhofmann.de/",
      icons: [
        {
          path: "/wordpress/wordpress.svg",
          title: "Wordpress",
          alt: "Wordpress logo",
          color: true,
        },
        {
          path: "/wordpress/elementor.svg",
          title: "Elementor",
          alt: "Elementor logo",
          color: false,
        },
        {
          path: "/wordpress/wprocket.svg",
          title: "wprocket",
          alt: "wprocket logo",
          color: true,
        },
      ],
    },
  ]

  return (
    <article className="flex flex-col items-center justify-center">
      <div className="px-10 py-5 w-full">
        <h2
          id="wordpress"
          className="text-3xl md:text-5xl text-center pb-2 font-bold mb-5 mt-4 scroll-mt-20 text-black dark:text-white"
        >
          WordPress
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
              <div
                style={{
                  borderColor: project.color === "#ffffff" ? "" : project.color,
                }}
                className={`block rounded-lg shadow-secondary-1 border bg-[#E3E6E8] dark:bg-[#0D131E] min-h-3.5 relative ${
                  project.color === "#ffffff" &&
                  "border-black dark:border-white"
                }`}
              >
                {/* <span
                  style={{backgroundColor: project.color}}
                  className={`${
                    project.color === "#ffffff" ? "text-black" : "text-white"
                  } absolute p-1 m-2 rounded-lg`}
                >
                  {project.level}
                </span> */}
                {/* <Link
                  target="_blank"
                  href={project.github}
                  className="absolute right-0 m-2 hover:scale-110 hover:opacity-70 inline-block"
                >
                  <Image
                    width={25}
                    height={25}
                    src="/icons/github.svg"
                    alt="github logo"
                  />
                </Link> */}
                <Link href={project.path} target="_blank">
                  <Image
                    className="rounded-t-lg w-full"
                    width={400}
                    height={200}
                    src={project.img}
                    alt={project.title}
                  />
                </Link>
                <div className="p-5">
                  <Link href={project.path} className="flex" target="_blank">
                    <h5
                      style={{
                        color: project.color,
                      }}
                      className={`mb-2 text-base md:text-xl leading-tight text-lime-600 font-bold ${
                        project.color === "#ffffff" && "invert dark:invert-0"
                      }`}
                    >
                      {project.title}
                    </h5>
                  </Link>

                  {/* <p className="mb-4 text-sm md:text-base text-black dark:text-[#ffffffb5]">
                    {project.desc}
                  </p> */}
                  <div className="flex justify-start">
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
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}
