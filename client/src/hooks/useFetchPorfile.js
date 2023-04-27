import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetchPorfile() {
  const userId = localStorage.getItem("userId");

  const [name, setName] = useState("");
  const [score, setScore] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  const [answerCount, setAnswerCount] = useState(0);
  const [createdAt, setCreatedAt] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_API_URL}/users/${userId}/info`)
      .then((res) => {
        setLoading(false);
        const { name, score, questionCount, answerCount, createdAt } =
          res.data.data;
        setName(name);
        setScore(score);
        setQuestionCount(questionCount);
        setAnswerCount(answerCount);
        setCreatedAt(createdAt);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);
  return { name, score, questionCount, answerCount, createdAt, error, loading };
}
