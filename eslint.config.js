// @ts-check
import eslintLove from 'eslint-config-love'
import jsdoc from 'eslint-plugin-jsdoc'
import eslintPrettier from 'eslint-plugin-prettier'
import globals from 'globals'

export default [
  { ignores: ['dist/*', 'node_modules'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  eslintPrettier,
  jsdoc.configs['flat/recommended'],
  {
    languageOptions: { ...globals },
    files: ['**/*.{js,mjs}'],
    ...eslintLove,
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off',
    }
  },
  {
    parserOptions: {
      parser: '@typescript-eslint/parser'
    },
    rules: {
      semi: ['warn', 'single']
    }
  }
]
