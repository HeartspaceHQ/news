import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    // Add custom rules here
  },
  files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  languageOptions: { globals: globals.browser },
  ...tseslint.configs.recommended,
  ...pluginReact.configs.flat.recommended,
};