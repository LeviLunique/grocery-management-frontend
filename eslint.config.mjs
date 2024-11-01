import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    // Configuration for general JavaScript/TypeScript files
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    ignores: ['eslint.config.mjs', 'postcss.config.mjs'], // Ignore specific config files
    languageOptions: {
      globals: { ...globals.browser, ...globals.node, React: 'writable' }, // Add React globally
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: parser,
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
    plugins: {
      react: pluginReact,
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...pluginReact.configs.flat.recommended.rules,
      'react/react-in-jsx-scope': 'off', // React in scope is not required
      'no-undef': 'off', // Avoid undefined React errors
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];