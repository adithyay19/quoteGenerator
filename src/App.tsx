import { useEffect, useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const data = await fetch("https://api.adviceslip.com/advice");
    const response = await data.json();
    console.log(response.slip.advice);
    setAdvice(response.slip.advice);
    setCount(count + 1);
  }

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div className="app">
      <h3>{advice}</h3>
      <button onClick={getAdvice}>Get another advice</button>
    </div>
  );
}
