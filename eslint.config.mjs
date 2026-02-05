import baseConfig from "@20minutes/eslint-config";
import importPlugin from "eslint-plugin-import";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
  ...baseConfig,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
      }
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      import: importPlugin
    },
    rules: {
      "no-console": [
        "error",
        {
          allow: ["warn", "error", "info"]
        }
      ],
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          js: "never",
          jsx: "never",
          ts: "never",
          tsx: "never"
        }
      ],
      "@typescript-eslint/no-non-null-assertion": "off"
    },
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true
        },
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"]
        }
      }
    }
  }
];
