$.ajax({
	url: '/api/registerNumber',
	type: 'POST',
	dataType: 'data',
	data: {'terms': 'true', 'phone': '978005241'},
})
.done(function(res) {
	console.log("success");
	console.log(res.data);
})
.fail(function(res) {
	console.log("error");
	console.log(res.data);
})





