# vue-web

vue-web powered by Vue3, vue-router, pinia, TypeScript and Vite.

## Install

```shell
npm install

pnpm install
```

## Run

```shell
npm run dev

pnpm run dev
```

## Build

### Build for Production

```shell
npm run build

pnpm run build
```

### Build for Test

```shell
npm run build:test

pnpm run build:test
```

## Preview

### Preview for Production

```shell
npm run preview

pnpm run preview
```

### Preview for Test

```shell
npm run preview:test

pnpm run preview:test
```

## .env Description

- This project exposes environment variables on `import.meta.env` object.
- Different modes (development/test/production) correspond to different environment files (.env.\*).
- .env file is always included, duplicate variables are overwritten by the specific mode file (.env.\*).
