module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-sass-guidelines",
    "stylelint-config-idiomatic-order",
    "stylelint-config-prettier",
  ],
  rules: {
    "order/properties-alphabetical-order": null,
    "max-nesting-depth": 6,
    "selector-class-pattern": null,
    "selector-max-compound-selectors": 6,
    "font-family-no-missing-generic-family-keyword": null,
    "function-no-unknown": [
      true,
      {
        ignoreFunctions: ["white-color"],
      },
    ],
    "selector-no-qualifying-type": [
      true,
      {
        ignore: ["attribute"],
      },
    ],
  },
  overrides: [
    {
      files: ["**/*.module.scss"],
      rules: {
        "selector-class-pattern": null,
      },
    },
  ],
};
