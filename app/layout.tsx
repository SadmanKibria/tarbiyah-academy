import type { Metadata, Viewport } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileDock } from "@/components/MobileDock";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tarbiyah-academy.netlify.app"),
  title: { default: "Tarbiyah Academy Ilford | Qur’an & Islamic Studies", template: "%s | Tarbiyah Academy" },
  description: "Tarbiyah Academy in Ilford offers Qur’an, Hifz, Islamic Studies and a two-year Diploma in Islamic Studies for children, young people and adults.",
  keywords: ["Tarbiyah Academy", "madrasa Ilford", "Quran classes Ilford", "Islamic studies Ilford", "Hifz classes Ilford", "Islamic diploma London"],
  alternates: { canonical: "/" },
  openGraph: { title: "Tarbiyah Academy Ilford", description: "Knowledge, character and confidence for the next generation.", url: "/", siteName: "Tarbiyah Academy", images: [{ url: "/images/hero-classroom.jpg", width: 1800, height: 1350 }], locale: "en_GB", type: "website" },
  twitter: { card: "summary_large_image", title: "Tarbiyah Academy Ilford", description: "Knowledge, character and confidence for the next generation.", images: ["/images/hero-classroom.jpg"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#103f35" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Tarbiyah Academy",
    url: "https://tarbiyah-academy.netlify.app",
    telephone: "+44 7950 206007",
    email: "tarbiyah.ac@gmail.com",
    address: { "@type": "PostalAddress", streetAddress: "379 Oaklands Park Avenue", addressLocality: "Ilford", postalCode: "IG1 1TG", addressCountry: "GB" },
  };
  return <html lang="en"><body><Header /><main>{children}</main><Footer /><MobileDock /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></body></html>;
}
