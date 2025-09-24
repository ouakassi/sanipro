import "./globals.css";
import { Rubik, Almarai } from "next/font/google";
import TopHeader from "@/components/TopHeader";

const rubik = Rubik({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const almarai = Almarai({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Plomberie & Rénovation 24h/24",
  description:
    "Dépannage plomberie, rénovation salle de bain, carrelage, parquet et peinture.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${almarai.className} ${rubik.className}`}>
      <body>
        <TopHeader />
        {children}
      </body>
    </html>
  );
}
