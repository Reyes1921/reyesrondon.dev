import {
  About,
  // Blog,
  Experiencie,
  Intro,
  Project,
  ProjectWordpress,
  Skills,
} from "../components"
import {useTranslations} from "next-intl"
export default function Home() {
  const dict = useTranslations("Metadata")

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Reyes Rondón",
    url: dict("urlSchema"),
    image:
      "https://www.reyesrondon.dev/_next/image?url=%2Fprofile%2Freyes-rondon.webp&w=384&q=75",
    sameAs: dict("linkedinSchema"),
    jobTitle: dict("jobTitleSchema"),
    worksFor: {
      "@type": "Organization",
      name: "Addiction Marketing Agency (AMA)",
    },
  }

  return (
    <main className="flex items-center justify-center min-h-screen w-full animated fadeIn">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className="md:max-w-[950px] mx-auto mt-20">
        <Intro />
        <Experiencie />
        <Project />
        <ProjectWordpress />
        <Skills />
        {/* <Blog /> */}
        <About />
      </div>
    </main>
  )
}
