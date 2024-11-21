"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "./globals.css";

export default function Home() {
  interface Question {
    id: number;
    question: string;
  }

  const router = useRouter(); // Usado para redirecionar para a página de parabéns
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [answerInput, setAnswerInput] = useState("");
  const [feedback, setFeedback] = useState("");
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    // Carrega as questões do servidor
    fetch("/api/questions")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
      });
  }, []);

  const loadNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setAttempts(0);
    setAnswerInput("");
    setFeedback("");
  };

  const checkAnswer = async () => {
    const currentQuestion = questions[currentQuestionIndex];
    const response = await fetch("/api/check-answer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        questionId: currentQuestion.id,
        userAnswer: answerInput,
      }),
    });
    const data = await response.json();
  
    // Atualize as tentativas usando a função de estado anterior
    setAttempts((prevAttempts) => prevAttempts + 1);
  
    if (data.isCorrect) {
      const pointsEarned = Math.max(10 - attempts, 0);
  
      // Use a função de atualização para garantir o valor correto de totalScore
      setTotalScore((prevTotalScore) => {
        const newTotalScore = prevTotalScore + pointsEarned;
  
        setFeedback(`Resposta correta! Você ganhou ${pointsEarned} pontos.`);
  
        setTimeout(() => {
          if (currentQuestionIndex + 1 < questions.length) {
            loadNextQuestion();
          } else {
            // Redireciona para a página de parabéns com o totalScore atualizado
            router.push(`/congrats?score=${newTotalScore}`);
          }
        }, 2000);
  
        return newTotalScore;
      });
    } else {
      setFeedback("Resposta incorreta. Tente novamente.");
      if (attempts >= 9) {
        setFeedback(
          "Você atingiu o número máximo de tentativas para esta questão."
        );
        setTimeout(() => {
          if (currentQuestionIndex + 1 < questions.length) {
            loadNextQuestion();
          } else {
            // Redireciona com o totalScore atual, pois não houve ganho de pontos
            router.push(`/congrats?score=${totalScore}`);
          }
        }, 2000);
      }
    }
  };
  

  if (questions.length === 0) {
    return <div>Carregando...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="container">
      <h1>Teste de MySQL</h1>
      <div className="quiz">
        <div className="questionContainer">
          <h2>{currentQuestion.question}</h2>
          <textarea
            value={answerInput}
            onChange={(e) => setAnswerInput(e.target.value)}
            placeholder="Digite seu comando SQL aqui..."
          ></textarea>
          <button onClick={checkAnswer}>Submeter Resposta</button>
        </div>
        {feedback && <div className="feedback">{feedback}</div>}
        <div className="scoreBoard">
          <p>Pontuação: {totalScore}</p>
        </div>
      </div>
    </div>
  );
}
