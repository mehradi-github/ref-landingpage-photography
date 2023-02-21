
# The LandingPage Photography
The LandingPage Photography is built with CSS3 (Sass) and Html5.
- [The LandingPage Photography](#the-landingpage-photography)
  - [Emmet — the essential toolkit for web-developers](#emmet--the-essential-toolkit-for-web-developers)
  - [Browserslist](#browserslist)
  - [Installing Requirements](#installing-requirements)

## Emmet — the essential toolkit for web-developers
[Emmet](https://github.com/emmetio/emmet) is a plugin for many popular text editors which greatly improves HTML & CSS workflow:
```
ul#nav>li.item$*4>a{Item $}
```
```html
<ul id="nav">
    <li class="item1"><a href="">Item 1</a></li>
    <li class="item2"><a href="">Item 2</a></li>
    <li class="item3"><a href="">Item 3</a></li>
    <li class="item4"><a href="">Item 4</a></li>
</ul>
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

