# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

# 설치 과정
## React + TS 프로젝트 생성
```js
npm create vite@latest
```

## 실행
```js
cd ts-recipes
npm install
npm run dev
```

# SCSS
## 설치
```js
npm install sass
```
## SCSS 구조
```js
src/assets/scss/
 ├── abstracts/        // 전역 설정 (로직)
 │    ├── _variables.scss
 │    ├── _mixin.scss
 │    ├── _functions.scss
 │    └── _index.scss
 │
 ├── base/             // 기본 스타일
 │    ├── _reset.scss
 │    ├── _fonts.scss
 │    └── _base.scss
 │
 ├── layout/           // 레이아웃
 │    ├── _header.scss
 │    ├── _footer.scss
 │    └── _grid.scss
 │
 ├── components/       // UI 컴포넌트
 │    ├── _button.scss
 │    ├── _card.scss
 │    └── _modal.scss
 │
 ├── pages/            // 페이지별 스타일
 │    └── _home.scss
 │
 └── index.scss        // 엔트리
```

# 
```js
src/
 ├── components/
 │    ├── RecipeCard.tsx
 │    ├── Header.tsx
 │    └── Button.tsx
 ├── pages/
 │    ├── Home.tsx
 │    ├── Detail.tsx
 │    └── Write.tsx
 ├── api/
 │    └── recipe.ts
 ├── assets/
 │    └── scss/
```


```js
```
```js
```