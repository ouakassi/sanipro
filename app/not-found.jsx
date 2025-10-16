import Button from "@/components/buttons/Button";
import Link from "next/link";
import React from "react";
import "./not-found.css";
import { IoReturnDownBackOutline } from "react-icons/io5";

export default function NotFound() {
  return (
    <section>
      <div className="notfound-container">
        <img src="/not-found/sad.png" />
        <h1>404 Page non trouvée</h1>
        <p>La page que vous recherchez n'existe pas.</p>
        <Link href="/">
          <Button
            icon={<IoReturnDownBackOutline />}
            text={"Retour à l'accueil"}
            className="notfound-btn"
          />
        </Link>
      </div>
    </section>
  );
}
