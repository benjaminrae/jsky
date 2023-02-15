const configuration = {
  extends: ["@commitlint/config-conventional"],
  parserPreset: "conventional-changelog-atom",
  formatter: "@commitlint/format",
  rules: {
    "header-max-length": [2, "always", 72],
    "header-min-length": [2, "always", 10],
    "header-case": [2, "always", ["sentence-case"]],
    "type-empty": [2, "always"],
    "scope-empty": [2, "always"],
    "subject-empty": [2, "always"],
  },
};

module.exports = configuration;
