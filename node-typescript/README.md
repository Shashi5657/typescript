initiate the project with npm init -y
install typescript with npm i typescript --save-dev
initiate the typescript with npx tsc --init
install types of nodes with npm i @types/node --save-dev
install express npm i express
install types of express npm i @types/express --save-dev


installed as devdependencies using --save-dev
Dependencies and devDependencies are both types of dependencies in a project's package.json file, but they serve different purposes. Dependencies are packages required for your application to run in a production environment, while devDependencies are packages needed only during development and testing, such as linters, bundlers, or testing frameworks. 
Dependencies are essential for the application's functionality in a production setting. They are installed and used when your application is deployed and used by end-users. Examples include libraries for core features like routing, data fetching, or user interface components. 
devDependencies, on the other hand, are tools used by developers during the development process but are not needed for the application to run in production