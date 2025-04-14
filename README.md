# @leedom92/eslint-config

[![npm](https://img.shields.io/npm/v/@leedom92/eslint-config?color=333&label=)](https://www.npmjs.com/package/@leedom92/eslint-config)



## Usage

### Install

```bash
pnpm add -D eslint @leedom92/eslint-config
```

### Config `eslint.config.js`

```js
import leedom from '@leedom92/eslint-config'

export default leedom()

````

### Add scripts for `package.json`

For example:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### VS Code support (auto fix)

Install [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

Add the following settings to your `.vscode/settings.json`:

```jsonc
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": false
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "vue-html",
    "jsx",
    "json",
    "jsonc",
    "json5",
    "markdown",
    "yaml"
  ]
}
```

## Tips
You can override the rules in your `eslint.config.js` file.

```js
import leedom from '@leedom92/eslint-config'

export default leedom({
  pure: true, // disabled default config
  extends: [...], // add your own legacy config
  /**
   * add your own rules
   */
  rules: [
    {}
  ]
})
```

## License
[MIT](https://github.com/leedom92/eslint-config/blob/main/LICENSE) License © 2025-present [Leedom](https://github.com/leedom92)