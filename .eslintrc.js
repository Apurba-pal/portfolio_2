export default {
  env: {
    browser: true,
    es2021: true,
    node: true, // Enables Node.js global variables (like require, process, etc.)
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
  },
};
