module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "docs", "style", "refactor", "test", "chore"],
    ],
    "type-case": [2, "always", "lowerCase"],
    "type-empty": [2, "never"],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never", "."],
    "subject-case": [2, "always", "sentence-case"],
    "header-max-length": [2, "always", 72],
    "type-prefixes": [
      2,
      "always",
      ["feat:", "fix:", "docs:", "style:", "refactor:", "test:", "chore:"],
    ],
  },
  messages: {
    "type-prefixes":
      "Tipo de commit inválido. Deve ser um dos seguintes: feat, fix, chore, docs, style, refactor, test",
  },
};
