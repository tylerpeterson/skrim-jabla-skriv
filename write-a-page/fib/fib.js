(function() {
	function fib(n) {
		if (n < 3) return 1;
		return fib(n - 1) + fib(n - 2);
	}

	var elems = document.getElementsByTagName('*'), i, fibNumber;
	for (i in elems) {
		fibNumber = elems[i].dataset && elems[i].dataset['fibNumber'] || false;
		if (fibNumber) {
			elems[i].innerHTML = fib(+fibNumber);
		}
	}
})();
