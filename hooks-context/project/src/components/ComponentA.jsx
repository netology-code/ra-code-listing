import { useContext } from "react";
import AuthContext from "../contexts/AuthContext.js";

export default function ComponentA() {
  const { token, setToken } = useContext(AuthContext);

  return (
    <div>
      <div>ComponentA</div>
      <pre>token: {JSON.stringify(token)}</pre>
      <button onClick={() => setToken(`new-token-${Math.random()}`)}>
        Изменить значение токена
      </button>
    </div>
  );
}
