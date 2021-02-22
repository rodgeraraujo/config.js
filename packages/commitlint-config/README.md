# commitlint-config

[![npm version](https://img.shields.io/npm/v/%40rodgeraraujo%2Fcommitlint-config?logo=npm&style=flat-square)](https://badge.fury.io/js/%40rodgeraraujo%2Fcommitlint-config)

## Installation

With npm:

```shell
npm install --save-dev @commitlint/cli @rodgeraraujo/commitlint-config
```

With yarn:

```shell
yarn add --dev @commitlint/cli @rodgeraraujo/commitlint-config
```

## Usage

Edit `package.json`:

```json
{
  "name": "your-library",
  "version": "0.1.0",
  "commitlint": {
    "extends": [
      "@rodgeraraujo"
    ]
  }
}
```

Or using in `commitlint.config.js`:

```javascript
module.exports = {
  extends: ['@rodgeraraujo'],
};
```

## License

Copyright (c) 2021 rodgeraraujo. All rights reserved.

This project is licensed under the terms of the [MIT](../LICENSE) license.
