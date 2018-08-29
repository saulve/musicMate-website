// https://eslint.org/docs/user-guide/configuring
// File taken from https://github.com/vuejs-templates/webpack/blob/1.3.1/template/.eslintrc.js, thanks.

module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint"
  },
  env: {
    browser: true
  },
  extends: [
    "airbnb-base",
    "prettier",
    "prettier/standard"
  ],
  // required to lint *.vue files
  plugins: ["prettier"],
  rules: {
    "no-param-reassign": ["error", { props: false }],
    "space-in-parens": ["error", "always"],
    "linebreak-style": 0,
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  }
};
