'use strict';

function each(collection, action) {
   if (Array.isArray(collection)) {
       for (var i = 0; i <   collection.length; i++) {
           action(collection[i], i, collection);
       }
   } else {
       for (var key in collection) {
           action(collection[key], key, collection);
       }
   }
}
module.exports.each = each;

function map(collection, transform) {
    var transformed = [];
    each(collection, function(value) {
        transformed.push(transform(value));
    });  
     return transformed;   
}
module.exports.map = map;

function reduce(collection, combine, start) {
    var combined = start;
    each(collection, function(value) {
      combined = combine(combined, value);  
    })
    return combined;
}
module.exports.reduce = reduce;
