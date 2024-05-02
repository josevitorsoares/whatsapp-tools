module.exports = {
    root: true,
    env: {
        node: true,
        jest: true
    },
    ignorePatterns: [".eslintrc.cjs"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "tsconfig.json",
        tsconfigRootDir: __dirname,
        sourceType: "module"
    },
    plugins : [
        "@typescript-eslint/eslint-plugin",
    ],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended-type-checked",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended"
    ],
    rules: {
        "prettier/prettier":"error",
    }
}
