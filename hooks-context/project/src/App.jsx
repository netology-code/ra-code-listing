import { useState } from "react";
import AuthContext from "./contexts/AuthContext.js";
import LatestNews from "./components/LatestNews.jsx";
import ComponentA from "./components/ComponentA.jsx";
import ComponentC from "./components/ComponentC.jsx";

export default function App() {
  const [token, setToken] = useState(null);
  const value = { token, setToken };

  return (
    <AuthContext.Provider value={value}>
      <div className="container">
        <h1>Hooks + Context API</h1>

        <section className="card">
          <h2>Последние новости (поллинг)</h2>
          <LatestNews />
        </section>

        <section className="card">
          <h2>Работа с контекстом</h2>
          <ComponentA />
          <ComponentC />
        </section>
      </div>
    </AuthContext.Provider>
  );
}
