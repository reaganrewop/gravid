var Catalog = require('udacity-api').Catalog;
var User = require('udacity-api').User;

var fs = require("fs");

var me = new User('sansii1997@gmail.com', 'awesomeit123');


// me.enrollments(function(err, data) {
//     console.log(data);
// });
// me.clear();

 var cat = new Catalog();

cat.catalog(function(err, data) {
  fs.writeFile( "filename.json", JSON.stringify( data,null,2 ), "utf8",function(err){
   if(err) console.error(err);
  });
});

//
// cat.courses(function(err, data) {
//     console.log(data);
// });
