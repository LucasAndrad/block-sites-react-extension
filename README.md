<h1 align="center">Good Block browser extension</h1>

> This project is a browser externsion to block websites and help you to keep focus on work/study.

![React Web Extension Boilerplate](logo.png)

## 🎉 Features

- Create groups with lists of websites you want to block
- Simple modal with a motivation message will appear for each block link
- Turn on/off each group as you need

## 🚀 Next versions
- Schedule clock time for each group
- A full options-page to manager block lists easier
- A better block modal (or page) with a better motivation approach

## 📝 Description
This extension was made using the awesome [React boilerplace](https://github.com/ElForastero/react-browser-extension-boilerplate) from [@ElForastero](https://github.com/ElForastero)

## 🏁 Install & Contribution

clone this project

then:

```sh
cd block-sites-react-extension

yarn watch
```

Runs webpack in watch mode. Automatically reloads the page after changes in files. Thanks to [webpack-extension-reloader](https://github.com/rubenspgcavalcante/webpack-extension-reloader).

```sh
yarn build
```

Builds the extension in production mode. This version can be shipped to the store.

## How to increment version

Use [npm version](https://docs.npmjs.com/cli/version) cli command to bump a version of your package.json. The version of manifest will stay in sync with version specified in package.json.

For example:

```sh
npm version patch
```

This will increase your patch package.json version. During the next build output manifest file will have the same version.

## ⚠️ Content Security Policy (CSP)
"unsafe-eval" in directive "script-src" and "connect-src" are needed for auto reloading, and should be removed from production manifest.json.

## 💻 Useful links

- [Manifest File Format](https://developer.chrome.com/apps/manifest)
- [Content Security Policy (CSP)](https://developer.chrome.com/extensions/contentSecurityPolicy)
- [Chrome i18n](https://developer.chrome.com/extensions/i18n)
- [Porting a Google Chrome extension to Firefox](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Porting_a_Google_Chrome_extension)
- [Firefox add-ons examples](https://github.com/mdn/webextensions-examples)
- [exthouse - tool for performance testing](https://github.com/treosh/exthouse)
- [webext-redux - a set o utilities to use redux in web extensions](https://github.com/tshaddix/webext-redux)
- [webpack-manifest-version-sync-plugin](https://github.com/ElForastero/webpack-manifest-version-sync-plugin)

## 🤝 Show your support

Give a ⭐️ if this project helped you!

## 📝 License
This project is [MIT](https://github.com/ElForastero/react-browser-extension-boilerplate/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
