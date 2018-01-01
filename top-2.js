//Chapter 2: this All Makes Sense Now!
// function baz() {
//     // call-stack is: `baz`
//     // so, our call-site is in the global scope

//     console.log( "baz" );
//     bar(); // <-- call-site for `bar`
// }

// function bar() {
//     // call-stack is: `baz` -> `bar`
//     // so, our call-site is in `baz`

//     console.log( "bar" );
//     foo(); // <-- call-site for `foo`
// }

// function foo() {
//     // call-stack is: `baz` -> `bar` -> `foo`
//     // so, our call-site is in `bar`

//     console.log( "foo" );
// }

// baz(); // <-- call-site for `baz`

//DEFAULT BINDING

// function foo() {
//     // "use strict";//global object not eligible for binding
// 	console.log( this.a );
// }

// var a = 2;

// foo(); // 2
// variables declared in the global scope, as var a = 2 is, are synonymous with global-object properties of the same name

//IMPLICIT BINDING
// function foo() {
// 	console.log( this.a );
// }

// var obj = {
// 	a: 2,
// 	foo: foo //foo reference is owned/contained by obj
// };

// obj.foo(); // 2
//When there is a context object for a function reference, the implicit binding rule says that it's that object which should be used for the function call's this binding

// function foo() {
// 	console.log( this.a );
// }

// var obj2 = {
// 	a: 42,
// 	foo: foo
// };

// var obj1 = {
// 	a: 2,
// 	obj2: obj2
// };

// obj1.obj2.foo(); // 42
// obj2.foo(); // 42

//only the topmost/ last object in the reference chain will equivocate with this call
// function foo() {
// 	console.log( this.a );
// }

// var obj = {
// 	a: 2,
// 	foo: foo
// };

// var bar = obj.foo; // function reference/alias!

// var a = "oops, global"; // `a` also property on global object

// bar(); // "oops, global"
// function foo() {
// 	console.log( this.a );
// }

// function doFoo(fn) {
// 	// `fn` is just another reference to `foo`

// 	fn(); // <-- call-site!
// }

// var obj = {
// 	a: 2,
// 	foo: foo
// };

// var a = "oops, global"; // `a` also property on global object

// doFoo( obj.foo ); // "oops, global"
// function foo() {
// 	console.log( this.a );
// }

// var obj = {
// 	a: 2,
// 	foo: foo
// };

// var a = "oops, global"; // `a` also property on global object

// setTimeout( obj.foo, 100 ); // "oops, global"

//EXPLICIT BINDING
// function foo() {
// 	console.log( this.a );
// }

// var obj = {
// 	a: 2
// };

// foo.call( obj ); // 2 
//MDN: The call() method calls a function with a given this value and arguments provided individually.

//HARD BINDING
// function foo() {
// 	console.log( this.a );
// }

// var obj = {
// 	a: 2
// };

// var bar = function() {
// 	foo.call( obj );
// };

// bar(); // 2
// setTimeout( bar, 100 ); // 2

// // `bar` hard binds `foo`'s `this` to `obj`
// // so that it cannot be overriden
// bar.call( window ); // 2

//NEW BINDING
// function foo(a) {
// 	this.a = a;
// }

// var bar = new foo( 2 );
// console.log( bar.a ); // 2
// function foo() {
// 	console.log( this.a );
// }

// var obj1 = {
// 	a: 2,
// 	foo: foo
// };

// var obj2 = {
// 	a: 3,
// 	foo: foo
// };

// obj1.foo(); // 2
// obj2.foo(); // 3

// obj1.foo.call( obj2 ); // 3
// obj2.foo.call( obj1 ); // 2
// function foo(something) {
// 	this.a = something;
// }

// var obj1 = {
// 	foo: foo
// };

// var obj2 = {};

// obj1.foo( 2 );
// console.log( obj1.a ); // 2

// obj1.foo.call( obj2, 3 );
// console.log( obj2.a ); // 3

// var bar = new obj1.foo( 4 );
// console.log( obj1.a ); // 2
// console.log( bar.a ); // 4

function foo(something) {
	this.a = something;
}

var obj1 = {};

var bar = foo.bind( obj1 );
bar( 2 );
console.log( obj1.a ); // 2

var baz = new bar( 3 );
console.log( obj1.a ); // 2
console.log( baz.a ); // 3