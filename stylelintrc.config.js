let stylelintConfig = {
  extends: [
    'stylelint-config-standard',
    "stylelint-config-prettier",
  ],
  plugins: [
    "stylelint-order"
  ],
  rules: {
    'declaration-block-single-line-max-declarations': null,
    'alpha-value-notation': null,
    'color-function-notation': null,
    "no-descending-specificity": null,
    "block-no-empty": null,
    "no-invalid-double-slash-comments": null,
    "comment-empty-line-before": null,
    "declaration-empty-line-before": null,
    "unit-allowed-list": ["vw", "vh", "px", "%", "em", "rem", "s", "deg", "ms"],
    "order/order": ["custom-properties", "declarations", "dollar-variables", "rules", "at-rules"],
		"order/properties-order": [
			"width",
			"height"
		],
    "color-hex-case": [
      "lower",
      {
        message: "小写字母更容易与数字区分开来",
      },
    ],
    "function-name-case": ["lower", {}],
    "at-rule-no-unknown": [ true, {
      ignoreAtRules: ['extend', 'at-root', 'debug', 'warn', 'error', 'if', 'else', 'for', 'each', 'while', 'mixin', 'include', 'content', 'return', 'function']
    }],
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global", "local"],
      },
    ],
  },
  ignoreFiles: ["src/styles/var.less"],
};

try {
  stylelintConfig = {
    ...stylelintConfig,
    ...require(path.join(process.cwd(), "./stylelint.config.js")),
  };
} catch (error) {}

module.exports = stylelintConfig;
