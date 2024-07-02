import Link from "next/link"

export default function NotFound() {
  return (
    <html className="flex flex-col justify-center items-center min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-900 to-black">
      <body>
        <div className="main animated fadeIn md:min-w-[850px] flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <p className="text-9xl font-bold text-[#65a30d]">404</p>
            <Link href="/">
              <button className="button-error m-5 border-2 border-[#65a30d] flex justify-center items-center p-4 text-white rounded-xl text-base hover:scale-105 ease-in-out shadow-drop-center ">
                <span className="text-sm flex justify-center items-center">
                  Go Back / Atrás
                </span>
              </button>
            </Link>
          </div>
        </div>
      </body>
    </html>
  )
}
