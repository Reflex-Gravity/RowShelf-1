var database = firebase.database();

var root=database.ref();
var adaRef = database.ref("users/ada");
console.log(adaRef);