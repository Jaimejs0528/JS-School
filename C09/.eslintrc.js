module.exports = {
  "parser": "babel-eslint",
  "rules": {
    "ignorePureComponents": true,
  },
  "plugins": [
    "react",
    "jsx-a11y",
    "jsx-control-statements",
    "module-resolver",
  ],
  "extends": [
    "airbnb",
    "eslint:recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:jsx-control-statements/recommended"
  ],
  "env": {
    browser: true,
    "es6": true,
  },
  "globals": {
    document: true,
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["src"]
      },
      "webpack": "webpack.config.js"
    }
  }
};