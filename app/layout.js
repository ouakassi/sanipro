import "normalize.css";
import "./globals.css";
import {
  DM_Sans,
  Roboto_Mono,
  Montserrat,
  Plus_Jakarta_Sans,
  Bricolage_Grotesque,
  Figtree,
} from "next/font/google";
import TopHeader from "@/components/header/TopHeader";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // choose weights you need
  variable: "--font-sans",
});

// Optional: a mono font for code
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-mono",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
});
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-bricolage",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-figtree",
});

export const metadata = {
  title: "Sanipro | Plomberie, Chauffage et Rénovation 24h/24 en France",
  description:
    "Sanipro, votre expert en plomberie, chauffage et rénovation partout en France. Intervention rapide 24h/24 et 7j/7. Contactez-nous au 06 81 18 05 25.",
  keywords: [
    "plombier France",
    "chauffagiste France",
    "rénovation salle de bain",
    "carrelage professionnel",
    "urgence plomberie",
    "Sanipro",
    "plomberie 24h/24",
    "entretien chauffe-eau",
    "installation sanitaire",
  ],
  authors: [{ name: "Sanipro SARL" }],
  openGraph: {
    title: "Sanipro | Experts en Plomberie & Rénovation 24h/24",
    description:
      "Sanipro propose des services professionnels de plomberie, chauffage et rénovation dans toute la France. Intervention rapide et fiable, 7j/7.",
    url: "https://www.saniprosarl.com",
    siteName: "Sanipro",
    images: [
      {
        url: "https://www.saniprosarl.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sanipro - Services de plomberie et rénovation en France",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.saniprosarl.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Plumber",
              name: "Sanipro",
              image: "https://www.saniprosarl.com/og-image.jpg",
              url: "https://www.saniprosarl.com",
              telephone: "+33681180525",
              email: "sanipro21000@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "24 Av. de Stalingrad",
                addressLocality: "France",
                postalCode: "21000",
                addressCountry: "FR",
              },
              openingHours: "Mo-Su 00:00-23:59",
              areaServed: {
                "@type": "Country",
                name: "France",
              },
              sameAs: [
                "https://web.facebook.com/profile.php?id=61576141945211",
                "https://www.instagram.com/saniprosarl/",
                "https://api.whatsapp.com/send/?phone=33681180525",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${dmSans.variable} ${robotoMono.variable} ${montserrat.variable} ${plusJakarta.variable} ${bricolage.variable} ${figtree.variable}`}
      >
        <TopHeader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
