# 🚀 React + TypeScript + Vite

Este projeto foi desenvolvido utilizando React, TypeScript e Vite, com foco em performance, organização de código e boas práticas modernas de desenvolvimento frontend.

A aplicação faz uso de React Hooks, como useState e useEffect, para gerenciamento de estado e controle de ciclo de vida dos componentes, além de estilização dinâmica e componentizada com styled-components.

## 🛠️ Tecnologias Utilizadas

⚛️ React – Biblioteca para construção de interfaces modernas e reativas

🔷 TypeScript – Superset do JavaScript com tipagem estática

⚡ Vite – Build tool extremamente rápida e leve

💅 styled-components – Estilização baseada em componentes com suporte a props dinâmicas

🎣 Hooks (useState & useEffect) – Gerenciamento de estado e efeitos colaterais

## 📚 Conceitos Aplicados
Componentização reutilizável

Tipagem forte com interfaces e types

Gerenciamento de estado com useState

Controle de efeitos colaterais com useEffect

Estilização dinâmica com styled-components

Organização de pastas por responsabilidade

Código limpo e escalável


## 🎯 Objetivo do Projeto
Este projeto tem como objetivo servir como base sólida para aplicações frontend modernas, demonstrando:

Integração eficiente entre React e TypeScript

Uso adequado de Hooks

Estrutura escalável para crescimento do projeto

Boas práticas de estilização com CSS-in-JS


## 📌 Diferenciais

Estrutura otimizada com Vite para inicialização rápida

Tipagem que reduz erros em tempo de desenvolvimento

Estilos isolados por componente

Código preparado para manutenção e expansão






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
