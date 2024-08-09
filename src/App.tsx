import { useEffect, useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function getAdvice() {
    setIsLoading(true);
    const data = await fetch("https://api.adviceslip.com/advice");
    const response = await data.json();
    setIsLoading(false);
    setAdvice(response.slip.advice);
  }

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div className="app">
      <h3>{advice}</h3>
      <button onClick={getAdvice} disabled={isLoading}>{"Get advice"}</button>
    </div>
  );
}
