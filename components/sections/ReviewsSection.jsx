import Button from "../buttons/Button";
import MiniLogo from "../logo/MiniLogo";
import "./ReviewsSection.css";

import { TbStarFilled } from "react-icons/tb";
import { MdAddReaction } from "react-icons/md";

import { IoMdAddCircleOutline } from "react-icons/io";

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
            La confiance de <span>nos clients </span>
            envers
            <MiniLogo />
          </h1>
          <p>
            La satisfaction de nos clients est notre priorité. Avec{" "}
            <b>Sanipro</b>, vous bénéficiez d’un service personnalisé, rapide et
            de qualité.
          </p>
        </header>

        <div className="review-cards-container">
          {reviews.map((r, index) => (
            <ReviewCard key={index} {...r} />
          ))}
        </div>
        <Button
          icon={<MdAddReaction />}
          className={"review-btn"}
          text={"ajouter un avis"}
          onClick={() => window.open(reviewLink, "_blank")}
        />
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
