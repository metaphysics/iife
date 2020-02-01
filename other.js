"use strict";

// var thing = {"hello": "other"};
// console.log("other: ", thing);

function otherScope() {
  var thing = {"hello": "other"};
  console.log("other: ", thing);
}

otherScope();
