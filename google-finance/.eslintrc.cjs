module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: [
    "react",
    "react-hooks",
    "react-refresh",
    "simple-import-sort",
    "jsx-a11y",
    "prettier",
    "import",
  ],
  rules: {
    indent: ["error", 2, { SwitchCase: 1 }], // 들여쓰기 기본 2칸으로 하되, switch문에서는 1칸으로 지정
    quotes: ["off", "single"], // 쌍따옴표가 아닌 홑따옴표를 사용
    semi: ["error", "always"], // semi colon을 강제함
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }], // 다중 빈 줄 금지
    "comma-dangle": ["error", "always-multiline"], // 두 줄 이상의 경우에는 후행 쉼표를 항상 사용, 한 개 일 때는 사용하지 않음
    "object-curly-spacing": ["error", "always"], // 객체 괄호 앞 뒤 공백 추가
    "space-in-parens": ["error", "never"], // 일반 괄호 앞 뒤 공백 추가
    "computed-property-spacing": ["error", "never"], // 대괄호 앞 뒤 공백 추가하지 않음
    "comma-spacing": ["error", { before: false, after: true }], // 반점 앞 뒤 공백: 앞에는 없고, 뒤에는 있게
    "eol-last": ["error", "always"], // line의 가장 마지막 줄에는 개행 넣기
    "no-tabs": ["error", { allowIndentationTabs: true }], // \t의 사용을 금지하고 tab키의 사용은 허용
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "off", // Checks effect dependencies
    "react/react-in-jsx-scope": "off", // import React from "react"가 필수였던 시기에 필요한 규칙
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "error",
    "no-unused-vars": "warn",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },

  settings: {
    "import/resolver": {
      node: {
        moduleDirectory: ["node_modules", "src/"],
        extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
      },
    },
    react: {
      version: "detect",
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx", ".js"],
    },
  },
  overrides: [
    // override "simple-import-sort" config
    {
      files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
      rules: {
        "simple-import-sort/imports": [
          "error",
          {
            groups: [
              // Packages `react` related packages come first.
              ["^react", "^@?\\w"],
              // Internal packages.
              ["^(@|components)(/.*|$)"],
              // Side effect imports.
              ["^\\u0000"],
              // Parent imports. Put `..` last.
              ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
              // Other relative imports. Put same-folder imports and `.` last.
              ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
              // Style imports.
              ["^.+\\.?(css)$"],
            ],
          },
        ],
      },
    },
  ],
};
