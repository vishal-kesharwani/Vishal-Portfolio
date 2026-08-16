import Header from "@/components/header";
import Footer from "@/components/footer";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import ScrollProgress from "@/components/scroll-progress";
import { Toaster } from "react-hot-toast";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://vishalkesharwani.in"),
  title: {
    default: "Vishal Kesharwani | Backend / DevOps Engineer",
    template: "%s | Vishal Kesharwani",
  },
  description:
    "Resume-aligned portfolio of Vishal Kesharwani, a backend / DevOps engineer building event-driven microservices with Spring Boot and Kafka, and automating cloud infrastructure with Kubernetes, Terraform, and AWS.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vishal Kesharwani | Backend / DevOps Engineer",
    description:
      "Event-driven microservices, cloud-native delivery, research, and internship experience from Vishal Kesharwani.",
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
    <html
      lang="en"
      className={`dark !scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="relative antialiased">
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <ScrollProgress />
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
