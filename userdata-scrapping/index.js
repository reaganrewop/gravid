var Catalog = require('udacity-api').Catalog;
var User = require('udacity-api').User;

var fs = require("fs");

var me = new User('sansii1997@gmail.com', 'awesomeit123');


me.enrollments(function(err, data) {
    console.log(data);
});
me.clear();



cat.courses(function(err, data) {
    console.log(data);
});
