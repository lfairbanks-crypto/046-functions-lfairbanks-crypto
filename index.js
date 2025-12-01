
// Declare a function named `square` that returns the number multiplied by itself
function square(n) {
	return n * n;
}

// If running in a browser, attach `square` to the global `window` object
if (typeof window !== 'undefined') {
	window.square = square;

	// Set the innerHTML of the element with id `result` to the square of 5
	const el = document.getElementById('result');
	if (el) el.innerHTML = String(square(5));
}

// Export for CommonJS environment / tests running in Node
if (typeof module !== 'undefined' && module.exports) {
	module.exports.square = square;
}


