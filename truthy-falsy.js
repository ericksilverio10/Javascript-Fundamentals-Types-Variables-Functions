// truthy or falsy

// 0 => false
// 1 => true

// '' => false

console.log(0 == false);
//true
console.log(1 == true);
//true

console.log('' == false);
//true

// undefined

// null => Empty ou Nothing

let myVar;

let varNull = null;

console.log(myVar);
//undefined
console.log(varNull);
//null

console.log(typeof myVar);
//undefined
console.log(typeof varNull);
//object
//In JavaScript, typeof null is => 'object', which incorrectly suggests that null is an object (it isn't, it's a primitive value, consult my blog post on categorizing values for details). This is a bug and one that unfortunately can't be fixed, because it would break existing code
