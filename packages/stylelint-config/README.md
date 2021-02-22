# stylelint-config

[![npm version](https://img.shields.io/npm/v/%40rodgeraraujo%2Fstylelint-config?logo=npm&style=flat-square)](https://badge.fury.io/js/%40rodgeraraujo%2Fstylelint-config)

## Installation

With npm:

```shell
npm install --save-dev stylelint @rodgeraraujo/stylelint-config
npm install --save-dev prettier @rodgeraraujo/prettier-config
```

## Usage

Edit `package.json`:

```json
{
  "name": "your-library",
  "version": "0.1.0",
  "stylelint": {
    "extends": "@rodgeraraujo/stylelint-config"
  }
}
```

Or using `stylelint.config.js`:

```javascript
module.exports = {
  extends: '@rodgeraraujo/stylelint-config',
};
```

## Related projects

- [prettier-config](https://github.com/rodgeraraujo/config.js/packages/prettier-config)

## License

Copyright (c) 2021 rodgeraraujo. All rights reserved.

This project is licensed under the terms of the [MIT](../LICENSE) license.

