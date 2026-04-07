import Header from "@/components/header";
import Footer from "@/components/footer";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://vishalkesharwani.in"),
  title: {
    default: "Vishal Kesharwani | Portfolio",
    template: "%s | Vishal Kesharwani",
  },
  description:
    "Portfolio of Vishal Kesharwani, a Computer Engineering student building full-stack, cloud-native, and AI-powered web apps.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vishal Kesharwani | Portfolio",
    description:
      "Full-stack and cloud-native projects, hackathon achievements, and technical skills.",
    url: "https://vishalkesharwani.in",
    siteName: "Vishal Kesharwani Portfolio",
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className="relative bg-gray-50 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 font-sans"
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
