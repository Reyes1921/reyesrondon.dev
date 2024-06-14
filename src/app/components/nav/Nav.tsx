export const Nav = () => {
  const items = [
    {
      path: "/#experience",
      title: "Experiencia",
    },
    {
      path: "/#projects",
      title: "Proyectos",
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
