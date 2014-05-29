'use strict';

app.factory('Post', function ($resource) {
  return $resource('https://resplendent-fire-3255.firebaseio.com/posts/:id.json');
});