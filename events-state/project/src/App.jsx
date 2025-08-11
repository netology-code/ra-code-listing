import { ClassLikeButton } from "./components/ClassLikeButton";
import { Counter } from "./components/Counter";
import { FormButton } from "./components/FormButton";
import { LikeButton } from "./components/LikeButton";
import { ProductList } from "./components/ProductList";

export default function App() {
  return (
    <div style={{ padding: 24, fontFamily: "system-ui, sans-serif" }}>
      <h1>События и состояние — примеры</h1>

      <section>
        <h2>LikeButton (логирование кликов)</h2>
        <LikeButton />
      </section>

      <section>
        <h2>FormButton (preventDefault / stopPropagation)</h2>
        <FormButton />
      </section>

      <section>
        <h2>Counter (useState)</h2>
        <Counter />
      </section>

      <section>
        <h2>ProductList (поиск / фильтрация)</h2>
        <ProductList />
      </section>

      <section>
        <h2>ClassLikeButton (класс-компонент)</h2>
        <ClassLikeButton />
      </section>
    </div>
  );
}
