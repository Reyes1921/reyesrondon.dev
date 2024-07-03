"use client"
import Image from "next/image"
import {useEffect, useState} from "react"

export const DarkMode = () => {
  const [isDark, setIsDark] = useState(true)

  const handleClick = () => {
    console.log("clik")
    setIsDark(!isDark)
    localStorage.theme = isDark ? "light" : "dark"
    document.documentElement.classList.toggle("dark")
  }

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark")
      localStorage.theme = "dark"
      setIsDark(true)
      console.log("DARK")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.theme = "light"
      setIsDark(false)
      console.log("lIGHT")
    }
  }, [])

  return (
    <button
      className="mr-5 border-2  border-[#111827] dark:border-white rounded-lg p-1 "
      onClick={handleClick}
    >
      <Image
        src="/sun.svg"
        alt="Sun Logo"
        width={20}
        height={20}
        className={`invert ${isDark ? "flex" : "hidden"}`}
      />
      <Image
        src="/moon.svg"
        alt="Moon Logo"
        width={20}
        height={20}
        className={` ${isDark ? "hidden" : "flex"}`}
      />
    </button>
  )
}
