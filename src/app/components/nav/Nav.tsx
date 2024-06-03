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
    <ul className="flex">
      {items.map((item) => (
        <li key={item.title}>
          <a href={item.path} className="text-sm md:text-xl p-3 md:p5">
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  )
}
