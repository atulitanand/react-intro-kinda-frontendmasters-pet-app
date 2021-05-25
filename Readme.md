# React Kinda intro

Course [Website](https://btholt.github.io/complete-intro-to-react-v6/)

## Setting up everything

```powershell
>>> git init
>>> npm init

>>> npm install prettier
--- Make .prettierrc ---

>>> npm install -D eslint@7.18.0 eslint-config-prettier@8.1.0
--- Make .eslintrc.json ---
>>> npm install -D parcel@next
# >>> npm install -D parcel@1.12.3

>>> npm install react@17.0.1 react-dom@17.0.1

--- Make .babelrc ---
>>> npm install -D @babel/core @babel/cli @babel/preset-react
# >>> npm install -D @babel/core@7.12.16 @babel/present-react@7.12.13

--- Add browser list in package.json--

>>> npm install -D eslint-plugin-import@2.22.1 eslint-plugin-jsx-a11y@6.4.1 eslint-plugin-react@7.22.0

--- update .eslintrc.json ---

```

Don't forget to set `package.json`

---

#### .prettierrc

```json
{}
```

#### .eslintrc.json

```json
{
  "extends": ["eslint:recommended", "prettier"],
  "plugins": [],
  "parserOptions": {
    "ecmaVersion": 2021,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  }
}
```

You can also set `"eslint:airbnb"` and install plugins for that

---

In App.js if you write

```javascript
/* global React ReactDOM */
```

It will so, oh okey you are expecting a global called react, I'm good with that :)

---

### Parcel

It's out bundler like webpack
Set up entry point for it in `package.json`

```json
# Under scripts
"dev": "parcel src/index.html",
```

We don't even need a config file for parcel
Just look for parcel version `parcel`.

```json
{
  "presets": [
    [
      "@babel/preset-react",
      {
        "runtime": "automatic"
      }
    ]
  ]
}
```
