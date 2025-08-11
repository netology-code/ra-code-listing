import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Счёт: {count}</p>
      <button type="button" onClick={() => setCount((c) => c - 1)}>
        -
      </button>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        +
      </button>
    </div>
  );
}
