# mdx-cssx

https://cssx.netlify.com

CSSX is CSS in MDX files.

## Why?

Why not?

## Usage

```bash
yarn add mdx-cssx
```

```bash
npm i mdx-cssx
```

```js
import ReactDOM from "react-dom"
import React from "react"
import App from "./App"
import CSSX from "mdx-cssx"

ReactDOM.render(
  <CSSX>
    <App />
  </CSSX>,
  document.getElementById("root")
)
```

Under the hood I use the `mdx-provider` so you can pass more components to it if you wish to override more


Then use it in your MDX files like so:

```md
# CSSX

CSSX is CSS in MDX

it uses emotion under the hood to create the styles.

## Why?

Why not?

```cssx
body {
    background: #d9d9d9;
    padding: 20px;
    justify-content: center;
    display: flex;
    height: 100vh;
    align-items: center;
    text-align: center;
}

h1 {
  color: blue;
}

pre {
  text-align: left
}
```
...

## License

MIT License, see the included [License.md](License.md) file.
