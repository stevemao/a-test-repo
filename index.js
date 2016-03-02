module.exports = function(cb) {
	setImmediate(function() {
		cb('a test module');
	});
};
