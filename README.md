# Conshus

A life management web app for planning, habits and daily focus.

Live: https://conshus.vercel.app

## Features

The app has five sections:

- **Journals**: write journal entries.
- **Lists**: keep lists of items.
- **Flow**: a daily flow of items with a month selector.
- **Trackers**: track daily habits, with a year grid and stats.
- **Budget**: track money, with totals.

Also: a configurable "mantra word", keyboard shortcuts (react-hotkeys-hook), dark mode styles, and a mobile-sized layout. Some state (such as trackers and the mantra) is kept in the browser with Jotai storage.

## Install and run

```bash
pnpm install
pnpm dev       # development server
pnpm build     # type-check and production build
pnpm preview   # preview the build
```

## Tech

- React 18 and TypeScript
- Vite
- Jotai (state)
- Tailwind CSS
- Phosphor icons

## Support

If this project is useful to you, you can support my work:

[![Support me on Ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/zfaka)
