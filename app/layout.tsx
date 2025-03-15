import type { Metadata } from "next"
import { IBM_Plex_Sans, Bebas_Neue } from "next/font/google"
import "./globals.css"

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
})

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas-neue"
})

export const metadata: Metadata = {
  title: "BookWise",
  description: "BookWise App"
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body className={`${ibmPlexSans.className} ${bebasNeue.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}

export default RootLayout