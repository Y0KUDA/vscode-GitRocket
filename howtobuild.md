## How to build
1. `missile.gif` and `rocket.gif` are required in `src`.
1. use webpack with `webpack.config_missile.js` and `webpack.config_missile.js`
then you can find `missile.html` and `rocket.html` in `dist`.

```
webpack --config .\webpack.config_missile.js
webpack --config .\webpack.config_rocket.js
```

1. Convert `missile.html` and `rocket.html` to TypeScript using `export const missile_html = ...` and `export const rocket_html = ...`. 
1. Place converted TypeScripts to `src` , and they are going to be called from `extension.ts`