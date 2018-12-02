module.exports = {
    "extends": [
        "airbnb",
        "plugin:jsx-a11y/recommended",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:jsx-control-statements/recommended"
    ],
    "parser": "babel-eslint",
    "plugins": [
        "react",
        "jsx-a11y",
        "jsx-control-statements",
        "module-resolver",
    ],
    "rules": {
        "strict": 0,
    },
    "env": {
        browser: true,
        "es6": true,
        "jquery": true,
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
    },
    "ecmaFeatures": {
        "jsx": true
    }
 };
 