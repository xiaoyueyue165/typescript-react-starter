# README

本仓库教程源自 [microsoft/TypeScript-React-Starter](https://github.com/microsoft/TypeScript-React-Starter)

## Npm Scripts

```bash
# 启动
yarn start

# 生产
yarn build
# 测试
yarn test
```

## 为什么要使用 Typescript?

> [在线尝试一下](https://www.typescriptlang.org/play/)

- JavaScript 的超集，可以编译为干净的 JavaScript 输出(始于 Javascript,归于 Javascript)。
- 可选静态类型, Javascript 语言 `dev` 阶段 变为静态类型语言 (动态类型=>运行时检查, 静态类型=>编译期检查。)
- 智能感知 + 更少的错误
- typeScript 提供最新的和不断发展的 JavaScript 特性

## Create our new project

借助 `create-react-app`:

```bash
create-react-app my-app --scripts-version=react-scripts-ts
```

[react-scripts-ts](https://www.npmjs.com/package/react-scripts-ts) 是一系列适配器，它利用标准的 create-react-app 工程管道并把 TypeScript 混入进来。

项目成功创建后，此时项目结构如下所示：

```bash
my-app/
├─ node_modules/
├─ public/
├─ src/
│  └─ ...
├─ .gitignore
├─ images.d.ts
├─ package.json
├─ README.md
├─ tsconfig.json
├─ tsconfig.prod.json
├─ tsconfig.test.json
├─ tslint.json
└─ yarn.lock
```

注意：

- `tsconfig.json` 包含了工程的 TypeScript 特定的配置。
  - 我们还有一个`tsconfig.prod.json`和`tsconfig.test.json`，以防我们要对生产版本或测试版本进行任何调整。
- `tslint.json` 保存了要使用的代码检查器的设置，我们使用[TSLint](https://github.com/palantir/tslint)。
- `package.json` 包含我们的依赖项，以及一些我们想要运行以测试，预览和部署我们的应用程序的命令的快捷方式。
- `public` 包含了静态资源如 HTML 页面或图片。除了 index.html 文件外，其它的文件都可以刪除。
- `src` 包含了 TypeScript 和 CSS 源碼。index.tsx 是強制使用的入口文件。
- `images.d.ts` 会告诉 TypeScript 可以导入某些类型的图像文件，由 create-react-app 支持

### 参考链接

- https://github.com/microsoft/TypeScript-React-Starter
- https://www.twblogs.net/a/5c84141bbd9eee35cd69c7db
