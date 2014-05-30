#Angular News App
An application based on the angular.js tutorial located at [http://www.thinkster.io/](http://www.thinkster.io/)

#Dependencies
1. [Node Package Manager](https://github.com/npm/npm)
2. [Bower](https://github.com/bower/bower)
3. [A Firebase Account](https://www.firebase.com/signup/?utm_medium=tutorial&utm_source=thinkster&campaign=angular_article). 

#Installation

```
$ git clone https://github.com/RichJTorres/angular-seed.git
$ cd angular-seed/
$ npm install
$ bower install
```
Once all dependencies and packages are installed, you will need to change your firebase url variable to match your newly created firebase instance. 
Open app/scripts/app.js and edit the following line (11).
```javascript
.constant('FIREBASE_URL', 'https://your_firebase_url.firebaseio.com/');
```
Once your firebase URL is set up, you can rune the app using
```
$ grunt serve
```



