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
import WhatsappBtn from "@/components/buttons/WhatsappBtn";
import ScrollToTop from "@/components/buttons/ScrollToTopButton";
import LenisProvider from "@/components/animations/LenisProvider";
import HomeSideBtns from "@/components/HomeSideBtns";

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
  title: "Sanipro - Plomberie Dijon",
  description:
    "Sanipro, votre expert en plomberie, chauffage et rénovation à Dijon et dans toute la France. Intervention rapide 24h/24 et 7j/7. Contactez-nous au 06 81 18 05 25.",
  keywords: [
    // Main Keywords
    "sanipro",
    "sanipro dijon",
    "plombier dijon",
    "plomberie dijon",
    "entreprise plomberie dijon",
    "dépannage plomberie dijon",
    "installation plomberie dijon",
    "réparation fuite dijon",
    "urgence plombier dijon",
    "artisan plombier dijon",

    // Service Keywords
    "installation sanitaire dijon",
    "réparation robinet dijon",
    "débouchage canalisation dijon",
    "entretien chauffe-eau dijon",
    "remplacement ballon d’eau chaude dijon",
    "installation salle de bain dijon",
    "rénovation plomberie dijon",
    "fuite d’eau dijon",
    "intervention plomberie rapide dijon",

    // Local SEO Keywords
    "plombier proche de dijon",
    "plombier côte-d’or",
    "plombier 21000 dijon",
    "plomberie à proximité dijon",
    "entreprise plomberie côte d’or",

    // Branding & Trust
    "sanipro experts en plomberie",
    "sanipro service rapide",
    "plombier de confiance dijon",
    "sanipro intervention professionnelle",
    "devis plomberie dijon",

    // Long-tail Keywords
    "combien coûte un plombier à dijon",
    "plombier disponible le week-end dijon",
    "urgence plomberie 24h/24 dijon",
    "artisan plombier pas cher dijon",
    "installation plomberie neuve dijon",
  ],
  authors: [{ name: "Sanipro" }],

  openGraph: {
    title: "Sanipro | Experts en Plomberie & Rénovation 24h/24",
    description:
      "Sanipro propose des services professionnels de plomberie, chauffage et rénovation à Dijon et dans toute la France. Intervention rapide et fiable, 7j/7.",
    url: "https://www.saniprosarl.fr",
    siteName: "Sanipro",
    images: [
      {
        url: "https://www.saniprosarl.fr/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sanipro - Services de plomberie et rénovation en France",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.saniprosarl.fr",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
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
              name: "Sanipro SARL",
              url: "https://www.saniprosarl.fr",
              logo: "https://www.saniprosarl.fr/logo/sanipro-logo.png",
              image: "https://www.saniprosarl.fr/og-image.jpg",
              telephone: "+33 6 81 18 05 25",
              email: "sanipro21000@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "22 Avenue de Stalingrad",
                addressLocality: "Dijon",
                postalCode: "21000",
                addressCountry: "FR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 47.322,
                longitude: 5.041,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "00:00",
                  closes: "23:59",
                },
              ],
              areaServed: {
                "@type": "Place",
                name: "France",
              },
              sameAs: [
                "https://web.facebook.com/profile.php?id=61576141945211",
                "https://www.instagram.com/saniprosarl/",
                "https://api.whatsapp.com/send/?phone=33681180525",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "112",
              },
              description:
                "Sanipro est une entreprise de plomberie, chauffage et rénovation à Dijon. Intervention rapide 24h/24 et 7j/7 pour tous vos besoins en plomberie.",
            }),
          }}
        />
      </head>
      <body
        className={`${dmSans.variable} ${robotoMono.variable} ${montserrat.variable} ${plusJakarta.variable} ${bricolage.variable} ${figtree.variable}`}
      >
        <LenisProvider>
          <TopHeader />
          <Header />
          <HomeSideBtns />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
