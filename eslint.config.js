// @ts-check

import js from '@eslint/js'
import { defineConfig } from 'eslint/config' // Reemplazo oficial
import tseslint from 'typescript-eslint'
import jsdoc from 'eslint-plugin-jsdoc'
import eslintPrettier from 'eslint-plugin-prettier/recommended'
import globals from 'globals'

export default defineConfig(
  {
    ignores: ['dist/*', 'node_modules'],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,
  jsdoc.configs['flat/recommended-typescript'],
  eslintPrettier,

  {
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  {
    rules: {
      'prettier/prettier': [
        'error',
        {},
        {
          usePrettierrc: true,
        },
      ],

      '@typescript-eslint/triple-slash-reference': 'off',
      '@typescript-eslint/array-type': [
        'error',
        {
          default: 'generic',
        },
      ],

      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': [
        'error',
        {
          typedefs: true,
          interfaces: true,
          classes: true,
          enums: true,
          variables: true,
          functions: true,
        },
      ],
      semi: ['warn', 'never'],
      quotes: ['error', 'single'],
    },
  }
)
