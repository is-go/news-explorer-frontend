import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import reactJsxRuntime from "eslint-plugin-react/configs/jsx-runtime.js";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefreshPlugin from "@vitejs/plugin-react-refresh"; 

export default [
  {
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
  {
    settings: {
      react: {
        version: "18.2",
      },
    },
  },
  {
    plugins: {
      "react-refresh": reactRefreshPlugin,
      react: reactJsxRuntime,
      "react-hooks": reactHooks,
    },
  },
  {
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "react/prop-types": 0,
    },
  },
  {
    files: ["*.js", "*.jsx"],
  },
  pluginJs.configs.recommended,
  pluginReactConfig,
];
