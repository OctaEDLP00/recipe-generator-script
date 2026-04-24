// @ts-check
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import jsdoc from 'eslint-plugin-jsdoc'
import eslintPrettier from 'eslint-plugin-prettier'
import globals from 'globals'

export default [
  { ignores: ['dist/*', 'node_modules'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  eslintPrettier,
  jsdoc.configs['flat/recommended'],
  js.configs.recommended,
  tseslint.configs.recommended,
  {
    parserOptions: {
      parser: '@typescript-eslint/parser'
    },
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off',
      semi: ['warn', 'single']
    }
  }
]
