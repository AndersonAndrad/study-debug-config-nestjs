<h1 align="center">Welcome to Study debug config 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: mit" src="https://img.shields.io/badge/License-mit-yellow.svg" />
  </a>
</p>




## Summary

- [Why this project](#why-this-project)
- [Why I used these technologies](#why-i-used-these-technologies)
- [How to use](#how-to-use)
- [👤 Authors](#👤-Authors)

---------------------------------------

## Why this project

the project was created in order to understand how to configure debug in vscode for application in nestjs.

## Why I used these technologies

nestjs

## How to use

after creating the whole project nestjs to define the use of the debug is very simple.

create a folder with .vscode and inside it the launch.json file. Inside the file put the code... .vscode/launch.json

```javascript
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug Mode",
      "skipFiles": [
        "${workspaceFolder}/node_modules/**/*.js",
        "<node_internals>/**"
      ],
      "runtimeVersion": "default",
      "program": "${workspaceFolder}/src/main.ts",
      "preLaunchTask": "tsc: watch - tsconfig.build.json",
      "outFiles": ["${workspaceFolder}/dist/**/*.js"]
    }
  ]
}
```

after creating the file and adding the code install **nvm** on your machine and install a version of nodejs and set it as default with the following command...

```
nvm default <instaled nodejs version>
```

this default version will the same one that will be used within the configuration file.

### install

```sh
yarn install
```

### usage

```sh
yarn start:dev
```

### test

```sh
yarn test
```

-----------------------

## 👤 Authors

|                                                              |
| :----------------------------------------------------------- |
| Github: [@AndersonAndrad](https://github.com/AndersonAndrad) |
| LinkedIn: [@AndersonAndrad](https://linkedin.com/in/AndersonAndrad) |
| <img src="https://avatars0.githubusercontent.com/u/31743641?s=400&u=b6d9e1c428279846440325b0fae90f4b9c4d1d98&v=4" width="110"> |

--------------

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/AndersonAndrad/study-debug-config-nestjs/issues). 

------------------------------

## Show your support

Give a ⭐️ if this project helped you!