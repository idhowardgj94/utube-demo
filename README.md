## YouTube 功能實作

[題目網址](https://drive.google.com/file/d/1kcgi1AnftVVsFd-Q836W2aUQg64Lzc5M/view?fbclid=IwAR2pZPaUL4Qkqfl77igbp8tnCBck2HAtL11uEWnMHsJTzzpF7NQe4Bw9JEs)

- 選擇使用 React，使用 `create-react-app`做腳手架。
- css 使用 `sass/scss`實作。
- 完成題目要求的基本切版及功能。
- 使用 `github page` 做 demo，[網址](https://idhowardgj94.github.io/utube-demo/)

## 依賴

依題目規定不使用 css 框架切版。以下為專案依賴列表：

- react-dom: ^17.0.0,
- react-hls-player: ^1.1.0,
- react-paginate: ^6.5.0,
- react-router-dom: ^5.2.0,
- react-scripts: 3.4.4,
- rxjs: ^6.6.3

## 專案架構及專案規則

- lint 遵守 `create-react-app` 規則。
- 使用 prettier 限制專案風格。
- github actions 做 ci/cd。
- 使用 `flow` 做型態管理及檢查。

- 專案結構定義如下：

```bash
. (`<project root>/src`)
|
+--_ components #可共享的元件
|
+--_ pages #包含頁面及邏輯
|
+--_ services #服務層，使用rxjs做資料流管理
|
+--_ sass # scss
|
|
+--+ App.jsx # 程式進入點
|
+--+ App.scss # global style
```

因為是小專案展示，因此沒有使用`state management library`（`redux`、`xstate`等等），也省略序列化 route config 、 api constant 等架構。

## Flow vs Typescript

`Typescript` 是一個 `language`，必須撰寫 `ts`，並且編譯回原生 js。

`Flow` 是一個 `type check library`。相較於 `Typescript`，雖然支援較少，

但是可以輕易的轉換回原生 `js`；

另外，`Typescript`可以做到的檢查，`Flow`都可以做到，甚至檢查的更嚴格。

兩者都用過後，覺得可以從專案性質來著手適合的 lib。

如果是 legacy code，使用 js 的話，導入 Flow 是不錯的選擇。

如果是新的大型專案，那 Typescript 是一個很好的選擇。

## 注意事項

由於 `github page` 服務僅支援單頁式網頁，

因此必須從 `root`才能進入 demo site。
