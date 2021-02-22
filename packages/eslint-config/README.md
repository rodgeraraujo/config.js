# eslint-config

[![npm version](https://img.shields.io/npm/v/%40rodgeraraujo%2Feslint-config?logo=npm&style=flat-square)](https://badge.fury.io/js/%40rodgeraraujo%eslint-config)

## Installation

With npm:

```shell
npm install --save-dev eslint @rodgeraraujo/eslint-config \
  @typescript-eslint/eslint-plugin \
  eslint-plugin-eslint-comments \
  eslint-plugin-import \
  eslint-plugin-jest \
  eslint-plugin-node \
  eslint-plugin-prettier \
  eslint-plugin-promise

npm install --save-dev prettier @rodgeraraujo/prettier-config
npm install --save-dev typescript
```

## Usage

Edit `package.json`:

```json
{
  "name": "your-library",
  "version": "0.1.0",
  "eslintConfig": {
    "extends": "@rodgeraraujo"
  }
}
```

Or using `eslintrc.js`:

```javascript
module.exports = {
  extends: '@rodgeraraujo',
};
```

## Related projects

- [prettier-config](https://github.com/rodgeraraujo/config.js/packages/prettier-config)

## License

Copyright (c) 2021 rodgeraraujo. All rights reserved.

This project is licensed under the terms of the [MIT](../LICENSE) license.
