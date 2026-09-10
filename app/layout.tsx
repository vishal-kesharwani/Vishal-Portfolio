import Header from "@/components/header";
import Footer from "@/components/footer";
import ScrollLine from "@/components/scroll-line";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { ThemeProvider } from "@/context/theme-context";
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
    "Vishal Kesharwani — I build things I want to understand. Backend systems, distributed infrastructure, cloud, AI exploration.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Vishal Kesharwani | Systems Builder",
    description:
      "I build things I want to understand. Backend systems, distributed infrastructure, cloud, AI exploration.",
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
      suppressHydrationWarning
    >
      <body className="relative antialiased noise-bg">
        <ThemeProvider>
          <ActiveSectionContextProvider>
            <ScrollLine />
            <Header />
            {children}
            <Footer />
          </ActiveSectionContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
