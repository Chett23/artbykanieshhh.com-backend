const IncomingForm = require("formidable").IncomingForm;

module.exports = function upload(req, res) {
	var form = new IncomingForm();

	console.log(req.body);

	// form.on("file", (field, file) => {
	// 	// Do something with the file
	// 	// e.g. save it to the database
	// 	// you can access it using file.path
	// 	console.log(field, file);
	// });
	// form.on("end", () => {
	// 	res.json();
	// });
	// form.parse(req);
	res.send('200')
};
