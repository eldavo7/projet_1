import { useState } from 'react';

export default function Counter() {
  const [score, setScore] = useState(0);

  function increment() {
    setScore(s => s + 1);
  }

  function reset() {
    setScore(0); // Réinitialise le score à 0
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      <div className="text-center p-4 bg-white rounded shadow">
        <h1 className="mb-4">Score: {score}</h1>
        <div className="d-flex gap-2">
          <button className="btn btn-primary" onClick={() => increment()}>
            +1
          </button>
          <button
            className="btn btn-success"
            onClick={() => {
              increment();
              increment();
              increment();
            }}
          >
            +3
          </button>
          <button className="btn btn-danger" onClick={() => reset()}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}