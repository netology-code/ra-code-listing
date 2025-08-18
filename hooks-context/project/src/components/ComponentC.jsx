import AuthContext from "../contexts/AuthContext.js";

export default function ComponentC() {
  return (
    <AuthContext.Consumer>
      {({ token, setToken }) => (
        <div>
          <div>ComponentC</div>
          <pre>token: {JSON.stringify(token)}</pre>
          <button onClick={() => setToken(`new-token-${Math.random()}`)}>
            Изменить значение токена
          </button>
        </div>
      )}
    </AuthContext.Consumer>
  );
}
