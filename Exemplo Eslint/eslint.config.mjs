import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    files: ['**/*.js', '**/*.cjs', '**/*.mjs'],
    languageOptions: { sourceType: 'commonjs' },
  },
  { languageOptions: { globals: globals.browser } },
  {
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'no-unused-vars': 'warn',
    },
  },
  pluginJs.configs.recommended,
];
