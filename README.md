# Software Pipeline Dashboard

Software Pipeline Dashboard is a web application where users can see state of various releases of their software. It shows build strength, number of unit test, number of functional testa nd code coverage.

I have accomplished following taks:
  - Designed UI of the application.
  - Implemented list that shows more information on expansion.
  - Implemented a feature to expand only one list item at a time.
  - Implemented various UI gadgets such as progress bar with text, pie chart, arrows and normal progress bar.
  - Implemented stubbed api to be consumed by UI.
  - Wrote unit test cases to cover more than 50% code.
  - Wrote comments in the code.
  - Implemented exception handling at appropriate places. Application shows appropriate error messages on UI as well.
  - Code is well organized in files and folders.

### Tech

Dashboard uses a number of open source technologies to work properly:

* [AngularJS] - HTML enhanced for web apps!
* [JSPM] - Frictionless browser package management
* [SystemJS] - Universal dynamic module loader
* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [Jasmine] - Behavior-driven development framework for testing
* [Karma] - A test runner
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework
* [Highcharts] - Interactive JavaScript charts for your webpage

And of course dahsboard itself is open source with a [public repository][git-repo-url] on GitHub.

### Installation
Install the dependencies and devDependencies and start the server.

```sh
$ cd Code
$ npm install
$ npm start
```
Open "http://locahost:3000" in browser.

For testing...
Do installtion by executing above commands and then

```sh
$ npm test
$ npm start
```
Open "http://locahost:3000/testCoverage" in browser.


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [git-repo-url]: <https://github.com/ckrupani/crossover-dashboard>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [JSPM]: <http://jspm.io/>
   [SystemJS]: <https://github.com/systemjs/systemjs>
   [Jasmine]: <http://jasmine.github.io/>
   [Karma]: <https://karma-runner.github.io/1.0/index.html>
   [Highcharts]: <http://www.highcharts.com/>
