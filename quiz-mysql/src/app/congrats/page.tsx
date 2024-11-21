"use client";

import { useSearchParams, useRouter } from "next/navigation";
import styles from "./Congrats.module.css";

export default function Congrats() {
  const searchParams = useSearchParams();
  const score = searchParams.get("score");
  const router = useRouter();

  const handleClose = () => {
    router.push("/"); // Redireciona para a página inicial
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h1>🎉 Parabéns! 🎉</h1>
        <p className={styles.finalScore}>
          Você completou o quiz com <strong>{score}</strong> pontos!
        </p>
        <p>Continue praticando para aprimorar suas habilidades em MySQL.</p>
        <button onClick={handleClose} className={styles.closeButton}>
          Fechar
        </button>
      </div>
    </div>
  );
}
