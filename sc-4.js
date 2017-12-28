//You Don't Know JS: Scope and Closures
//Chapter 4: Hoisting

// a = 2;

// var a;

// console.log( a );
//^^ ouput --> 2

// console.log( a );

// var a = 2;
//^^ output undefined

// foo();

// function foo() {
// 	console.log( a ); // undefined

// 	var a = 2;
// }
//^^ undefined

// function foo() {
// 	var a;

// 	console.log( a ); // undefined

// 	a = 2;
// }

// foo();

// foo(); // not ReferenceError, but TypeError!

// var foo = function bar() {
// 	// ..foo is not a function
// };

//functions are hoisted first
// foo(); // 1

// var foo;

// function foo() {
// 	console.log( 1 );
// }

// foo = function() {
// 	console.log( 2 );
// };

foo(); // 3

function foo() {
	console.log( 1 );
}

var foo = function() {
	console.log( 2 );
};

function foo() {
	console.log( 3 );
}