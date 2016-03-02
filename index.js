module.exports = function(cb) {
	setImmediate(function() {
		cb(null, 'a test module');
	});
};
