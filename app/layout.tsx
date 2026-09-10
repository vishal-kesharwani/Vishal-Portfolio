import Header from "@/components/header";
import Footer from "@/components/footer";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ScrollProgress from "@/components/scroll-progress";
import { Inter, Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://vishalkesharwani.in"),
  title: {
    default: "Vishal Kesharwani | Systems Builder",
    template: "%s | Vishal Kesharwani",
  },
  description:
    "Vishal Kesharwani \u2014 I build things I want to understand. Backend systems, distributed infrastructure, cloud, AI experiments.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Vishal Kesharwani | Systems Builder",
    description:
      "I build things I want to understand. Backend systems, distributed infrastructure, cloud, AI experiments.",
    url: "https://vishalkesharwani.in",
    siteName: "Vishal Kesharwani",
    locale: "en_IN",
    type: "website",
  },
  icons: { icon: "/githubdp.jpg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`!scroll-smooth ${inter.variable} ${spaceGrotesk.variable} ${ibmPlexMono.variable}`}
    >
      <body className="relative antialiased noise-bg">
        <ActiveSectionContextProvider>
          <ScrollProgress />
          <Header />
          {children}
          <Footer />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
