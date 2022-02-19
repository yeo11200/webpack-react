# webpack-react

```shell
npm init -y
npm i react react-dom
npm i -D typescript @types/react @types/react-dom

# tsc —init or node_modules/.bin/tsc --init

npm i -D babel-loader @babel/core @babel/preset-env
npm i -D @babel/preset-react @babel/preset-typescript

npm i -D webpack webpack-cli webpack-dev-server
npm i -D html-webpack-plugin ts-loader
```

```json
"scripts": {
    "dev": "webpack-dev-server --mode development --open --hot",
    "build": "webpack --mode production",
    "prestart": "npm build",
    "start": "webpack --mode development"
  },
```