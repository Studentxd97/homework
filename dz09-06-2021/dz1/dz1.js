/* (1) Найдите и исправьте ошибки в коде:
function foo() {
	function bar(a) {
		i = 3;
		return i + a;
	}

	for (var i = 0; i < 10; i++) {
		console.log( bar(i * 2) );
	}
}
foo(); */

function foo() {
	function bar(a) {
		var i = 3;
		return i + a;
	}

	for (var i = 0; i < 10; i++) {
		console.log( bar(i * 2) );
	}
}

foo();
