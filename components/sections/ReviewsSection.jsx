import Button from "../buttons/Button";
import MiniLogo from "../logo/MiniLogo";
import "./ReviewsSection.css";

import { TbStarFilled } from "react-icons/tb";
import { MdAddReaction } from "react-icons/md";

import { IoMdAddCircleOutline } from "react-icons/io";
import ImageReveal from "../animations/ImageReveal";
import AnimatedText from "../animations/AnimatedText";
import AnimatedHeader from "../animations/AnimatedHeader";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/data/data";

const reviews = [
  {
    name: "Karim El Idrissi",
    reviewDesc:
      "Service rapide et professionnel ! SANIPRO a réparé une fuite d’eau en un temps record. Je recommande vivement.",
    rating: 5,
  },
  {
    name: "Sophie Martin",
    reviewDesc:
      "Équipe très sympathique et efficace. Les techniciens SANIPRO ont fait un excellent travail dans ma salle de bain.",
    rating: 5,
  },
  {
    name: "Ali Benyahia",
    reviewDesc:
      "Travail soigné et prix raisonnables. SANIPRO est devenu mon premier choix pour tout problème de plomberie.",
    rating: 4,
  },
  {
    name: "Nadia Azzouzi",
    reviewDesc:
      "Très satisfaite du service client. SANIPRO a pris le temps de tout expliquer avant l’intervention.",
    rating: 5,
  },
  {
    name: "Jean Dupont",
    reviewDesc:
      "Ponctuels et professionnels. C’est rare de trouver un service aussi fiable que SANIPRO.",
    rating: 5,
  },
  {
    name: "Jean Dupont",
    reviewDesc:
      "Ponctuels et professionnels. C’est rare de trouver un service aussi fiable que SANIPRO.",
    rating: 5,
  },
];

export default function ReviewsSection() {
  const reviewLink = "https://g.page/r/XXXXXXXXXXXX/review"; // replace with your real link

  return (
    <section className="reviews-section" id="reviews">
      <div className="container reviews-container">
        <header>
          <h1>
            <AnimatedHeader speed={0.05}>
              La confiance de <span className="color-orange">nos clients</span>{" "}
              envers <MiniLogo />
            </AnimatedHeader>
          </h1>
          <p>
            La satisfaction de nos clients est notre priorité. Avec{" "}
            <b>Sanipro</b>, vous bénéficiez d’un service personnalisé, rapide et
            de qualité.
          </p>
        </header>

        <div className="review-cards-container">
          {reviews.map((r, index) => (
            <ImageReveal key={index}>
              <ReviewCard {...r} />
            </ImageReveal>
          ))}
        </div>
        <Link href={SOCIAL_LINKS.GOOGLE_MAPS} target="_blank">
          <Button
            icon={<MdAddReaction />}
            className={"review-btn"}
            text={"ajouter un avis"}
          />
        </Link>
      </div>
    </section>
  );
}

const ReviewCard = ({ name, reviewDesc, rating = 5 }) => {
  return (
    <div className="review-card">
      <span className="stars">
        {[...Array(rating)].map((_, i) => (
          <TbStarFilled key={i} />
        ))}
      </span>
      <p className="review-text">"{reviewDesc}"</p>
      <span className="client-name">— {name}</span>
    </div>
  );
};
