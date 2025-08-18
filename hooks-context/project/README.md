

# Hooks + Context API (React + Vite)

Пример проекта для демонстрации работы **React Hooks** и **Context API**.  
Собран на **Vite**.

## Функционал

- Компонент `LatestNews`:
  - Загружает новости с сервера каждые 5 секунд (поллинг).
  - Использует кастомный хук `usePolling` для повторного использования логики.
  - Обрабатывает состояния: `loading`, `error`, `data`.

- Контекст `AuthContext`:
  - Хранит токен аутентификации.
  - Доступен во всём дереве приложения через `Provider`.
  - Демонстрируется потребление через:
    - `useContext` в `ComponentA`
    - `Consumer` в `ComponentC`

---

## Структура проекта

```
project/
├── index.html            # HTML-шаблон
├── vite.config.js        # Конфигурация Vite
├── package.json          # Зависимости и скрипты
├── .env.example          # Пример переменных окружения
└── src/
    ├── main.jsx          # Точка входа, монтирование App
    ├── App.jsx           # Корневой компонент с провайдером AuthContext
    ├── styles.css        # Минимальные стили
    │
    ├── components/
    │   ├── LatestNews.jsx # Список новостей, использует usePolling
    │   ├── ComponentA.jsx # Пример использования useContext
    │   └── ComponentC.jsx # Пример использования Consumer
    │
    ├── contexts/
    │   └── AuthContext.js # Объявление контекста аутентификации
    │
    └── hooks/
        └── usePolling.js  # Кастомный хук для поллинга данных
```

---

## Запуск

1. Установить зависимости:

```bash
npm install
```

2. Скопировать `.env.example` в `.env` и при необходимости изменить URL:

```bash
cp .env.example .env
```

3. Запустить dev-сервер:

```bash
npm run dev
```


---

## Фейковый сервер новостей

Для теста поллинга можно запустить локальный сервер.

1. Установить зависимости для сервера:
```bash
npm install express cors faker uuid
```

2. Запустить сервер:
```bash
node server/index.js
```

Сервер будет доступен по адресу: [http://localhost:7070/news/latest](http://localhost:7070/news/latest)

---

## Локальный сервер новостей (Express)

В проект включён простой сервер (`server/`), который генерирует фейковые новости.

### Как запустить сервер

```bash
cd server
npm install
npm run start # сервер поднимется на http://localhost:7070
```

После запуска убедитесь, что в корне фронтенда файл `.env` содержит:

```
VITE_NEWS_URL=http://localhost:7070/news/latest
```

Затем запустите фронтенд, как обычно:

```bash
cd ..       # вернитесь в корень проекта
npm install # если ещё не ставили зависимости фронтенда
npm run dev
```
