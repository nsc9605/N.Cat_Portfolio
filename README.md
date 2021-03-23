# Responsive-Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This is a professional portfolio displaying information about me, projects I have completed with description, deployed link and link to GitHub Repository as well. Included is a recent photograph as well as some background information about me. This page is user friendly and when you click one of the links in the navigation, it scrolls to each corresponding section.

:round_pushpin: [Click here to view deployed page!](https://nsc9605.github.io/N.Cat_Portfolio) :round_pushpin:

## Table of Contents

- [Demonstration](#demonstration)
- [Features](#features)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Technologies](#technologies)
- [Contact Information](#contact-information)

## Demonstration

![Overview](src/img/main.png)

### About Me Section
![AboutMe](src/img/about.png)
### Projects Section
![Projects](src/img/projects.png)
### Contact Information
![Contact](src/img/contact.png)

### Directory Structure

```
├── node_modules
│
├── public
│   └── favicon.ico
│   └── index.html
│   └── manifest.json
│   └── robots.txt
│
├── src
│   └── assets
│       └── img
│           └── all-roles.png
│           └── burg.png
│           └── Employee-Directory.gif
│           └── github.svg
│           └── graphs.png
│           └── header1.png
│           └── home.jpeg
│           └── luck.png
│           └── self.jpeg
│       └── Web_Dev-Res.pdf
│
│   └── components
│       └── Footer
│           └── Footer.js
│           └── style.css
│       └── Header
│           └── Header.js
│           └── style.css
│       └── Nav
│           └── Navtabs.js
│           └── style.css
│       └── Project
│           └── Project.js
│          
│   └── pages
│       └── About
│           └── index.js
│           └── style.js
│       └── Contact
│           └── index.js
│       └── Home
│           └── Home.js
│       └── Portfolio
│           └── index.js
│
│   └── utils
│       └── Projects.js
│
│   └── App.jsx
│   └── index.css
│   └── index.js
│
├── package-lock.json
├── package.json  
│
├── README.md
```

## Features

- When the user clicks on the nav-link item it scrolls to the section corresponding to the topic. 
- When `About Me` is selected, it will drop down to a photograph and description about me.
- In the `Projects` section, applications are showcased with titled images, short description, languages/tech used and link to Github repo are provided for each. 
- Links to social bars are provided in the `Contact Me` section at the bottom of the page. When an icon is pressed, it will take you directly to the page such as my `LinkedIn` page, `GitHub` Profile, as well as open a new `email` draft when clicked depending on the users provider, and the `phone` icon is set to call when clicked, or user can hover over the icon and the links/info will be displayed at the bottom of the page.
- When `Resume` is clicked it will provide a downloadable PDF file of my up-to-date resume.
- This page has a responsive layout that adapts to different viewport--allowing it to be used on different device layouts/screen sizes. 


## Usage

[Click here to deploy application!](https://nsc9605.github.io/Responsive-Portfolio/)


## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This application is licensed under the MIT License.


## Contribution

This project was creating with help from:

- My tutor [Eric Wallen](https://github.com/ericwallen)
- [W3Schools](https://w3schools.com)


## Technologies

- [Visual Studio Code](https://code.visualstudio.com/)
- [UIKit](https://getuikit.com)
- Terminal

## Contact Information

- GitHub: [nsc9605](https://github.com/nsc9605)
- Portfolio: [Deploy Portfolio](https://nsc9605.github.io/Responsive-Portfolio/)
- Email: [Nicole Catapano](mailto:nsc9605@gmail.com)
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
