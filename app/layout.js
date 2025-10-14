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
  title: "Sanipro | Services de plomberie et sanitaires professionnels",
  description:
    "Sanipro, votre expert en plomberie, carrelage et installations sanitaires. Interventions rapides, solutions durables et design moderne pour votre confort.",
  keywords:
    "plomberie, sanitaires, carrelage, installation, réparation, dépannage, plomberie Maroc, plomberie Beni Mellal, Sanipro",
  authors: [{ name: "Sanipro" }],
  openGraph: {
    title: "Sanipro | Expert en plomberie et sanitaires",
    description:
      "Découvrez Sanipro, spécialiste des installations sanitaires et des travaux de plomberie. Qualité, fiabilité et satisfaction client.",
    url: "https://saniprosarl.com",
    siteName: "Sanipro",
    images: [
      {
        url: "/hero/hero.png",
        width: 1200,
        height: 630,
        alt: "Sanipro - plomberie et sanitaires",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanipro | Expert en plomberie et sanitaires",
    description:
      "Services professionnels de plomberie, carrelage et sanitaires. Sanipro, votre partenaire confiance.",
    images: ["/images/sanipro-preview.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
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
