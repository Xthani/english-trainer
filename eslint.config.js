import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';
import globals from 'globals';
import pluginReactHooks from 'eslint-plugin-react-hooks';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      // Разрешает использовать import/export
      sourceType: 'module',
      // Добавляет глобальные объекты браузера (window, document) и Node
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        // Поддержка JSX
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      js,
      react: pluginReact,
      prettier: pluginPrettier,
      'react-hooks': pluginReactHooks,
    },
    rules: {
      // Подсвечивает проблемы Prettier как "warn"
      'prettier/prettier': 'warn',
      // Отключает устаревшее требование иметь импорт React в каждой компоненте
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
    settings: {
      react: {
        version: 'detect', // Автоматически берёт версию React из package.json
      },
    },
  },

  // Подключение рекомендованных TS-правил (через typescript-eslint)
  ...tseslint.configs.recommended,

  // Конфликты с Prettier выключаются за счёт плагина
  {
    rules: {
      ...pluginPrettier.configs.recommended.rules,
    },
  },
]);
