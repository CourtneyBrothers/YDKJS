//Scope & closure: chapter 2 Lexical Scope
function foo(a) {

    var b = a * 2;

	function bar(c) {
		console.log( a, b, c );
	}

	bar(b * 3);
}

foo( 2 ); // 2 4 12
//scope looks ups stop once the engine finds the first match
console.log(window.a);
//^^ undefined 
