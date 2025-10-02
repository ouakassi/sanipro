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
  title: "Plomberie & Rénovation 24h/24",
  description:
    "Dépannage plomberie, rénovation salle de bain, carrelage, parquet et peinture.",
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
      </body>
    </html>
  );
}
