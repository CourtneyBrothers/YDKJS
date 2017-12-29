//scope and closures: chapter 5 
//Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.

// function foo() {
// 	var a = 2;

// 	function bar() {
// 		console.log( a ); // 2
// 	}

// 	bar();
// }

// foo();

//bar has closure over the scope of foo because bar is nested inside of foo

// function foo() {
// 	var a = 2;

// 	function bar() {
//         console.log(a);
        
// 	}

// 	return bar;
// }

// var baz = foo();

// baz(); // "2 -- Whoa, closure was just observed, man.""
// //allows bar to be executed outside of its lexical scope

// function foo() {
// 	var a = 2;

// 	function baz() {
// 		console.log( a ); // 2
// 	}

// 	bar( baz );
// }

// function bar(fn) {
// 	fn(); // look ma, I saw closure!
// }
// var fn;

// function foo() {
// 	var a = 2;

// 	function baz() {
// 		console.log( a );
// 	}

// 	fn = baz; // assign `baz` to global variable
// }

// function bar() {
// 	fn(); // look ma, I saw closure!
// }

// foo();

// bar(); // 2
// function wait(message) {

// 	setTimeout( function timer(){
// 		console.log( message );
// 	}, 2000 );

// }

// wait( "Hello, closure my old friend" );
// for (var i=1; i<=5; i++) {
// 	setTimeout( function timer(){
// 		console.log( i );
// 	}, i*1000 );
// }

// for (var i=1; i<=5; i++) {
// 	(function(){
// 		setTimeout( function timer(){
// 			console.log( i );
// 		}, i*1000 );
// 	})();
// }

// for (var i=1; i<=5; i++) {
// 	(function(){
// 		var j = i; 
// 		setTimeout( function timer(){
// 			console.log( j );
// 		}, j*1000 );
// 	})();
// }
//IIFE creates new enclosing scope over each iteration of timeout

// for (var i=1; i<=5; i++) {
// 	let j = i; // yay, block-scope for closure!
// 	setTimeout( function timer(){
// 		console.log( j );
// 	}, j*1000 );
// }

// for (let i=1; i<=5; i++) {
// 	setTimeout( function timer(){
// 		console.log( i );
// 	}, i*1000 );
// }

//let declares variable i at each iteration and it will be initialized at each subsequen value from the end of the previous iteration
//MODULES

// function CoolModule() {
// 	var something = "cool";
// 	var another = [1, 2, 3];

// 	function doSomething() {
// 		console.log( something );
// 	}

// 	function doAnother() {
// 		console.log( another.join( " ! " ) );
// 	}

// 	return {
// 		doSomething: doSomething,
// 		doAnother: doAnother
// 	};
// }

// var foo = CoolModule();

// foo.doSomething(); // cool
// foo.doAnother(); // 1 ! 2 ! 3

// var foo = (function CoolModule() {
// 	var something = "cool";
// 	var another = [1, 2, 3];

// 	function doSomething() {
// 		console.log( something );
// 	}

// 	function doAnother() {
// 		console.log( another.join( " ! " ) );
// 	}

// 	return {
// 		doSomething: doSomething,
// 		doAnother: doAnother
// 	};
// })();

// foo.doSomething(); // cool
// foo.doAnother(); // 1 ! 2 ! 3
// function CoolModule(id) {
// 	function identify() {
// 		console.log( id );
// 	}

// 	return {
// 		identify: identify
// 	};
// }

// var foo1 = CoolModule( "foo 1" );
// var foo2 = CoolModule( "foo 2" );

// foo1.identify(); // "foo 1"
// foo2.identify(); // "foo 2"

var foo = (function CoolModule(id) {
	function change() {
		// modifying the public API
		publicAPI.identify = identify2;
	}

	function identify1() {
		console.log( id );
	}

	function identify2() {
		console.log( id.toUpperCase() );
	}

	var publicAPI = {
		change: change,
		identify: identify1
	};

	return publicAPI;
})( "foo module" );

foo.identify(); // foo module
foo.change();
foo.identify(); // FOO MODULE