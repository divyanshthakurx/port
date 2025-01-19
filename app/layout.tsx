import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mahmood Farooqui",
  description: "Portfolio website of Mahmood Farooqui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Mahmood Farooqui</title>
        <meta name="description" content="Mahmood Farooqui is an acclaimed Indian writer, performer, and director, celebrated for reviving and popularizing Dastangoi, a traditional form of Urdu storytelling." />
        <meta name="keywords" content="Mahmood Farooqui, Dastangoi, Urdu Storytelling, Indian Writer, Performer, Director, Besieged: Voices from Delhi 1857, A Requiem for Pakistan, Peepli Live" />
        <meta name="author" content="Mahmood Farooqui" />
        <meta property="og:title" content="Mahmood Farooqui" />
        <meta property="og:description" content="Explore the works and contributions of Mahmood Farooqui, including his performances, writings, and directorial ventures." />
        <meta property="og:image" content="https://mahmoodfarooqui.in/public/logo.png" />
        <meta property="og:url" content="https://mahmoodfarooqui.in" />
        <meta name="twitter:card" content="summary_large_image" />    
        <link rel="canonical" href="https://mahmoodfarooqui.in" />
      </head>
      <body>
        <Navbar/>
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
