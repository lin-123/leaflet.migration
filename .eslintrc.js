module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "parser": "babel-eslint",
  "plugins": [],
  "extends": [
    "airbnb-base"
  ],
  "rules": {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
     // maximum line length
    "max-len": [1, {
      code: 80,
      tabWidth: 2,
      ignoreComments: true,
      ignoreUrls: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true
    }],
    "no-return-await": "off",
    "no-plusplus":"off",
    "no-unused-expressions":"off",
    "comma-dangle": ["error", {
        "arrays": "never",
        "objects": "ignore",
        "imports": "never",
        "exports": "never",
        "functions": "never"
    }],
    "import/no-extraneous-dependencies": ["error", {
      "devDependencies": true,
      "optionalDependencies": false,
      "peerDependencies": false
    }],
    "global-require": [0],
    "func-names": [0],
    "import/no-unresolved":[0],
    "no-undef":[0],
    "class-methods-use-this":[0],
    "implicit-arrow-linebreak": [0, 'brace-style'],
    "import/prefer-default-export": [0],
    "arrow-parens": 0,
    "no-nested-ternary": 0,
    "consistent-return":[0],
    "linebreak-style": ["off", "windows"],
    "object-property-newline": "off",
    "no-underscore-dangle": "off"
  }
}