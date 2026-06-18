# CryptoRef Hub

База крипто-проектов и реферальных ссылок. MVP без backend — данные хранятся в `src/data`.

## Стек

- React 19 + TypeScript
- Vite 6
- react-router-dom v7
- lucide-react

## Запуск

```bash
npm install
npm run dev
```

## Деплой на Vercel

Просто подключи репо — Vercel автоматически определит Vite-проект.  
`vercel.json` уже настроен для SPA-роутинга.

## Добавить реальный backend

Сейчас данные — статика в `src/data/`. Для реального хранения подключи:
- [Supabase](https://supabase.com) — postgres + realtime
- [Airtable](https://airtable.com) — no-code БД
- [Firebase](https://firebase.google.com) — realtime database

## Структура

```
src/
  components/   — Header, Hero, ProjectCard, ReferralCard
  pages/        — Home, ProjectsPage, ProjectDetail, ReferralsPage, AddReferralPage
  data/         — projects.ts, referrals.ts
  types/        — index.ts
  utils/        — stats.ts
```
