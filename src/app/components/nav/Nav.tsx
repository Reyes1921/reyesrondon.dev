export const Nav = () => {
  const items = [
    {
      path: "/#projects",
      title: "Proyectos",
    },
    {
      path: "/#experience",
      title: "Experiencia",
    },
    {
      path: "/#about",
      title: "Sobre mi",
    },
  ]
  return (
    <ul className="flex justify-center navHeader">
      {items.map((item) => (
        <li
          key={item.title}
          className="hover:scale-110 hover:opacity-70 inline-block"
        >
          <a href={item.path} className="text-sm md:text-xl p-5 md:p5">
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  )
}
