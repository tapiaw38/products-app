# products-app

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
yarn
```

### Compile and Hot-Reload for Development

1. Export the `COMPOSE_FILE` environment variable to use the `local.yml` configuration:

```sh
export COMPOSE_FILE=local.yml
```

2. Build and start the container using Docker Compose:

```sh
docker-compose build
docker-compose up
```

### Compile and Minify for Production

```sh
yarn build
```

### Lint with [ESLint](https://eslint.org/)

```sh
yarn lint
```

### Project architecture

    📦 products-app
    ├── 📂 public
    │   ├── ...
    ├── 📂 src
    │   ├── 📂 assets
    │   │   ├── ...
    │   │   ├── icons
    │   │   ├── images
    │   │   ├── css
    │   ├── 📂 modules
    │   │   ├── 📂 module-example
    |   |   |   ├── 📂 components
    │   │   │   ├── 📂 composables
    │   │   │   ├── 📂 layouts
    │   │   │   ├── 📂 router
    │   │   │   ├── 📂 views
    │   │   │   ├── ...
    │   │   ├── ...
    │   ├── 📂 router
    │   │   ├── index.js
    │   ├── 📂 shared
    │   │   ├── 📂 api
    │   │   ├── 📂 components
    │   │   ├── 📂 composables
    │   │   ├── 📂 views
    │   │   ├── ...
    │   ├── 📂 stores
    │   │   ├── ...
    │   ├── 📂 services
    │   │   ├── ...
    │   ├── 📂 utils
    │   │   ├── ...
    │   ├── App.vue
    │   ├── main.js
    ├── 📜 .gitignore
    ├── 📜 package.json
    └── 📜 README.md
