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
    default: "Vishal Kesharwani | Backend Developer",
    template: "%s | Vishal Kesharwani",
  },
  description:
    "Resume-aligned portfolio of Vishal Kesharwani, a backend developer focused on Java, Spring Boot, PostgreSQL, AWS, Docker, and secure full-stack delivery.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vishal Kesharwani | Backend Developer",
    description:
      "Backend, cloud, research, and internship experience from Vishal Kesharwani.",
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
      <body className="relative bg-gray-50 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90">
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
