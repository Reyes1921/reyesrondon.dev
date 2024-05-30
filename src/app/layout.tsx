import type {Metadata} from "next"
import {Nunito} from "next/font/google"
import "./globals.css"

const inter = Nunito({subsets: ["latin"], style: ["normal", "italic"]})

export const metadata: Metadata = {
  title:
    "Porfolio de Reyes Rondón - Desarrollador y Programador Web con 5 años de experiencia",
  description: "Fronted developer",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
