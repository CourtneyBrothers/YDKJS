//This and Object Prototypes 
//Any sufficiently advanced technology is indistinguishable from magic. -- Arthur C. Clarke
function identify() {
	return this.name.toUpperCase();
}

function speak() {
	var greeting = "Hello, I'm " + identify.call( this );
	console.log( greeting );
}

var me = {
	name: "Kyle"
};

var you = {
	name: "Courtney"
};

identify.call( me ); // KYLE
identify.call( you ); // COURTNEY

speak.call( me ); // Hello, I'm KYLE
speak.call( you ); // Hello, I'm COURTNEY
// thisKW allows reuse across multiple context
