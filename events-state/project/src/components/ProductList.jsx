import { useState } from "react";

const products = ["яблоко", "банан", "груша", "апельсин"];

export function ProductList() {
  const [query, setQuery] = useState("");

  const filtered = products.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Поиск..."
      />

      <ul>
        {filtered.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
