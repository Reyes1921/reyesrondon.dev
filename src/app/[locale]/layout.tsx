import {Nunito} from "next/font/google"
import {NextIntlClientProvider} from "next-intl"
import {getMessages, getTranslations} from "next-intl/server"
import {Footer, Header} from "../components"
import "./globals.css"

interface RootMetadata {
  params: {locale: string}
}

export async function generateMetadata({params}: RootMetadata) {
  const t = await getTranslations({params, namespace: "Metadata"})

  return {
    title: t("title"),
    description: t("description"),
    icons: {
      icon: "/favicon.ico",
    },
    alternates: {
      canonical: "http://reyesrondon.vercel.app/",
    },
  }
}

const inter = Nunito({subsets: ["latin"], style: ["normal", "italic"]})

interface RootLayoutProps {
  children: React.ReactNode
  params: {locale: string}
}

export default async function RootLayout({
  children,
  params: {locale},
}: Readonly<RootLayoutProps>) {
  const dictionaries = await getMessages()
  return (
    <html
      lang={locale}
      className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-900 to-black"
    >
      <body className={inter.className}>
        <NextIntlClientProvider messages={dictionaries}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
