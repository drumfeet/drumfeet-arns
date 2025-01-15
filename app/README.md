# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Project setup

Reference: [ArweaveJP](https://github.com/arweavejp/.github/blob/master/docs/quick-start/deploy-app.md)

First, install Vite globally.

```bash
sudo npm install -g vite
```


Create a React app.

```bash
npm create vite@latest myapp -- -template react-swc
cd myapp && npm install
```

This is the most important step, add `base: "./"` to the `vite.config.js` file. This setting will ensure that file paths link correctly when deployed to Arweave.

```js
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react()],
})
```

## Add shadcn

References:

[shadcn Vite](https://ui.shadcn.com/docs/installation/vite)

[vite.dev/guide](https://vite.dev/guide/#trying-vite-online)

If necessary, `tsconfig.json` and `tsconfig.app.json` [example](https://github.com/vercel/vercel/tree/main/examples/vite-react)