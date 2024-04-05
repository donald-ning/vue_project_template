# Vite + Vue 新建项目

## node (>18.14.0)通过corepack开启pnpm or yarn

```sh
corepack enable
```

## 使用pnpm创建Vite项目

```sh
pnpm create vite
```

## 结构目录

```text
.
├── README.md
├── index.html
├── node_modules
├── package.json
├── pnpm-lock.yaml
├── public
├── src
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

4 directories, 7 files
--------------------------

src
├── App.vue
├── assets
├── components
├── main.ts
└── vite-env.d.ts

3 directories, 3 files

```

## eslint

`eslint主要提供代码校验`

## prettier

`prettier主要提供代码格式化`

## styleLint

`styleLine主要提供css代码校验`

## husky

`husky主要提供git hook, 用于在git提交前进行格式化等操作`
