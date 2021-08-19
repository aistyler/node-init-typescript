# node-init-typescript-lint

## Keywords

- typescript and javascript
- eslint and prettier
- path aliases

## Usage

```npx aistyler/node-init {options} aistyler/node-init-typescript "packages/lint/**" "packages/lint/.*"```

- Include `"packages/lint/.*"` glob pattern to download dot files, such as ".eslintrc.js"
- See [aistyler/node-init](https://github.com/aistyler/node-init) for details.
- e.g.

  ```sh
  npx aistyler/node-init -o ./tmp aistyler/node-init-typescript "packages/lint/**"
  ```
