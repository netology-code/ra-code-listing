import usePolling from '../hooks/usePolling.js';

export default function LatestNews() {
  const { data: news, isLoading, hasError } = usePolling(
    import.meta.env.VITE_NEWS_URL,
    5000,
    []
  );

  if (isLoading) return <p>Загрузка...</p>;
  if (hasError) return <p>Ошибка: {String(hasError)}</p>;

  return (
    <ul>
      {news.map((n) => (
        <li key={n.id}>{n.content}</li>
      ))}
    </ul>
  );
}