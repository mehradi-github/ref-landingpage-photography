
# The LandingPage Photography
The LandingPage Photography is built with CSS3 (Sass) and Html5.
- [The LandingPage Photography](#the-landingpage-photography)
  - [Deploy React to Github Pages](#deploy-react-to-github-pages)
  - [Emmet — the essential toolkit for web-developers](#emmet--the-essential-toolkit-for-web-developers)
  - [Browserslist](#browserslist)
  - [Installing Requirements](#installing-requirements)

## Deploy React to Github Pages

```bash
npm i -D gh-pages
```
```json
// package.json
{
  "homepage":"https://username.github.io/repo-name",
  "scripts": {
      "predeploy":"npm run build",
      "deploy":"gh-pages -d build"
    }
}
```
```bash
npm run deploy
```
## Emmet — the essential toolkit for web-developers
[Emmet](https://github.com/emmetio/emmet) is a plugin for many popular text editors which greatly improves HTML & CSS workflow:
```
  div.class1.class2>ul#nav>li.item$$$@3*5>a{Item $}+p{lorem4}^^input[value="Hello world!"]
```
```html
  <div className="class1 class2">
        <ul id="nav">
          <li className="item003">
            <a href="">Item 1</a>
            <p>lorem4</p>
          </li>
          <li className="item004">
            <a href="">Item 2</a>
            <p>lorem4</p>
          </li>
          <li className="item005">
            <a href="">Item 3</a>
            <p>lorem4</p>
          </li>
          <li className="item006">
            <a href="">Item 4</a>
            <p>lorem4</p>
          </li>
          <li className="item007">
            <a href="">Item 5</a>
            <p>lorem4</p>
          </li>
        </ul>
        <input type="text" value="Hello world!" />
      </div>
```

## Browserslist
[Browserslist](https://browsersl.ist/) helps you keep the right balance between browser compatibility and bundle size. With Browserslist, you will cover wider audience and have smaller bundle size.
Shared browser compatibility config for popular JavaScript tools like Autoprefixer, Babel, ESLint, PostCSS, and Webpack

## Installing Requirements

```bash
# TypeScript template
npx create-react-app ref-landingpage-photography --template typescript
```

[Adding a Sass Stylesheet](https://create-react-app.dev/docs/adding-a-sass-stylesheet/) : you can rename src/App.css to src/App.scss and update src/App.js to import src/App.scss. This file and any other file will be automatically compiled if imported with the extension .scss or .sass.
```bash
 npm install sass
```

